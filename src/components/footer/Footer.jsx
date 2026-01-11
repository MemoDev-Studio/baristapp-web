import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contacto">
      <div className="footer-inner">
        {/* Top */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">B</div>
            <span className="footer-brand-name">Baristapp</span>
          </div>

          <p className="footer-question">
            ¿Tienes dudas o necesitas un diseño personalizado?
          </p>

          <a className="footer-cta" href="mailto:memodevstudio@gmail.com">
            <span className="footer-cta-icon">✉️</span>
            Contáctanos aquí
          </a>
        </div>

        <div className="footer-divider" />

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="footer-madeby">
            Una solución creada por{" "}
            <a
              href="https://memodevstudio-web.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-madeby-accent"
            >
              MemoDevStudio
            </a>
          </p>

          <nav className="footer-links" aria-label="Footer links">
            <a href="#terminos">Términos</a>
            <a href="#privacidad">Privacidad</a>
            <a href="#soporte">Soporte</a>
          </nav>
        </div>

        <p className="footer-copy">
          © 2026 Baristapp. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
