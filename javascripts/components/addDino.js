import { dinoObjects } from '../../helpers/data/dino-array.js'
import { printAllDinos } from './dino-Cards.js'

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
        <div class="modal-body">
            <form id="dino-form-container">
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
              </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Nevermind!</button>
          <button type="button" class="btn btn-primary">Enter My Dino!</button>
        </div>
      </div>
    </div>
  </div>
        `)
    })
}

const submitUserDinoForm = () => {
    $("#dino-form-container").submit((event) => {
        event.preventDefault();

        let newDino = {}
            newDino.name = $('#dino-name').val();
            newDino.owner = $('#owner-name').val();
            newDino.age = $('#dino-age').val();
            newDino.type = $('#dino-image-url').val();
            newDino.image = $('#dino-type').val();
            newDino.health = 100;
        
        dinoObjects.push(newDino)
        return printAllDinos(dinoObjects)
        
    });

}

const clearUserDinoForm = () => {

}

export { addUserDinoForm }