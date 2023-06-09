import { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import '../Monitor/Monitor.css'

import { FaTiktok, FaInstagram } from 'react-icons/fa';

import Logo1 from '../../images/logo1.png'
import Taxi1 from '../../images/Ejemplo1.jpg'
import Ejemplo2 from '../../images/Ejemplo2.jpg'

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
            <Link to="Home" smooth={true} duration={700} spy={true} exact="true" offset={0} activeClass="active" onSetActive={handleSetActive}><a>Inicio</a></Link>
            <Link to="Nosotros" smooth={true} duration={700} spy={true} exact="true" offset={0} activeClass="active" onSetActive={handleSetActive}><a>Nosotros</a></Link>
            <Link to="Home" smooth={true} duration={700} spy={true} exact="true" offset={0} activeClass="active" onSetActive={handleSetActive}><a>Servicios</a></Link>
            <Link to="Home" smooth={true} duration={700} spy={true} exact="true" offset={0} activeClass="active" onSetActive={handleSetActive}><a>Contáctanos</a></Link>
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

    <div className='Nosotros' id='Nosotros'>

      <div className='NosotrosBox'>

      <div className='NosotrosImagen'>
        <img src={Ejemplo2}/>
      </div>

      <div className='NosotrosTexto'>
      <h2>Misión:</h2>
      <p>Revolucionar la forma en que las personas acceden al transporte en las ciudades.</p>
      <br/>
      <h2>Visión:</h2>
      <p>Proporcionar a los usuarios un medio de transporte seguro, confiable y eficiente a través de su plataforma digital.</p>
      </div>

      </div>
    </div>

    </div>
  )
}

export default Monitor