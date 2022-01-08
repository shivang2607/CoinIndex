import React from 'react'
import {Line} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import zoomPlugin from 'chartjs-plugin-zoom'

ChartJS.register(
  zoomPlugin,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
ChartJS.defaults.font.size = 14;

let style = {
    height:'55vh',
    width:'55vw'
}

export const LineChart = (props) => {
    
    
    return (
        <div style = {style}>
            
            <Line
            data = {{
                labels:props.x,
                datasets:[{
                    label:"Price",
                    
                    data: props.y, 
                    backgroundColor: 
                        
                        'orange'
                    ,
                    borderColor: 
                        'blue'
                        
                    ,
                    tension:0,
                    borderWidth:2,
                    fill:true,
                },],
            }}
            height = {200}
            width = {400}
            
            options={{
                showTooltips: false,
                datasetFill: true,
                
                maintainAspectRatio:false,
                
                plugins: {
                zoom: {
                    pan:{
                        enabled:true,
                        mode:'x',

                    },
                    zoom:{
                        pinch:{
                            enabled:true
                        },
                        wheel:{
                            enabled:true
                        },
                        drag:{
                            enabled:true,
                            borderWidth:0.6,
                            borderColor:"blue"
                        },
                        mode: 'x',

                    }
                  },

                },
                elements: {
                    point:{
                        radius: 1.2
                    }
                }
            }}
            
            />
        </div>
    )
}
