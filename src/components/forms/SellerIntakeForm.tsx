export function SellerIntakeForm() {
  return (
    <form style={{ display: "grid", gap: "1rem" }}>
      <label>
        <span className="pe-eyebrow">Nombre</span>
        <input className="pe-input" name="name" placeholder="Tu nombre" />
      </label>
      <label>
        <span className="pe-eyebrow">Email</span>
        <input className="pe-input" name="email" placeholder="nombre@dominio.com" />
      </label>
      <label>
        <span className="pe-eyebrow">Teléfono</span>
        <input className="pe-input" name="phone" placeholder="+34 ..." />
      </label>
      <label>
        <span className="pe-eyebrow">Zona del inmueble</span>
        <input className="pe-input" name="zone" placeholder="Son Vida, Portals, Andratx..." />
      </label>
      <label>
        <span className="pe-eyebrow">Tipo de propiedad</span>
        <select className="pe-select" name="propertyType" defaultValue="">
          <option value="" disabled>
            Selecciona una opción
          </option>
          <option>Villa</option>
          <option>Ático</option>
          <option>Apartamento premium</option>
          <option>Finca</option>
        </select>
      </label>
      <label>
        <span className="pe-eyebrow">Preferencia de comercialización</span>
        <select className="pe-select" name="commercialization" defaultValue="">
          <option value="" disabled>
            Selecciona una opción
          </option>
          <option>Evaluación confidencial</option>
          <option>Venta en exclusiva</option>
          <option>Venta selectiva sin portal masivo</option>
        </select>
      </label>
      <label>
        <span className="pe-eyebrow">Mensaje</span>
        <textarea className="pe-textarea" name="message" placeholder="Cuéntanos el contexto del activo y qué necesitas resolver." />
      </label>
      <button className="pe-btn-primary" type="submit">
        Solicitar evaluación confidencial
      </button>
    </form>
  );
}
