// src/app.js

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import ClientsListPage from "./pages/ClientsListPage";
import ClientsDetailsPage from "./pages/ClientDetailsPage";
import AddClientPage from "./pages/AddClientPage";

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
        </Routes>
    </BrowserRouter>
}
// Imprime l'arbre renvoyé par TodoList() dans l'élément <main> du DOM HTML
ReactDOM.render(<App/>, document.querySelector('main'));