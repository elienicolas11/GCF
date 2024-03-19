// src/components/AddClientForm.js

import React from "react";

const AddClientForm = ({ name, email, handleChange, handleSubmit }) => {
  return (
    <div>
      <h2>Ajouter un nouveau client</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddClientForm;