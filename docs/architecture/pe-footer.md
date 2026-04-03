### `src/components/layout/PEFooter.tsx`

```tsx
import { BrandLockup } from "@/components/brand/BrandLockup";
import { ExpTrustBadge } from "@/components/brand/ExpTrustBadge";

type FooterLink = {
  label: string;
  href: string;
};

type FooterGroup = {
  title: string;
  links: FooterLink[];
};

type PEFooterProps = {
  groups?: FooterGroup[];
};

export function PEFooter({
  groups = [
    {
      title: "Contacto",
      links: [
        { label: "Abrir conversación privada", href: "#contacto" },
        { label: "Solicitar evaluación", href: "#propietarios" },
      ],
    },
    {
      title: "Mallorca focus",
      links: [
        { label: "Palma & Hillside Core", href: "#mallorca-focus" },
        { label: "Calvià Coastal Premium", href: "#mallorca-focus" },
      ],
    },
    {
      title: "Acceso selectivo",
      links: [
        { label: "Anclora Data Lab", href: "#data-lab" },
        { label: "Partners & Synergi", href: "#contacto" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacidad", href: "#" },
        { label: "Aviso legal", href: "#" },
      ],
    },
  ],
}: PEFooterProps) {
  return (
    <footer id="contacto" className="bg-[var(--pe-bg)]">
      <div className="mx-auto max-w-7xl px-6 pb-14 pt-20 lg:px-10 lg:pt-24">
        <div className="grid gap-10 border-t border-[var(--pe-line-soft)] pt-10 lg:grid-cols-[1.1fr_1.4fr] lg:pt-12">
          <div className="max-w-md">
            <BrandLockup variant="full" size="md" />

            <p className="mt-5 text-sm leading-7 text-[var(--pe-text-soft)]">
              Firma inmobiliaria premium orientada a Palma y el suroeste de
              Mallorca, con criterio territorial, acceso selectivo y ejecución
              cuidada.
            </p>

            <div className="mt-6">
              <ExpTrustBadge
                mode="footer"
                text="Respaldo internacional y confianza operativa a través de eXp Realty."
              />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {groups.map((group) => (
              <div key={group.title}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--pe-text-muted)]">
                  {group.title}
                </h3>

                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm leading-6 text-[var(--pe-text-soft)] transition-colors hover:text-[var(--pe-text)]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--pe-line-soft)] pt-6">
          <p className="text-xs leading-6 text-[var(--pe-text-muted)]">
            © 2026 Anclora Private Estates. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
```
