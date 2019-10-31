import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import navbar from './components/layouts/navbar'
import Footer from './components/layouts/Footer'
import Home from './components/pages/Home'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'


import { BrowserRouter, Switch,Route } from 'react-router-dom'


function App() {
  return (
    <div>
        <BrowserRouter>
              <Route  component={navbar} />
              <Route path='/signin' component={SignIn}/>
              <Route path='/signup' component={SignUp}/>
            <Switch>
              <div className='app-content'>
                  <Route exact path='/' component={Home}/>
              </div>
            </Switch>
             <Route component={Footer}/>
        </BrowserRouter>
    </div>
  )}

export default App;
