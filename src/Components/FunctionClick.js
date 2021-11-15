import React from "react"

function FunctionClick() {

    function clickHandler(){
        console.log("button clikced")
    }
    return(
        <div>
            <button onClick= {clickHandler}>Create Contact</button>
        </div>
    )
}

export default FunctionClick

