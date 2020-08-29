import { petDinoClick } from './petDino.js'


const dinoCard = (item) => {
    return `<div class="card" style="width: 18rem;">
    <img src=" ${item.imageUrl}" class="card-img-top" alt="${item.imageUrl}">
    <div class="card-body">
        <h5 class="card-title">Name: ${item.name}</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Owner: ${item.owner}</li>
        <li class="list-group-item">Age ${item.age}</li>
        <li class="list-group-item">Type: ${item.type}</li>
    </ul>
    <div class="card-buttons">
    <button type="button" class="pet-dino btn btn-primary">Pet</button>
    <button type="button" class="feed-dino btn btn-secondary" id="feed-dino">Feed</button>
    <button type="button" class="btn btn-success" id="dino-adventure">Adventure</button>
    <button type="button" class="remove-dino btn btn-danger" id="remove-${item.id}">Remove</button>
        </div>
    </div>`
}

export { dinoCard }