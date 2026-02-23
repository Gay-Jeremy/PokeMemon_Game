const compteur_coups = document.querySelector("#stat_nombre_de_coups");
const compteur_record = document.querySelector("#stat_nombre_de_coups_record");
const pokemon_captures = document.querySelector(".liste_pokemons_captures");
const grille_jeu = document.querySelector("#grille_de_jeu");

function RazGrille() {
	for (let i = 0; i < grille_jeu.children.length; i++) {
		hideBushHTML(i);
	}
}

function hideBushHTML(box_num) {
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

RazGrille();
displayPokeball(5);
displayPokemon(
	3,
	"https://img.pokemondb.net/sprites/scarlet-violet/normal/charmander.png",
);

// function clicBuisson() {
//     for (let bush of grille_pokemon.children) {
//         bush.addEventListener("click" , function () {
//             bush.
//         })
//     }
// }

// async function getData () {
//     const url = "http://127.0.0.1:5500/data/pokemon.json";
//     try {
//     const reponse = await fetch(url);
//     if (!reponse.ok) {
//         throw new Error(`Statut de réponse : ${reponse.status}`);
//     }

//     const resultat = await reponse.json();
//     console.log(resultat);
//     } catch (erreur) {
//     console.error(erreur.message);
//     }
// }

// getData()
