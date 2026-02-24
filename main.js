const compteur_coups = document.querySelector("#stat_nombre_de_coups");
const compteur_record = document.querySelector("#stat_nombre_de_coups_record");
const pokemon_captures = document.querySelector(".liste_pokemons_captures");
const grille_jeu = document.querySelector("#grille_de_jeu");

function RazGrille() {
	for (let i = 0; i < grille_jeu.children.length; i++) {
		displayBushHTML(i);
		
	}
}

function displayBushHTML(box_num) {
	const box = grille_jeu.children[box_num];
	const image = box.firstElementChild;
	image.classList.remove("pokemon", "pokeball");
	image.classList.add("bush");
	image.src = "./assets/bush.webp";
}

function displayPokeball(box_num) {
	const box = grille_jeu.children[box_num];
	const image = box.firstElementChild;
	image.classList.remove("pokemon", "bush");
	image.classList.add("pokeball");
	image.src = "./assets/pokeball.png";
}

function displayPokemon(box_num, sprite) {
	const box = grille_jeu.children[box_num];
	const image = box.firstElementChild;
	console.log(sprite);
	image.classList.remove("pokeball", "bush");
	image.classList.add("pokemon");
	image.src = sprite;
}

function clickBush(box_num, sprite) {
	const box = grille_jeu.children[box_num];
	box.addEventListener("click", function () {
		displayPokemon(box_num, sprite);
	});
}

async function clickGrille() {
	for (let i = 0; i < grille_jeu.children.length; i++) {
		const resultat = await getData()
		const bush = grille_jeu.children[i];
		const sprite = resultat[i].sprite
		bush.addEventListener("click", function () {
		displayPokemon(i, sprite);
	});
	}
}

RazGrille();
clickGrille()

// displayPokeball(5);
// displayPokemon(
// 	3,
// 	"https://img.pokemondb.net/sprites/scarlet-violet/normal/charmander.png",
// );

// clickBush(3,
//     "https://img.pokemondb.net/sprites/scarlet-violet/normal/charmander.png",
// );

async function getData() {
    const url = "http://127.0.0.1:5500/data/pokemon.json";
    try {
        const reponse = await fetch(url);
        if (!reponse.ok) {
            throw new Error(`Statut de réponse : ${reponse.status}`);
        }
        const resultat = await reponse.json();
        return resultat; // on retourne bien les données
    } catch (erreur) {
        console.error(erreur.message);
        return []; // retourner un tableau vide si erreur
    }
}


