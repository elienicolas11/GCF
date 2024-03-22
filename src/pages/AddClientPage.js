import React, { useState } from "react";
import AddClientForm from "../components/AddClientForm";
import { Link, useNavigate } from "react-router-dom";
import { addClientToApi } from "../api/http";

const AddClientPage = () => {
  const [fullName, setFullName] = useState(""); // Mise à jour de 'name' à 'fullName'
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await addClientToApi({ name: fullName, email }); // Mise à jour de 'name' à 'fullName'
      navigate("/");
    } catch (error) {
      console.error('Error adding client:', error);
    }
  };

  const handleChange = (e) => {
    const { name: fieldName, value } = e.target;
    const updateFunction = {
      fullName: setFullName, // Mise à jour de 'name' à 'fullName'
      email: setEmail,
    }[fieldName];

    if (updateFunction) {
      updateFunction(value);
    }
  };
  
  return (
    <div>
      <AddClientForm
        name={fullName} // Mise à jour de 'name' à 'fullName'
        email={email}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddClientPage;
