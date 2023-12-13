import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer class="footer">
        <section class="footer__section">
          <h3 class="form__h3">Social Media</h3>
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
              <a href="">X (twitter)</a>
            </li>
            <li>
              <a href="">Linkedin</a>
            </li>
          </ul>
    
        </section>
    
        <section class="footer__section">
          <h3 class="form__h3">Over site</h3>
          <ul class="form__ul">
            <li>
              <a class="form__ul--a" href="">Colofon</a>
            </li>
            <li>
              <a class="form__ul--a" href="">Proclaimer en copyright
              </a>
            </li>
            <li>
              <a class="form__ul--a" href="">Sitemap
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
