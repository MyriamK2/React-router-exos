// ## Exercice 3
// Toujours dans le même projet, rajouter une bar de navigation qui permet de naviguer entre les 2 components. Ne pas utiliser de balise <a>


import { Link } from "react-router-dom";
import "./Navbar.css";
import user from "../../img/user-2.jpg";


export default function Navbar() {
    return(
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Accueil</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to={"/liste"}>Liste</Link>
                </li>
                <li>
                    <Link to={"/test"}>Test</Link>
                </li>
                <li>
                    <li className="navRight">
                        <Link to={"/connexion"}>Connexion</Link>
                        <div className="divAcc">
                            <img src={user} width={20} alt="" />
                            <Link to={"/my-account"}>My Account</Link>
                        </div>
                    </li>
                    
                </li>
            </ul>
        </nav>
    )
}