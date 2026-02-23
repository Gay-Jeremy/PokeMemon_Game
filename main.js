const compteur_coups = document.querySelector('#stat_nombre_de_coups')
const pokemon_captures = document.querySelector('.liste_pokemons_captures')
const compteur_record =  document.querySelector('#stat_nombre_de_coups_record')
const grille_jeu = document.querySelector('#grille_de_jeu')























function RazGrille() {

    for (i = 0; i < grille_jeu.children.lenght; i++) {
        const div = emp.firstElementChild
        image.classList.remove('pokemon')
        image.classList.add('bush')
        image.src = ('./assets/bush.webp')
    }

    pokeballs.forEach(ball => {
        ball.style.display = 'none'
    })
}

// RazGrille()


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

