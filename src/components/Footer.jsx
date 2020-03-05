/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import unal from '../assets/static/unal.png';
import unillanos from '../assets/static/unillanos.png';
import colciencias from '../assets/static/colciencias.png';
import goboyaca from '../assets/static/goboyaca.png';
import '../assets/styles/Footer-style.css';

// eslint-disable-next-line import/prefer-default-export
export const Footer = () => (
  <React.Fragment>

    <section className='contact'>
      <div className='container'>

        <form action='/suscripcion/' className='form-email'>
          <h4>Contact us:</h4>
          <h6>precaginternational@gmail.com</h6>
        </form>
      </div>

    </section>
    <footer className='footer'>
      <div className='container'>
        <img className='Navbar__brand-logo' src={unal} alt='unal' />
        <img className='Navbar__brand-logo' src={unillanos} alt='unillanos' />
        <img className='Navbar__brand-logo' src={colciencias} alt='colciencias' />
        <img className='Navbar__brand-logo' src={goboyaca} alt='goboyaca' />
      </div>
    </footer>
  </React.Fragment>

);
