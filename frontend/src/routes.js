import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';


export default function Routes() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/main" component={Main}/>
    </BrowserRouter>
  );
}
