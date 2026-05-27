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
    setIsOpen(false);
  };

  return (
    <div className="pe-lang-switcher" ref={panelRef} role="group" aria-label={copy.groupLabel} data-testid="language-switcher">
      <button
        type="button"
        className={`pe-lang-trigger ${isOpen ? "is-open" : ""}`}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label={copy.groupLabel}
        onClick={() => setIsOpen((open) => !open)}
      >
        <Globe size={16} aria-hidden="true" />
        <span className="pe-lang-trigger__copy">
          <strong>{currentLocale.short}</strong>
          <span>{currentLocale.nativeName}</span>
        </span>
        <ChevronDown size={15} aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="pe-lang-panel" role="dialog" aria-label={copy.groupLabel}>
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

          <button type="button" className="pe-lang-save" onClick={() => setIsOpen(false)}>
            {copy.saveLabel}
          </button>
        </div>
      )}
    </div>
  );
}
