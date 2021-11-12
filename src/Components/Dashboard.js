import React from "react"
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
                        <p className = "primarycont"> Primary Contacts</p>
                    </div>
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
                <div className= "mess">
                <p>Messages</p>
                </div>
            <div className = "messageList">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div> 
                          
       
    )
}
