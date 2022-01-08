import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Collapse} from 'react-bootstrap'
import {useState} from 'react';
import {Form} from './Form';
import {Form1} from './Form1'
// import { Coin } from "./Coin";
import {Link,BrowserRouter as Router, Redirect} from 'react-router-dom'



export const Navbar1 = (props) => {

  const [opendetail , setOpenDetail] = useState(false)
  const [viewdetail , setViewDetail] = useState(false)



  return (<>
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color: 'white'}}>₿ Code Conquerors</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Router>
          <Link to = "/" className="nav-link active" aria-current="page" href="#">Home</Link></Router>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
       
      </ul>
     
  </div>
  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <Button className="btn btn-bd-Login d-lg-inline-block my-2 my-md-3 ms-md-9" type="button"  style = {{}} onClick={()=>{setOpenDetail(!opendetail);
         viewdetail?setViewDetail(false):console.log("jai shree Krishna")}} >Login</Button>
      <div className = "form">
    </div>
    <Button className="btn btn-bd-Signin d-lg-inline-block my-2 my-md-3 ms-md-9" type="button" style =  {{}} onClick={()=>{setViewDetail(!viewdetail);
                opendetail?setOpenDetail(false):console.log("Hare Krishna")}} >Sign In</Button>
      <div className = "form1">    
    </div>

    </div>
      </div>
</nav>

    
   <Collapse in={opendetail} >
                                      <div id="example-collapse-text" style = {{                               
                                          borderRadius:'3px',
                                          backgroundColor:'rgb(168,168,168)',
                                          padding:'10px',
                                          // justifyContent:'center',
                                      }}>
                                         {/* <h5 style = {{display:'flex',margin:'10px 20px'}}>Details : </h5> <br /> */}
                                          
                                          
                                        <Form1 list = {props.list}/>
                                      </div>
                                  </Collapse>
  <Collapse in={viewdetail} >
                                      <div id="example-collapse-text" style = {{                               
                                          borderRadius:'3px',
                                          backgroundColor:'rgb(168,168,168)',
                                          padding:'10px',
                                          // justifyContent:'center',
                                      }}>
                                         {/* <h5 style = {{display:'flex',margin:'10px 20px'}}>Details : </h5> <br /> */}
                                          
                                          
                                        <Form list = {props.list}/>
                                      </div>
  </Collapse>

    
    </div>        
    {/* <div className="coin"><Coin list = {props.list}/></div> */}
                                      
                                       
                                </>
  )
                                    }

