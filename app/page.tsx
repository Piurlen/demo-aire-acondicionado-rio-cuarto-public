import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const PHONE_DISPLAY = "+54 358 438-2754";
const PHONE_TEL = "+543584382754";
const DEFAULT_WHATSAPP_MESSAGE = "Hola Fabián, quiero consultar por un servicio de aire acondicionado.";
const WHATSAPP_URL = createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE);
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Fernando+Fader+405%2C+Rio+Cuarto%2C+Cordoba%2C+Argentina";
const PUBLIC_LISTING_URL = "https://poraca.com.ar/tecnico-aire-acondicionado/cordoba/rio-cuarto/tecnico-en-aire-acondicionado/";

function createWhatsAppUrl(message: string) {
  return `https://wa.me/543584382754?text=${encodeURIComponent(message)}`;
}

function Icon({ name }: { name: "snow" | "phone" | "pin" | "star" | "check" | "arrow" | "whatsapp" | "home" | "store" | "tool" | "message" }) {
  const paths = {
    snow: <><path d="M12 2v20M4.9 6l14.2 12M4.9 18 19.1 6M9 4l3 3 3-3M9 20l3-3 3 3M3.8 9.5 8 10.6 6.9 6.5M20.2 14.5 16 13.4l1.1 4.1M3.8 14.5 8 13.4l-1.1 4.1M20.2 9.5 16 10.6l1.1-4.1" /></>,
    phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c1 .3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" /></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    star: <path d="m12 2.7 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.3l6.2-.9L12 2.7Z" />,
    check: <path d="m5 12 4 4L19 6" />,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    whatsapp: <path fill="currentColor" stroke="none" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.8 14.1c-.2.6-1.3 1.2-1.8 1.3-.5.1-1.1.2-1.8 0-.4-.1-1-.3-1.7-.6-3-1.3-5-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3.1 0-1.5.8-2.2 1.1-2.5.3-.3.6-.4.9-.4h.6c.2 0 .4-.1.7.5l.9 2.1c.1.2.1.5 0 .7l-.4.6-.5.6c-.2.2-.3.4-.1.7.2.3.8 1.3 1.8 2.1 1.2 1.1 2.3 1.5 2.6 1.7.3.1.5.1.7-.1l.9-1.1c.2-.3.4-.3.7-.2l2 .9c.3.1.5.2.6.4.1.1.1.7-.1 1.5Z" />,
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></>,
    store: <><path d="M4 10v10h16V10M3 4h18l-2 6H5L3 4ZM8 10v10M16 10v10" /></>,
    tool: <><path d="M14.7 6.3a4 4 0 0 0-5-5L7.6 3.4l3 3 2.1-2.1a4 4 0 0 0 2 2ZM9.3 7.7 3 14a2.1 2.1 0 0 0 3 3l6.3-6.3" /></>,
    message: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" /><path d="M8 9h8M8 13h5" /></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function WhatsAppLink({ className = "button button-primary", children = "Consultar por WhatsApp", location, message = DEFAULT_WHATSAPP_MESSAGE }: { className?: string; children?: React.ReactNode; location: string; message?: string }) {
  return <a className={className} href={createWhatsAppUrl(message)} target="_blank" rel="noreferrer" data-cta={`whatsapp-${location}`}><Icon name="whatsapp" />{children}</a>;
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#inicio" aria-label="Inicio — Servicio técnico de aire acondicionado en Río Cuarto">
            <span className="brand-mark"><Icon name="snow" /></span>
            <span><strong>Servicio técnico</strong><small>Río Cuarto · Córdoba</small></span>
          </a>
          <nav aria-label="Navegación principal">
            <a href="#soluciones">Soluciones</a><a href="#nosotros">Por qué elegirnos</a><a href="#cobertura">Cobertura</a><a href="#preguntas">Preguntas</a>
          </nav>
          <a className="header-phone" href={`tel:${PHONE_TEL}`}><Icon name="phone" /><span>{PHONE_DISPLAY}</span></a>
        </div>
      </header>

      <main id="contenido">
        <section className="hero" id="inicio">
          <div className="hero-image" aria-hidden="true"><Image src="/images/hero-technician.png" alt="" fill priority sizes="100vw" /></div>
          <div className="hero-shade" />
          <div className="container hero-content">
            <div className="eyebrow"><span /> Servicio local en Río Cuarto</div>
            <h1>Climatización<br /><em>profesional</em> en<br />Río Cuarto</h1>
            <p>Servicio técnico de aire acondicionado con atención directa de Fabián Fuentes y soluciones para tu hogar o comercio.</p>
            <div className="hero-actions">
              <WhatsAppLink location="hero" />
              <a className="button button-secondary" href={`tel:${PHONE_TEL}`} data-cta="phone-hero"><Icon name="phone" />Llamar ahora</a>
            </div>
          </div>
          <div className="container trust-bar" aria-label="Indicadores de confianza">
            <div><span className="trust-icon"><Icon name="star" /></span><p><strong>5.0 <span>★</span></strong><small>Valoración pública</small></p></div>
            <div><span className="trust-icon"><Icon name="pin" /></span><p><strong>Río Cuarto</strong><small>Atención local</small></p></div>
            <div><span className="trust-icon"><Icon name="message" /></span><p><strong>Consulta directa</strong><small>WhatsApp o teléfono</small></p></div>
          </div>
        </section>

        <section className="section solutions" id="soluciones">
          <div className="container">
            <Reveal className="section-heading split-heading">
              <div><span className="kicker">Qué podemos resolver</span><h2>Soluciones de<br />climatización</h2></div>
              <p>Atención para equipos split en hogares y comercios. Consultá por tu caso particular.</p>
            </Reveal>
            <div className="service-grid">
              {[
                ["01", "Instalación", "Evaluación del espacio y colocación del equipo según cada ambiente.", "home", "Hola Fabián, quiero consultar por instalación de aire acondicionado."],
                ["02", "Mantenimiento", "Revisión y limpieza para cuidar el funcionamiento de tu equipo.", "snow", "Hola Fabián, necesito mantenimiento de un aire acondicionado."],
                ["03", "Reparación", "Diagnóstico técnico ante fallas o funcionamiento irregular.", "tool", "Hola Fabián, quiero consultar por reparación de un aire acondicionado."],
              ].map(([n, title, text, icon, message]) => (
                <Reveal className="service-card" key={title}>
                  <div className="card-top"><span>{n}</span><span className="card-icon"><Icon name={icon as "home"} /></span></div>
                  <h3>{title}</h3><p>{text}</p>
                  <WhatsAppLink location={`service-${title.toLowerCase()}`} className="text-link" message={message}>Consultar <Icon name="arrow" /></WhatsAppLink>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section why" id="nosotros">
          <div className="container why-grid">
            <Reveal className="why-photo">
              <Image src="/images/service-maintenance.png" alt="Técnico realizando mantenimiento de un equipo split" fill sizes="(max-width: 800px) 100vw, 48vw" />
              <div className="photo-note"><Icon name="check" /><span><strong>Atención profesional</strong><small>En cada consulta</small></span></div>
            </Reveal>
            <Reveal className="why-content">
              <span className="kicker">Una atención más simple</span><h2>Profesionalismo que se nota desde el primer contacto.</h2>
              <p className="lead">Una comunicación clara, atención directa y trabajo enfocado en resolver lo que tu equipo necesita.</p>
              <ul className="benefit-list">
                <li><span><Icon name="message" /></span><div><strong>Atención directa</strong><p>Hablás de forma simple para explicar qué necesitás.</p></div></li>
                <li><span><Icon name="pin" /></span><div><strong>Presencia local</strong><p>Servicio técnico ubicado en Río Cuarto, Córdoba.</p></div></li>
                <li><span><Icon name="tool" /></span><div><strong>Trabajo profesional</strong><p>Una atención cuidada para hogares y comercios.</p></div></li>
                <li><span><Icon name="phone" /></span><div><strong>Comunicación rápida</strong><p>Consultas directas por WhatsApp o por teléfono.</p></div></li>
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="section result">
          <div className="container result-card">
            <div className="result-image"><Image src="/images/residential-result.png" alt="Living moderno con aire acondicionado split instalado" fill sizes="(max-width: 800px) 100vw, 56vw" /></div>
            <Reveal className="result-copy"><span className="kicker light">Confort en cada ambiente</span><h2>Tu equipo funcionando cuando más lo necesitás.</h2><p>Una climatización confiable cambia cómo vivís y trabajás tus espacios.</p><WhatsAppLink location="result" className="button button-light" /></Reveal>
          </div>
        </section>

        <section className="section contexts">
          <div className="container context-grid">
            <Reveal className="context-copy"><span className="kicker">Hogar o comercio</span><h2>Climatización pensada para tu espacio.</h2><p>Cada ambiente tiene necesidades distintas. Contanos tu caso para orientar la consulta.</p><div className="context-tags"><span><Icon name="home" />Viviendas</span><span><Icon name="store" />Comercios</span></div></Reveal>
            <Reveal className="context-photo"><Image src="/images/commercial-installation.png" alt="Aire acondicionado split instalado en un pequeño comercio" fill sizes="(max-width: 800px) 100vw, 50vw" /></Reveal>
          </div>
        </section>

        <section className="section reviews" id="resenas">
          <div className="container">
            <Reveal className="section-heading centered"><span className="kicker">Reputación pública</span><h2>La confianza también se construye con experiencias reales.</h2><div className="rating-summary"><strong>5.0</strong><span><b>★★★★★</b><small>Aproximadamente 41 reseñas públicas</small></span></div></Reveal>
            <Reveal className="review-source-note"><Icon name="check" /><p><strong>Calificación pública.</strong> 5/5 con aproximadamente 41 reseñas. <a href={PUBLIC_LISTING_URL} target="_blank" rel="noreferrer">Ver ficha pública</a>.</p></Reveal>
          </div>
        </section>

        <section className="section coverage" id="cobertura">
          <div className="container coverage-grid">
            <Reveal className="coverage-copy"><span className="kicker">Área de cobertura</span><h2>Estamos en Río Cuarto, Córdoba.</h2><p>Podés encontrarnos en Fernando Fader 405. Consultá directamente para confirmar atención en tu zona.</p><a className="button button-outline" href={MAPS_URL} target="_blank" rel="noreferrer"><Icon name="pin" />Ver ubicación</a></Reveal>
            <Reveal className="map-panel">
              <div className="map-grid" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
              <div className="map-pin"><Icon name="pin" /></div>
              <div className="map-card"><small>Ubicación</small><strong>Fernando Fader 405</strong><span>Río Cuarto, Córdoba</span></div>
            </Reveal>
          </div>
        </section>

        <section className="section faq" id="preguntas">
          <div className="container faq-grid">
            <Reveal className="faq-heading"><span className="kicker">Preguntas frecuentes</span><h2>Antes de consultar</h2><p>Información general para ayudarte a dar el primer paso.</p></Reveal>
            <Reveal className="accordion">
              <details><summary>¿Cómo puedo hacer una consulta?<span>+</span></summary><p>Podés escribir por WhatsApp o llamar al número publicado. Contanos qué sucede con tu equipo para iniciar la consulta.</p></details>
              <details><summary>¿Cómo solicito un presupuesto?<span>+</span></summary><p>Contactanos directamente. El presupuesto y sus condiciones deberán confirmarse según cada caso.</p></details>
              <details><summary>¿En qué zona brindan atención?<span>+</span></summary><p>La ubicación verificada es Río Cuarto, Córdoba. Consultá para confirmar disponibilidad en tu dirección.</p></details>
              <details><summary>¿Qué información conviene enviar?<span>+</span></summary><p>Podés indicar el tipo de equipo, qué problema presenta y en qué zona se encuentra. El técnico te dirá si necesita información adicional.</p></details>
            </Reveal>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-grid"><div><span className="kicker light">Hablemos de tu equipo</span><h2>¿Necesitás revisar<br />tu aire?</h2></div><div><p>Escribinos ahora y contanos qué necesitás.</p><div className="final-actions"><WhatsAppLink location="final" className="button button-light" /><a className="phone-link" href={`tel:${PHONE_TEL}`}><Icon name="phone" /><span><small>O llamanos al</small><strong>{PHONE_DISPLAY}</strong></span></a></div></div></div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid"><div className="footer-brand"><span className="brand-mark"><Icon name="snow" /></span><p><strong>Servicio técnico de aire acondicionado</strong><span>Atención local en Río Cuarto.</span></p></div><div><small>Contacto</small><a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp</a></div><div><small>Ubicación</small><a href={MAPS_URL} target="_blank" rel="noreferrer">Fernando Fader 405<br />Río Cuarto, Córdoba</a></div><div><small>Enlaces</small><a href="#soluciones">Soluciones</a><a href="#preguntas">Preguntas frecuentes</a></div></div>
        <div className="container footer-bottom"><p>© {new Date().getFullYear()} · Servicio técnico de aire acondicionado.</p></div>
      </footer>
      <WhatsAppLink location="floating" className="floating-whatsapp"><span className="sr-only">Consultar por WhatsApp</span><span className="floating-label" aria-hidden="true">Escribinos</span></WhatsAppLink>
      <div className="mobile-actions" aria-label="Acciones de contacto"><a href={`tel:${PHONE_TEL}`}><Icon name="phone" />Llamar</a><WhatsAppLink location="mobile" className="mobile-whatsapp">WhatsApp</WhatsAppLink></div>
    </>
  );
}
