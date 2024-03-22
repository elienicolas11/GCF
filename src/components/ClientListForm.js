import React from "react";
import { Link } from "react-router-dom";

const ClientList = ({ tasks, generateLink }) => {
    return (
        <div>
            <div className="client-list-container">
                    <label>Client List</label>
                    <Link to="/create">
                        <button>Créer un client</button>
                    </Link>
            </div>
            <ul className="list-group">
                {tasks.map((task) => (
                    <li className="list-group-item" key={task.id}>
                        <Link to={generateLink(task.id)}>
                            <label className="text-primary">{task.name}</label>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ClientList;


