
import { printAllDinos } from './components/dinoCards.js'
import { dinoObjects } from './helpers/data/dinoData.js'

const init = () => {
    printAllDinos(dinoObjects());
}

init()