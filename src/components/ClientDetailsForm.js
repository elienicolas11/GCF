// src/components/ClientDetailsForm.js

import React from "react";
import { Link } from "react-router-dom";

const ClientDetails = ({ task, generateLink }) => {
    return (
        <div>
            {task ? (
                <>
                    <h2>{task.name}</h2>
                    <p>{task.email}</p>

                    <Link to={generateLink(task.id)}>
                        <button>Créer une facture</button>
                    </Link>
                    <Link to="/">
                        <button>Retour aux clients</button>
                    </Link>
                        
                    
                </>
            ) : (
                <p>Chargement en cours</p>
            )}
        </div>
    );
}

export default ClientDetails;

