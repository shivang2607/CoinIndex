import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from 'react-bootstrap'
import {useState} from 'react'
import './CSS/todo.css'
import {BrowserRouter as Router,Route,  Link} from "react-router-dom"
import {Coin} from './Coin'


export const Form = (props) => {


const [name, setName] = useState("")
const [username, setUserName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [visible, setVisible] = useState(false);
const [check, setCheck] = useState(false)
const [display, setDisplay] = useState(true)




    return (
        <>
       
        {display?<div style = {{justifyContent:'center'}}>
             
             <div style = {{ justifyContent:'center', width:'70vw', alignItems:'center'}}>
 
                 <form >
                     <h2>User Registration</h2>
                     <label style={{marginRight:'30px'}}>Name :</label> <input type="text" value={name} onChange={e=>{setName(e.target.value)}} placeholder="FirstName..." /><br />
                     <label>username :</label> <input type="text" value={username} onChange={e=>{setUserName(e.target.value)}} placeholder="username..." /><br />
                     <label style = {{marginRight:'35px'}}>email :  </label> <input type="email" value={email} onChange={e=>{setEmail(e.target.value)}} placeholder="email..." /><br />
                     <label>Password :</label> <input type="password" value={password} onChange={e=>{setPassword(e.target.value)}} placeholder="Password..." /><br />
                     
                     <Button onClick={()=>{if(!name || !username || !email || !password){alert("Please Fill All the Values")}else {alert(`${name}, ${username}  Registered Successfully !!!!`);setVisible(true);}}} variant = "dark" outline   style = {{margin:'10px 6rem 10px 5rem'}}>Submit</Button>
                     {visible?<><Button variant = "dark" outline onClick={()=>{setCheck(true);setDisplay(false)}}>Crypto Details</Button></>:<></>}
                 </form>
 
             </div>
             
         
         </div>:<><Coin list = {props.list}/></>}
        
        
        </>
    )
}



// class Form extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             Name: "",
//             username: "",
//             email: "",
//             password: "",


//         }
//         this.handleSubmit=this.handleSubmit.bind(this)
//     }

//     firsthandler = (e) => {
//         this.setState({
//             Name: e.target.value
//         })
//     }
//     userhandler = (e) => {
//         this.setState({
//             username: e.target.value
//         })
//     }
//     emailhandler = (e) => {
//         this.setState({
//             email: e.target.value
//         })
//     }

//     passwordhandler = (e) => {
//         this.setState({
//             password: e.target.value
//         })
//     }
    
//     handleSubmit = (e) => {
//         e.preDefault()
//         alert(`${this.state.Name} ${this.state.username}  Registered Successfully !!!!`)
//         console.log(this.state);
//         this.setState({
//             Name: "",
//             username: "",
//             email: "",
//             password: '',
            
//         })
        
//     }
    



// export default Form
