// ## Exercice 7
// Sur la page MyAaccount rajouter un bouton edit qui va rediriger vers un route qui permettra de changer les informations de l'utilisateur connecté. Utilser le component Form de React Router.

import "./MyAccount.css";
import Navbar from "../Navbar/Navbar";
import { Form } from "react-router-dom";
import userImg from "../../img/user-5.png";


export default function MyAccount ({nameVal, emailVal}) {
    return(
        <div className="divMyAcc">
            <Navbar />

            <h1>My Account</h1>

            <img className="imgAcc" src={userImg} width={100} alt="" />

            <div className="card">
                <p><span>Name :</span> {nameVal} </p>
                <p><span>Email :</span> {emailVal} </p>
            </div>

            <Form action="/my-account/edit" className="editBtn">
                <button>Edit</button>
            </Form>
        </div>
    )
}