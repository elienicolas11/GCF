// src/components/InvoicesListForm.js
import React from "react";

const InvoiceList = ({ invoices }) => {
  return (
    <div>
    {invoices && invoices.length > 0 ? (
      <div id="table-wrapper">
        <div id="table-scroll">
            <table >
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
          </div>
        </div>
    ) : (
        <p class="no-invoices">No invoices found.</p>
    )}
</div>
  );
};

export default InvoiceList;



