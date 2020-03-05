/* eslint-disable default-case */
/* eslint-disable array-callback-return */
import React from 'react';
import '../assets/styles/TreatTable-style.css';
import { CSVLink, CSVDownload } from "react-csv";
class TreatmentTable extends React.Component{
    render(){
        var dataTab = {};
        dataTab = (this.props.data);
        var data = {};
        // console.log(dataTab)
        
        // var headers = [
        //     { label: "First Name", key: "firstname" },
        //     { label: "Last Name", key: "lastname" },
        //     { label: "Email", key: "email" }
        //   ];
           
          
        // var data = [
        //     { firstname: "Ahmed", lastname: "0.122", email: "ah@smthing.co.com" },
        //     { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
        //     { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }
        //   ]

        var headers = [
            { label: "Treatment", key: "Treatment" },
            { label: "Longitude", key: "Longitude" },
            { label: "Latitude", key: "Latitude" },
            { label: "SM Depth 1 (%)", key: "SM_Depth_1" },
            { label: "SM Depth 2 (%)", key: "SM_Depth_2" },
            { label: "Soil Temp (°C)", key: "Soil_Temp" },
            { label: "Env Temp (°C)", key: "Env_Temp" },
            { label: "RH (%)", key: "RH" },
            { label: "CO2 (PPM)", key: "CO2" },
            { label: "Canopy Temp (°C)", key: "Canopy_Temp" },
            { label: "CS Temp (°C)", key: "CS_Temp" },
            { label: "Irrig Pres Rate (mm)", key: "Irrig_Pres_Rate" },
            { label: "Irrig Pres Time (mm)", key: "Irrig_Pres_Time" },
            { label: "DateTime (YYYY-MM-DD hh:mm:ss)", key: "Date_Time" },
          ];

          if (dataTab.length>0){
            dataTab.map(
                function(item, i){
                 data = [
                    {Treatment: item["Treatment"], Longitude: item["Longitude"], Latitude: item["Latitude"],
                    SM_Depth_1: item["SM_Depth_1"],  SM_Depth_2: item["SM_Depth_2"], Soil_Temp: item["Soil_Temp"], Env_Temp: item["Env_Temp "],
                    RH: item["RH"], CO2: item["CO2"], Canopy_Temp: item["Canopy_Temp"], CS_Temp: item["CS_Temp"], 
                    Irrig_Pres_Rate: item["Irrig_Pres_Rate"], Irrig_Pres_Time: item["Irrig_Pres_Time"], Date_Time: item["Date_Time"]
                 }
            
     
                  ]
                }
            );
            }
           
    // if (dataTab.length>0){
    //     dataTab.map(
    //         function(item, i){
    //          data = [
    //             {Treatment: item["Treatment"], Longitude: item["Longitude"], Latitude: item["Latitude"],
    //             SM_Depth_1: item["SM_Depth_1"],  SM_Depth_2: item["SM_Depth_2"], Soil_Temp: item["Soil_Temp"], En_Temp: item["En_Temp"],
    //             RH: item["RH"], CO2: item["CO2"], Canopi_Temp: item["Canopi_Temp"], Cs_Temp: item["Cs_Temp"], 
    //             Irrigation_pres_rate: item["Irrigation_pres_rate"], Irrigation_pres_Tim: item["Irrigation_pres_Tim"], Date_Time: item["Date_Time"]
    //          }
        
 
    //           ]
    //         }
    //     );
    //     }
        console.log ('data', data);
        return(
           <React.Fragment>
                <div className='ContainerTable'>
                <h4 className='titulo'> Table of Treatment:</h4>
                <div className="scrollable tableFixHead">
                { dataTab.length >0 && (
                    // eslint-disable-next-line react/style-prop-object
                    // <table className="table table-bordered text-center" > 
                    <table id="dtHorizontalVerticalExample" className="table table-striped table-bordered table-sm scrroll table-fixed" cellspacing="0"
                    width="100%" > 
                    <thead>
                        <tr>
                    
                        <th scope="col">Treatment</th>
                        <th scope="col">Longitude</th>
                        <th scope="col">Latitude</th>
                        <th scope="col">SM Depth 1 (%)</th>
                        <th scope="col">SM Depth 2 (%)</th>
                        <th scope="col">Soil Temp (°C)</th>
                        <th scope="col">Env Temp (°C)</th>
                        <th scope="col">RH (%)</th>
                        {/* <th scope="col">CO2 (ppm)</th> */}
                        <th scope="col">Canopy Temp (°C)</th>
                        <th scope="col">CS Temp  (°C)</th>
                        <th scope="col">Irrig Pres Rate (mm)</th>
                        <th scope="col">Irrig Pres Time (mm) </th>
                        <th scope="col">DateTime (YYYY-MM-DD hh:mm:ss)</th>
                        </tr>
                    </thead>
                    <tbody>
                        { dataTab.map(function(item)
                        {
                        return(
                        <tr>
                        
                        <td>{item["Treatment"]}</td>
                        <td>{item["Longitude"]}</td>
                        <td>{item["Latitude"]}</td>
                        <td>{item["SM_Depth_1"]}</td>
                        <td>{item["SM_Depth_2"]}</td>
                        <td>{item["Soil_Temp"]}</td>
                        <td>{item["Env_Temp"]}</td>
                        <td>{item["RH"]}</td>
                        {/* <td>{item["CO2"]}</td> */}
                        <td>{item["Canopy_Temp"]}</td>
                        <td>{item["CS_Temp"]}</td>
                        <td>{item["Irrig_Pres_Rate"]}</td>
                        <td>{item["Irrig_Pres_Time"]}</td>
                        <td>{item["Date_Time"]}</td>

                        </tr>
                        )})

                        }

                    </tbody>
                    </table>
                    )}
                </div>
                {/* { data.length > 0 && (

                <CSVLink data={data} headers={headers} separator={";"}>
                Download me
                </CSVLink>
                )} */}
                </div>

           </React.Fragment> 
        );
    }
}

export default TreatmentTable;