import './App.css';
import Header from './Header/Header';
import Navigatie from './Navigatie/Navigatie';
import Banner from './Banner/Banner';
import Article from './Article/Article.jsx';
import Card from './Cards/Card.jsx';
import Footer from './Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navigatie></Navigatie>
      <Banner></Banner>
      <Article
        titel="Bijdragen aan een toekomstbestendige stad"
        tekst1="Een sociaal-duurzaam Amsterdam"
        tekst2="        Voor veel mensen is en blijft Amsterdam een zeer aantrekkelijke plek om te wonen en dus blijven we
        bouwen aan de groei van de stad."
        tekst3="Maar Amsterdam bestaat natuurlijk uit méér dan alleen woningen. Daarom bouwen we aan een
        sociaal-duurzaam Amsterdam: een stad die het welzijn van haar bewoners belangrijk vindt en
        verbetert, door niet alleen woningen te bouwen maar ook te zorgen voor maatschappelijke
        voorzieningen, voor huidige bewoners en toekomstige generaties."
      >
      </Article>
      <Card></Card>
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
      >
      </Article>
      <Article
        titel="Werken of stage lopen bij BMV"
        tekst1="Zelfstandig, dynamisch, innovatief
        Bij BMV werken rond de 60 bouwmanagers en project- en procesmanagers maatschappelijk vastgoed, met als thuisbasis een kantoor in het hart van Amsterdam."
        tekst2="Waar nodig schakelt BMV externe experts in, voor specifieke aspecten van een project.
        In de teams hebben de betreffende medewerkers voldoende tijd om van elkaar te leren, innovatieve ideeën te ontwikkelen of zelfs met een compleet nieuwe aanpak te komen."
        tekst3="Immers, een stad als Amsterdam staat – net als het leven zelf – nooit stil.         Kijk op de pagina 'Projecten' voor meer informatie over recente projecten waar BMV aan bijdroeg of momenteel bij betrokken is
        "
      >
      </Article>
      <Footer></Footer>
    </div>
  );
}

export default App;
