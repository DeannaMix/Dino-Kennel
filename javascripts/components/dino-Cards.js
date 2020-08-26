import { dinoCard } from './makeDinoCard'
import { dinoObjects, adventureObjects } from '../../helpers/data/dino-array.js'

const printAllDinos = (array) => {
  array.forEach((item, index) => {
    if (item.health >= 50){
      $('#kennel').append(dinoCard(item, index))
    } else if (item.health < 50 && item.health > 0) {
      $('#hospital').append(dinoCard(item, index))
    } else {
      $('#graveyard').append(dinoCard(item, index))
    }
  })
}


export { printAllDinos }
