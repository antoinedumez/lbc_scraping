import { Client } from "@notionhq/client"
import { NOTION_API_KEY, DATABASE_ID } from './config.js';
import {data} from './data.js';

// Initialisez le client Notion
const notion = new Client({ auth: NOTION_API_KEY });
// Remplacez par l'ID de la page qui contient la base de données
const databaseId = DATABASE_ID;

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