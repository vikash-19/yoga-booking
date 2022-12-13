import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import {
  BrowserRouter,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

import Register from './pages/Register/Register';
import Login from './pages/Login/Login'
import Home from './pages/Home/Home';
const client  = new QueryClient()


function App() {

  return (
    <BrowserRouter>
    <QueryClientProvider client={client}>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/login" element = {<Login/>} />
        <Route path = "/register" element = {<Register/>} />
      </Routes>
      </QueryClientProvider> 
    </BrowserRouter>
  );
}

export default App;
