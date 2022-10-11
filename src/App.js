import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './components/publicViews/Landing'
import Login from './components/accounts/Login'
import SignIn from './components/accounts/SignIn'
import EditUser from './components/accounts/EditUser'
import ResetPassword from './components/accounts/ResetPassword'

import IsLoggedIn from './utils/IsLoggedIn'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
     <>
        <BrowserRouter>
        <Navbar/>
           <Routes>
               <Route path='/' element={<Landing/>}/>
               <Route path='/accounts/login' element={<Login/>}/>
               <Route path='/accounts/signin' element={<SignIn/>}/>
               <Route element={<IsLoggedIn/>}>
                   <Route path='/accounts/edit' element={<EditUser/>}/>
                   <Route path='/accounts/password/reset' element={<ResetPassword/>}/>
               </Route>
           </Routes>
        </BrowserRouter>
     </>
  )
}

export default App