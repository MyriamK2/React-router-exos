// ## Exercice 2
// Rajoute un component About dans le projet de l'exercice précédent et fais en sorte que la route '/about' redirige vers ce component.

import Navbar from "../Navbar/Navbar";


export default function About () {
    return(
        <div>
            <Navbar/>
            <h1>About</h1>
        </div>
    )
}