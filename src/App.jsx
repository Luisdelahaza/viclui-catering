import React, { useEffect, useState } from "react";
import "./App.css";

// Imágenes (cambia los nombres por los tuyos si quieres)
import heroImg from "./assets/fotoMojito.jpg";
import aboutImg from "./assets/imagenCamareras1.jpg";
import gal1 from "./assets/fotoboda1.jpg";
import gal2 from "./assets/fotocopa1.jpg";
import gal3 from "./assets/fotoMojito.jpg";
import gal4 from "./assets/imagenCamareras1.jpg";
import gal5 from "./assets/fotoboda1.jpg";
import gal6 from "./assets/fotocopa1.jpg";

import logo from "./assets/logo.jpg"; // tu logo

export default function App() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Navbar con fondo al hacer scroll
  useEffect(() => {
    const onScroll = () => {
      setNavScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animaciones al hacer scroll
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <header className={`nav ${navScrolled ? "nav--scrolled" : ""}`}>
        <div className="nav-inner">
          <div className="nav-logo" onClick={() => scrollToSection("inicio")}>
            <img src={logo} alt="Viclui Catering" />
            <span>Viclui Catering</span>
          </div>
          {/* BOTÓN MENÚ HAMBURGUESA (solo móvil) */}
<div
  className="hamburger"
  onClick={() => setMenuOpen(!menuOpen)}
>
  <span></span>
  <span></span>
  <span></span>
</div>

{/* MENÚ DESPLEGABLE */}
<nav className={`nav-links ${menuOpen ? "open" : ""}`}>
  <button onClick={() => { scrollToSection("inicio"); setMenuOpen(false); }}>Inicio</button>
  <button onClick={() => { scrollToSection("nosotros"); setMenuOpen(false); }}>Nosotros</button>
  <button onClick={() => { scrollToSection("servicios"); setMenuOpen(false); }}>Servicios</button>
  <button onClick={() => { scrollToSection("galeria"); setMenuOpen(false); }}>Galería</button>
  <button onClick={() => { scrollToSection("contacto"); setMenuOpen(false); }}>Contacto</button>
</nav>

        </div>
      </header>

      {/* HERO / INICIO */}
      <section
        id="inicio"
        className="hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content reveal">
            <img src={logo} alt="Viclui Catering" className="hero-logo" />
            <h1>Viclui Catering</h1>
            <p>Organización profesional de eventos y experiencias culinarias.</p>
            <button
              className="hero-btn"
              onClick={() => scrollToSection("contacto")}
            >
              Solicitar información
            </button>
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="section section--light">
        <div className="section-inner">
          <div className="section-text reveal-left">
            <h2>Quiénes Somos</h2>
            <p>
              En <strong>Viclui Catering</strong> nos especializamos en la
              organización integral de eventos sociales, privados y corporativos.
              Ofrecemos propuestas gastronómicas a medida, cuidando cada detalle
              para que tú solo tengas que disfrutar.
            </p>
            <p>
              Nuestro equipo combina experiencia, elegancia y cercanía para crear
              momentos únicos que tus invitados recordarán durante mucho tiempo.
            </p>
          </div>
          <div className="section-image reveal-right">
            <img src={aboutImg} alt="Equipo de Viclui Catering" />
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="section section--dark">
        <div className="section-inner reveal">
          <h2>Servicios de Catering</h2>
          <p className="section-subtitle">
            Diseñamos cada evento a tu medida, con un servicio cercano y profesional.
          </p>
          <div className="services-grid">
            <div className="service-card">
              <h3>Bodas y Celebraciones</h3>
              <p>
                Menús personalizados, decoración y servicio completo para que tu
                día sea perfecto.
              </p>
            </div>
            <div className="service-card">
              <h3>Eventos de Empresa</h3>
              <p>
                Coffee breaks, cócteles, presentaciones y todo tipo de eventos
                corporativos.
              </p>
            </div>
            <div className="service-card">
              <h3>Eventos Privados</h3>
              <p>
                Cumpleaños, aniversarios, fiestas privadas y reuniones familiares.
              </p>
            </div>
            <div className="service-card">
              <h3>Servicio Integral</h3>
              <p>
                Coordinación, montaje, personal de sala y todo lo necesario para
                tu evento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="section gallery-section">
  <h2>Galería</h2>
 <p 
  className="section-subtitle"
  style={{
    textAlign: "center",
    margin: "0 auto",
    maxWidth: "800px"
  }}
>
  Una muestra de algunos de los eventos que hemos tenido el placer de organizar.
</p>


  <div className="gallery-grid">
    <img src={gal1} alt="" />
    <img src={gal2} alt="" />
    <img src={gal3} alt="" />
    <img src={gal4} alt="" />
    <img src={gal5} alt="" />
    <img src={gal6} alt="" />
  </div>
</section>


      {/* CONTACTO */}
      <section id="contacto" className="section section--dark">
        <div className="section-inner contact-inner reveal">
          <div>
            <h2>Contacto</h2>
            <p>
              Cuéntanos qué tipo de evento tienes en mente y prepararemos una
              propuesta personalizada.
            </p>
            <p><strong>Teléfono:</strong> <a href="tel:+34600111222">600 11 12 22</a></p>
            <p><strong>Email:</strong> <a href="mailto:contacto@viclui.com">contacto@viclui.com</a></p>
          </div>
          <div className="contact-box">
            <h3>¿Hablamos de tu evento?</h3>
            <p>
              Envíanos un correo o llámanos directamente y te asesoraremos sin compromiso.
            </p>
            <button onClick={() => (window.location = "mailto:contacto@viclui.com")}>
              Escribir un email
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-col">
            <img src={logo} alt="Viclui Catering" className="footer-logo" />
            <p>
              Viclui Catering · Organización de eventos y catering profesional
              para todo tipo de celebraciones.
            </p>
          </div>
          <div className="footer-col">
            <h4>Enlaces</h4>
            <button onClick={() => scrollToSection("nosotros")}>Nosotros</button>
            <button onClick={() => scrollToSection("servicios")}>Servicios</button>
            <button onClick={() => scrollToSection("galeria")}>Galería</button>
            <button onClick={() => scrollToSection("contacto")}>Contacto</button>
          </div>
          <div className="footer-col">
            <h4>Contacto</h4>
            <p>Tel: 600 11 12 22</p>
            <p>Email: contacto@viclui.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Viclui Catering · Todos los derechos reservados
        </div>
      </footer>
    </>
  );
}
