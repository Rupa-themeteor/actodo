import { useState } from 'react'
import Header from "./components/Header";
import Card from "./components/Card";
import TodoContainer from "./components/TodoContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Landing from './Pages/Landing';

function App()
{

    const [users, setusers] = useState(
      [
      {
        username: "Rupa",
        password:"123"
      }
      ]
    )

  return(
     <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
        <Route path='/Signup' element={<Signup users={users} setusers={setusers}/>}></Route>
        <Route path='/Landing' element={<Landing/>}></Route>
      </Routes>
    </BrowserRouter>

    </div>
    
  )
}

export default App;
