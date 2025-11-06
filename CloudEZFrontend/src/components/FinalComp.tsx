import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Login } from './Login'
import Dashboard from './Dashboard'
import Welcome from './Welcome'

const FinalComp=()=>{
    return (
        <>
            <Router>
                <Routes>
                <Route element={<Welcome/>} path='/'/>
                    <Route element={<Login/>} path='/login'/>
                    <Route element={<Dashboard/>} path='/dashboard'/>
                        
                </Routes>
            </Router>
            
        </>
    )
}

export default FinalComp