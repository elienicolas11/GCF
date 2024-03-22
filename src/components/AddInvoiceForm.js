import React from "react";
import { Link } from "react-router-dom"
const AddInvoiceForm = ({ amount, status, onChange, onSubmit }) => {
  return (
    <div>
        <h2>Ajouter une nouvelle facture</h2>
        <form onSubmit={onSubmit}>
            <div>
                <label>Montant:</label>
                <input 
                    type="number" 
                    name="amount" 
                    value={amount} 
                    onChange={onChange}
                />
            </div>
            <div>
                <label>Statut:</label>
                <select name="status" value={status} onChange={onChange} required>
                    <option value="SENT">Envoyée</option>
                    <option value="PAID">Payée</option>
                </select>
            </div>
            <button type="submit">Enregistrer la facture</button>
        </form>
        <Link to="/">
            <button>Retour aux clients</button>
        </Link>
    </div>
  );
};

export default AddInvoiceForm;
