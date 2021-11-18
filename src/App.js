import "./App.css"
import { render } from "react-dom";
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LogIn from '../src/Components/LogIn'
import Contacts from '../src/Components/Contacts'
import Landing from '../src/Components/Landing'
import NotFound from '../src/Components/NotFound'
import Dashboard from "../src/Components/Dashboard"
import SignUp from "./Components/SignUp";
import "./CSS_Pages/signUp.css"
import firebase from "./Components/firebase"



const firebaseConfig = {
  apiKey: "AIzaSyDkdNmP09gYFxUd6oUwUj1sRn5bd3nGRWk",
  authDomain: "message-app-2e658.firebaseapp.com",
  projectId: "message-app-2e658",
  storageBucket: "message-app-2e658.appspot.com",
  messagingSenderId: "1023615114414",
  appId: "1:1023615114414:web:1dc61051025b706ab0e13f",
  measurementId: "G-ZXT28H0B6F"
};

export default function App () {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="login" element={<LogIn />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="notfound" element={<NotFound />} />
      <Route path="dashboard" element={<Dashboard />} /> 
      <Route path ="signup" element = {<SignUp/>} />
    </Routes>
  )
}

