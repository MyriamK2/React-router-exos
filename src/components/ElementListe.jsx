import { useParams } from "react-router-dom"

export default function ElementListe () {
    const params = useParams();
    console.log(params);

    return(
        <div>
            <h1>Vous avez cliqué sur l'{params.id}</h1>
        </div>
    )
}

//! useLocation pour afficher sur quel lien on est ??