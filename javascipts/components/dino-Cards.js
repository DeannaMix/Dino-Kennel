import { dinoCard } from './makeDinoCard'
import { dinoObjects, adventureObjects } from './javascripts/helpers/data/dino-array.js'


// const printAllDinos = (array) => {
// $("#healthyDinos").append(`
//         <div class="card" style="width: 18rem;">
//         <img src="..." class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">${dino.name}</h5>
//             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//         </div>
//         <ul class="list-group list-group-flush">
//             <li class="list-group-item">${dino.age}</li>
//             <li class="list-group-item">Dapibus ac facilisis in</li>
//             <li class="list-group-item">Vestibulum at eros</li>
//         </ul>
//         <div class="card-body">
//             <a href="#" class="card-link">Card link</a>
//             <a href="#" class="card-link">Another link</a>
//             </div>
//         </div>`);
// };

const printAllDinos = (array) => {
  array.forEach((dino, index) => {
    if (dino.health >= 50){
      $('#kennel').append(dinoCard(dino, index))
    } else if (dino.health < 50 && dino.health > 0) {
      $('#hospital').append(dinoCard(dino, index))
    } else {
      $('#graveyard').append(dinoCard(dino, index))
    }
  })
}


export { printAllDinos }
