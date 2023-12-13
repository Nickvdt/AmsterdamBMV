import React from "react";
import "./Header.css";

const Header = () => {
    return ( 
        <header>
            <section>
                <img src="img/logo.webp" width="75px" alt="Logo" />
            </section>
            <section>
                <h1 className="BMV--tekst">BMV</h1>
            </section>
        </header>
    );
}

export default Header;
