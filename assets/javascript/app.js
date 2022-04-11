const container = document.querySelector('.container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const btn = document.querySelector('.button');
const pokemon = document.createElement('div');
const newSprite = document.createElement('img');
const label = document.createElement('span');

// Randomly Generated Pokemon Sprites
btn.addEventListener('click', () => {
  // Generates a random collection from 800 pokemon
  let randNum = Math.floor(Math.random() * 800);
  //Loops through and prints one pokemon from the list of 800 Pokemon characters everytime user clicks button
  for(i = 1; i < randNum; ++i){
    pokemon.classList.add('pokemon'); // <---- Adds multiple classes of 
    label.innerText = `#${i}`;
    newSprite.src = `${baseURL}${i}.png`; // <---- Image source; adds pokemon sprite number
    container.appendChild(newSprite); // <---- Appends image to container div
    container.appendChild(label);
  }
})