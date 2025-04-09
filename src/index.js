import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import IniciarSesion from "./pages/IniciarSesion";
import CarroDeCompra from "./pages/CarroDeCompra";
import NoPage from "./pages/NoPage";
import Tablas from "./pages/Tablas"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="carrito" element={<CarroDeCompra />} />
          <Route path="iniciarsesion" element={<IniciarSesion />} />
          <Route path="tablas" element={<Tablas />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);