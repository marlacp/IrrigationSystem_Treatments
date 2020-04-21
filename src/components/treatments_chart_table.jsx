/* eslint-disable no-undef */
import React from 'react';
import TreatmentTable from './treatments_table';
import TreatmentChart from './treatments_chart';
import CheckboxChart from './CheckboxChart';
import '../assets/styles/TreatmentCT-style.css';
import { Link } from 'react-router-dom';
import PageLoading from './PageLoading';
// import PageError from './PageError';

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
// este componente actualiza cuando hay un cambio del Link(se agrega las horas),
// limpia la data, las demas variables, el estado de las horas se actualiza  y hace el llamado del fetchdata para traer de nuevo
// el json del backend
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

      // const response = await fetch('http://localhost:8000/?Treatment='+this.state.treatments2+ "&hour="+this.state.hour);
    //console.log('link',response);
      const response = await fetch('http://104.248.53.140:8080/sGetV3.php/?Treatment='+this.state.treatments2+ "&hour="+this.state.hour);
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
  if (this.state.loading === true) {
    return <PageLoading />;
  }

  // if (this.state.error) {
  //   return <PageError error={this.state.error} />;
  // }
  console.log('datossnjsjnjs: ',this.state.data)
  return (
    <React.Fragment>
      <div className="card opacity bg-light">
          <div className="d-flex flex-row">
          <div className="p-2"><Link to="/treatments">Treatments</Link></div>
              <div className="p-2 treat">/ Treatment: {this.state.treatments2}</div>
          </div>
      </div>
      {/* seccion botones para escoger datos por horas */}
      <div className="containerSectionButtons">
        <h4 className='titulo'>See data in: </h4>
      <br/>
      <div className='containerButtons'>
      
        <div>
          <Link to={`/treatments/${this.state.treatments2}/1`}>
            <button className="buttonh">
              Last hour
            </button>
          </Link>
        </div>

        <div>
          <Link to={`/treatments/${this.state.treatments2}/4`}>
            <button className="buttonh">
              Last 4 hours
            </button>
          </Link>
        </div>

        <div>
          <Link to={`/treatments/${this.state.treatments2}/8`}>
          <button className="buttonh">
                Last 8 hours
            </button>
          </Link>
        </div>

        <div>
          <Link to={`/treatments/${this.state.treatments2}/12`}>
          <button className="buttonh">
              Last 12 hours
          </button>
          </Link>
        </div>

        <div>
          <Link to={`/treatments/${this.state.treatments2}/24`}>
          <button className="buttonh">
            Last 24 hours
          </button>
          </Link>
        </div>

        <div>
          <Link to={`/treatments/${this.state.treatments2}/72`}>
          <button className="buttonh">
              Last 3 days
            </button>
          </Link>
        </div>

        <div>
          <Link to={`/treatments/${this.state.treatments2}/168`}>
          <button className="buttonh">
              1 week
            </button>
          </Link>
        </div>

        <div>
          <Link to={`/treatments/${this.state.treatments2}/336`}>
          <button className="buttonh">
              2 week
            </button>
          </Link>
        </div>
        <div>
          <Link to={`/treatments/${this.state.treatments2}/672`}>
          <button className="buttonh">
              1 Month
            </button>
          </Link>
        </div>

        <div>
          <Link to={`/treatments/${this.state.treatments2}/2016`}>
          <button className="buttonh">
              3 Months
            </button>
          </Link>
        </div>

        <div>
          <Link to={`/treatments/${this.state.treatments2}/4032`}>
          <button className="buttonh">
              6 Months
            </button>
          </Link>
        </div>

        <div>
          <Link to={`/treatments/${this.state.treatments2}/8064`}>
          <button className="buttonh">
              1 Year
            </button>
          </Link>
        </div>
      </div>  

      </div>
      <br/>
      { this.state.data === null && (

          <div className='Nodatos'>Sorry, no data in last {this.state.hour} hours</div>

      )}
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
