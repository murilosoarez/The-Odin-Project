import { render } from './modules/render'

var projects = []

async function DOMInteraction() {
    startNewProject()
    toggleDialogue()
    openCalendar()
}

function toggleDialogue() {
    const toggle = document.querySelector('.Toggle-Dialogue')
    const dialog = document.querySelector('.Add')
    toggle.addEventListener('click', () => {
        dialog.classList.toggle('Open')
    })
}

function closeDialogue() {
    const dialog = document.querySelector('.Add')
    dialog.classList.remove('Open')
}

function startNewProject() {

    class Project {
        constructor(name, icon, tasks = []) {
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

        pages[i].addEventListener('click', () => {
            deleteContent(content)
            closeDialogue()
            content.classList.remove('Calendar')
            rendering.project(projects[i].name, projects[i].icon, projects[i].tasks)
        })

    }

}

function openCalendar() {

    const calendar = document.querySelector('.Calendar')
    const content = document.querySelector('.Right')
    const rendering = render()
    
    calendar.addEventListener('click', () => {
        deleteContent(content)
        closeDialogue()
        // GETTING THE TASKS
        const pages = document.querySelectorAll('.Project-Page')
        const tasks = []

        for (let i = 0; i < projects.length; i++) {
            tasks.push(projects[i].tasks)
        }
        content.classList.add('Calendar')
        rendering.calendar(tasks)
    })
}

function deleteContent(content) {
    while (content.hasChildNodes()) {
        content.removeChild(content.firstChild)
    }
}



document.addEventListener('DOMContentLoaded', DOMInteraction)