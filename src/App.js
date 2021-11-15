
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

export default function App () {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="login" element={<LogIn />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="notfound" element={<NotFound />} />
    </Routes>
  )
}

