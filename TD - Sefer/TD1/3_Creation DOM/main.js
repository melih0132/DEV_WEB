const playlist = [
	{
		groupe: "Deep Purple",
		titre: "Smoke on the water",
		annee: 1972
	},
	{
		groupe: "Metallica",
		titre: "My friend of misery",
		annee: 1991
	},
	{
		groupe: "Nirvana",
		titre: "Something in the way",
		annee: 1991
	}
]

function create(tag, container, text) {
	let element = document.createElement(tag)
	element.innerText = text
	container.appendChild(element)
	return element
}

const body = document.querySelector("body")

const h1 = create("h1", body, "Playlist")

const gamesTable = create("table",body,"")

for(let chanson of playlist) {
	let tr = create("tr",gamesTable, "")
	create("td", tr, chanson.groupe)
	create("td", tr, chanson.titre)
	create("td", tr, chanson.annee)
}
