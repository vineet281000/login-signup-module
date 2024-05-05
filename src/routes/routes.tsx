import React from 'react'
import {Routes as ReactRouterRoutes, Route} from 'react-router-dom'
import Login from '../pages/login'
import Signup from '../pages/signup'

const Routes: React.FC = () => {
    return <ReactRouterRoutes>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
    </ReactRouterRoutes>
}

export default Routes