import "./navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar-inner" aria-label="BaristaApp">

        <a className="navbar-brand" href="#inicio">
          <span className="navbar-logo" aria-hidden="true">☕</span>
          <span className="navbar-name">BaristaApp</span>
        </a>

        <ul className="navbar-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#quienes">Quiénes somos</a></li>
          <li><a href="#planes">Planes</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>

        <div className="navbar-actions">
          <a className="navbar-lang" href="#idioma">🌐 English</a>
          <a className="navbar-login" href="https://app.baristapp.com/login" target="_blank" rel="noreferrer">
            Iniciar sesión
          </a>
        </div>
      </nav>
    </header >


  );
}

export default Navbar;