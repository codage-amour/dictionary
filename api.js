document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search').addEventListener('click', function() {
        const word = document.getElementById('box').value;
        fetchData(word);
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
    document.getElementById('box').value = '';

});




















