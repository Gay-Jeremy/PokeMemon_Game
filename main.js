async function getData () {
    const url = "http://127.0.0.1:5500/data/pokemon.json";
    try {
    const reponse = await fetch(url);
    if (!reponse.ok) {
        throw new Error(`Statut de réponse : ${reponse.status}`);
    }

    const resultat = await reponse.json();
    console.log(resultat);
    } catch (erreur) {
    console.error(erreur.message);
    }
}

getData()