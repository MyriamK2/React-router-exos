// ## Exercice 6
// Ajouter un component Connection qui va contenir un formulaire pour pouvoir se connecter. La route sera '/connection'. Créer un component MyAccount qui va afficher les informations de la personne connectée. La route de MyaAccount sera '/my-account' Utiliser le component Form de React Router pour le component de connection.

import { Form } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Connexion.css";


export default function Connexion ({nameVal, setNameVal, emailVal, setEmailVal}) {

    return(
        <div>
            <Navbar />
            
            <h1>Connexion</h1>

            <Form action="/my-account" className="divForm">
                <label htmlFor="">
                    <span>Name</span>
                    <input value={nameVal} onChange={(e) => {setNameVal(e.target.value)}} type="text" name="name" />
                </label>

                <label htmlFor="">
                    <span>Email</span>
                    <input value={emailVal} onChange={(e) => {setEmailVal(e.target.value)}} type="email" name="email" />
                </label>

                <label htmlFor="">
                    <span>Password</span>
                    <input type="password" name="password" required />
                </label>

                <button>Log In</button>
            </Form>
        </div>
    )
}