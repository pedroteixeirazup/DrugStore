import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';

export default function Routes() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={Login}/>
        <Route path="/register" component={Register}/>
    </BrowserRouter>
  );
}
