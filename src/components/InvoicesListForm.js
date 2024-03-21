// src/components/InvoicesListForm.js
import React from "react";

const InvoiceList = ({ invoices }) => {
  return (
    <div>
      {invoices && invoices.length > 0 ? (
        <ul>
          {invoices.map((invoice) => (
            <li key={invoice.id}>
              <label>{invoice.amount}$      </label>
              <label>{invoice.status}</label>
            </li>
          ))}
        </ul>
      ) : (
        <p>No invoices found.</p>
      )}
    </div>
  );
};

export default InvoiceList;


