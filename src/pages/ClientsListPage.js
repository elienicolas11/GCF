// src/pages/ClientsListPage.js

import React, { useState, useEffect } from "react";
import ClientList from "../components/ClientListForm"; 
 import { loadClientFromApi } from "../api/http";
 import { Link } from "react-router-dom";



const ClientsListPage = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const items = await loadClientFromApi();
                setTasks(items);
                console.log('Tasks fetched successfully');
                console.log(tasks); 
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };
    
        fetchTasks();
    }, []);

    
    const generateLink = (id) => {
        return typeof id === 'number' && !isNaN(id) ? `/${id}` : '/invalid-id';
    }

    return (
        <div>
            <div >
                <label >Client List</label>
                <Link to="/create">
                    <button >Créer un client</button>
                </Link>
            </div>
            <div>
                <ClientList tasks={tasks} generateLink={generateLink}   />  
            </div>
            
        </div>
    );
}
export default ClientsListPage;
