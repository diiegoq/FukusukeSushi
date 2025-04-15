import React from "react";
import { Card, Button, Col } from "react-bootstrap";

const ResumenCompra = ({ carrito, total = 25000, envio = "Gratis", cantidadTotal = 0 }) => {
  const formatearCLP = (valor) =>
    new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(valor);

  return (
    <Col xs={12} lg={4}>
      <Card className="shadow-sm p-3 resumen-compra">
        <h5 className="mb-3">Resumen de compra</h5>

        <div className="d-flex justify-content-between mb-2">
          <span>Productos ({cantidadTotal})</span>
          <strong>{formatearCLP(total)}</strong>
        </div>

        <div className="d-flex justify-content-between mb-2">
          <span>Envío</span>
          <span>{envio}</span>
        </div>

        <hr />

        <div className="d-flex justify-content-between mb-3">
          <strong>Total</strong>
          <strong>{formatearCLP(total)}</strong>
        </div>

        <Button variant="primary" className="w-100">
          Continuar compra
        </Button>
      </Card>
    </Col>
  );
};

export default ResumenCompra;
