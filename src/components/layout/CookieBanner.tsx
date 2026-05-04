import { useState, useEffect } from 'react';
import { CookieCopy } from '@/content/site-copy';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieBannerProps {
  isOpen?: boolean;
  onClose?: () => void;
  copy: CookieCopy;
}

function getStoredPreferences(): CookiePreferences {
  const defaults: CookiePreferences = {
    necessary: true,
    analytics: false,
    marketing: false,
  };

  if (typeof window === 'undefined') return defaults;

  const consent = localStorage.getItem('cookie-consent');
  if (!consent) return defaults;

  try {
    const saved = JSON.parse(consent) as Partial<CookiePreferences>;
    return {
      necessary: true,
      analytics: !!saved.analytics,
      marketing: !!saved.marketing,
    };
  } catch {
    return defaults;
  }
}

export function CookieBanner({ isOpen: externalIsOpen, onClose, copy }: CookieBannerProps) {
  const [isInternalOpen, setIsInternalOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(() => getStoredPreferences());

  const isOpen = externalIsOpen !== undefined ? externalIsOpen : isInternalOpen;
  const setIsOpen = externalIsOpen !== undefined 
    ? (val: boolean) => { if (!val) onClose?.(); } 
    : setIsInternalOpen;

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent && externalIsOpen === undefined) {
      // Delay showing the modal
      const timer = setTimeout(() => {
        setIsInternalOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [externalIsOpen]);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsOpen(false);
    setShowSettings(false);
    
    // Load scripts based on preferences
    if (prefs.analytics) {
      console.log('Analytics cookies enabled');
    }
    if (prefs.marketing) {
      console.log('Marketing cookies enabled');
    }
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    saveConsent(allAccepted);
  };

  const acceptSelected = () => {
    saveConsent(preferences);
  };

  const rejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    saveConsent(onlyNecessary);
  };

  if (!isOpen) return null;

  return (
    <div className={`cookie-modal-overlay ${isOpen ? 'active' : ''}`}>
      {!showSettings ? (
        // Simple View - Premium Modal Style
        <div className="cookie-modal">
          <div className="cookie-header">
            <h3>{copy.title}</h3>
          </div>
          <div className="cookie-body">
            <p>{copy.description}</p>
          </div>
          <div className="cookie-actions-grid">
            <button 
              className="btn-cookie-premium btn-cookie-accept"
              onClick={acceptAll}
            >
              {copy.acceptAll}
            </button>
            <button 
              className="btn-cookie-premium btn-cookie-settings"
              onClick={() => setShowSettings(true)}
            >
              {copy.settings}
            </button>
          </div>
        </div>
      ) : (
        // Settings View
        <div className="cookie-modal cookie-modal--settings">
          <div className="cookie-header">
            <h3>{copy.settingsTitle}</h3>
          </div>
          
          <div className="cookie-settings-body">
            <div className="cookie-settings-list">
              {/* Necessary Cookies */}
              <div className="cookie-settings-item">
                <div className="cookie-settings-info">
                  <h4 className="cookie-settings-title">{copy.necessary.title}</h4>
                  <p className="cookie-settings-description">{copy.necessary.description}</p>
                </div>
                <div className="cookie-settings-action">
                  <input 
                    type="checkbox" 
                    checked={true} 
                    disabled
                    className="pe-checkbox pe-checkbox--disabled"
                  />
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="cookie-settings-item">
                <div className="cookie-settings-info">
                  <h4 className="cookie-settings-title">{copy.analytics.title}</h4>
                  <p className="cookie-settings-description">{copy.analytics.description}</p>
                </div>
                <div className="cookie-settings-action">
                  <input 
                    type="checkbox" 
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                    className="pe-checkbox"
                  />
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="cookie-settings-item">
                <div className="cookie-settings-info">
                  <h4 className="cookie-settings-title">{copy.marketing.title}</h4>
                  <p className="cookie-settings-description">{copy.marketing.description}</p>
                </div>
                <div className="cookie-settings-action">
                  <input 
                    type="checkbox" 
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                    className="pe-checkbox"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="cookie-actions-stack">
            <div className="cookie-actions-grid">
              <button 
                className="btn-cookie-premium btn-cookie-accept"
                onClick={acceptSelected}
              >
                {copy.savePreferences}
              </button>
              <button 
                className="btn-cookie-premium btn-cookie-settings"
                onClick={() => setShowSettings(false)}
              >
                {copy.back}
              </button>
            </div>
            
            <button 
              onClick={rejectAll}
              className="btn-cookie-reject-optional"
            >
              {copy.rejectAll}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
