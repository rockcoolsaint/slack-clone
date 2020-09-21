import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import Login from './components/Login/Login';

function App() { 
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
              {/* React-Router -> Chat screen */}
            </div>
          </>
        )}  
      </Router>
    </div>
  );
}

export default App;
