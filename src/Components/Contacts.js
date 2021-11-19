import React from 'react';
import { collection, query, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "../App";

export class Contacts extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            fullName: "",
            phoneNumber: ""
        }
        this.addFullName = this.addFullName.bind(this)
        this.addPhoneNumber = this.addPhoneNumber.bind(this)
        this._addContact = this._addContact.bind(this)
    }

    render () {
        return(
            <div>
                <input onChange = {this.addFullName}></input>
                <input onChange = {this.addPhoneNumber}></input>
                <button onClick = {this._addContact}>Send</button>
            </div>
        )
    }

    
    addFullName(event){
        this.setState({fullName:event.target.value})
    }
    addPhoneNumber(event){
        this.setState({phoneNumber:event.target.value})
    }

    _addContact(){
        setDoc(doc(db,"contacts", "User"),{
            fullName: this.state.fullName,
            phoneNumber:this.state.phoneNumber,
        })
        this.setState({
            fullName: "",
            phoneNumber:""
        })
    }
}

// componentDidMount() ;{
//     const q = query(collection(this.props.DB, "contacts"));
//     getDocs(q).then((querySnapshot) => {
//       this._getContacts(querySnapshot)
//     })
//   }

//   }
 

