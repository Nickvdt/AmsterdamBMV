import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer class="footer">
        <section class="footer__section">
          <h3 class="form__h3">Contacttijden</h3>
          <ul class="form__ul">
            <li>
              <p>PMB is bereikbaar op 
                werkdagen tussen 8.30 -
                17.30 uur.</p>
            </li>
          </ul>
    
        </section>
        <section class="footer__section">
          <h3 class="form__h3" id="contact">Social Media</h3>
          <ul class="form__ul">
            <li>
              <a target="_blank" href="https://twitter.com/PMB020">X (twitter)</a>
            </li>
            <li>
              <a target="_blank" href="http://www.linkedin.com/company/projectmanagement-bureau">Linkedin</a>
            </li>
          </ul>
    
        </section>
    
        <section class="footer__section">
          <h3 class="form__h3">Over site</h3>
          <ul class="form__ul">
            <li>
              <a class="form__ul--a" target="_blank" href="https://www.amsterdam.nl/pmb/algemene-onderdelen/colofon/">Colofon</a>
            </li>
            <li>
              <a class="form__ul--a" target="_blank" href="https://www.amsterdam.nl/pmb/algemene-onderdelen/proclaimer-copyright/">Proclaimer en copyright
              </a>
            </li>
            <li>
              <a class="form__ul--a" target="_blank" href="https://www.amsterdam.nl/pmb/algemene-onderdelen/sitemap/">Sitemap
              </a>
            </li>
          </ul>
        </section>
        <section class="footer__section">
          <h3 class="form__h3">Amsterdam</h3>
          <ul class="form__ul">
            <li>
              <p>Nieuws en publiek
                informatie van de 
                gemeente Amsterdam
                vindt u op amsterdam.nl</p>
            </li>
          </ul>
        </section>
    
      </footer>
    );
}

export default Footer;
