const SUPABASE_URL = "https://mpqfqsqljqgrgurdpxnl.supabase.co/rest/v1/Client";
const SUPABASE_URL_INV = "https://mpqfqsqljqgrgurdpxnl.supabase.co/rest/v1/Invoice";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wcWZxc3FsanFncmd1cmRweG5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0NTc0MzUsImV4cCI6MjAyNjAzMzQzNX0.uo9Egm8bdFcYvlFUwpyU85lcO4_fSST2VziHkFOGojU";


export const loadClientFromID = (id) => {
    return fetch(`${SUPABASE_URL}?id=eq.${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        }
    })
        .then(response => response.json())
        .then(tasks => tasks[0]);
}

export const loadInvoicesFromID= (id) => {
    return fetch(`${SUPABASE_URL_INV}?client_id=eq.${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        }
    })
        .then(response => response.json())
}
export const loadClientFromApi = () => {
    return fetch(`${SUPABASE_URL}?select=*`, {
        headers: {
            apikey: SUPABASE_API_KEY,   
            Authorization: "Bearer " + SUPABASE_API_KEY,
        },
    })
    .then(response => response.json());
}

export const addClientToApi = (client) => {
    return fetch(SUPABASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
        },
        body: JSON.stringify(client),
    })
}

export const addinvoiceToApi = (invoice) => {
    return fetch(SUPABASE_URL_INV, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + SUPABASE_API_KEY,
            apiKey: SUPABASE_API_KEY,
            "Prefer": "return=minimal"
        },
        body: JSON.stringify(invoice),
    })
}
