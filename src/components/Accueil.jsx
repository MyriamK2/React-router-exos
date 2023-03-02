// ## Exercice 1
// Créer un component Accueil et utiliser React Router pour que la route '/' redirige vers la page d'acceuil.


import Navbar from "./Navbar/Navbar";

export default function Accueil() {
    return (
        <div>
            <Navbar />
            <h1>ACCUEIL</h1>
        </div>
    )
}