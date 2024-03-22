import React from "react";
import { Link } from "react-router-dom"
const AddInvoiceForm = ({ amount, status, onChange, onSubmit }) => {
  return (
    <div className="add-invoice-form">
        <label>Ajouter une nouvelle facture</label>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Montant  </label>
                <input 
                    type="number" 
                    name="amount" 
                    value={amount} 
                    onChange={onChange}
                    min="0"
                    step="1"
                />
            </div>
            <div className="form-group">
                <label>Status  </label>
                <select name="status" value={status} onChange={onChange} required>
                    <option value="SENT">Envoyée</option>
                    <option value="PAID">Payée</option>
                </select>
            </div>
            <button type="submit">Enregistrer la facture</button>
            <Link to="/">
                <button>Retour aux clients</button>
            </Link>
        </form>
        
    </div>
  );
};

export default AddInvoiceForm;
