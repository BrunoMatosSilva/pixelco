import React from 'react'
import FormLogin from '../FormLogin'
import Signup from '../../pages/Signup'
import Dashboard from '../../pages/Dashboard'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { Redirect } from 'react-router-dom'
import ForgotPassword from '../../pages/ForgotPassword'

export default function AppRouter(props) {

    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/' component={FormLogin} />
                    <ProtectedRoute exact path='/Dashboard' component={Dashboard} />
                    <Route exact path='/Signup' component={Signup} />
                    <Route exact path='/ForgotPassword' component={ForgotPassword} />
                </Switch>
            </Router>
        </>
    )
}
function ProtectedRoute(props) {
    const { currentUser } = useAuth()
    const { path } = props

    return currentUser ? (
        <Route {...props} />
    ) : (
        <Redirect
            to={{
                pathname: '/',
                state: { from: path },
            }}
        />
    )
}