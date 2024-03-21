
import React from "react";

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
                <select name="status" value={status} onChange={onChange}>
                    <option value="sent">Envoyée</option>
                    <option value="paid">Payée</option>
                </select>
            </div>
            <button type="submit">Ajouter la facture</button>
        </form>
    </div>
);
};

export default AddInvoiceForm;

