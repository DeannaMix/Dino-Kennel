
import { printAllDinos } from './components/dino-Cards.js'
import { dinoCard } from './components/makeDinoCard.js'
import { addUserDinoForm } from './components/addDino.js'

const init = () => {
    addUserDinoForm()
    dinoCard()
    printAllDinos();
}

init()