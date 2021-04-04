import React from 'react'

import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Room from './pages/Room'
import {AuthProvider} from "./AuthService";
import LoggedInRoute from "./LoggedInRoute"


function App() {
  return (
    <AuthProvider>
      <Router>{/* ルーティングするタグを囲むラッパー*/}
        <switch>{/* 切り替えをするラッパー*/}
          <LoggedInRoute exact path='/' component={Room} />{/* 切り返されるコンポーネントを指定*/}
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
        </switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
