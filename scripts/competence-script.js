const inputTemplate = document.querySelector('.input-template').content.querySelector('.competence__item');
const buttonAddInput = document.querySelector('.competence__button-add');
const elementsForm = document.querySelector('.competence__list');
const buttonCloseInput = document.querySelector('.competence__button-close');


function handleAddNewInput(evt) {
    evt.preventDefault()
    const input = inputTemplate.cloneNode(true);
    input.querySelector('.competence__item');
    input.querySelector('.competence__button-close').addEventListener('click', handleDeleteInput);
    elementsForm.append(input)
    return input
}

function handleDeleteInput(evt) {
    evt.target.closest('.competence__item').remove()
}

buttonAddInput.addEventListener('click', handleAddNewInput)
