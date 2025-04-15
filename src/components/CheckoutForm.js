// components/CheckoutForm.jsx
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Este formulario es solo visual, no realiza pagos reales.");
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 500, margin: "0 auto" }}>
      <h3>Formulario de Pago</h3>

      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          className="form-control"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre completo"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Correo electrónico</label>
        <input
          className="form-control"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tucorreo@example.com"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Tarjeta</label>
        <div style={{ border: "1px solid #ced4da", borderRadius: "0.375rem", padding: "10px" }}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4"
                  }
                },
                invalid: {
                  color: "#9e2146"
                }
              }
            }}
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-primary w-100"
        disabled={!stripe}
      >
        Pagar
      </button>
    </form>
  );
};

export default CheckoutForm;
