import React from 'react';
import '../assets/styles/CheckboxChart-style.css'
// import PropTypes from 'prop-types';

class CheckboxChart extends React.Component{

constructor(props){
    super(props)
    this.state = {
        // Yaxis: new Map(),
        Yaxis: {
            'SM_Depth_1':false,
            'SM_Depth_2':false,
            'Soil_Temp':false,
            'Env_Temp':false,
            'RH':false,
            'CO2':false,
            'Canopy_Temp':false,
            'CS_Temp':false,
            'Irrig_Pres_Rate':false,
            'Irrig_Pres_Time':false,


        },
    }
    // this.GetYaxis = this.GetYaxis.bind(this);
}



GetYaxis = (e) => {
    // const value = e.target.value;
    // const isChecked = e.target.checked;
    // this.setState(prevState => ({ Yaxis: prevState.Yaxis.set(value, isChecked) }));


    let Yaxis = this.state.Yaxis;
    Yaxis[e.target.value] = e.target.checked;
    this.setState({
        Yaxis: {...Yaxis} ,
    });
}

handleSubmit = e => {
    e.preventDefault();
    };



render(){

    const {handleClickApply} = this.props;
    const { Yaxis } = this.state;

    return(
        <React.Fragment>
            <div onSubmit={this.handleSubmit} >

                <h5 className="titulo">Weather Data Usochicamocha</h5>

                <div className="containerCheck">


                <label
                value={this.state.value}
                onChange= {this.GetYaxis}
                >
                    <input type="checkbox" 
                    value="SM_Depth_1" /> 
                    <span className="label-text">SM Depth1</span>
                </label>
                <br />
                <label
                value={this.state.value}
                onChange= {this.GetYaxis}
                >
                    <input type="checkbox" value="SM_Depth_2" /> 
                    <span className="label-text">SM Depth2</span>
                </label>
                <br />
                <label
                value={this.state.value}
                onChange= {this.GetYaxis}
                >
                    <input type="checkbox" value="Soil_Temp" /> 
                    <span className="label-text">Soil Temp</span>
                </label>
                <br />
                <label
                value={this.state.value}
                onChange= {this.GetYaxis}
                >
                    <input type="checkbox" value="Env_Temp" /> 
                    <span className="label-text">Env Temp</span>
                </label>
                <br />
                <label
                value={this.state.value}
                onChange= {this.GetYaxis}
                >
                    <input type="checkbox" value="RH" /> 
                    <span className="label-text">RH</span>
                </label>

                {/* <br />
                <label
                value={this.state.value}
                onChange= {this.GetYaxis}
                >
                    <input type="checkbox" value="CO2" /> 
                    <span className="label-text">CO2</span>
                </label> */}

                <br />
                <label
                value={this.state.value}
                onChange= {this.GetYaxis}
                >
                    <input type="checkbox" value="Canopy_Temp" /> 
                    <span className="label-text">Canopy Temp</span>
                </label>
                <br />
                <label
                value={this.state.value}
                onChange= {this.GetYaxis}
                >
                    <input type="checkbox" value="CS_Temp" /> 
                    <span className="label-text">CS Temp</span>
                </label>
                <br />
                <label
                value={this.state.value}
                onChange= {this.GetYaxis}
                >
                    <input type="checkbox" value="Irrig_Pres_Rate" /> 
                    <span className="label-text">Irrig Pres Rate</span>
                </label>
                <br />
                <label
                value={this.state.value}
                onChange= {this.GetYaxis}
                >
                    <input type="checkbox" value="Irrig_Pres_Time" /> 
                    <span className="label-text">Irrig Pres Time</span>
                </label>
                <br />
                
                </div>

                <button 
                type="button" 
                className="btn btn-secondary btn-lg boton"
                onClick={() => handleClickApply(Yaxis)} 
                >
                     Apply
                </button>

            </div>

        </React.Fragment>
    );
}
}


export default CheckboxChart;