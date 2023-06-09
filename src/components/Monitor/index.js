import { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import '../Monitor/Monitor.css'

import { FaTiktok, FaInstagram } from 'react-icons/fa';

import Logo1 from '../../images/logo1.png'
import Taxi1 from '../../images/Ejemplo1.jpg'

const Monitor = () => {

  const [activeSection, setActiveSection] = useState(null);

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  return (
    <div>
      
      <div className="Monitor" id='Home'>
        <div className='Menu'>

          <div className='Logo'>
            <img src={Logo1}/>
            </div>

            <div className='MenuIndex'>
            <Link to="Home" smooth={true} duration={700} spy={true} exact="true" offset={14} activeClass="active" onSetActive={handleSetActive}><a>Inicio</a></Link>
            <Link to="Home" smooth={true} duration={700} spy={true} exact="true" offset={14} activeClass="active" onSetActive={handleSetActive}><a>Nosotros</a></Link>
            <Link to="Home" smooth={true} duration={700} spy={true} exact="true" offset={14} activeClass="active" onSetActive={handleSetActive}><a>Servicios</a></Link>
            <Link to="Home" smooth={true} duration={700} spy={true} exact="true" offset={14} activeClass="active" onSetActive={handleSetActive}><a>Contáctanos</a></Link>
            </div>

            <div className='MenuSociales'>
            <a href='https://www.tiktok.com/@turuta_segura' target='_blank'><FaTiktok style={{ verticalAlign: 'middle'}} size='2rem'/></a>
            <a href='https://www.instagram.com/tu_ruta_segura/' target='_blank'><FaInstagram style={{ verticalAlign: 'middle'}} size='2rem'/></a>
            </div>

            <div className='MenuRegistro'>
              <p>Iniciar Sesion</p>
              <p>Registrate</p>
            </div>


        </div>

        <div className='MonitorTaxi'>
          <div className='MonitorTaxiIzq'>
            <h2>¡Tu ruta segura!</h2>
            <p>Tu viaje seguro y confiable en un solo toque.</p>
          </div>
          <div className='MonitorImagenDere'>
            <img src={Taxi1}/>
          </div>
        </div>

    </div>

    </div>
  )
}

export default Monitor