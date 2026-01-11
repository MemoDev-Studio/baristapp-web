import "./About.css";

const About = () => {
  return (
    <section className="about">
      <h2 className="about-title">
        Tecnología con sabor local, visión global
      </h2>

      <span className="about-accent" />

      <p className="about-description">
        Baristapp nace para <span className="about-highlight">empoderar a los dueños de restaurantes y cafeterías</span> en América
        Latina. Somos una plataforma de gestión integral diseñada para simplificar el día a día
        de tu negocio de comida.
      </p>

      <div className="about-cards">
        <article className="about-card">
          <div className="about-icon">🎯</div>
          <h3>Nuestro Objetivo</h3>
          <p>
            Digitalizar la operación de pequeños y medianos negocios, brindando herramientas
            que antes solo estaban al alcance de grandes cadenas.
          </p>
        </article>

        <article className="about-card">
          <div className="about-icon">👁️</div>
          <h3>Nuestra Visión</h3>
          <p>
            Automatizar procesos operativos para que los emprendedores tengan información clara,
            tomen mejores decisiones basadas en datos y logren escalar sus negocios al nivel mundial.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
