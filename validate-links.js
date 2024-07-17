// Usage: node validate-links.js
// This script validates the links in the JSON files and replaces the broken links with the first search result from Bing search API.

const fs = require('fs');

async function search(prompt) {
    try {
        const response = await fetch(`https://api.bing.microsoft.com/v7.0/search?count=1&responseFilter=Webpages&q=${encodeURIComponent(prompt)}`, {
            headers: {
                'Ocp-Apim-Subscription-Key': process.env.BING_SEARCH_API_KEY,
                'Content-Type': 'application/json'
            },
            method: 'GET'
        });
        const data = await response.json();
        return data.webPages.value.map(result => ({
            name: result.name,
            url: result.url,
            snippet: result.snippet
        }));
    } catch (e) {
        //console.error(e);
        return [];
    }
}

async function validateLinks(jsonFile) {
    try {
        const data = fs.readFileSync(jsonFile);
        const jsonData = JSON.parse(data);

        for (const category in jsonData) {
            const resources = jsonData[category];
            for (const resource of resources) {
                const url = resource.url;
                if (!url) continue;
                try {
                    new URL(url);
                    const response = await fetch(url);
                    if (response.status !== 200) {
                        console.warn(`Link ${url} is broken!`, response.status);
                        const prompt = `${resource.title} ${resource.description}`;
                        console.log('searching for: ', prompt);
                        const searchResults = await search(prompt);
                        if (!searchResults[0]) {
                            console.error('No search results found for: ', prompt);
                            continue;
                        }
                        console.log('found url', searchResults[0].url);
                        resource.url = searchResults[0].url;
                    }
                } catch (e) {
                    console.warn(`Link ${url} is not a valid URL!`);
                    const prompt = `${resource.title} ${resource.description}`;
                    console.log('searching for: ', prompt);
                    const searchResults = await search(prompt);
                    if (!searchResults[0]) {
                        console.error('No search results found for: ', prompt);
                        continue;
                    }
                    console.log('found url', searchResults[0].url);
                    resource.url = searchResults[0].url;
                }
            }
        }

        fs.writeFileSync(jsonFile, JSON.stringify(jsonData, null, 2));
        console.log('Links validation completed successfully!');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

validateLinks('Azure AI and Copilot Studio/azure-ai-studio-resources.json');
validateLinks('Azure AI and Copilot Studio/copilot-studio-resources.json');