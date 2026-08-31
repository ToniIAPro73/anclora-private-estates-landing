import { useCallback } from 'react';
import { MessageCircle, ChevronUp, ChevronDown } from 'lucide-react';
import { ScrollCopy } from '@/content/site-copy';
import { useActiveSectionIndex } from '@/hooks/useActiveSectionIndex';

interface FloatingControlsProps {
  onOpenCookieModal: () => void;
  scrollCopy: ScrollCopy;
  contactLabel: string;
}

// Real, ordered section ids as mounted in App.tsx.
const SECTION_IDS = [
  'hero',
  'credibilidad',
  'como-trabajamos',
  'mallorca-focus',
  'alquiler-vacacional',
  'inversores',
  'despues-del-contacto',
  'clientes',
  'faq',
  'partners',
  'data-lab',
  'editorial',
  'contacto',
  'final-cta',
];

export function FloatingControls({ onOpenCookieModal, scrollCopy, contactLabel }: FloatingControlsProps) {
  const activeIndex = useActiveSectionIndex(SECTION_IDS);
  const showScrollNav = true;
  const showUpButton = activeIndex > 0;
  const showDownButton = activeIndex < SECTION_IDS.length - 1;

  const goToIndex = useCallback((index: number) => {
    const target = document.getElementById(SECTION_IDS[index]);
    if (!target) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
  }, []);

  const scrollToTop = () => {
    goToIndex(Math.max(0, activeIndex - 1));
  };

  const scrollToBottom = () => {
    goToIndex(Math.min(SECTION_IDS.length - 1, activeIndex + 1));
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Left Side: Cookie Control */}
      <div className="floating-controls-left">
        <button 
          className="btn-cookie-trigger pointer-events-auto"
          onClick={onOpenCookieModal}
          title="Cookies"
          aria-label="Cookies"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-[22px] h-[22px]">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" fill="currentColor"/>
            <circle cx="12" cy="17" r="1.5" fill="currentColor"/>
            <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
            <circle cx="12" cy="7" r="1.5" fill="currentColor"/>
          </svg>
        </button>
      </div>

      {/* Right Side: Scroll & Contact Stack */}
      <div className="floating-controls-right">
        {/* Scroll Navigation */}
        <div className={`scroll-navigation ${showScrollNav ? 'visible' : ''}`}>
          <button 
            className={`btn-scroll ${!showUpButton ? 'hidden' : ''}`}
            onClick={scrollToTop}
            title={scrollCopy.up}
            aria-label={scrollCopy.up}
          >
            <ChevronUp className="w-4 h-4" strokeWidth={2.5} />
          </button>
          <button 
            className={`btn-scroll ${!showDownButton ? 'hidden' : ''}`}
            onClick={scrollToBottom}
            title={scrollCopy.down}
            aria-label={scrollCopy.down}
          >
            <ChevronDown className="w-4 h-4" strokeWidth={2.5} />
          </button>
        </div>
        
        {/* Contact Button */}
        <button 
          className="btn-anclora-premium btn-contact-floating pointer-events-auto"
          onClick={scrollToContact}
          aria-label={contactLabel}
        >
          <MessageCircle className="w-[18px] h-[18px]" strokeWidth={2} />
          <span>{contactLabel}</span>
        </button>
      </div>
    </>
  );
}
