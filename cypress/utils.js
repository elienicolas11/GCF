// L'URL sur laquelle votre application web est visitable (à changer si nécessaire)
export const BASE_URL = "http://localhost:8080/";
// L'URL de l'API Supabase à mettre à jour absolument
export const API_URL = "https://mpqfqsqljqgrgurdpxnl.supabase.co/rest/v1/Client";
export const API_URL_INV = "https://mpqfqsqljqgrgurdpxnl.supabase.co/rest/v1/Invoice";
// La clé d'API de votre compte Supabase à mettre à jour absolument
export const API_KEY= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wcWZxc3FsanFncmd1cmRweG5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0NTc0MzUsImV4cCI6MjAyNjAzMzQzNX0.uo9Egm8bdFcYvlFUwpyU85lcO4_fSST2VziHkFOGojU";

/**
 * Petite fonction utilitaire qui permet de supprimer tout ce qui se trouve dans les tables customers et invoices
 * de l'API SupaBase
 */
export const resetDatabase = () => {
  cy.request({
    method: "DELETE",
    url: API_URL + "/invoices?id=gt.0",
    headers: {
      apiKey: API_KEY,
    },
  });

  cy.request({
    method: "DELETE",
    url: API_URL + "/customers?id=gt.0",
    headers: {
      apiKey: API_KEY,
    },
  });
};
