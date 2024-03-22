// src/components/InvoicesListForm.js
import React from "react";

const InvoiceList = ({ invoices }) => {
  return (
    <div>
      {invoices && invoices.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.amount}</td>
                <td>{invoice.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No invoices found.</p>
      )}
    </div>
  );
};

export default InvoiceList;



