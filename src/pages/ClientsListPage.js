// src/pages/ClientsListPage.js

import React, { useState, useEffect } from "react";
import ClientList from "../components/ClientListForm";
import AddClientForm from "../components/AddClientForm"; // Import the AddClientForm component

const SUPABASE_URL = "https://mpqfqsqljqgrgurdpxnl.supabase.co/rest/v1/Client";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wcWZxc3FsanFncmd1cmRweG5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0NTc0MzUsImV4cCI6MjAyNjAzMzQzNX0.uo9Egm8bdFcYvlFUwpyU85lcO4_fSST2VziHkFOGojU";

const ClientsListPage = () => {
    const [tasks, setTasks] = useState([]);
    const [showAddClientForm, setShowAddClientForm] = useState(false); // State to toggle the form visibility

    useEffect(() => {
        fetch(`${SUPABASE_URL}?select=*`, {
            headers: {
                apikey: SUPABASE_API_KEY,   
                Authorization: "Bearer " + SUPABASE_API_KEY,
            },
        })
            .then((response) => response.json())
            .then((items) => {
                setTasks(items);
            })
            .catch((error) => {
                console.error('Error fetching tasks:', error);
            });
    }, []);

    const handleAddClientClick = () => {
        setShowAddClientForm(true);
    }

    return (
        <div>
            {showAddClientForm ? <AddClientForm /> : (
                <>
                    <button onClick={handleAddClientClick}>Add Client</button>
                    <ClientList tasks={tasks} />
                </>
            )}
        </div>
    );
}

export default ClientsListPage;
