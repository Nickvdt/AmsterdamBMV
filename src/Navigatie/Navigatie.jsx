import React from "react";
import "./Navigatie.css";

const Navigatie = () => {
    return ( 
        <nav class="nav">
        <a class="nav__a" target="_blank" href="https://www.amsterdam.nl/pmb/mensen/">Personeel</a>
        <a class="nav__a" target="_blank" href="https://www.amsterdam.nl/pmb/expertise/">Expertise</a>
        <a class="nav__a" href="#projecten">Projecten</a>
        <a class="nav__a" target="_blank" href="https://www.amsterdam.nl/pmb/contact/">Contact</a>
      </nav>
    );
}

export default Navigatie;
