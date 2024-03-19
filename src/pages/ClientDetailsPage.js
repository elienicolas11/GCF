// src/pages/ClientDetailsPage.js

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { loadClientFromID } from "../api/http";
import ClientDetailsForm from "../components/ClientDetailsForm";

const ClientDetailsPage = () => {
    const [task, setTask] = useState(null);
    const params = useParams();
    
    const id = +params.id;

    useEffect(() => {
        loadClientFromID(id)
            .then(apiTask => setTask(apiTask));
    }, [id])

    
    return (
        <div>
            <ClientDetailsForm task={task} />
            <Link to="/">Retour aux clients</Link>
        </div>
    );

}

export default ClientDetailsPage;