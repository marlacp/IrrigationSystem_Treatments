/* eslint-disable no-undef */
import React from 'react';
import TreatmentTable from './treatments_table';
import TreatmentChart from './treatments_chart';
import CheckboxChart from './CheckboxChart';
import '../assets/styles/TreatmentCT-style.css';
import { Link } from 'react-router-dom';
class CTChartTable extends React.Component {
  state = { 
    treatments2: this.props.match.params.id,
    data: '',
    loading: true,
    error: null,
    AxisY: {},
    hour:this.props.match.params.hour,
};

componentDidMount() {
  this.fetchData();

}
async componentDidUpdate(prevProps) {
  if (this.props.location !== prevProps.location) {
    await this.setState({
      treatments2: this.props.match.params.id,
      data: '',
      loading: true,
      error: null,
      AxisY: {},
      hour:this.props.match.params.hour,
    });
    this.fetchData();
  }
}

fetchData = async () => {
  this.setState({loading: true, error: null})

  try{
    // const response = await fetch('http://localhost:8000/?Treatment='+this.state.treatments2);
    const response = await fetch('http://localhost:8000/?Treatment='+this.state.treatments2+ "&hour="+this.state.hour);
    //console.log('link',response);
      // const response = await fetch('http://104.248.53.140:8080/sGet.php/?Treatment='+this.state.treatments2);
      const data = await response.json();
      this.setState({loading: false, data: data});

  } catch (error){
      this.setState({ loading:false, error: error});
  }
}



handleClickApply = (yaxis) => {
  this.setState({
          ...this.state,
          AxisY: yaxis,
  });
}


render() {
  // eslint-disable-next-line no-unused-vars
  return (
    <React.Fragment>



      <div className="card opacity bg-light">
          <div className="d-flex flex-row">
          <div className="p-2"><Link to="/treatments">Treatments</Link></div>
              <div className="p-2 treat">/ Treatment: {this.state.treatments2}</div>
          </div>
      </div>

      <div >
        <Link to={`/treatments/${this.state.treatments2}/1`}>
          <button 
            className="buttonh" 
            // value='1'
            // onClick={this.GetHour} 
            >
            Last hour
          </button>
        </Link>
      </div>

      <div>
        <Link to={`/treatments/${this.state.treatments2}/4`}>
          <button 
            className="buttonh"
            // value='4'            
            // onClick={this.GetHour} 
            >Last 4 hour
          </button>
        </Link>
      </div>

      <div>
        <Link to={`/treatments/${this.state.treatments2}/8`}>
          <button 
            className="buttonh"
            // value='8'            
            // onClick={this.GetHour} 
            >Last 8 hour
          </button>
        </Link>
      </div>

      <div>
        <Link to={`/treatments/${this.state.treatments2}/12`}>
          <button 
            className="buttonh"
            // value='12'            
            // onClick={this.GetHour} 
            >Last 12 hour
          </button>
        </Link>
      </div>

      <div>
        <Link to={{pathname:`/treatments/${this.state.treatments2}/24`, state: 'value'}}>
          <button 
            className="buttonh"
            // value='24'            
            // onClick={this.GetHour} 
            >Last 24 hour
          </button>
        </Link>
      </div>

       <TreatmentTable
          treat = {this.state.treatments2}
          data = {this.state.data}
        />
        <br/>
        <br/>
        <div className='hero'>

        <h4 className='titulo'> Chart </h4>
        <div className='ContainerChart'>
          <TreatmentChart 
            data = {this.state.data}
            Yaxis = {this.state.AxisY}
          />
          <CheckboxChart 
          handleClickApply = {this.handleClickApply}
          /> 

        </div>
        </div>
    </React.Fragment> 
    );
  }

}

export default CTChartTable;
