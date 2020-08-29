// import { adventures } from "../helpers/data/dinoData.js"
// import { printAllDinos } from "./dinoCards.js";

// const startAdventure = (array) => {
//     return array[Math.floor(Math.random() * array.length)];
// }

// const dinoAdventure = (index, item, array) => {
//     $(`#adventure-${index}`).click(() => {
//         item.adventures.push({})
//     })
// }

const adventureDinoClick = () => {
    $(".adventure-dino").click(() => {
        alert("This dino is now out adventuring!")
    })
}


export { adventureDinoClick }


// export { dinoAdventure }