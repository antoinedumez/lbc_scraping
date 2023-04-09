import { Client } from "@notionhq/client"
// Vos données JSON
const data =
    [
        {
            "name": "Grand senic 3 1.9dci 130cv 7 places",
            "prix": "3 900 €",
            "kilometrage": "220000 km",
            "annee": "2009",
            "professionnel": false,
            "lieu": "Bassens 33530",
            "url": "https://www.leboncoin.fr/voitures/2329546750.htm"
        },
        {
            "name": "Scenic 3",
            "prix": "7 600 €",
            "kilometrage": "110000 km",
            "annee": "2014",
            "professionnel": false,
            "lieu": "Bordeaux 33000",
            "url": "https://www.leboncoin.fr/voitures/2329529150.htm"
        },
        {
            "name": "Renault scenic 3 bose édition 1.5dci 110cv",
            "prix": "7 500 €",
            "kilometrage": "128000 km",
            "annee": "2013",
            "professionnel": false,
            "lieu": "Bruges 33520",
            "url": "https://www.leboncoin.fr/voitures/2329527981.htm"
        },
        {
            "name": "Scenic 3",
            "prix": "2 000 €",
            "kilometrage": "189000 km",
            "annee": "2009",
            "professionnel": false,
            "lieu": "Cézac 33620",
            "url": "https://www.leboncoin.fr/voitures/2329480511.htm"
        },
        {
            "name": "RENAULT GRAND SCENIC lll 1.5 DCi 110 CV ÉCO 2 DYNAMIQUE",
            "prix": "5 290 €",
            "kilometrage": "198900 km",
            "annee": "2011",
            "professionnel": true,
            "lieu": "Le Taillan-Médoc 33320",
            "url": "https://www.leboncoin.fr/voitures/2322279740.htm"
        },
        {
            "name": "Renault Grand Scénic III dCi 130 Energy FAP eco2 Initiale 7 pl",
            "prix": "9 900 €",
            "kilometrage": "155739 km",
            "annee": "2013",
            "professionnel": true,
            "lieu": "Libourne 33500",
            "url": "https://www.leboncoin.fr/voitures/2304235127.htm"
        },
        {
            "name": "Renault Scénic III dCi 110 Energy eco2 Limited",
            "prix": "11 900 €",
            "kilometrage": "108884 km",
            "annee": "2015",
            "professionnel": true,
            "lieu": "Libourne 33500",
            "url": "https://www.leboncoin.fr/voitures/2319770744.htm"
        },
        {
            "name": "Renault Scénic dCi 110 Energy Intens",
            "prix": "14 490 €",
            "kilometrage": "104182 km",
            "annee": "2016",
            "professionnel": true,
            "lieu": "Le Bouscat 33110",
            "url": "https://www.leboncoin.fr/voitures/2323479405.htm"
        },
        {
            "name": "SUPERBE PEUGEOT 3008 2,0 l HDI 150 cv CT VIERGE",
            "prix": "18 400 €",
            "kilometrage": "107300 km",
            "annee": "2017",
            "professionnel": true,
            "lieu": "Val de Virvée 33240",
            "url": "https://www.leboncoin.fr/voitures/2274781563.htm"
        },
        {
            "name": "Renault Scenic 3",
            "prix": "6 800 €",
            "kilometrage": "187000 km",
            "annee": "2014",
            "professionnel": false,
            "lieu": "Canéjan 33610",
            "url": "https://www.leboncoin.fr/voitures/2329190312.htm"
        },
        {
            "name": "Renault Scénic 1.5 DCI 110 ENERGY LIMITED",
            "prix": "12 490 €",
            "kilometrage": "21554 km",
            "annee": "2014",
            "professionnel": true,
            "lieu": "Bordeaux 33100",
            "url": "https://www.leboncoin.fr/voitures/2324756882.htm"
        },
        {
            "name": "Renault Scenic 1.5 dci 110ch energy business",
            "prix": "12 990 €",
            "kilometrage": "95100 km",
            "annee": "2017",
            "professionnel": true,
            "lieu": "La Teste-de-Buch 33260",
            "url": "https://www.leboncoin.fr/voitures/2280581328.htm"
        },
        {
            "name": "Scenic 3 attelage moteur 150000kms",
            "prix": "3 100 €",
            "kilometrage": "250000 km",
            "annee": "2009",
            "professionnel": false,
            "lieu": "Beychac-et-Caillau 33750",
            "url": "https://www.leboncoin.fr/voitures/2328923145.htm"
        },
        {
            "name": "RENAULT Scénic III Phase 2 BOSE 1.6 dCi eco2 130 cv",
            "prix": "7 990 €",
            "kilometrage": "168500 km",
            "annee": "2015",
            "professionnel": true,
            "lieu": "Libourne 33500",
            "url": "https://www.leboncoin.fr/voitures/2328892180.htm"
        },
        {
            "name": "RENAULT SCENIC III 1.5l DCI 110CH PRIVILEGE",
            "prix": "4 500 €",
            "kilometrage": "205000 km",
            "annee": "2011",
            "professionnel": true,
            "lieu": "Le Teich 33470",
            "url": "https://www.leboncoin.fr/voitures/2317595883.htm"
        },
        {
            "name": "RENAULT Scénic III 1.5 dCi FAP eco2 110 cv",
            "prix": "6 990 €",
            "kilometrage": "145000 km",
            "annee": "2013",
            "professionnel": true,
            "lieu": "Pessac 33600",
            "url": "https://www.leboncoin.fr/voitures/2328794340.htm"
        },
        {
            "name": "RENAULT Scénic III 1.5 dCi FAP eco2 110 cv",
            "prix": "6 990 €",
            "kilometrage": "139000 km",
            "annee": "2012",
            "professionnel": true,
            "lieu": "Pessac 33600",
            "url": "https://www.leboncoin.fr/voitures/2328792442.htm"
        },
        {
            "name": "Grand scenic 3",
            "prix": "4 500 €",
            "kilometrage": "220000 km",
            "annee": "2009",
            "professionnel": false,
            "lieu": "Carignan-de-Bordeaux 33360",
            "url": "https://www.leboncoin.fr/voitures/2328401230.htm"
        },
        {
            "name": "Renault Scénic III dCi 95 Energy Life",
            "prix": "12 750 €",
            "kilometrage": "68044 km",
            "annee": "2017",
            "professionnel": true,
            "lieu": "Libourne 33500",
            "url": "https://www.leboncoin.fr/voitures/2313130911.htm"
        },
        {
            "name": "Renault scenic 3 ph3 1.6l dci 130 cv energy eco2 bose edition \" garantie 12 mois \"",
            "prix": "11 990 €",
            "kilometrage": "99000 km",
            "annee": "2015",
            "professionnel": true,
            "lieu": "Saint-Jean-d'Illac 33127",
            "url": "https://www.leboncoin.fr/voitures/2328172666.htm"
        },
        {
            "name": "Renault Scénic (3) Bose Edition Energy dCi 110 eco2 2015",
            "prix": "9 900 €",
            "kilometrage": "112148 km",
            "annee": "2014",
            "professionnel": true,
            "lieu": "Blanquefort 33290",
            "url": "https://www.leboncoin.fr/voitures/2327938950.htm"
        },
        {
            "name": "Citroën c-crosser exclusive bvm",
            "prix": "10 990 €",
            "kilometrage": "134442 km",
            "annee": "2012",
            "professionnel": false,
            "lieu": "Artigues-près-Bordeaux 33370",
            "url": "https://www.leboncoin.fr/voitures/2327748014.htm"
        },
        {
            "name": "Renault Grand Scénic 1.6 dCi 130ch Energy Business 7 places",
            "prix": "14 490 €",
            "kilometrage": "99150 km",
            "annee": "2017",
            "professionnel": true,
            "lieu": "Biganos 33380",
            "url": "https://www.leboncoin.fr/voitures/2317817805.htm"
        },
        {
            "name": "RENAULT SCENIC III PHASE 2 1.6 dci 130 éco 2 ENERGY BOSE",
            "prix": "9 950 €",
            "kilometrage": "144000 km",
            "annee": "2014",
            "professionnel": true,
            "lieu": "Saint-Laurent-d'Arce 33240",
            "url": "https://www.leboncoin.fr/voitures/2295095041.htm"
        },
        {
            "name": "Renault Scenic 3 phase 3 1.6 DCI 130ch finitions Bose",
            "prix": "4 850 €",
            "kilometrage": "201000 km",
            "annee": "2013",
            "professionnel": false,
            "lieu": "Lormont 33310",
            "url": "https://www.leboncoin.fr/voitures/2327449935.htm"
        },
        {
            "name": "Renault Scénic dCi 130 Energy SL Lounge",
            "prix": "13 590 €",
            "kilometrage": "95609 km",
            "annee": "2015",
            "professionnel": true,
            "lieu": "Bruges 33520",
            "url": "https://www.leboncoin.fr/voitures/2309303316.htm"
        },
        {
            "name": "Renault Scenic 1.5 dCi 110ch energy Intens",
            "prix": "12 990 €",
            "kilometrage": "107000 km",
            "annee": "2016",
            "professionnel": true,
            "lieu": "Libourne 33500",
            "url": "https://www.leboncoin.fr/voitures/2285164765.htm"
        },
        {
            "name": "RENAULT Scénic III 1.5 dCi FAP eco2 110 ch Carminat TOM TOM",
            "prix": "5 990 €",
            "kilometrage": "212118 km",
            "annee": "2011",
            "professionnel": true,
            "lieu": "Bruges 33520",
            "url": "https://www.leboncoin.fr/voitures/2319918200.htm"
        },
        {
            "name": "Renault scenic 3 xmod",
            "prix": "8 695 €",
            "kilometrage": "150000 km",
            "annee": "2013",
            "professionnel": false,
            "lieu": "Saint-Loubès 33450",
            "url": "https://www.leboncoin.fr/voitures/2327226643.htm"
        },
        {
            "name": "Citroen berlingo 1.6 hdi 90 multispace / embrayage neuf",
            "prix": "8 990 €",
            "kilometrage": "167000 km",
            "annee": "2011",
            "professionnel": true,
            "lieu": "Saint-Laurent-d'Arce 33240",
            "url": "https://www.leboncoin.fr/voitures/2305866946.htm"
        },
        {
            "name": "Renault Scenic 3 1.5 dci Expression",
            "prix": "6 900 €",
            "kilometrage": "177700 km",
            "annee": "2013",
            "professionnel": false,
            "lieu": "Bourg 33710",
            "url": "https://www.leboncoin.fr/voitures/2327071356.htm"
        },
        {
            "name": "RENAULT SCENIC III 1.5l DCI 105CH ALYUM",
            "prix": "4 000 €",
            "kilometrage": "275000 km",
            "annee": "2010",
            "professionnel": true,
            "lieu": "Le Teich 33470",
            "url": "https://www.leboncoin.fr/voitures/2320898759.htm"
        },
        {
            "name": "Renault grand scenic 3",
            "prix": "6 800 €",
            "kilometrage": "194200 km",
            "annee": "2013",
            "professionnel": false,
            "lieu": "Ambarès-et-Lagrave 33440",
            "url": "https://www.leboncoin.fr/voitures/2326769095.htm"
        },
        {
            "name": "Renault Scenic III Bose 1.5 dci 110cv",
            "prix": "8 600 €",
            "kilometrage": "126000 km",
            "annee": "2013",
            "professionnel": false,
            "lieu": "Saint-Palais 33820",
            "url": "https://www.leboncoin.fr/voitures/2326608146.htm"
        },
        {
            "name": "Citroen c4 picasso 2l bluehdi 150cv business + gps+camera de recul+jante alu+regulateur de vitesse",
            "prix": "11 900 €",
            "kilometrage": "139400 km",
            "annee": "2016",
            "professionnel": true,
            "lieu": "Vayres 33870",
            "url": "https://www.leboncoin.fr/voitures/2290992836.htm"
        }
    ];

// Initialisez le client Notion
const notion = new Client({ auth: "secret_rP4gav1wAoWutU2mS6bcrf6hZBssdYZbmvJLICqGFrP" });
// Remplacez par l'ID de la page qui contient la base de données
const databaseId = "ef064193cb854c57ad8f316f83e5b018";

async function addItem(item) {
    try {
        await notion.pages.create({
            parent: { database_id: databaseId },
            properties: {
                Name: { title: [{ text: { content: item.name } }] },
                // prix: {number: parseFloat(item.prix),},
                prix: {number: parseFloat(item.prix.replace(/\s+|€/g, '')),},
                kilometrage: {number: parseFloat(item.kilometrage),},
                annee: {number: parseInt(item.annee, 10),},
                pro: { checkbox: item.professionnel },
                lieu: { rich_text: [{ text: { content: item.lieu } }] },
                url: { url: item.url },
            },
        });
        console.log(`Item ${item.name} ajouté à la base de données Notion.`);
    } catch (error) {
        console.error(`Erreur lors de l'ajout de l'élément ${item.name} :`, error);
    }
}

(async () => {
    for (const item of data) {
        await addItem(item);
    }
    console.log("Toutes les données ont été importées dans la base de données Notion.");
})();