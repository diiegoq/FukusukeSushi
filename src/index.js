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
import Tablas from "./pages/TablasPage";
import Registrarse from "./pages/Registrarse";
import Rolls from "./pages/RollsPage";
import Cocteleria from "./pages/CocktailsPage";
import HomeAdmin from "./pages/HomeAdmin";
import Ventas from "./pages/VentasPage";
import ProductoDetalle from './pages/ProductoDetalle';  // Importar la página de detalle del producto

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="carrito" element={<CarroDeCompra />} />
          <Route path="iniciarsesion" element={<IniciarSesion />} />
          <Route path="tablas" element={<Tablas />} />
          <Route path="rolls" element={<Rolls />} />
          <Route path="cocteleria" element={<Cocteleria />} />
          <Route path="registrarse" element={<Registrarse />} />
          <Route path="home-admin" element={<HomeAdmin />} />
          <Route path="ventas" element={<Ventas />} />
          <Route path="producto/:id" element={<ProductoDetalle />} /> {/* Ruta para los detalles del producto */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
