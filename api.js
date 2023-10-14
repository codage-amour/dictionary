const url = 'https://wordsapiv1.p.rapidapi.com/words/hello/typeOf';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7c1d426238mshd54ba47afaaefd5p110884jsn6e1e6cb0cfd0',
		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
	}
};
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}