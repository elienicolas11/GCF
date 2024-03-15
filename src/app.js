// src/app.js

import React from "react";
import ReactDOM from "react-dom";
// On importe la fonction TodoList
import TodoListPage from "./pages/TodoListsPage";
import ClientsListPage from "./pages/ClientsListPage";


// Imprime l'arbre renvoyé par TodoList() dans l'élément <main> du DOM HTML
ReactDOM.render(<ClientsListPage/>, document.querySelector('main'));

// // src/app.js

// // React va permettre de dessiner notre arbre d'éléments HTML
// import React from "react";
// // ReactDOM va permettre de créer le rendu correspondant dans le DOM HTML
// import ReactDOM from "react-dom";

// // On créé ici un tableau TODO_ITEMS qui contient deux objets 
// const TODO_ITEMS = [
//   { id: 1, created_at: null ,name: "elie", mail: "nicolas@gmail.com" },
//   { id: 2, created_at: null ,name: "elie2", mail: "nicolas2@gmail.com" },
// ];

// const TodoList = () => {
//     return (
//         <ul>
//             {TODO_ITEMS.map(item => (
//                 <li key={item.id}>
//                     <span>{item.name}</span>

//                 </li>
//             ))}
//         </ul>
//     );
// }

// // Imprime l'arbre renvoyé par TodoList() dans l'élément <main> du DOM HTML
// ReactDOM.render(<TodoList />, document.querySelector('main'));