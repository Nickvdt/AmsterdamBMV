import React from "react";
import "./Header.css";

const Header = () => {
    return ( 
        <header>
            <section>
                <a href="../">
                    <img src="../img/logo.webp" width="75px" alt="Logo" />
                </a>
            </section>
            <section>
                <h1 className="BMV--tekst">Bouwmanagement en Maatschappelijk Vastgoed</h1>
            </section>
        </header>
    );
}

export default Header;
