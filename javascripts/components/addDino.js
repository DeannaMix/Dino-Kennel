import { dinoObjects, dinos } from '../helpers/data/dinoData.js'
import { printAllDinos } from './dinoCards.js'

const addUserDinoForm = () => {
    $('#user-add-dino').on('click', () => {
        $('#user-added-dino').html(`
        <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addDinoForm">Enter your Dino Info</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form id="dino-form-container">
        <div class="modal-body">
                <div class="form-column">
                  <div class="col">
                    <input type="text" class="form-control" id="dino-name" placeholder="Dino Name">
                  </div>
                  <div class="col">
                    <input type="text" class="form-control" id="owner-name" placeholder="Owner Name">
                  </div>
                  <div class="col">
                    <input type="text" class="form-control" id="dino-age" placeholder="Dino Age">
                  </div>
                  <div class="col">
                    <input type="text" class="form-control" id="dino-image-url" placeholder="Dino Image URLs">
                  </div>
                  <div class="col">
                    <input type="text" class="form-control" id="dino-type" placeholder="Dino Type">
                  </div>
                  
                </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Nevermind!</button>
          <button type="submit" class="btn btn-primary">Enter My Dino!</button>
        </div>
        </form>
      </div>
    </div>
  </div>
        `)
        $("#dino-form-container").submit((event) => {
            event.preventDefault();
        
            let newDino = {
                name: $('#dino-name').val(),
                owner: $('#owner-name').val(),
                age: $('#dino-age').val(),
                imageUrl: $('#dino-image-url').val(),
                type: $('#dino-type').val(),
                health: 100,
            }
        
            dinos.push(newDino)
            printAllDinos(dinos)
            
        });
    })
}


const clearUserDinoForm = () => {

}

export { addUserDinoForm }