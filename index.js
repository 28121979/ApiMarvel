// ------- (PARTIE 1) Réalisation d'un Premier Appel Fetch ------

// let url = "https://gateway.marvel.com/v1/public/characters?apikey=1d25f5f78842147d47e5d5a5313a5c27&hash=775b991122a164d1823ff087c55e04a0&ts=1"
// fetch(url)
// .then(reponse => reponse.json())
// .then(response => {
//     displayM(response); 
// })
// .catch((err) => console.log('Erreur :' +err));

// // ------ Affichage des Personnages ------

// function displayM(response){

//     let marvels = response.data.results;
//     let selectEl = createHtmlTag('select');
//     let body = document.body;

  
//     return marvels.map(function(marvel) {
//         let optionEl = createHtmlTag('option');
//         optionEl.innerHTML = marvel.name;
//         optionEl.value = marvel.id;
//         append(selectEl, optionEl);
//         append(body, selectEl);
//         let options = document.querySelectorAll('option');
//         options.forEach((option) => {
//             option.addEventListener('change', () => {       
//             });
//         })
//     })
    
// }

// function createHtmlTag(element) {
// 	return document.createElement(element);
// }
// function append(parent, el) {
// 	return parent.appendChild(el);
// }

// let options = document.querySelectorAll('option');
// console.log(options);

// ------ (PARTIE 2) Interactivité du Dropdown ------















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

    let hash = "775b991122a164d1823ff087c55e04a0";
let pubKey = "1d25f5f78842147d47e5d5a5313a5c27";
let url = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${pubKey}&hash=${hash}`;
let body = document.body;
let containerMarvel = document.querySelector('div');
fetch(url)
.then(response => response.json())
.then(response => displayM(response))
.catch(error => alert("Erreur : " + error));

function displayM(response){

    let marvels = response.data.results;
    let selectEl = createHtmlTag('select');
    
    marvels.map(function(marvel) {
       
      if(marvel.description !="" && marvel.thumbnail.path != "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
        let optionEl = createHtmlTag('option');
        optionEl.innerHTML = marvel.name;
        optionEl.value = marvel.id;
        append(selectEl, optionEl);
        append(body, selectEl);
      }
      
        
        
    })
    selectEl.addEventListener('change', (event) => {
        let idCharacter = event.target.value;
        let url = `http://gateway.marvel.com/v1/public/characters/${idCharacter}?ts=1&apikey=${pubKey}&hash=${hash}`;

        fetch(url)
        .then(response => response.json())
        .then(response => displayCharac(response))
        .catch(error => alert("Erreur : " + error));
            })
    
}
function displayCharac(response){
    let character = response.data.results;
    effacer(containerMarvel);
    let imgC = createHtmlTag('img');
    let h2C = createHtmlTag('h2');
    let pC = createHtmlTag('p');
    
    imgC.src = character[0].thumbnail.path + '.' + character[0].thumbnail.extension;
    h2C.textContent = character[0].name;
    pC.textContent = character[0].description;
    append(containerMarvel,imgC);
    append(containerMarvel, h2C);
    append(containerMarvel,pC);
}

function createHtmlTag(element) {
	return document.createElement(element);
}
function append(parent, el) {
	return parent.appendChild(el);
}
function effacer(element){
    return element.innerHTML = "";
}