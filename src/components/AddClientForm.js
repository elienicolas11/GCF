// src/components/AddClientForm.js

import React from "react";
import { Link } from "react-router-dom"
const AddClientForm = ({ name, email, handleChange, handleSubmit }) => {
  return (
    <div className="add-client-container">
      <label>Ajouter un nouveau client</label>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nom: </label>
        <input 
            type="text"
            name="fullName"
            value={name}
            onChange={handleChange}
            required
        />
      </div>
      <div className="form-group">
        <label>Email: </label>
        <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enregistrer</button> 
        <Link to="/">
          <button>Retour aux clients</button>
        </Link>
      </form>
     
    </div>
  );
};

export default AddClientForm;
