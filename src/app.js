// src/app.js

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import ClientsListPage from "./pages/ClientsListPage";
import ClientsDetailsPage from "./pages/ClientDetailsPage";
import AddClientPage from "./pages/AddClientPage";
import AddInvoicePage from "./pages/AddInvoicePage";

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route
                path="/"
                element={<  ClientsListPage />}
            />
            <Route
                path="/:id"
                element={<ClientsDetailsPage />}
            />
            <Route
                path="/create"
                element={<  AddClientPage />}
            />
            <Route
                path="/:id/invoices/add"
                element={<  AddInvoicePage />}
            />
        </Routes>
    </BrowserRouter>
}
// Imprime l'arbre renvoyé par TodoList() dans l'élément <main> du DOM HTML
ReactDOM.render(<App/>, document.querySelector('main'));