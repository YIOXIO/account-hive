const openFormButton = document.querySelector('.my-projects__button');
const projectForm = document.querySelector('.project-form')

function openForm() {
    projectForm.classList.add('project-form_opened')
}

openFormButton.addEventListener('click', openForm)