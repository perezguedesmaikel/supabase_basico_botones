import React from "react";
import {Link} from "react-router-dom";

function Layout({children}) {
    return(
        <div>
        <header>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/login"}>Login</Link>
                    <Link to={"/registrar"}>Registrar</Link>
                    <Link to={"/correomagico"}>Correo Mágico</Link>
                </li>
            </ul>

        </header>
        <main>
            {children}
        </main>
        </div>
    )

}
export default Layout;