// src/pages/ClientDetailsPage.js

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { loadClientFromID, loadInvoicesFromID } from "../api/http";
import ClientDetails from "../components/ClientDetailsForm";
import InvoiceList from "../components/InvoicesListForm";

const ClientDetailsPage = () => {
    const [task, setTask] = useState(null);
    const [Invoices, setInvoices] = useState(null);
    const params = useParams();
    
    const id = +params.id;

    useEffect(() => {
        loadClientFromID(id)
            .then(apiTask => setTask(apiTask));
    }, [id])

    useEffect(() => {
        loadInvoicesFromID(id)
            .then(apiTask => setInvoices(apiTask));
    }, [id])
    
    return (
        <div>
            <ClientDetails task={task} />
            <InvoiceList invoices={Invoices} />
            <Link to="/">Retour aux clients</Link>
        </div>
    );

}

export default ClientDetailsPage;

