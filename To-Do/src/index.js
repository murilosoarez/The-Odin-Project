import {render} from './modules/render'

var projects = []

async function DOMInteraction() {
    startNewProject()
}

function startNewProject() {

    class Project {
        constructor (name, icon, tasks = []) {
            this.name = name 
            this.icon = icon
            this.tasks = tasks
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
            projects.push(new Project(title, icon))
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
    const content = document.querySelector('.Right')
    const rendering = render()

    for (let i = 0; i < pages.length; i++) {

        pages[i].addEventListener('click', () =>{ 
            deleteContent(content)
            rendering.project(projects[i].name, projects[i].icon, projects[i].tasks)
        })

    }

}

function deleteContent(content) {
    while (content.hasChildNodes()) {
        content.removeChild(content.firstChild)
    }
}


document.addEventListener('DOMContentLoaded', DOMInteraction)