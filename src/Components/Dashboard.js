import React from "react"
import pic from "./profileimages/Unknown.jpg"
export default function Dashboard(){
    return(
        <div className = "ContainerDash">
            <div className = "dash">
                <p className = "header">Chit-Chat</p>
                <div className = "dropdown">
                    <button className= "dropbtn">Menu</button>
                    <div class="dropdown-content">
                         <a href="/">Home</a>
                         <a href="#">Chats</a>
                         <a href="/contacts">Contacts</a>
                         <a href="#">Log Out</a>
                    </div>
                </div>
            </div>
                <div className= "cont">
                    <div>
                        <div>
                            <p className = "primarycont"> Primary Contacts</p>
                        </div>
                    </div>
                    <div>
                        <div className= "favcont">
                            <div id= "cir1">Armoni</div>
                            <div id= "cir2">Al</div>
                            <div id= "cir3">Serina</div>
                            <div id= "cir4">Deborah</div>
                            <div id= "cir5">Troy</div>
                            <div id= "cir6">Ashley</div>
                            <div id= "cir7">Jermey</div>
                            <div id= "cir8">Manny</div>
                        </div>
                    </div>
                    
                </div>
                <div className = "myProfile">
                    <img src = {pic} className = "myProfile"></img>
                    <div>
                        <p> My Username: Armoni81</p>
                        <p>My Email: atigner81@gmail.com</p>
                        <p>My Number: 6789991212</p>
                        <p>About me : </p>
                    </div>
                    


                </div>
                <div className= "mess">
                    <div>
                    <p className= "latestmess"> Latest Messages</p>
                    </div>
                </div>  
                    <div className = "footerbtn">
                        <button className="newmessbtn">Home</button>
                        <button className="newmessbtn">New message</button>
                        <button className="newmessbtn">My Profile</button>
                        <button className="newmessbtn">Sign Out</button>
                    </div>
                
        </div> 
                          
       
    )
}
