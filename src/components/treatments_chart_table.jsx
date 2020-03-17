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

// componentWillMount(e)  {
//   // eslint-disable-next-line no-undef
//   this.unlisten = this.props.history.listen((location, action) => {
//     // this.setState({
//     //   hour: e.target.value,
    
//     // });
//     this.fetchData();
//   });
// }
GetHour = (e) =>{
  this.setState({
    hour: e.target.value,
    treatments2: this.props.match.params.id,
    data: '',
    loading: true,
    error: null,
    AxisY: {},
  
  });
  this.fetchData();
}
componentWillReceiveProps(nextProps) {
  // check current props and nextPros of dealLoaded flag. If dealLoaded was false, and is true, which means the data is fetched, then we should reset isFlushed
  // if (!this.props.dealLoaded && nextProps.dealLoaded) {
  //   this.setState({
  //     isFlushed: false
  //   });
  // }
  // since we assigned the location.state in <Link>, if we see this prop, and the data is not flushed yet, then flush data, in this case we call loadDeals(), which is a redux action
  if (!this.state.hour && nextProps.location.state === 'value') {

      this.setState({
        hour:this.props.match.params.hour,
        treatments2: this.props.match.params.id,
        data: '',
        loading: true,
        error: null,
        AxisY: {},
      
      },() => this.props.loadDeals());
      // this.fetchData()
    // this.setState({
    //   isFlushed: true,
    // }, () => this.props.loadDeals());
  }
}



fetchData = async () => {
  this.setState({loading: true, error: null})

  try{
    // const response = await fetch('http://localhost:8000/?Treatment='+this.state.treatments2);
    const response = await fetch('http://localhost:8000/?Treatment='+this.state.treatments2+ "&hour="+this.state.hour);
    console.log('link',response);
      // const response = await fetch('http://104.248.53.140:8080/sGet.php/?Treatment='+this.state.treatments2);
      const data = await response.json();
      this.setState({loading: false, data: data});

  } catch (error){
      this.setState({ loading:false, error: error});
  }
}


// GetHour = (e) => {
//   console.log(e.target.value);
//   this.setState({
//     hour: e.target.value,
  
//   });
// }

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
        <Link to={{pathname:`/treatments/${this.state.treatments2}/1`, state: 'value'}}>
          <button 
            className="buttonh" 
            value='1'
            onClick={this.GetHour} 
            >
            Last hour
          </button>
        </Link>
      </div>

      <div>
        <Link to={`/treatments/${this.state.treatments2}/4`}>
          <button 
            className="buttonh"
            value='4'            
            onClick={this.GetHour} 
            >Last 4 hour
          </button>
        </Link>
      </div>

      <div>
        <Link to={`/treatments/${this.state.treatments2}/8`}>
          <button 
            className="buttonh"
            value='8'            
            onClick={this.GetHour} 
            >Last 8 hour
          </button>
        </Link>
      </div>

      <div>
        <Link to={`/treatments/${this.state.treatments2}/12`}>
          <button 
            className="buttonh"
            value='12'            
            onClick={this.GetHour} 
            >Last 12 hour
          </button>
        </Link>
      </div>

      <div>
        <Link to={{pathname:`/treatments/${this.state.treatments2}/24`, state: 'value'}}>
          <button 
            className="buttonh"
            value='24'            
            onClick={this.GetHour} 
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
