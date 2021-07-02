import { YouTube } from '../../components/youtube'

export const getStaticPaths = async () => {
  const res = await fetch('https://v1.nocodeapi.com/witek/google_sheets/pgpmgCEwHppZfoeg?tabId=Hashes')
  const data = await res.json()

  const paths = data.data.map(user => {
    return {
      params: { id: user.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch('https://v1.nocodeapi.com/witek/google_sheets/pgpmgCEwHppZfoeg?tabId=Hashes')
  const data = await res.json()
  const filtered = await data.data.find(function (item) {
    return item.id == id
  });

  return {
    props: { user: filtered }
  }
}

const Page = ({ user }) => {

  return (
    <div>
      <h1>Hallo {user.Roepnaam}</h1>
      <p>
        Op woensdag 1 september 2021 gaan we van start met de Minor Smart Industry (MSI). We zijn blij dat jullie je met zo velen hebben aangemeld. Van harte welkom !
      </p>
      <p>
        Hieronder vind je algemene informatie en de invulling van de eerste week. De roostering van de overige weken is helaas pas na de zomervakantie bekend.
      </p>
      <ol>


        <li>
          De naam van je klas is BKN-M06.
        </li>
        <li>

          We starten op woensdag 1 september 9.30 uur in de Meshallen, Nieuweweg 240, 6603 BV Wijchen. Neem je laptop mee. We helpen je dan ook met de installatie van de software op je computer (zie punt 10).
          Op donderdag 2 september worden er ook gedurende de hele dag workshops verzorgd, 's ochtend online en 's middags in de Meshallen (je bent wél de hele dag welkom in de Meshallen). Op vrijdagochtend 3 september is er een workshop in de Meshallen.
        </li>
        <li>
          De eerste 6 weken zijn er vanuit de 4 leerlijnen, workshops gepland op zo’n 3 dagen per week. De workshops gaan over Smart Business, Smart Connection, Smart Technology en Smart Start (o.a. research). Deze 6 weken ben je intensief aan het studeren (zo’n 32 uur, afhankelijk van je voorkennis en talent). In deze weken toon je aan dat je gemotiveerd en geschikt bent om voor één van onze opdrachtgevers met een project aan de slag te gaan. In je rooster zie je deze leerlijnen als volgt terug: MSI1A.9: Smart Start, MSI2A.9: Smart Connection, MSI3A.9: Smart Technology, MSI4A.9: Smart Business en MSI5A.9: Smart Project.
        </li>
        <li>
          Op woensdagochtend 15 september 2021 maak je kennis met de opdrachtgevers en hun vraagstukken.
          Na 6 weken workshops, dus vanaf maandag 11 oktober, ga je in groepen van gemiddeld 3 studenten voor een periode van 12 weken een opdracht doen bij een bedrijf. We verwachten dat je daar 4 dagen in de week aan werkt en 1 dag per week zal er nog een workshop gegeven worden, kan er een bedrijfsbezoek plaatsvinden en is er ruimte voor begeleiding/ intervisie.
        </li>
        <li>
          De herfstvakantie is van 25 tot en met 29 oktober.
        </li>
        <li>
          Door te werken aan het project en je voor te bereiden op en actief deel te nemen aan de trainingen, workshops, bedrijfsbezoeken, intervisies e.d. kun je aantonen dat je je ontwikkeld hebt en voldoet aan de competenties. In een smart portfolio (website) leg je je bewijzen vast. Zonder bewijs kunnen we de competenties niet aftoetsen en dus geen studiepunten verlenen.
        </li>
        <li>
          Moodle is de leeromgeving van de HAN. Je kunt een account aanmaken en je verdiepen in de leeromgeving van MSI (deze is nog wel onder constructie).
        </li>
        <li>
          Je hebt een laptop nodig. Neem die altijd mee en zorg dat je de juiste software hebt geïnstalleerd (zie onderstaande instructies en gedurende het traject).
          Voor het onderdeel Big Data dien je (gratis) software te installeren: Visual Studio Code. Instructies vind je hier.
        </li>
        <li>
          Maak een account aan bij Github en stuur je usernaam door aan Witek ten Hove (witek.tenhove@han.nl).
        </li>
        <li>
          Mocht je je alvast willen verdiepen in de onderwerpen die behandeld zullen worden, lees bijvoorbeeld over IoT, VR/ AR, big data e.d. via McKinsey, HBR, forbes, gartner.com, etc. Meer over AI lees je via deze link.
        </li>
        <li>
          Een student van een vorige lichting (Benno Schuuring) heeft op LinkedIn een alumni groep aangemaakt. Meld je hier aan.
        </li>
      </ol>
      <p>
        Geniet van de zomer en we verheugen ons erop om je op 1 september in Wijchen te ontmoeten!
      </p>
      <p>
        Hartelijke groet van het team van MSI,
        <br />
        <br />
        Witek ten Hove, Hubèrt Bijsterveld, Pieter Bergshoeff & Mariëlle Seegers
      </p>
      <h2>Opdracht</h2>
      <p>
        Tijdens onze eerste ontmoeting op 1 september gaan we samen kijken naar wat Smart Industry - of Industry 4.0 - betekent. De volgende video legt kort uit wat het is.
      </p>
      <YouTube url="v9rZOa3CUC8" />
      <hr />
      <p>
        Je hebt nu een definitie van het begrip Smart Industry. Tijdens de minor gaan we hier gezamenlijk een persoonlijke invulling aan geven. Dit doen we door puzzelstukjes te verzamelen (kennis, indrukken, ervaringen, tests en demo's, etc.). Deze koppelen we aan elkaar en zo ontstaat ons eigen Smart Industry verhaal.
      </p>
      <p>
        Het eerst puzzelstukje vind je hieronder. Deze krijg je van ons - een cadeautje. Maar let op! Vanaf nu verwachten we dat je zelf puzzelstukjes gaat verzamelen en aan elkaar knoopt. Dit noemen we de Smart Journey. Zoals een echte puzzel heeft jouw Smart Journey geen begin en geen einde. Het onderstaande kan een hoekstukje zijn of het midden en je kunt kiezen om eerst de randjes te doen of juist van binnen naar buiten te werken.
      </p>
      <p>
        Jouw opdracht luidt om de eerste koppelingen te gaan leggen. Wat is de betekenis van jouw stukje voor het grotere geheel? Welke relaties met andere elementen binnen Smart Industry kun je ontdekken? Werk een Smart Industry story uit en neem die mee naar onze eerste ontmoeting.
      </p>
      <YouTube url={user.video} />
    </div>

  )
}

export default Page
