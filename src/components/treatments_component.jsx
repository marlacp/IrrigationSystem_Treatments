/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */

import React from 'react';
import '../assets/styles/treatments-style.css';
import { Link } from 'react-router-dom';
import tratamiento from '../assets/static/Treatment2.jpg';
// import CTChartTable from './treatments_chart_table';
class treatmentsComponent extends React.Component {

 handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    
    
    return (
      <React.Fragment>
     <div className='Background'>
          
      <div className='containerPage' onSubmit={this.handleSubmit}>
        <h4 className='titulo'>Please choose a treatment </h4>

        <section className='containergrid'>

          <div className='post'
            // onClick={() => handleClickApply(treatments)} 
          >
            {/* aqui en link se pone el parametro 1  */}
            <Link to="/treatments/1">
            <figure className='post-image'>
              <img src={tratamiento} alt='tratamiento' />
            </figure>
            <span className='post-overlay'>
              <button 
              className='post-comments' 
              onClick={this.GetTreatments} 
              value='tratment1'

              >
                Treatment 1
              </button>
            </span>

            </Link>
          </div>
          


          <div className='post'>
           <Link to="/treatments/2">
            <figure className='post-image'>
              <img src={tratamiento} alt='tratamiento' />
            </figure>
            <span className='post-overlay'>
              <button className='post-comments' onClick={this.GetTreatments} value='tratment2'>Treatment 2</button>
            </span>
            </Link>
          </div>


          <div className='post'>
          <Link to="/treatments/3">
            <figure className='post-image'>
              <img src={tratamiento} alt='tratamiento' />
            </figure>
            <span className='post-overlay'>
              <button className='post-comments' onClick={this.GetTreatments} value='tratment3'>Treatment 3</button>
            </span>
            </Link>
          </div>

          <div className='post'>
          <Link to="/treatments/4">
            <figure className='post-image'>
              <img src={tratamiento} alt='tratamiento' />
            </figure>
            <span className='post-overlay'>
              <button className='post-comments' onClick={this.GetTreatments} value='tratment4'>Treatment 4</button>
            </span>
            </Link>
          </div>
        </section>

      </div>
        </div>
      </React.Fragment>
    );
  }

}

export default treatmentsComponent;
