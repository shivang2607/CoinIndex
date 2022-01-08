import React from 'react'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Fetch from 'isomorphic-fetch';
import { Card, CardBody, CardText, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Details } from './details';
import { Collapse } from 'react-bootstrap'
import { LineChart } from './LineChart';



export const Crypto = ({list, id, days}) => {


    const [open, setOpen] = useState(false);
    const [opendetails, setOpenDetails] = useState(false);
    const [item1, setItem1] = useState([]);
    const [price, setPrice] = useState();
    const [volume, setVolume] = useState();
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    // const [detaillist, setDetailList] = useState([])

    const y_values = [];
    const x_values = [];
 
    useEffect(() => {

        Fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=${days}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setItem1(data);
                // console.log(x_values, y_values);
            }
            )

    }, [id,days])

    useEffect(() => {

        const fetchData = async () => {

            await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
                .then( (res) =>  res.json())
                .then((data) => {
                    // console.log(data);
                    setPrice(data[0]['current_price'])
                    setVolume(data[0]['total_volume'])
                    setImage(data[0]['image'])
                    setName(data[0]['name'])
                    // setDetailList(data);
                }
                )
        }
        fetchData();

    }, [id])


    



      const coins = [];
      for(let key in list){
        let obj = {};
        obj["value"] = `${list[key]['id']}`;
        obj["label"] = `${list[key]['name']}`;
        coins.push(obj);
      }
// console.log("list of coins", coins);
    



    for (let key in item1['prices']) {

        let dateObject = new Date(item1['prices'][key][0])
        x_values.push(dateObject.toDateString("en-US"));
        y_values.push(item1['prices'][key][1])
    }
    // console.log(list);

    const mainstyle = {
        display:'flex',
        justifyContent:'center',
        backgroundColor:'rgb(163, 163, 163)',

    }
    

    const card_style = {
        margin:'5px 5px',
       
        // width:'65vw',
        display:'flex',
        border:'none',
        justifyContent:'center',
        justifyItems:'center',
        backgroundColor:'rgb(163, 163, 163)'
        
        
    } 
    const listyle = {
       margin:'3px 30px'
       
    }

    return (

        <>
                   
                    {/* <div className="container" style = {{display:'block',width:'30vw',height:'50vh', margin:'10px',padding:'42px'}}><Select className="select" options = {coins} placeholder={<div>Enter Coin Name</div>}  onChange={e => setCoinId(e.value)}/>
                    <Button color='dark' outline style={{margin:'30px'}} onClick={}>Add Coin</Button>
                    
                    </div> */}





                   
                    <div className="main" style = {mainstyle}>    
                            
                        <div className = 'card' style = {card_style}>
                        <Card
                            
                            style = {{margin:'10px',
                            marginLeft:'20px',
                                      padding:'10px',
                                      width:'60vw',
                                      justifyItems:'center',
                                      border:'2px solid black',
                                      backgroundColor:'rgb(163, 163, 163)',
                                      justifyContent:'center',
                                      fontWeight:'bold'
                                      
                                      
                        }}
                        >
                            <CardBody>
                                <CardTitle tag="h3" style = {{
                                    margin:'5px'
                                }}>
                                    {name}
                                    <img src={image} alt='' style={{height:'50px', margin:'2px 20px'}}/>
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2"
                                    tag="h6"
                                >
                                   
                                    <div className="cardtext" >
                                   <h5> <ul style = {{display:'flex', listStyleType:'none', justifyContent:'left'}}>
                                           
                        <li style = {listyle}>Current Price : Rs. {price}</li>
                        <li style = {listyle}>Total Volume : {volume}</li>
                        {/* <li>Market Cap : {marketCap}</li> */}
        
                    </ul></h5>
                                
                                    </div>
                                    <div className="details">
                                    <Collapse in={opendetails}>
                                    <div id="example-collapse-text" style = {{                               
                                        borderRadius:'3px',
                                        backgroundColor:'whitesmoke',
                                        padding:'10px'
                                    }}>
                                       <h5 style = {{display:'flex',margin:'10px 20px'}}>Details : </h5> <br />
                                        
                                        
                                        <Details id = {id} /> 
                                    </div>
                                </Collapse>
                                    </div>
                                </CardSubtitle>
                                <CardText>
                                    
                                </CardText>
                                <Button id='timeseries'
                                    style = {{
                                        margin:'25px',
                                    }}
                                    color="dark"
                                    
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setOpen(!open);
                                        open?document.getElementById("timeseries").innerText = "Open Timeseries":document.getElementById("timeseries").innerText= "Close Timeseries";
                                    }}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}>
                                    Open Timeseries
                                </Button>
                                <Button id='details'
                                    style = {{
                                        margin:'25px',
                                    }}
                                    color="dark"
                                    
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setOpenDetails(!opendetails);
                                        opendetails?document.getElementById("details").innerText = "Show Details":document.getElementById("details").innerText= "Close ";
                                    }}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={opendetails}>
                                    Show Details
                                </Button>
                                <Collapse in={open}>
                                    <div id="example-collapse-text" style = {{
                                       
                                        borderRadius:'3px',
                                        backgroundColor:'whitesmoke'
                                    }}>
                                        <LineChart x={x_values} y={y_values} />
                                    </div>
                                </Collapse>
                                
                                
                                
                            </CardBody>
                        </Card>
                    </div>
        
        
                    </div>
                    
                    
        </>

    )
}