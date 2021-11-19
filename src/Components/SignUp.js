import React from "react"
import App from "../App"
import womantext from "../images/pexels-andrea-piacquadio-3769022.png"
import mantext from "../images/pexels-cottonbro-3206079.png"
import firebase from "../Components/firebase"
import auth from "../Components/firebase"

export default function SignUp(){
    return( 
    
        <form className = "signUpForm"> 
        <p className = "header">Chit-Chat</p>
        <p className= "subHeader">The simple Messaging app.</p>
            
        <div className = "inputInfo">
            
            <div className = "signUpInput"> 
                <p className = "signup">Sign Up</p>
                <input placeholder = "First Name"></input>
                <input placeholder = "Last Name"></input>
                <input placeholder = "Enter Username"></input>
                <input placeholder = "Email"></input>
                <input placeholder = "Enter Password"></input>
                <input placeholder = " Confirm Password"></input>
            

                <div id = "buttons">
                    <button id = "submit" >Submit</button>
                    <button id = "signin"> Sign-In</button>
                </div>
                
                   
            </div> 
            <img src = {womantext} alt = "womantext" className = "img"/>
         </div>
        </form>

    )
}