import {render} from './modules/render'

var projects = []

async function DOMInteraction() {
    startNewProject()
}

function startNewProject() {

    class Project {
        constructor (name, icon) {
            this.name = name 
            this.icon = icon
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

    const rendering = render()
    for (let i = 0; i < pages.length; i++) {
        pages[i].addEventListener('click', () =>{ 
            Delete(document.querySelector('.Content'))
            console.log(projects[i])
            rendering.project(projects[i].name, projects[i].icon)
        })
    }

}

function Delete(content) {
    while (content.hasChildNodes()) {
        content.removeChild(content.firstChild)
    }
}


document.addEventListener('DOMContentLoaded', DOMInteraction)