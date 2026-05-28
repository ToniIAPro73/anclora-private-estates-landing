import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const targetFiles = [
  "src/content/site-copy.ts",
  "src/components/forms/SellerIntakeForm.tsx",
];

const rules = [
  { severity: "high", pattern: "Damos la bienvenida a tus preguntas" },
  { severity: "high", pattern: "siéntete libre de" },
  { severity: "high", pattern: "no dudes en contactarnos" },
  { severity: "high", pattern: "propiedades únicas" },
  { severity: "high", pattern: "Wir begrüßen Ihre Fragen" },
  { severity: "high", pattern: "fühlen Sie sich frei" },
  { severity: "high", pattern: "zögern Sie nicht" },
  { severity: "high", pattern: "unique properties" },
  { severity: "medium", pattern: "feel free to" },
  { severity: "medium", pattern: "do not hesitate" },
];

const findings = [];

for (const relativeFile of targetFiles) {
  const absoluteFile = path.join(repoRoot, relativeFile);
  if (!fs.existsSync(absoluteFile)) continue;

  const lines = fs.readFileSync(absoluteFile, "utf8").split(/\r?\n/);
  lines.forEach((line, index) => {
    for (const rule of rules) {
      if (line.toLowerCase().includes(rule.pattern.toLowerCase())) {
        findings.push({
          severity: rule.severity,
          pattern: rule.pattern,
          file: relativeFile,
          line: index + 1,
          text: line.trim(),
        });
      }
    }
  });
}

const reportDir = path.join(repoRoot, "reports", "locale-copy");
fs.mkdirSync(reportDir, { recursive: true });

const report = [
  "# Locale Copy Quality Report",
  "",
  `Generated: ${new Date().toISOString()}`,
  "",
  "## Rules",
  "",
  ...rules.map((rule) => `- ${rule.severity}: ${rule.pattern}`),
  "",
  "## Findings",
  "",
  findings.length
    ? findings.map((finding) => `- ${finding.severity.toUpperCase()} ${finding.file}:${finding.line} \`${finding.pattern}\` — ${finding.text}`).join("\n")
    : "No configured literalism risks detected.",
  "",
].join("\n");

fs.writeFileSync(path.join(reportDir, "copy-quality-report.md"), report);

if (findings.some((finding) => finding.severity === "high")) {
  console.warn(`Locale copy quality check completed with ${findings.length} finding(s).`);
} else {
  console.log("Locale copy quality check passed without high-risk findings.");
}
