// src/components/ClientDetailsForm.js

import React from "react";
import { Link } from "react-router-dom";

const ClientDetails = ({ task, generateLink }) => {
    return (
        <div>
            {task ? (
                <>
                <div>
                    <h2>{task.name}</h2>
                    <p>{task.email}</p>
                </div>
                <div>
                     <Link to={generateLink(task.id)}>
                        <button>Créer une facture</button>
                    </Link>
                    <Link to="/">
                        <button>Retour aux clients</button>
                    </Link>
                </div>
                </>
            ) : (
                <p>ID Invalide</p>
                
            )}
        </div>
    );
}

export default ClientDetails;

