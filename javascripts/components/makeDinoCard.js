const dinoCard = (dino, index) => {
    return `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${dino.name}</h5>
        <p class="card-text">${dino.imageUrl}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${dino.owner}</li>
        <li class="list-group-item">${dino.age}/li>
        <li class="list-group-item">${dino.type}</li>
    </ul>
    <div class="card-buttons">
    <button type="button" class="btn btn-primary" id="pet-dino">Pet</button>
    <button type="button" class="btn btn-secondary" id="feed-dino">Feed</button>
    <button type="button" class="btn btn-success" id="dino-adventure">Adventure</button>
    <button type="button" class="btn btn-danger" id="remove-dino">Remove</button>
        </div>
    </div>`
}

export { dinoCard }