import "./Navbar.css";

export default function Navbar() {
    return ( 
<nav className="navbar py-5 bg-dark text-white">
<div className="logo-container">
      <a href="/">
        <img src="/LOGO_PROCASA.png" alt="logo" className="logo" />
      </a>
    </div>
  <div className="container">
    <ul className="menu d-flex justify-content-end align-items-center">
      <li><a href="#foot">PROYECTOS</a>
        <ul className="submenu">
          <li><a href="/app/proyectos/garzablanca/garza.jsx">Garza Blanca</a></li>
          <li><a href="/app/proyectos/villasipan/villa.jsx">Villa Sipan</a></li>
        </ul>
      </li>
      <li><a href="/#foter">¿QUIÉNES SOMOS?</a></li>
      <li><a href="/#footer">CONTÁCTANOS</a></li>
    </ul>
  </div>
</nav>

);

}