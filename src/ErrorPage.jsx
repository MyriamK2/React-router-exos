// ## Exercice 5
// Créer un component qui va s'afficher lorsque il y a une erreur au niveau de la route. Il doit afficher le code d'erreur avec un peu de style.

import { useRouteError, Link } from "react-router-dom";
import "./ErrorPage.css";


export default function ErrorPage () {
    const error = useRouteError();
    // console.log(error);
    console.error(error);

    return(
        <div className="divError">
            <h1>Oops !</h1>
            <p>Sorry, an unexpected error has occurred...</p>
            {/* <p> {error.statusText || error.message} </p> */}

            <p>Here are some helpful links :</p>
            <div className="linksError">
                <Link to={"/"}>Accueil</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/liste"}>Liste</Link>
            </div>
            
        </div>
    )
}