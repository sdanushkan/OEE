import React from 'react'
import Header from './components/Header'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ActivateScreen from './screens/ActivateScreen'
import ResendActivationEmail from './screens/ResendActivationEmail'
import ResetPasswordScreen from './screens/ResetPasswordScreen'
import ResetPasswordConfirmationScreen from './screens/ResetPasswordConfirmationScreen'
import ActionScreen from './screens/ActionScreen'

const App = () => {
  return (
    <Router className=''>
      <Header/>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/register' element={<RegisterScreen/>}/>
        <Route path='/activate/:uid/:token' element={<ActivateScreen/>}/>
        <Route path='/resendActivationLink' element={<ResendActivationEmail/>}/>
        <Route path='/resetPassword' element={<ResetPasswordScreen/>}/>
        <Route path='/resetPassword/:uid/:token' element={<ResetPasswordConfirmationScreen/>}/>
        <Route path='/action' element={<ActionScreen/>}/>
      </Routes>
    </Router>
  )
}

export default App