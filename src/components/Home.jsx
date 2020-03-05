/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// import styled from 'styled-components';
import { Slide } from 'react-slideshow-image';
import cebolla from '../assets/static/cebolla.jpg';
import Lechuga from '../assets/static/Lechuga.jpg';
import maiz from '../assets/static/maiz.jpg';
import '../assets/styles/Home-style.css';

const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};
const Home = () => {
  return (
    <div className='GridWrapper2'>
      <div className='containerSlide'>
        <Slide {...proprietes}>
          <div className='each-slide'>
            <div>
              <img src={cebolla} alt='cebolla' />
            </div>
          </div>
          <div className='each-slide'>
            <div>
              <img src={Lechuga} alt='Lechuga' />
            </div>
          </div>
          <div className='each-slide'>
            <div>
              <img src={maiz} alt='maiz' />
            </div>
          </div>
        </Slide>

      </div>

    </div>
  );
};

export default Home;
