import './App.css';
import React from 'react';
import { useState, useEffect } from 'react'
// import { LineChart } from './components/LineChart';
import { Coin } from './components/Coin'
import { Navbar1 } from "./components/Navbar";
import Footer from "./components/Footer.js";
import { CoinList } from './components/CoinList';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";






const App = () => {

  const [list, setList] = useState([])

  useEffect(() => {

    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("skhjvnx",data);
        setList(data);
      }
      )

    setInterval(() => {
      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc`)
        .then((res) => res.json())
        .then((data) => {
          // console.log("skhjvnx",data);
          setList(data);
        }
        )

    }, 15000)

  }, [])


  return (

    <>
      <div>
      <Navbar1 list={list} />

        <Router>
          <Switch>
            <Route exact path="/">
              
             
              
             
              
            </Route>
            <div className="ultimate" style={{ display: 'flex', backgroundColor: 'rgb(163, 163, 163)', color: 'black', }}>
         <Route exact path="/crypto-detail">
         <Coin list = {list}/>
           </Route>
           </div>
          </Switch>
        </Router>
        <CoinList coinlist={list} />
        <Footer style />
        {/* <Navbar1 list = {list}/> */}
        <div className="ultimate" style={{ display: 'flex', backgroundColor: 'rgb(163, 163, 163)', color: 'black', }}>
          {/* <Coin list = {list}/> */}

          {/* <LineChart/> */}
        </div>
        <div className='coinlist' style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'rgb(163, 163, 163)' }}>
          {/* <CoinList coinlist={list}/> */}
        </div>
        {/* <Footer/> */}
      </div>
    </>
  )
}

export default App

