// src/pages/AddInvoicePage.js

import React, { useState } from "react";
import { addinvoiceToApi } from "../api/http";
import AddInvoiceForm from "../components/AddInvoiceForm";
import { useParams, useNavigate } from "react-router-dom";

const AddInvoicePage = () => {
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  
  const client_id = +params.id;

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await addinvoiceToApi({ client_id, amount, status });
      navigate(-1);
    } catch (error) {
      console.error("Error adding invoice:", error);
    }
  };

  const handleChange = (e) => {
    const { target: { name, value } } = e;
    setStatus("SENT");
    if (name === "amount") {
      setAmount(value);
    } else if (name === "status") {
      setStatus(value);
    }
  };

  return (
    <div>
        <AddInvoiceForm
          amount={amount}
          status={status}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
    </div>
  );
};

export default AddInvoicePage;

