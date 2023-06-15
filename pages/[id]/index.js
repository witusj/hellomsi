import { YouTube, Map } from '../../components/youtube'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import ExtensionIcon from '@material-ui/icons/Extension';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { makeStyles } from '@material-ui/styles';
import Link from 'next/link'
import { data } from '../../data'


export const getStaticPaths = async () => {
    const paths = data.map(user => {
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
    const filtered = await data.find(function (item) {
        return item.id == id
    });

    return {
        props: { user: filtered }
    }
}

const useStyles = makeStyles({
    root: {
    },
    appbar: {
        marginBottom: 30,
        marginTop: 10,
    },
    appbartext: {
        marginLeft: 30,
    },
    listitem: {
        marginBottom: 10,
    },
    sectionheader: {
        marginBottom: 10,
        marginTop: 30,
    },
    mediabox: {
        margin: 30,
    }
})

const Page = ({ user }) => {
    const classes = useStyles();
    return (
        <div>
            <Container>
                <AppBar position="static" color="secondary" className={classes.appbar}>
                    <Toolbar >
                        <ExtensionIcon />
                        <Typography variant="h4" className={classes.appbartext}>
                            Welkom bij MSI
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Typography variant="h3">Hallo {user.roepnaam}</Typography>
                <Box>
                    <Typography variant="h6">
                        <p>
                            Op woensdag 30 augustus 2023 gaan we van start met de Minor Smart Industry (MSI). We zijn blij dat jij en zoveel medestudenten jullie hebben aangemeld. Van harte welkom!
                        </p>
                    </Typography>
                    <Typography variant="body1">
                        <p>
                            Hieronder vind je algemene informatie, de invulling van de eerste week en een eerste opdracht.
                        </p>
                        <ol>
                            <li className={classes.listitem}>
                                De naam van je klas is <Box fontWeight='fontWeightMedium' display='inline'>BKN-M06</Box>.
                            </li>
                            <li className={classes.listitem}>
                                We starten op <Box fontWeight='fontWeightMedium' display='inline'>woensdag 30 augustus om 9.00 uur in de Meshallen, Nieuweweg 240 in Wijchen</Box>. In de ochtend zal een kickoffsessie plaatsvinden met o.a. een presentatie van onze lector Smart Business, Maarten van Gils. De lunch zal door MSI worden verzorgd. De middag is gereserveerd voor de eerst workshop vanuit Smart Business.

                                Op donderdag 31 augustus zal van 11 tot 16u op de HAN in Nijmegen (zie rooster voor exacte locatie) de eerste workshop Smart Technology worden gegeven. De laatste workshop, Smart Connection, in die week vindt plaats op vrijdagochtend 1 september op de HAN in Nijmegen.
                                <Box className={classes.mediabox}>
                                    <Map />
                                </Box>
                            </li>
                            <li className={classes.listitem}>
                                De eerste 6 weken zijn er vanuit de 4 leerlijnen, workshops gepland op zo’n 3 dagen per week. De workshops gaan over Smart Business, Smart Connection, Smart Technology en Smart Me. Deze 6 weken ben je intensief aan het studeren (zo’n 32 uur, afhankelijk van je voorkennis en talent). In deze weken toon je aan dat je gemotiveerd en geschikt bent om voor één van onze opdrachtgevers met een project aan de slag te gaan. In je rooster zie je deze leerlijnen als volgt terug: MSI1A.9: Smart Me, MSI2A.9: Smart Connection, MSI3A.9: Smart Technology, MSI4A.9: Smart Business en MSI5A.9: Smart Project.
                            </li>
                            <li className={classes.listitem}>
                                Op <Box fontWeight='fontWeightMedium' display='inline'>woensdagochtend 6 september 2023</Box> maak je kennis met de opdrachtgevers en hun vraagstukken.
                                Na afronding van de reeks workshops ga je in groepen van 2-3 studenten voor een periode van 12 weken een opdracht doen bij een bedrijf. We verwachten dat je daar 4 dagen in de week aan werkt en 1 dag per week zal er nog een workshop gegeven worden, kan er een bedrijfsbezoek plaatsvinden en is er ruimte voor begeleiding/ intervisie.
                            </li>
                            <li className={classes.listitem}>
                                <EmojiNatureIcon color="error" fontSize="large" /> De herfstvakantie is van 16 - 20 oktober 2023 en de kerstvakantie van 25 december 2023 - 5 januari 2024.
                            </li>
                            <li className={classes.listitem}>
                                Door te werken aan het project en je voor te bereiden op en actief deel te nemen aan de trainingen, workshops, bedrijfsbezoeken, intervisies e.d. kun je aantonen dat je je ontwikkeld hebt en voldoet aan de competenties. In een smart portfolio (website) leg je je bewijzen vast. Zonder bewijs kunnen we de competenties niet aftoetsen en dus geen studiepunten verlenen.
                            </li>
                            <li className={classes.listitem}>
                                <Link href="https://bkmoodle.aoohan.nl/course/view.php?id=535" color="primary"><a target="_blank">Moodle</a></Link> is de leeromgeving van de HAN. Je kunt een account aanmaken en je verdiepen in de leeromgeving van MSI (deze is nog wel onder constructie).
                            </li>
                            <li className={classes.listitem}>
                                Je hebt een laptop nodig. Neem die altijd mee en zorg dat je de juiste software hebt geïnstalleerd (instructies volgen). In de eerste sessies helpen we je met de installatie hiervan.
                            </li>
                            <li className={classes.listitem}>
                                Maak een account aan bij <Link href="https://github.com/" color="primary"><a target="_blank">Github</a></Link> en stuur je usernaam door aan Witek ten Hove (witek.tenhove@han.nl).
                            </li>
                            <li className={classes.listitem}>
                                Mocht je je alvast willen verdiepen in de onderwerpen die behandeld zullen worden, lees bijvoorbeeld over IoT, VR/AR, big data e.d. via McKinsey, HBR, Forbes, Gartner, etc. Meer over AI lees je via deze <Link href="https://www.ai-cursus.nl/" color="primary"><a target="_blank">link</a></Link>. Maak in ieder geval de opdracht die we hieronder hebben toegevoegd.
                            </li>
                            <li className={classes.listitem}>
                                Een student van een vorige lichting (Benno Schuuring) heeft op LinkedIn een alumni groep aangemaakt. Meld je <Link href="https://www.linkedin.com/groups/13661379/" color="primary"><a target="_blank">hier</a></Link> aan.
                            </li>
                        </ol>
                        <p>
                            <Box border={1} bgcolor="primary.main" color="white" borderRadius={16} padding={2} fontSize={22} textAlign="center">Een mooie zomer en tot binnenkort!</Box>
                        </p>
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h4" className={classes.sectionheader}>
                        Opdracht
                    </Typography>

                    <Typography variant="body1">
                        <p>
                            Tijdens onze eerste ontmoeting gaan we samen kijken naar wat Smart Industry - of Industry 4.0 - betekent. De volgende video legt kort uit wat het is.
                        </p>
                    </Typography>
                    <Box className={classes.mediabox}>
                        <YouTube url="v9rZOa3CUC8" />
                    </Box>
                    <Box>
                        <Typography variant="body1">
                            <p>
                                Je hebt nu een definitie van het begrip Smart Industry. Tijdens de minor gaan we hier gezamenlijk een persoonlijke invulling aan geven. Dit doen we door puzzelstukjes te verzamelen (kennis, indrukken, ervaringen, tests en demo's, etc.) Deze koppelen we aan elkaar en zo ontstaat ons eigen Smart Industry verhaal.
                            </p>
                            <p>
                                Het eerste puzzelstukje vind je hieronder (de video). Deze krijg je van ons - een cadeautje. Maar let op! Vanaf nu verwachten we dat je zelf puzzelstukjes gaat verzamelen en aan elkaar knoopt. Dit noemen we de Smart Journey. Zoals een echte puzzel heeft jouw Smart Journey geen begin en geen einde. Het onderstaande kan een hoekstukje zijn of het midden en je kunt kiezen om eerst de randjes te doen of juist van binnen naar buiten te werken.
                            </p>
                            <p>
                                Jouw opdracht luidt om de eerste koppelingen te gaan leggen. Wat is de betekenis van jouw stukje voor het grotere geheel? Welke relaties met andere elementen binnen Smart Industry kun je ontdekken? Werk je eerste Smart Industry story uit en plaats die op het <Link href="https://bkmoodle.aoohan.nl/mod/forum/view.php?id=31972" color="primary"><a target="_blank">forum</a></Link>.

                                Als je wilt, kun je ook een video maken en die op YouTube plaatsen. Deel dan de link naar de video op het forum.

                                Samenwerken wordt aangemoedigd! Zoek elkaar op of nodig anderen uit via Moodle en help elkaar om de eerste stappen te zetten. We zijn benieuwd naar jullie verhalen!
                            </p>

                        </Typography>
                    </Box>
                    <Box className={classes.mediabox}>
                        <YouTube url={user.video} />
                    </Box>
                </Box>
            </Container>
        </div >

    )
}

export default Page
