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

