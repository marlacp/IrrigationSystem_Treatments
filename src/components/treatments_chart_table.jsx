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
};

componentDidMount() {
  this.fetchData();

}

fetchData = async () => {
  this.setState({loading: true, error: null})

  try{
      // const response = await fetch('http://localhost:8000/?Treatment='+this.state.treatments2);
      const response = await fetch('http://104.248.53.140:8080/sGet.php/?Treatment='+this.state.treatments2);
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
