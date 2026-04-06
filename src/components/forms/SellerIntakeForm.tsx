import type { SellerFormCopy } from "@/content/site-copy";

type SellerIntakeFormProps = {
  copy: SellerFormCopy;
};

export function SellerIntakeForm({ copy }: SellerIntakeFormProps) {
  return (
    <form className="pe-form" data-testid="seller-intake-form">
      <div className="pe-form-grid">
        <label className="pe-form-field">
          <span className="pe-eyebrow">{copy.name}</span>
          <input className="pe-input" name="name" placeholder={copy.placeholders.name} data-testid="seller-name-input" />
        </label>
        <label className="pe-form-field">
          <span className="pe-eyebrow">{copy.email}</span>
          <input className="pe-input" name="email" placeholder={copy.placeholders.email} data-testid="seller-email-input" />
        </label>
        <label className="pe-form-field">
          <span className="pe-eyebrow">{copy.phone}</span>
          <input className="pe-input" name="phone" placeholder={copy.placeholders.phone} data-testid="seller-phone-input" />
        </label>
        <label className="pe-form-field">
          <span className="pe-eyebrow">{copy.zone}</span>
          <input className="pe-input" name="zone" placeholder={copy.placeholders.zone} data-testid="seller-zone-input" />
        </label>
        <label className="pe-form-field">
          <span className="pe-eyebrow">{copy.propertyType}</span>
          <select className="pe-select" name="propertyType" defaultValue="" data-testid="seller-property-type-select">
            <option value="" disabled>
              {copy.selectPlaceholder}
            </option>
            {copy.propertyTypeOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="pe-form-field">
          <span className="pe-eyebrow">{copy.commercialization}</span>
          <select className="pe-select" name="commercialization" defaultValue="" data-testid="seller-commercialization-select">
            <option value="" disabled>
              {copy.selectPlaceholder}
            </option>
            {copy.commercializationOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="pe-form-field">
        <span className="pe-eyebrow">{copy.message}</span>
        <textarea className="pe-textarea" name="message" placeholder={copy.placeholders.message} data-testid="seller-message-input" />
      </label>

      <button className="pe-btn-primary pe-btn-primary-gold pe-btn-full" type="submit" data-testid="seller-submit-button">
        {copy.submitLabel}
      </button>
    </form>
  );
}
