// src/components/AddClientForm.js

import React from "react";

const AddClientForm = ({ name, email, handleChange, handleSubmit }) => {
  return (
    <div>
      <h2>Ajouter un nouveau client</h2>
      <form onSubmit={handleSubmit}>
        <label>Nom:</label>
        <br />
        <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
        />
        
        <br />

        <label>Email: </label>
        <br></br>
        <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        <br />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddClientForm;
