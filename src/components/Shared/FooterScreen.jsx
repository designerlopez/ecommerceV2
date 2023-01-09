import React from 'react'
import './styles/styleFooter.css'

const FooterScreen = () => {
  return (
    <footer className="footer">
      <p className='footer__text'>&copy; Todos los derechos reservados.</p>
      <ul className="redes">
        <li className="redes__items">
          <a href="https://www.instagram.com/exe_m666/" target='_blank' className="redes__links">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li className="redes__items">
          <a href="https://www.linkedin.com/in/hernan-exequiel-maydana-913a50218/" target='_blank' className="redes__links">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
        <li className="redes__items">
          <a href="https://www.youtube.com/channel/UC4ttyny4Z4fV4izkUbAr_mw" target='_blank' className="redes__links">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default FooterScreen