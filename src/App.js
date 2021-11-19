import "./App.css"
import { render } from "react-dom";
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LogIn from '../src/Components/LogIn'
import { Contacts } from '../src/Components/Contacts'
import Landing from '../src/Components/Landing'
import NotFound from '../src/Components/NotFound'
import Dashboard from "../src/Components/Dashboard"
import SignUp from "./Components/SignUp";
import "./CSS_Pages/signUp.css"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig =( {
  apiKey: "AIzaSyDo1M-uNT8NXVuLDxEc5MHa2mvxZiyf_lQ",
  authDomain: "chit-chat-a0691.firebaseapp.com",
  projectId: "chit-chat-a0691",
  storageBucket: "chit-chat-a0691.appspot.com",
  messagingSenderId: "980241232083",
  appId: "1:980241232083:web:54490f9083438e9ef02426",
  measurementId: "G-BBVE2T2F7V"
});

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="login" element={<LogIn />} />
      <Route path="contacts" element={<Contacts db={db} />} />
      <Route path="notfound" element={<NotFound />} />
      <Route path="dashboard" element={<Dashboard />} /> 
      <Route path ="signup" element = {<SignUp/>} />
    </Routes>
  )
}

