const API = 'https://magic-aliexpress1.p.rapidapi.com/api/product/'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7591082f96msh3c24002190fdae8p15d8f6jsn00c820160549',
		'X-RapidAPI-Host': 'magic-aliexpress1.p.rapidapi.com'
	}
};

export async function get(Id) {
    return await fetch(API + Id, options)
	.then(response => response.json())
}

