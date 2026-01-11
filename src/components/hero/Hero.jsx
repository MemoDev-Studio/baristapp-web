import './Hero.css'



const Hero = () => {
  return (
    <section className="hero-main">
      <h1>
        Automatiza tu restaurante y decide con <span className="hero-accent">inteligencia</span>
      </h1>

      <p>La plataforma diseñada para el crecimiento de cafeterías y negocios de comida en América Latina</p>
      <button className="hero-button">Prueba Gratis 14 dias</button>

      <div className="hero-features">
        <article className="feature-card">
          <div className="feature-icon">📋⚙️
          </div>
          <h3>Gestion Completa</h3>
          <p>administra pedidos, mesas y cocina en una sola plataforma</p>
        </article>
        <article className="feature-card">
          <div className="feature-icon">📈</div>
          <h3>Datos Precisos</h3>
          <p>Reportes y análisis para tomar mejores decisiones</p>
        </article>

        <article className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Fácil de Usar</h3>
          <p>Interfaz intuitiva, capacitación incluida</p>
        </article>

      </div>

    </section>

  );

}



export default Hero