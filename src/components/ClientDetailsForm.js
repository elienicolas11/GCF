// src/components/ClientDetailsForm.js

import React from "react";
import { Link } from "react-router-dom";

const ClientDetails = ({ task, generateLink }) => {
    return (
        <div>
            {task ? (
                <>
                    <Link to={generateLink(task.id)}>
                        <button>Créer une facture</button>
                    </Link>
                    <Link to="/">
                        <button>Retour aux clients</button>
                    </Link>
                    <h2>{task.name}</h2>
                    <p>{task.email}</p>
                    
                </>
            ) : (
                <p>ID Invalide</p>
            )}
        </div>
    );
}

export default ClientDetails;

