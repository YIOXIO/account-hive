const openFormButton = document.querySelector('.my-projects__button')
const closeFormButton = document.querySelector('.project-form__reset-button')
const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');
const elementsCard = document.querySelector('.elements__card');
const projectForm = document.querySelector('.project-form');
const inputName = projectForm.querySelector('#name-input');
const inputDesc = projectForm.querySelector('#description-input');
const inputImage = projectForm.querySelector('#image-input');
const submitFormButton = projectForm.querySelector('#submit-button');



function openForm() {
    projectForm.classList.add('project-form_opened')
}

function closeForm() {
    projectForm.classList.remove('project-form_opened')
}


function createCard(evt) {
    const card = cardTemplate.cloneNode(true);
    card.querySelector('.card__image').src = evt.image;
    card.querySelector('.card__name').textContent = evt.name;
    card.querySelector('.card__description').textContent = evt.desc
    elementsCard.append(card)
    return card;

}



function handleSubmitFormAddNewCard(evt) {
    evt.preventDefault()
    const newCard = {
        name: inputName.value,
        desc: inputDesc.value,
        image: inputImage.value
    }
    createCard(newCard)
    projectForm.reset()
    closeForm()
}





projectForm.addEventListener('submit', handleSubmitFormAddNewCard);
openFormButton.addEventListener('click', openForm)
closeFormButton.addEventListener('click', closeForm)
