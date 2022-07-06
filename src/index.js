import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./components/login";
import SignUp from "./components/regsitrar";
import Home from "./App";
import CorreoMagico from "./components/loginsensillo";
import {Authprovider} from "./components/auth";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Authprovider>
      <BrowserRouter>
          <Routes>
              <Route element={<SignIn/>} path={'/login'}/>
              <Route element={<SignUp/>} path={'/registrar'}/>
              <Route element={<CorreoMagico/>} path={'/correomagico'}/>
              <Route element={<h1>Error en ruta</h1>} path={'*'}/>
              <Route index element={<Home/>} path={'/'}/>
          </Routes>
          </BrowserRouter>
      </Authprovider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

