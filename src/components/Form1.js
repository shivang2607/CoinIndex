import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react'
import {Button} from 'react-bootstrap'
import './CSS/todo.css'
import {Coin} from './Coin'


export const Form1 = (props) => {

const [username, setUserName] = useState("")
const [password, setPassword] = useState("")
const [display, setDisplay] = useState(true)
const [visible, setVisible] = useState(false);

const handleSubmit = (e) => {
            e.preventDefault();
            if( !username || !password)
            alert("Please Fill All the Values")
            else{

                alert(`${username}  Login Successfully !!!!`);
                setVisible(true);
            }
            // console.log(this.state);
            // this.setState({
            //     Name: "",
            //     username: "",
            //     email: "",
            //     password: '',
                
            // })
            
        }


    return (
        <>
        {display? <div style = {{justifyContent:'center'}}>
             
             <div style = {{ justifyContent:'center', width:'70vw', alignItems:'center'}}>
 
                 <form onSubmit={e=>{handleSubmit(e)}} >
                     <h2>Login</h2>
                     <label>username :</label> <input type="text" value={username} onChange={e=>{setUserName(e.target.value)}} placeholder="username..." /><br />
                     <label>Password :</label> <input type="password" value={password} onChange={e=>{setPassword(e.target.value)}} placeholder="Password..." /><br />
                     
                     <Button type="submit" value="Submit" variant = "dark" outline   style = {{margin:'10px 6rem 10px 5rem'}}>Submit</Button>
                     {visible?<><Button variant = "dark" outline onClick={()=>{setDisplay(false)}}>Crypto Details</Button></>:<></>}
                 </form>
 
             </div>
             
         
         </div> :<><Coin list = {props.list}/></>}
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
