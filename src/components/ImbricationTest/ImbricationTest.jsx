import { Link, Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"

export default function ImbricationTest () {
    return(
        <div>
            <Navbar />
            
            <h1>Test pour des routes imbriquées (parent/children)</h1>

            <div>
                <br />
                <Link to={"/test/services"}>Services</Link>
                <br /> <br />
                <Link to={"/test/contacts"}>Contacts</Link>
            </div>

            <Outlet />
        </div>
    )
}


//! <Outlet /> pour indiquer où on veut voir les children (routes imbriquées) s'afficher