// src/pages/AddClientPage.js

import React, { useState } from "react";
import AddClientForm from "../components/AddClientForm";
import { Link } from "react-router-dom";
import { addClientToApi } from "../api/http";

const AddClientPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await addClientToApi({ name, email });
      setShowConfirmation(true);
    } catch (error) {
      console.error('Error adding client:', error);
    }
  };

  const handleChange = (e) => {
    const { name: fieldName, value } = e.target;
    const updateFunction = {
      name: setName,
      email: setEmail,
    }[fieldName];

    if (updateFunction) {
      updateFunction(value);
    }
  };
  
  return (
    <div>
      {showConfirmation ? (
        <div>
          <p>Client ajouté avec succès!</p>
          <Link to="/">Retour aux clients</Link>
        </div>
      ) : (
        <AddClientForm
          name={name}
          email={email}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default AddClientPage;