import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe, X } from "lucide-react";
import type { LanguageCode, LanguageSwitcherCopy } from "@/content/site-copy";
import {
  ACTIVE_LOCALES,
  ANCLORA_LOCALE_LABELS,
  ULTRA_PREMIUM_LOCALES,
  type ActiveAncloraLocale,
} from "@/lib/anclora-language-toggle";

type LanguageSwitcherProps = {
  copy: LanguageSwitcherCopy;
  language: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
};

export function LanguageSwitcher({ copy, language, onLanguageChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currency, setCurrency] = useState(() => window.localStorage.getItem("anclora-pe-landing-currency") || "EUR");
  const panelRef = useRef<HTMLDivElement>(null);
  const currentLocale = ANCLORA_LOCALE_LABELS[language];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const selectLanguage = (code: ActiveAncloraLocale) => {
    onLanguageChange(code);
  };

  const selectCurrency = (nextCurrency: string) => {
    setCurrency(nextCurrency);
    window.localStorage.setItem("anclora-pe-landing-currency", nextCurrency);
  };

  return (
    <div className="pe-lang-switcher" ref={panelRef} role="group" aria-label={copy.groupLabel} data-testid="language-switcher">
      <button
        type="button"
        className={`pe-lang-trigger ${isOpen ? "is-open" : ""}`}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label="Global preferences"
        onClick={() => setIsOpen((open) => !open)}
      >
        <Globe size={16} aria-hidden="true" />
        <span className="pe-lang-trigger__copy">
          <strong>{currentLocale.nativeName}</strong>
          <span>{currency}</span>
        </span>
        <ChevronDown size={15} aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="pe-lang-panel" role="dialog" aria-label="Global preferences settings">
          <div className="pe-lang-panel__header">
            <div>
              <p>{copy.eyebrow}</p>
              <h2>{copy.title}</h2>
            </div>
            <button type="button" className="pe-lang-close" aria-label={copy.closeLabel} onClick={() => setIsOpen(false)}>
              <X size={16} aria-hidden="true" />
            </button>
          </div>

          <div className="pe-lang-list" role="listbox" aria-label={copy.groupLabel}>
            {ULTRA_PREMIUM_LOCALES.map((code) => {
              const entry = ANCLORA_LOCALE_LABELS[code];
              const isEnabled = ACTIVE_LOCALES.includes(code as ActiveAncloraLocale);
              const isActive = language === code;

              return (
        <button
          key={code}
          type="button"
          className={`pe-lang-option ${isActive ? "is-active" : ""}`}
          aria-label={entry.nativeName}
          aria-selected={isActive}
          data-testid={`language-button-${code}`}
          disabled={!isEnabled}
          role="option"
          onClick={() => isEnabled && selectLanguage(code as ActiveAncloraLocale)}
        >
          <span className="pe-lang-option__short">{entry.short}</span>
          <span className="pe-lang-option__label">
            <strong>{entry.nativeName}</strong>
            <small>{entry.englishName}</small>
          </span>
          {!isEnabled && <span className="pe-lang-option__pending">{copy.pendingLabel}</span>}
          {isActive && <Check className="pe-lang-option__check" size={16} aria-hidden="true" />}
        </button>
              );
            })}
          </div>

          <label className="pe-lang-field">
            <span>Currency</span>
            <select value={currency} onChange={(event) => selectCurrency(event.target.value)}>
              <option value="EUR">Euro - EUR €</option>
              <option value="USD">US Dollar - USD $</option>
              <option value="GBP">Pound sterling - GBP £</option>
              <option value="CHF">Swiss franc - CHF</option>
              <option value="SEK">Swedish krona - SEK kr</option>
              <option value="DKK">Danish krone - DKK kr</option>
              <option value="NOK">Norwegian krone - NOK kr</option>
            </select>
          </label>

          <button type="button" className="pe-lang-save" onClick={() => setIsOpen(false)}>
            {copy.saveLabel}
          </button>
        </div>
      )}
    </div>
  );
}
