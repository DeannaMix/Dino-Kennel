
import { printAllDinos } from './components/dinoCards.js'
import { dinoCard } from './components/makeDinoCard.js'
import { dinoObjects } from './helpers/data/dinoData.js'
// import { addUserDinoForm } from './components/addDino.js'
// import { dinoObjects} from './helpers/data/dinoData.js'

const init = () => {
    // addUserDinoForm()
    // dinoCard(dinoObjects)
    printAllDinos(dinoObjects());

    
}

init()