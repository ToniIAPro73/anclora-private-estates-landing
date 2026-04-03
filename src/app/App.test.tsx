import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import App from "./App";

describe("App landing home", () => {
  test("renders the ultra premium home shell with primary navigation and critical sections", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /mallorca|anclora private estates/i,
      }),
    ).toBeInTheDocument();

    const navigation = screen.getByRole("navigation");
    expect(within(navigation).getByRole("link", { name: /mallorca/i })).toBeInTheDocument();
    expect(within(navigation).getByRole("link", { name: /inversores/i })).toBeInTheDocument();
    expect(within(navigation).getByRole("link", { name: /propietarios/i })).toBeInTheDocument();
    expect(within(navigation).getByRole("link", { name: /data lab/i })).toBeInTheDocument();
    expect(within(navigation).getByRole("link", { name: /contacto/i })).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /solicitar evaluación confidencial/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { level: 2, name: /por qué confiar|credibilidad/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /mallorca|microzonas/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /inversores/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /señales|data lab/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /conversación privada|contacto/i }),
    ).toBeInTheDocument();
  });

  test("exposes a visible theme toggle that switches the landing root between dark and light", async () => {
    const user = userEvent.setup();
    render(<App />);

    const root = document.documentElement;
    expect(root.dataset.theme).toBe("dark");

    const toggle = screen.getByRole("button", { name: /cambiar a light|tema light/i });
    await user.click(toggle);

    expect(root.dataset.theme).toBe("light");
    expect(
      screen.getByRole("button", { name: /cambiar a dark|tema dark/i }),
    ).toBeInTheDocument();
  });
});
