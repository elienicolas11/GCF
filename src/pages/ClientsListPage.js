// src/pages/ClientsListPage.js

import React, { useState, useEffect } from "react";
import ClientList from "../components/ClientListForm";
import AddClientForm from "../components/AddClientForm"; 
 import { loadClientFromApi } from "../api/http";
 import { Link } from "react-router-dom";


const SUPABASE_URL = "https://mpqfqsqljqgrgurdpxnl.supabase.co/rest/v1/Client";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wcWZxc3FsanFncmd1cmRweG5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0NTc0MzUsImV4cCI6MjAyNjAzMzQzNX0.uo9Egm8bdFcYvlFUwpyU85lcO4_fSST2VziHkFOGojU";

const ClientsListPage = () => {
    const [tasks, setTasks] = useState([]);
    const [showAddClientForm, setShowAddClientForm] = useState(false); 

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
                   <Link to="/create" ><button>Add Client</button> </Link>
                    <ClientList tasks={tasks} generateLink={generateLink}   />
        </div>
    );
}
export default ClientsListPage;
