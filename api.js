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
            const result = await response.text();
			const h=document.getElementById('ans');
            h.innerHTML = result;
			h.classList.add('hh'); 
			const downloadLink = document.getElementById('down');
            downloadLink.href = `data:text/plain;charset=utf-8,${encodeURIComponent(result)}`;
            downloadLink.download = 'downloaded_data.txt';
			const downLink = document.getElementById('down');
            downLink.addEventListener('click', function() {
                downloadLink.click();});
        } catch (error) {
            console.error(error);
        }
    }
});


