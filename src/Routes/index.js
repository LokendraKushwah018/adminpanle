import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Usersignup from '../Pages/Auth/Signup'
import Login from '../Pages/Auth/Signup/login'
import UserDashboard from '../Pages/Dashboard'
const AppRoute = () => {
  return (
    <div>
    <Routes>
    <Route path='/' element={<Usersignup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/Dashboard' element={<UserDashboard/>}></Route>
    </Routes>
    </div>
  )
}

export default AppRoute
