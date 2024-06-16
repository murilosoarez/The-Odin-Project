import {render} from './modules/render'

var projects = []

async function DOMInteraction() {
    startNewProject()
}

function startNewProject() {

    class Project {
        constructor (name) {
            this.name = name 
        }
    }

    const form = document.querySelector('form')

    function getProjectForm() {

        function addNewProject() {

            const title = document.querySelector('#project').value 
            const icon = document.querySelector('select').value 

            const li = document.createElement('li')
            li.textContent = icon

            const button = document.createElement('button')
            button.className = 'Project-Page'
            button.id = title
            button.innerHTML = title

            li.append(button)

            document.querySelector('ul').append(li)

            projects.push(new Project(title))
            form.reset()

        }

        addNewProject()
        openNewProject(projects)

    }

    const submit = document.querySelector('#submit')
    submit.addEventListener('click', (e) => { 
        e.preventDefault()
        getProjectForm() 
    })

}

function openNewProject(projects) {
    const pages = document.querySelectorAll('.Project-Page')
    const rendering = render()
    for (let i = 0; i < pages.length; i++) {
        pages[i].addEventListener('click', () =>{ 
            rendering.project(projects[i].name)
        })
    }
}


document.addEventListener('DOMContentLoaded', DOMInteraction)