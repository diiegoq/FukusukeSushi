import { Card } from "react-bootstrap";

const BoletaComponent = ({ id, fecha_hora, monto_total, metodo_pago, cliente }) => {
    return (
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Boleta ID: {id}</Card.Title>
          <Card.Text><strong>Fecha y Hora:</strong> {fecha_hora}</Card.Text>
          <Card.Text><strong>Monto Total:</strong> ${monto_total}</Card.Text>
          <Card.Text><strong>Metodo de Pago:</strong> {metodo_pago}</Card.Text>
          <Card.Text><strong>Cliente:</strong> {cliente}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

export default BoletaComponent;