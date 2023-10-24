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
import Footer from './components/Footer'
import PrivateRoute from './utilities/privateRoute'
import Canada from './screens/countries/Canada';
import Australia from './screens/countries/Australia';
import Unitedstates from './screens/countries/Unitedstates';
import Switzerland from './screens/countries/Switzerland';
import Europe from './screens/countries/Europe';
import USA from './screens/countries/USA'

const App = () => {
  return (
    <Router className=''>
      <Header/>
      <Routes>
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/canada' element={<Canada/>} />
        <Route path='/australia' element={<Australia/>} />
        <Route path='/USA' element={<USA/>} />
        <Route path='/unitedstates' element={<Unitedstates/>} />
        <Route path='/switzerland' element={<Switzerland/>} />
        <Route path='/Europe' element={<Europe/>} />

        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/register' element={<RegisterScreen/>}/>
        <Route path='/activate/:uid/:token' element={<ActivateScreen/>}/>
        <Route path='/resendActivationLink' element={<ResendActivationEmail/>}/>
        <Route path='/resetPassword' element={<ResetPasswordScreen/>}/>
        <Route path='/resetPassword/:uid/:token' element={<ResetPasswordConfirmationScreen/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path='/action' element={<ActionScreen/>}/>
        </Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App