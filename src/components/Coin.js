import React from 'react'
import { Crypto } from './crypto'
import { useState } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar1 } from "./Navbar";
import Footer from "./Footer.js";

import { InputGroup, Input, Button } from 'reactstrap';

export const Coin = ({ list }) => {

    const [coinid, setCoinId] = useState("bitcoin");
    const [fcoinid, setFcoinId] = useState("bitcoin");
    const [days, setDays] = useState(5);
    const [fdays, setFdays] = useState(5);
    const [checked, setChecked] = useState(false);
    const [warning, setWarning] = useState(false);


    const show = () => {
        setChecked(true);
        setFcoinId(coinid);
        if (days <= 0 || days === '') {
            setDays(5);
            setFdays(5);
            setWarning(true);
        }
        else {
            setFdays(days);
            setWarning(false);
        }
    }

    const labelstyle = {
        margin: '2px 3px',
        fontSize: '17px',
        color: 'black',
        fontWeight:'bold',
       
    }

    const coins = [];
    for (let key in list) {
        let obj = {};
        obj["value"] = `${list[key]['id']}`;
        obj["label"] = `${list[key]['name']}`;
        coins.push(obj);
    }

    return (
        <>

        {/* <Navbar1 list={list}/> */}

        <div className="ultimate" style={{ display: 'flex', backgroundColor: 'rgb(163, 163, 163)', color: 'black', }}>
            <div className="container" style={{ display: 'block', width: '30vw', height: '50vh', margin: '10px', padding: '42px',backgroundColor:'rgb(163, 163, 163)' }}>


                
                <label htmlFor="coin" style={labelstyle} >Select Coin</label>
                <Select className="select" options={coins} placeholder={<div>Bitcoin</div>} onChange={e => { setCoinId(e.value); setChecked(false) }} />



            <InputGroup style={{ alignItems: 'center', justifyContent: 'center', margin: '30px 5px 10px' }}>
                    <label htmlFor="coin" style={labelstyle} >Days </label><br />


                    <Input id="days" placeholder="5 days by default " type="number" step="1" onChange={e => {
                        setDays(e.target.value);
                        setChecked(false)
                    }} />
                    {/* {console.log(days)} */}





                </InputGroup>

                {warning ? <label htmlFor="warning" style={{
                    margin: '2px 3px',
                    fontSize: '12px',
                    color: 'red',
                    fontWeight: 'bold'
                }} >Warning: no. of days will be taken as 5 for invalid value of Days </label> : <></>}




                <Button color='dark'  style={{ margin: '15px 30px' }} onClick={e => { show() }}>Show</Button>

            </div>


            {checked === true ? <Crypto list={list} id={coinid} days={days} /> : <Crypto list={list} id={fcoinid} days={fdays} />}
            </div>
            
        </>
    )
}
