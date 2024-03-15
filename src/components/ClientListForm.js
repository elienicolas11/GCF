import React from "react";

const ClientList = ({ tasks }) => {
    return (
        <ul>
            {tasks.map((task) => (
                 <li key={task.id}>{task.name}</li>
))}
 </ul>
);
}

export default ClientList;