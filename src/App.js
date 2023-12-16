import React, { useState } from "react";
import './App.css';
import Header from './Header/Header';
import Navigatie from './Navigatie/Navigatie';
import Banner from './Banner/Banner';
import Article from './Article/Article.jsx';
import Button from './Button/Button.jsx';
import Card from './Cards/Card.jsx';
import Line from './Line/Line.jsx';
import Subtitle from './Subtitle/Subtitle.jsx';
import Footer from './Footer/Footer.jsx';

function App() {
  const [gekozenOnderwerp, setGekozenOnderwerp] = useState("Vastgoed");

  const handleSelectButtonClick = (onderwerp) => {
    setGekozenOnderwerp(onderwerp);
  };
  return (
    <main className="App">
      <Header></Header>
      <Navigatie></Navigatie>
      <Banner></Banner>
      <Article
        titel="Bijdragen aan een toekomstbestendige stad"
        tekst1="Een sociaal-duurzaam Amsterdam"
        tekst2="Voor veel mensen is en blijft Amsterdam een zeer aantrekkelijke plek om te wonen en dus blijven we
        bouwen aan de groei van de stad."
        tekst3="Maar Amsterdam bestaat natuurlijk uit méér dan alleen woningen. Daarom bouwen we aan een
        sociaal-duurzaam Amsterdam: een stad die het welzijn van haar bewoners belangrijk vindt en
        verbetert, door niet alleen woningen te bouwen maar ook te zorgen voor maatschappelijke
        voorzieningen, voor huidige bewoners en toekomstige generaties."
      >
      </Article>
      <Subtitle
        titel="Projecten"></Subtitle>
      <Line></Line>
      <Card></Card>
      <Subtitle
        titel="Organisatie
      "></Subtitle>
      <Line></Line>
      <Button onSelectButtonClick={handleSelectButtonClick}></Button>
      {gekozenOnderwerp === "Vastgoed" && (
        <Article
          titel="Bouwmanagement en Maatschappelijk Vastgoed"
          tekst1="Het ontwikkelen en realiseren van maatschappelijke voorzieningen is binnen de gemeente Amsterdam in handen van
          team BMV: Bouwmanagement en Maatschappelijk Vastgoed, onderdeel van het Projectmanagementbureau. Bij BMV werken
          bouwmanagers en project- en procesmanagers, samen met collega’s van verschillende gemeentelijke afdelingen, aan
          de toekomst van de stad."
          tekst2="BMV stond aan de wieg van het Amsterdamse beleid voor maatschappelijke voorzieningen. Dit beleid werd in 2018
          verankerd in de ‘Referentienormen voor maatschappelijke voorzieningen, groen en spelen’. Het doel van deze
          normen is de groei van de stad te koppelen aan maatschappelijke voorzieningen en activiteiten. Deze worden niet
          vanzelfsprekend door de private sector opgepakt en vragen daarom een actieve rol van de gemeentelijke overheid.
          Het gaat hierbij om gebouwen (zogenaamd maatschappelijk vastgoed) en het – letterlijk – creëren van ruimte voor
          sport, spel, kunst en cultuur."
          tekst3="Naast de maatschappelijke voorzieningen werkt BMV ook aan beheer en faciliteren van goede werkplekken - zoals
          kantoren, werven, garages en opslagruimtes - voor de mensen die de stad en het stadslandschap schoon en netjes
          houden. De stadsdeelkantoren en andere kantoren voor de gemeentelijke organisatie zijn ook onderdeel van ons
          werkveld."
        />
      )}
      {gekozenOnderwerp === "Werkwijze" && (
        <Article
          titel="Werkwijze van BMV"
          tekst1="Integrale aanpak
          De werkgebieden en de expertise van bouwmanagement en maatschappelijk vastgoed overlappen elkaar, vullen elkaar aan en versterken elkaar.
          BMV hanteert daarom een integrale aanpak: een kruisbestuiving tussen verschillende disciplines, uiteenlopend van proces-, project- en bouwmanagement tot planning, financiën, grond en ontwikkeling, vastgoed en juridische zaken.
          De werkzaamheden van BMV omvatten onder andere en natuurlijk afhankelijk van het soort project:"
          tekst2="bestuurlijk adviseren van verschillende directies en het gemeentebestuur (het College van B&W en de gemeenteraad) in de verschillende beleidsfases
          opstellen van een programma van eisen
          onderzoek doen naar geschikte locaties
          controleren van het budget in relatie tot de ambities
          aansturen van een ontwerptraject
          organiseren van selecties en aanbestedingen
          voorbereiden en coördineren van de bouw
          verzorgen van het feestje rond de oplevering."
          tekst3="BMV schakelt tussen project en proces.
          Het team is binnen de gemeente Amsterdam hét adres voor vraagstukken op het snijvlak van het sociale en fysieke domein.
          BMV biedt een integraal en overzichtelijk pakket per project.
          En het verbindt de wensen van de opdrachtgever en de gebruiker aan de mogelijkheden in het gebied, de kosten en de planning."
        />
      )}
      {gekozenOnderwerp === "BMV-Teams" && (
        <Article
          titel="Teams binnen BMV"
          tekst1="Zelfstandig, dynamisch, innovatief
          Bij BMV werken rond de 60 bouwmanagers en project- en procesmanagers maatschappelijk vastgoed, met als thuisbasis een kantoor in het hart van Amsterdam.
          
          Waar nodig schakelt BMV externe experts in, voor specifieke aspecten van een project.
          
          BMV stuurt projecten aan vanuit zelfstandig werkende teams met korte lijnen en veel dynamiek."
          tekst2="In de teams hebben de betreffende medewerkers voldoende tijd om van elkaar te leren, innovatieve ideeën te ontwikkelen of zelfs met een compleet nieuwe aanpak te komen.

          Immers, een stad als Amsterdam staat – net als het leven zelf – nooit stil."
          tekst3="Kijk op de pagina 'Projecten' voor meer informatie over recente projecten waar BMV aan bijdroeg of momenteel bij betrokken is"
        />
      )}
      <Subtitle
        titel="Werken bij"
      ></Subtitle>
      <Line></Line>

      <Article
        titel="Werken of stage lopen bij BMV"
        tekst1="Zelfstandig, dynamisch, innovatief
        Bij BMV werken rond de 60 bouwmanagers en project- en procesmanagers maatschappelijk vastgoed, met als thuisbasis een kantoor in het hart van Amsterdam."
        tekst2="Waar nodig schakelt BMV externe experts in, voor specifieke aspecten van een project.
        In de teams hebben de betreffende medewerkers voldoende tijd om van elkaar te leren, innovatieve ideeën te ontwikkelen of zelfs met een compleet nieuwe aanpak te komen."
        tekst3="Immers, een stad als Amsterdam staat – net als het leven zelf – nooit stil.  Kijk op de pagina 'Projecten' voor meer informatie over recente projecten waar BMV aan bijdroeg of momenteel bij betrokken is"
        link="Projecten"

      >
      </Article>
      <Footer></Footer>

    </main>
  );
}

export default App;
