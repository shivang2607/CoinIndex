import React from 'react'
import { useEffect, useState } from 'react';

export const Details = ({id}) => {

    
    const [details, setDetails] = useState([]);

    useEffect(() => {

        const fetchData = async () => {

            await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
                .then( (res) =>  res.json())
                .then((data) => { 
                    // console.log(data);
                    setDetails(data[0]);
                    
                }
                )
        }
        fetchData();

    }, [id])

    let listyle = {
        margin:'13px 30px',
        color:'rgb(15, 138, 15)',
        fontWeight:'bolder',
        // fontStyle:'italic'
        
     }
 

    return (
        <div className="list" style = {{height:'40vh',overflow:'scroll'}}>
                                    <ul style = {{listStyleType:'none', justifyContent:'left', }}>
                                   {details && Object.entries(details).map(([key, value]) => {
                                       if (key==='image' || key ==='id' || key === 'symbol' || key === 'name' || key==='roi') {
                                           return <li key={`${key}`} ></li>
                                       }
                                   else return <li key={`${key}`} style = {listyle}><b style={{color:'blue'}}>{key} : </b> {value}</li>
})}
                                  
                   
                               </ul></div>
    )
}
