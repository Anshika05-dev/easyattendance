import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Student from './components/Student'
import Classes from './components/Classes'
import Addclass from './components/Addclass'
import Addstudent from './components/Addstudent'
import Createsession from './components/Createsession'
import Privateroute from './components/Privateroute'

function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/'element={<Login />}>
    </Route>
    <Route path='/dashboard'element={
      <Privateroute>< Dashboard/></Privateroute>}>
    <Route path='' element={<Home />}></Route>
    <Route path='/dashboard/student' element={<Student />}></Route>
    <Route path='/dashboard/classes' element={<Classes />}></Route>
    <Route path='/dashboard/add_class' element={<Addclass />}></Route>
    <Route path='/dashboard/add_student' element={<Addstudent />}></Route>
    <Route path='/dashboard/create_session' element={<Createsession />}></Route>
    </Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App
