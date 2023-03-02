// ## Exercice 4
// Toujours dans le même projet, créer un component Liste qui va cotenir une liste d'éléments. On peut accèder au component Liste grâce à la route '/liste'. Quand on clique sur un des éléments de la liste on accède à une nouvelle route sous le format '/liste/element1'. Les routes pour les éléments doivent etre créée dynamiquement.

import "./Liste.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Liste () {
    return(
        <div>
            <Navbar />
            
            <h1>Liste</h1>

            <ul className="ulListe">
                <li>
                    <Link to={"/liste/element1"}>Element 1</Link>
                </li>
                <li>
                    <Link to={"/liste/element2"}>Element 2</Link>
                </li>
                <li>
                    <Link to={"/liste/element3"}>Element 3</Link>
                </li>
                <li>
                    <Link to={"/liste/element4"}>Element 4</Link>
                </li>
                <li>
                    <Link to={"/liste/element5"}>Element 5</Link>
                </li>
            </ul>
        </div>
    )
}