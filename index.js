// ------- Réalisation d'un Premier Appel Fetch ------

let url = "https://gateway.marvel.com/v1/public/characters?apikey=1d25f5f78842147d47e5d5a5313a5c27&hash=775b991122a164d1823ff087c55e04a0&ts=1"
fetch(url)
.then(reponse => reponse.json())
.then(response => {
    displayM(response); 
})
.catch((err) => console.log('Erreur :' +err));

// ------ Affichage des Personnages ------

function displayM(response){

    let marvels = response.data.results;
    let selectEl = createHtmlTag('select');
    let body = document.body;

    // (les différentes boucles qu'on peut utiliser en java)
    // for (let marvel in marvels){
    //         let optionEl = createHtmlTag('option');
    //        optionEl.innerHTML = marvels[marvel].name;
    //        append(selectEl, optionEl);
    //        append(body, selectEl);
    // }
    // for(let i = 0; i < marvels.length ; i++ ){
    //     let optionEl = createHtmlTag('option');
    //       optionEl.innerHTML = marvels[i].name;
    //       append(selectEl, optionEl);
    //       append(body, selectEl);
    // }
    // marvels.forEach((marvel) => {
    //     let optionEl = createHtmlTag('option');
    //      optionEl.innerHTML = marvel.name;
    //      append(selectEl, optionEl);
    //      append(body, selectEl);
    // })
    return marvels.map(function(marvel) {
        let optionEl = createHtmlTag('option');
        optionEl.innerHTML = marvel.name;
        optionEl.value = marvel.id;
        append(selectEl, optionEl);
        append(body, selectEl);
        let options = document.querySelectorAll('option');
        options.forEach((option) => {
            option.addEventListener('click', () => {
                console.log('Toto')
            });
        })
    })
    
}

function createHtmlTag(element) {
	return document.createElement(element);
}
function append(parent, el) {
	return parent.appendChild(el);
}

let options = document.querySelectorAll('option');
console.log(options);