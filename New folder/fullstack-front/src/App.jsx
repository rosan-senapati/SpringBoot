import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import HomePage from './pages/HomePage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route exact path='/adduser' element={<AddUser/>}/>
      <Route exact path='/edituser/:id' element={<EditUser/>}/>
      <Route exact path='/viewuser/:id' element={<ViewUser/>}/>
    </Routes>
    {/* <HomePage/> */}
    </BrowserRouter>
     
    </>
  )
}

export default App
