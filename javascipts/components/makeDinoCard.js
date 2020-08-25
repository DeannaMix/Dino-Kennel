const dinoCard = (dino, index) => {
    return `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${dino.name}</h5>
        <p class="card-text">${dino.image}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${dino.owner}</li>
        <li class="list-group-item">${dino.age}/li>
        <li class="list-group-item">${dino.type}</li>
    </ul>
    <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
        </div>
    </div>`
}

export { dinoCard }