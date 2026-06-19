import { describe, test, expect, vi, beforeEach } from "vitest";
import {
  buildNexusLeadIntakePayload,
  submitNexusLeadIntake,
  resolveSourceChannel,
  type NexusLeadIntakeRequest,
} from "./lead-intake";

describe("Nexus v1 Lead Intake", () => {
  describe("resolveSourceChannel", () => {
    test("returns provided formId when specified", () => {
      expect(resolveSourceChannel("valuation-form")).toBe("valuation-form");
    });

    test("returns form-main when no formId provided", () => {
      expect(resolveSourceChannel()).toBe("form-main");
    });

    test("returns form-main for undefined", () => {
      expect(resolveSourceChannel(undefined)).toBe("form-main");
    });
  });

  describe("buildNexusLeadIntakePayload", () => {
    test("produces standardized payload with source_system private-estates-landing", () => {
      const payload = buildNexusLeadIntakePayload({
        name: "  John Doe  ",
        email: "  john@example.com  ",
        phone: "+34 612 345 678",
        sourceChannel: "form-main",
      });

      expect(payload.source_system).toBe("private-estates-landing");
      expect(payload.source_channel).toBe("form-main");
      expect(payload.contact.name).toBe("John Doe");
      expect(payload.contact.email).toBe("john@example.com");
      expect(payload.contact.phone).toBe("+34 612 345 678");
      expect(payload.timestamp).toBeDefined();
      expect(new Date(payload.timestamp).toISOString()).toBe(payload.timestamp);
    });

    test("uses custom source_channel for valuation form", () => {
      const payload = buildNexusLeadIntakePayload({
        name: "Jane",
        email: "jane@test.com",
        sourceChannel: "valuation-form",
      });

      expect(payload.source_channel).toBe("valuation-form");
    });

    test("defaults source_channel to form-main when not specified", () => {
      const payload = buildNexusLeadIntakePayload({
        name: "User",
        email: "user@test.com",
      });

      expect(payload.source_channel).toBe("form-main");
    });

    test("omits phone when not provided", () => {
      const payload = buildNexusLeadIntakePayload({
        name: "User",
        email: "user@test.com",
      });

      expect(payload.contact.phone).toBeUndefined();
    });

    test("omits phone when empty string", () => {
      const payload = buildNexusLeadIntakePayload({
        name: "User",
        email: "user@test.com",
        phone: "   ",
      });

      expect(payload.contact.phone).toBeUndefined();
    });

    test("includes metadata when provided", () => {
      const metadata = { intent: "sell", language: "es", zone: "Son Vida" };
      const payload = buildNexusLeadIntakePayload({
        name: "User",
        email: "user@test.com",
        metadata,
      });

      expect(payload.metadata).toEqual(metadata);
    });

    test("uses custom timestamp when provided", () => {
      const timestamp = "2025-06-15T10:30:00.000Z";
      const payload = buildNexusLeadIntakePayload({
        name: "User",
        email: "user@test.com",
        timestamp,
      });

      expect(payload.timestamp).toBe(timestamp);
    });
  });

  describe("submitNexusLeadIntake", () => {
    const mockFetch = vi.fn();

    beforeEach(() => {
      vi.clearAllMocks();
      global.fetch = mockFetch;
    });

    test("posts to /api/v1/leads/intake with correct payload", async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => ({
          lead_id: "abc-123",
          status: "created",
          temperature: "cold",
        }),
      });

      const payload: NexusLeadIntakeRequest = {
        contact: {
          name: "John",
          email: "john@example.com",
          phone: "+34612345678",
        },
        source_system: "private-estates-landing",
        source_channel: "form-main",
        timestamp: "2025-06-15T10:30:00.000Z",
        metadata: { intent: "sell" },
      };

      const result = await submitNexusLeadIntake({ payload });

      expect(mockFetch).toHaveBeenCalledWith(
        "https://nexus.anclora.group/api/v1/leads/intake",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      expect(result).toEqual({
        lead_id: "abc-123",
        status: "created",
        temperature: "cold",
      });
    });

    test("uses custom nexusBaseUrl when provided", async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        json: async () => ({
          lead_id: "xyz",
          status: "created",
          temperature: "warm",
        }),
      });

      const payload: NexusLeadIntakeRequest = {
        contact: { name: "Jane", email: "jane@test.com" },
        source_system: "private-estates-landing",
        source_channel: "valuation-form",
        timestamp: new Date().toISOString(),
      };

      await submitNexusLeadIntake({
        payload,
        nexusBaseUrl: "https://staging.nexus.anclora.group",
      });

      expect(mockFetch).toHaveBeenCalledWith(
        "https://staging.nexus.anclora.group/api/v1/leads/intake",
        expect.any(Object),
      );
    });

    test("throws error on non-ok response", async () => {
      mockFetch.mockResolvedValue({
        ok: false,
        json: async () => ({ detail: "Duplicate lead detected." }),
      });

      const payload: NexusLeadIntakeRequest = {
        contact: { name: "Dup", email: "dup@test.com" },
        source_system: "private-estates-landing",
        source_channel: "form-main",
        timestamp: new Date().toISOString(),
      };

      await expect(submitNexusLeadIntake({ payload })).rejects.toThrow(
        "Duplicate lead detected.",
      );
    });

    test("throws generic error when response body is unreadable", async () => {
      mockFetch.mockResolvedValue({
        ok: false,
        json: async () => {
          throw new Error("parse error");
        },
      });

      const payload: NexusLeadIntakeRequest = {
        contact: { name: "Bad", email: "bad@test.com" },
        source_system: "private-estates-landing",
        source_channel: "form-main",
        timestamp: new Date().toISOString(),
      };

      await expect(submitNexusLeadIntake({ payload })).rejects.toThrow(
        "Lead intake request failed.",
      );
    });
  });
});
