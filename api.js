document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search').addEventListener('click', function() {
        const word = document.getElementById('box').value;
        fetchData(word);
    });

    document.getElementById('down').addEventListener('click', function() {
        const word = document.getElementById('box').value;
        downloadData(word);
    });

    async function fetchData(box) {
        const url = `https://api.api-ninjas.com/v1/thesaurus?word=${box}`;
        const options = {
            method: 'GET'
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            const h = document.getElementById('ans');

            const contentBlock = document.createElement('div');
            contentBlock.classList.add('hh');

            const searchedWordElement = document.createElement('strong');
            searchedWordElement.textContent = `Searched Word: ${box}`;
            contentBlock.appendChild(searchedWordElement);
            contentBlock.appendChild(document.createElement('br'));

            const displayedSynonyms = document.createElement('div');
            displayedSynonyms.textContent = result.synonyms.slice(0, 5).join(', ');
            contentBlock.appendChild(displayedSynonyms);

            const remainingSynonyms = result.synonyms.slice(5);

            const readMoreLink = document.createElement('a');
            readMoreLink.href = '#';
            readMoreLink.textContent = 'Read More';
            contentBlock.appendChild(document.createElement('br'));
            contentBlock.appendChild(readMoreLink);

            readMoreLink.addEventListener('click', function() {
                const moreSynonyms = remainingSynonyms.slice(0, 5).join(', ');
                displayedSynonyms.textContent += moreSynonyms;
                remainingSynonyms.splice(0, 5);

                if (remainingSynonyms.length === 0) {
                    readMoreLink.style.display = 'none';
                }
            });

            h.innerHTML = '';
            h.appendChild(contentBlock);
        } catch (error) {
            console.error(error);
        }
    }

    async function downloadData(box) {
        const url = `https://api.api-ninjas.com/v1/thesaurus?word=${box}`;

        try {
            const response = await fetch(url);
            const result = await response.json();

            // Create a data URI for the API data
            const data = "data:application/json;charset=utf-8," + encodeURIComponent(JSON.stringify(result));

            // Create a temporary anchor element for downloading
            const anchor = document.createElement('a');
            anchor.href = data;
            anchor.download = `api_data_${box}.json`;

            // Trigger a click event on the anchor to start the download
            anchor.click();
        } catch (error) {
            console.error(error);
        }
    }

    document.getElementById('box').value = '';
});






















