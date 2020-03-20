/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Andres from '../assets/static/andres.jpg';
import Pedro from '../assets/static/pedro.png';
import '../assets/styles/AboutUs-style.css';

const AboutUs = () => {
  return (
    <React.Fragment>
      <div className='ContainerTable'>

      <div className='containerAboutUs'>
      <div className="item intro">

        <h3 className='titulo'>GIS-WEB Application for monitoring Sensors in Small Farms of a District Irrigation</h3>
        <br/>
    
          <p>
          In this WEB-SIG application, sensor data in crops can be displayed in real time using geolocation and graphical reports. 
          With this tool, you can perform continuous monitoring from any location, where you have access to internet and a web browser.
          The user must register to access the services. After registration, the User will obtain a
          username and password that will allow to protect his/her information and to enjoy of our services.
        </p>

      </div>

      <div className=' item Developer1 section-dev'> 

          <figure className="event-imageContainer">
             <img className="event-image" src={Andres} alt="Andres" /> 
          </figure>
          <div className="event-detail">
            <h4 className="titulo">Andres Fernando Jiménez López</h4><br/>
          <p className="event-description">
            Electronic Engineer. Pedagogial and Technological University of Colombia<br/>
            Magister in Science Physics. National University of Colombia<br/>
            PhD student. National University of Colombia<br/>
            Professor. Mathematics and Physics Department - FCBI - Unillanos University<br/>						
            Cel. +57 311 811 5450
          </p>

          </div>

	      </div>
      
      <div className='item Developer2 section-dev'>
        <figure className="event-imageContainer">
          <img className="event-image" src={Pedro} alt="Pedro"/> 
        </figure>
        <div className="event-detail">
          <h4 className="titulo">Pedro Fabián Cárdenas Herrera</h4><br/>
        <p className="event-description">
          Electronic Engineer. Pedagogial and Technological University of Colombia<br/>
          Magister in Industrial Automation. National University of Colombia<br/>
          Magister in Automatic and robotics. Polytechnic University of Madrid<br/>
          Phd in Automatic and robotics. Polytechnic University of Madrid<br/>
          Professor. Electromechanical Engineering. National University of Colombia<br/>						
          Cel. +57 318 530 9731
        </p>

        </div>
      </div>




      </div>

      </div>


    </React.Fragment>
  );
};

export default AboutUs;
