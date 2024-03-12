// src/app.js

// React va permettre de dessiner notre arbre d'éléments HTML
import React from "react";
// ReactDOM va permettre de créer le rendu correspondant dans le DOM HTML
import ReactDOM from "react-dom";

/**
 * Créé et retourne un arbre d'éléments React
 * @returns React.DetailedReactHTMLElement
 */
const Hello = () => {
    return <div className="example-class example-class-2" id="lorem-id">
        <p>
            <strong>Hello </strong>
            World,
        </p>
    </div>;
    }

ReactDOM.render(<Hello />, document.querySelector('main'));