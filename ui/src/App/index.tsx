import React from 'react';

import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import Callback from './auth/Callback'
import Logout from './auth/Logout'
import Connected from './Connected'
import Login from './auth/Login'

const App: React.FC = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >    
      <Router>
        <Switch>
          <Route
            component={Connected}
            path='/'
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
