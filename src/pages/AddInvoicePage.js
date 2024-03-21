// src/pages/AddInvoicePage.js

import React, { useState } from "react";
import { addinvoiceToApi } from "../api/http";
import AddInvoiceForm from "../components/AddInvoiceForm";

const AddInvoicePage = () => {
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await addinvoiceToApi({ amount, status });
      setShowConfirmation(true);
    } catch (error) {
      console.error("Error adding invoice:", error);
    }
  };

  const handleChange = (e) => {
    const { target: { name, value } } = e;
    if (name === "amount") {
      setAmount(value);
    } else if (name === "status") {
      setStatus(value);
    }
  };

  return (
    <div>
      {showConfirmation ? (
        <div>
          <p>Invoice added successfully!</p>
          <Link to="/">Back to clients</Link>
        </div>
      ) : (
        <AddInvoiceForm
          amount={amount}
          status={status}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default AddInvoicePage;

