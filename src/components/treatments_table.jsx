
/* eslint-disable array-callback-return */
import React from 'react';
import '../assets/styles/TreatTable-style.css';
// libreria para descargar en archivo csv
import { CSVLink } from "react-csv";
class TreatmentTable extends React.Component{
    render(){
        var dataTab = {};
        console.log('dataTab', dataTab.length);
        console.log('dataTab2', this.props.data);
        
        dataTab = (this.props.data);

        var control;

        if (dataTab === null){
            control = 1;
        }


        if (dataTab === null){
            return null;
        }
// Creacion de las columnas del archivo cssv
        var headers = [

            { label: "user", key: "user" },
            { label: "Treatment", key: "Treatment" },
            { label: "Longitude", key: "Longitude" },
            { label: "Latitude", key: "Latitude" },
            { label: "SM 1 (%)", key: "SM_1" },
            { label: "SM 2(kPa)", key: "SM_2" },
            { label: "SM 3(%)", key: "SM_3" },
            { label: "Env Temp (°C)", key: "Env_Temp" },
            { label: "RH (%)", key: "RH" },
            // { label: "CO2 (PPM)", key: "CO2" },
            { label: "Canopy Temp (°C)", key: "Canopy_Temp" },
            { label: "CS Temp (°C)", key: "CS_Temp" },
            { label: "Irrig Pres Rate (mm)", key: "Irrig_Pres_Rate" },
            { label: "Irrig Pres Time (mm)", key: "Irrig_Pres_Time" },
            { label: "DateTime (YYYY-MM-DD hh:mm:ss)", key: "Date_Time" },
          ];



        return(
           <React.Fragment>
                <div className='ContainerTable'>
                <h4 className='titulo'> Treatment {this.props.treat} Data:</h4>
                <div className="scrollable tableFixHead">
                
                {/* condicion cuando no hay datos */}
                {/* { control === 1 && (

                    <div className='Nodatos'>There is no data</div>

                )} */}
                { dataTab.length >0 && (

                    // eslint-disable-next-line react/style-prop-object
                    // <table className="table table-bordered text-center" > 
                    //Tabla de información de todos los datos
                    <table id="dtHorizontalVerticalExample" className="table table-striped table-bordered table-sm scrroll table-fixed" 
                    width="100%" > 
                    <thead>
                        <tr>
                    
                        <th scope="col">Treatment</th>
                        <th scope="col">DateTime (YYYY-MM-DD hh:mm:ss)</th>
                        <th scope="col">Longitude</th>
                        <th scope="col">Latitude</th>
                        <th scope="col">SM 1(%)</th>
                        <th scope="col">SM 2 (kPa)</th>
                        <th scope="col">SM 3 (%)</th>
                        <th scope="col">Env Temp (°C)</th>
                        <th scope="col">RH (%)</th>
                        {/* <th scope="col">CO2 (ppm)</th> */}
                        <th scope="col">Canopy Temp (°C)</th>
                        <th scope="col">CS Temp  (°C)</th>
                        <th scope="col">Irrig Pres Rate (mm)</th>
                        <th scope="col">Irrig Pres Time (mm) </th>
                        </tr>
                    </thead>
                    <tbody>
                        { dataTab.map(function(item)
                        {
                        return(
                        <tr>
                        
                        <td>{item["Treatment"]}</td>
                        <td>{item["Date_Time"]}</td>
                        <td>{item["Longitude"]}</td>
                        <td>{item["Latitude"]}</td>
                        <td>{item["SM_1"]}</td>
                        <td>{item["SM_2"]}</td>
                        <td>{item["SM_3"]}</td>
                        <td>{item["Env_Temp"]}</td>
                        <td>{item["RH"]}</td>
                        {/* <td>{item["CO2"]}</td> */}
                        <td>{item["Canopy_Temp"]}</td>
                        <td>{item["CS_Temp"]}</td>
                        <td>{item["Irrig_Pres_Rate"]}</td>
                        <td>{item["Irrig_Pres_Time"]}</td>

                        </tr>
                        )}
                        

                        
                        )

                        }

                    </tbody>
                    </table>
                    )}

                </div>
            {/* condición para lectura y asignación del diccionario para el archivo cssv */}
             { dataTab.length > 0 && (

            <CSVLink data={dataTab} headers={headers} separator={";"}>
                <button className='buttondown'>
                    Download Data
                </button>
            </CSVLink>

                )}
                </div>

           </React.Fragment> 
        );
    }
}

export default TreatmentTable;