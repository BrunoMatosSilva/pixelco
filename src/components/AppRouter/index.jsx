import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormLogin from '../FormLogin'
import Signup from '../../pages/Signup'
import Dashboard from '../../pages/Dashboard'
import Profile from '../../pages/Dashboard'

export default function AppRouter(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<FormLogin />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path='/register' element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}
