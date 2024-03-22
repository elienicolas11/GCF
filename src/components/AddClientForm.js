// src/components/AddClientForm.js

import React from "react";
import { Link } from "react-router-dom"
const AddClientForm = ({ name, email, handleChange, handleSubmit }) => {
  return (
    <div>
      <h2>Ajouter un nouveau client</h2>
      <form onSubmit={handleSubmit}>
        <label>Nom:</label>
        <br />
        <input 
            type="text"
            name="fullName"
            value={name}
            onChange={handleChange}
            required
        />
        
        <br />

        <label>Email: </label>
        <br></br>
        <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        <br />
        <button type="submit">Enregistrer</button>
      </form>
      <Link to="/">
            <button>Retour aux clients</button>
      </Link>
    </div>
  );
};

export default AddClientForm;
