import React from "react";
import { Link } from "react-router-dom";

const ClientList = ({ tasks, generateLink }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id} className="border-blue-500 rounded-lg p-4 mb-4 border-2">
                    <Link to={generateLink(task.id)}>
                        <label>{task.name}</label>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default ClientList;


