// src/components/ClientDetailsForm.js

import React from "react";

const ClientDetails = ({ task }) => {
    return (
        <div>
            {task ? (
                <>
                    <h2>{task.name}</h2>
                    <p>{task.email}</p>
                    {/* Other fields */}
                </>
            ) : (
                <p>Chargement en cours</p>
            )}
        </div>
    );
}

export default ClientDetails;
