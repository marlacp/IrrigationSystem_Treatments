/* eslint-disable default-case */
/* eslint-disable array-callback-return */
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import '../assets/styles/TreatChart-style.css';

class TreatmentChart extends React.Component{

    render(){


        // Highcharts.theme = {
        //     colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572',   
        //              '#FF9655', '#FFF263', '#6AF9C4'],
        //     chart: {
        //         backgroundColor: {
        //             linearGradient: [0, 0, 500, 500],
        //             stops: [
        //                 [0, 'rgb(255, 255, 255)'],
        //                 [1, 'rgb(240, 240, 255)']
        //             ]
        //         },
        //     },
        //     title: {
        //         style: {
        //             color: '#000',
        //             font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
        //         }
        //     },
        //     subtitle: {
        //         style: {
        //             color: '#666666',
        //             font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
        //         }
        //     },
        //     legend: {
        //         itemStyle: {
        //             font: '9pt Trebuchet MS, Verdana, sans-serif',
        //             color: 'black'
        //         },
        //         itemHoverStyle:{
        //             color: 'gray'
        //         }   
        //     }
        // };
        // // Apply the theme
        // Highcharts.setOptions(Highcharts.theme);
        
        
        var datadic = {};
        datadic = (this.props.data);
    
        var Yaxis2 = (this.props.Yaxis);
        var DateTime = [];
    
        if (Yaxis2 === null){
            return null;
        }
    
// Validacion variables boleanas eje Y 
    
        var SM_Depth_1 = [];
        var SM_Depth_2 = [];
        var Soil_Temp = [];
        var Env_Temp = [];
        var RH = [];
        // var CO2 = [];
        var Canopy_Temp  = [];
        var CS_Temp = [];
        var Irrig_Pres_Rate = [];
        var Irrig_Pres_Time = [];

    
    /****************************************************************************************************** */
    // condición que recibe la variable del checkbox y crear el array para la grafica
        if (datadic.length>0)
        {
            // variable eje X (Date_Time)
            datadic.map(
                function(item, i){
                    DateTime = DateTime.concat(item["Date_Time"]);
                }
            );
            
    
    
            // Variable SM_Depth_1
            if(Yaxis2['SM_Depth_1'] === true){
                datadic.map(
                    function(item, i){
                        SM_Depth_1 = SM_Depth_1.concat(item["SM_Depth_1"]);
                    }
                );
                
                for ( var c = 0; c < SM_Depth_1.length; c++ ){
                    SM_Depth_1[c] = parseFloat(SM_Depth_1[c]);
                }
            }
            // Variable RH
            if(Yaxis2['RH'] === true){
                datadic.map(
                    function(item, i){
                        RH = RH.concat(item["RH"]);
                    }
                );
                
                for ( var d = 0; d < RH.length; d++ ){
                    RH[d] = parseFloat(RH[d]);
                }
            }
            // variable SM_Depth_2
    
            if(Yaxis2['SM_Depth_2'] === true){
                datadic.map(
                    function(item, i){
                        SM_Depth_2 = SM_Depth_2.concat(item["SM_Depth_2"]);
                    }
                );
                
                for ( var e = 0; e < SM_Depth_2.length; e++ ){
                    SM_Depth_2[e] = parseFloat(SM_Depth_2[e]);
                }
            }
            // variable Soil_Temp
            if(Yaxis2['Soil_Temp'] === true){
                datadic.map(
                    function(item, i){
                        Soil_Temp = Soil_Temp.concat(item["Soil_Temp"]);
                    }
                );
                
                for ( var f = 0; f < Soil_Temp.length; f++ ){
                    Soil_Temp[f] = parseFloat(Soil_Temp[f]);
                }
            }
            // variable Env_Temp 
            if(Yaxis2['Env_Temp'] === true){
                datadic.map(
                    function(item, i){
                        Env_Temp = Env_Temp.concat(item["Env_Temp"]);
                    }
                );
                
                for ( var g = 0; g < Env_Temp.length; g++ ){
                    Env_Temp[g] = parseFloat(Env_Temp[g]);
                }
            }
            // variable CO2
            // if(Yaxis2['CO2'] === true){
            //     datadic.map(
            //         function(item, i){
            //             CO2 = CO2.concat(item["CO2"]);
            //         }
            //     );
                
            //     for ( var h = 0; h < CO2.length; h++ ){
            //         CO2[h] = parseFloat(CO2[h]);
            //     }
            // }
            // variable Canopy_Temp
            if(Yaxis2['Canopy_Temp'] === true){
                datadic.map(
                    function(item, i){
                        Canopy_Temp = Canopy_Temp.concat(item["Canopy_Temp"]);
                    }
                );
                
                for ( var j = 0; j < Canopy_Temp.length; j++ ){
                    Canopy_Temp[j] = parseFloat(Canopy_Temp[j]);
                }
            }
            // variable CS_Temp
            if(Yaxis2['CS_Temp'] === true){
                datadic.map(
                    function(item, i){
                        CS_Temp = CS_Temp.concat(item["CS_Temp"]);
                    }
                );
                
                for ( var k = 0; k < CS_Temp.length; k++ ){
                    CS_Temp[k] = parseFloat(CS_Temp[k]);
                }
            }
            // variable Irrig_Pres_Rate
            if(Yaxis2['Irrig_Pres_Rate'] === true){
                datadic.map(
                    function(item, i){
                        Irrig_Pres_Rate = Irrig_Pres_Rate.concat(item["Irrig_Pres_Rate"]);
                    }
                );
                
                for ( var l = 0; l < Irrig_Pres_Rate.length; l++ ){
                    Irrig_Pres_Rate[l] = parseFloat(Irrig_Pres_Rate[l]);
                }
            }
            // variable Irrig_Pres_Time
            if(Yaxis2['Irrig_Pres_Time'] === true){
                datadic.map(
                    function(item, i){
                        Irrig_Pres_Time = Irrig_Pres_Time.concat(item["Irrig_Pres_Time"]);
                    }
                );
                
                for ( var m = 0; m < Irrig_Pres_Time.length; m++ ){
                    Irrig_Pres_Time[m] = parseFloat(Irrig_Pres_Time[m]);
                }
            }


    
      }

    /************************************************************************************ */
    /******Condiciones para la grafica ***** */

        const options = {
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: '',
                align: 'left'
            },
    
            xAxis: {
    
                categories: DateTime
            },
            yAxis: [{ 
                // Primary yAxis 0 
                labels: {
                    format: '{value}',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                title: {
                    text: 'Temperature (°C)',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                opposite: true
        
            }, 
            { // 1 yAxis
                gridLineWidth: 0,
                title: {
                    text: 'Irrigation Press (mm)',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: '{value}',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                }
        
            },  { // 2 yAxis
                gridLineWidth: 0,
                title: {
                    text: 'SM Depth (%)',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: '{value}',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                }
        
            },
            { 
                // 3  yAxis
                gridLineWidth: 0,
                title: {
                    text: 'RH (%)',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                labels: {
                    format: '{value}',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                  
                },
                opposite: true
            }, 
            
            // { 
            //     // 4 yAxis
            //     gridLineWidth: 0,
            //     title: {
            //         text: 'CO2 (PPM)',
            //         style: {
            //             color: Highcharts.getOptions().colors[1]
            //         }
            //     },
            //     labels: {
            //         format: '{value}',
            //         style: {
            //             color: Highcharts.getOptions().colors[1]
            //         }
            //     },
            //     opposite: true
            // }, 
        
        ],
            tooltip: {
                shared: true
            },
    
            legend: {
                layout: 'horizontal',
                align: 'left',
                x: 0,
                verticalAlign: 'bottom',
                y: 0,
                floating: false,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || // theme
                    'rgba(255,255,255,0.25)'
            },
     
            series: [{
                name: 'Irrig Pres Rate',
                type: 'column',
                yAxis: 1,
                data: Irrig_Pres_Rate,
                tooltip: {
                    valueSuffix: ' mm'
                }
        
            },{
                name: 'Irrig Pres Time',
                type: 'column',
                yAxis: 1,
                data: Irrig_Pres_Time,
                tooltip: {
                    valueSuffix: ' mm'
                }
        
            },
          
            {
                name: 'RH',
                type: 'spline',
                yAxis: 3,
        
                data: RH,
                marker: {
                    enabled: false
                },
                dashStyle: 'shortdot',
                tooltip: {
                    valueSuffix: ' %'
                }
        
            },
            {
                name: 'Soil Temp',
                type: 'spline',
                yAxis: 0,
        
                data: Soil_Temp,
                marker: {
                    enabled: false
                },
                dashStyle: 'shortdot',
                tooltip: {
                    valueSuffix: ' °C'
                }
        
            },
            {
                name: 'Env Temp ',
                type: 'spline',
                yAxis: 0,
        
                data: Env_Temp,
                marker: {
                    enabled: false
                },
                dashStyle: 'shortdot',
                tooltip: {
                    valueSuffix: ' °C'
                }
        
            },
            {
                name: 'Canopy_Temp',
                type: 'spline',
                yAxis: 0,
        
                data: Canopy_Temp,
                marker: {
                    enabled: false
                },
                dashStyle: 'shortdot',
                tooltip: {
                    valueSuffix: ' °C'
                }
        
            }, {
                name: 'CS Temp',
                type: 'spline',
                yAxis: 0,
        
                data: CS_Temp,
                marker: {
                    enabled: false
                }
                ,
                // dashStyle: 'shortdot',
                tooltip: {
                    valueSuffix: ' °C'
                }
        
            }, 
            // {
            //     name: 'CO2',
            //     type: 'spline',
            //     yAxis: 4,
        
            //     data: CO2,
            //     marker: {
            //         enabled: false
            //     }
            //     ,
            //     // dashStyle: 'shortdot',
            //     tooltip: {
            //         valueSuffix: ' PPM'
            //     }
        
            // }, 
            
            {
                name: 'SM Depth 1 ',
                type: 'spline',
                yAxis: 2,
        
                data: SM_Depth_1 ,
                marker: {
                    enabled: false
                },
                dashStyle: 'shortdot',
                tooltip: {
                    valueSuffix: ' %'
                }
        
            },
            {
                name: 'SM Depth 2',
                type: 'spline',
                yAxis: 2,
        
                data: SM_Depth_2,
                marker: {
                    enabled: false
                },
                dashStyle: 'shortdot',
                tooltip: {
                    valueSuffix: ' %'
                }
        
            },        
        ],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            floating: false,
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom',
                            x: 0,
                            y: 0
                        },
                        yAxis: [{
                            labels: {
                                align: 'right',
                                x: 0,
                                y: -6
                            },
                            showLastLabel: false
                        }, {
                            labels: {
                                align: 'left',
                                x: 0,
                                y: -6
                            },
                            showLastLabel: false
                        }, {
                            visible: false
                        }]
                    }
                }]
            }
        
          };
    
        
      
          
    
        return(
            <React.Fragment>
    
                <HighchartsReact highcharts={Highcharts} options={options} />                
    
            </React.Fragment>
        );
    }
    }

export default TreatmentChart;