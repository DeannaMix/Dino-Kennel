import { dinoCard } from './makeDinoCard.js'
import { dinoObjects, adventureObjects } from '../helpers/data/dinoData.js'
import { petDinoClick } from './petDino.js'
import { feedDinoClick } from './feedDino.js'
import {addUserDinoForm } from './addDino.js'
import { adventureDinoClick } from './dinoAdventure.js'

const printAllDinos = (array) => {
  $('#dino-kennel').empty()
  $('#dino-hospital').empty()
  $('#dino-graveyard').empty()
  array.forEach((item, index) => {
    if (item.health >= 50){
      $('#dino-kennel').append(dinoCard(item, index))
    } else if (item.health < 50 && item.health > 0) {
      $('#dino-hospital').append(dinoCard(item, index))
    } else {
      $('#dino-graveyard').append(dinoCard(item, index))
    }
    $(`#remove-${item.id}`).click(() => {
      array.splice(index, 1)
      printAllDinos(array)
    })
  })
  petDinoClick()
  feedDinoClick()
  addUserDinoForm()
  adventureDinoClick()

}




export { printAllDinos }
