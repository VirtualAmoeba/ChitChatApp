import React from "react"
import App from "../App"

class SignUp extends React.Component(){

    constructor(props){
        super(props)
    }


    render(){
        return( 
            <div>
            <form>
                <input type="text" className="form-control" aria-aria-describedby="sizing=addon1" placeholder = "Enter Username"></input>
                <input type="text" className="form-control" aria-aria-describedby="sizing=addon1" placeholder = "Email"></input>
                <input type="text" className="form-control" aria-aria-describedby="sizing=addon1" placeholder = "Enter Password"></input>
                <input type="text" className="form-control" aria-aria-describedby="sizing=addon1" placeholder = " Confirm Password"></input>
                <input></input>
            </form>
            </div>
        )
    }
}

export default SignUp