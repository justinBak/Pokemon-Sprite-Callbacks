const content = document.querySelector('.content');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const submit = document.querySelector('.button');
const newSprite = document.createElement('img');
const label = document.createElement('span');

// Randomly Generated Pokemon Sprites
submit.addEventListener('click', () => {
  // Generates a random collection from 800 pokemon
  let randNum = Math.floor(Math.random() * 800);
  //Loops through and prints one pokemon from the list of 800 Pokemon characters everytime user clicks button
  for(i = 1; i < randNum; ++i){
    label.innerText = `#${i}`;
    newSprite.src = `${baseURL}${i}.png`; // <---- Image source; adds pokemon sprite number
  };
  content.appendChild(newSprite); // <---- Appends image to container div
  content.appendChild(label); // <---- Appends span to container div
})