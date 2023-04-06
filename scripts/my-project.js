const openFormButton = document.querySelector('.my-projects__button');
const projectForm = document.querySelector('.project-form')
const closeFormButton = document.querySelector('.project-form__reset-button')

function openForm() {
    projectForm.classList.add('project-form_opened')
}

function closeForm() {
    projectForm.classList.remove('project-form_opened')
}

openFormButton.addEventListener('click', openForm)
closeFormButton.addEventListener('click', closeForm)

