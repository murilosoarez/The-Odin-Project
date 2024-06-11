import './styles.css'


function DOMInteraction() {
    toggleDialogue()
    toggleProjects()
    renderPages()
}


document.addEventListener('DOMContentLoaded', DOMInteraction)


function renderPages() {

    function render() {

        const container = document.querySelector('.Right')
    
        const home = () => {
            for (let i=0; i < 12; i++) {
                const div = document.createElement('div')
                div.textContent = 'Aquafella'
                container.append(div)
            }
        }
    
        const today = () => {
            const div = document.createElement('div')
            div.textContent = 'today'
            container.append(div)
        }
    
        const week = () => {
            const div = document.createElement('div')
            div.textContent = 'week'
            container.append(div)
        }
    
    
        const favorites = () => {
            const div = document.createElement('div')
            div.textContent = 'favorites'
            container.append(div)
        }
    
        
    
        return { home, today, week, favorites }
    }

    const Box = document.querySelectorAll('.Box')
    const rendering = render()

    for (let i = 0; i < Box.length; i++) {
        Box[i].addEventListener('click', () => {

            removeElements()

            if (Box[i].id == 'home') {
                rendering.home()
            }

            else if (Box[i].id == 'today') {
                rendering.today()
            }

            else if (Box[i].id == 'this-week') {
                rendering.week()
            }

            else if (Box[i].id == 'favorites') {
                rendering.favorites()
            }

        })
    }


}

function toggleProjects() {
    const button = document.querySelector('#project-button')
    const list = document.querySelector('#project-list')
    button.addEventListener('click', () => {
        list.classList.toggle('Open')
    })
}

function toggleDialogue() {

    const button = document.querySelector('.Button')
    const dialog = document.querySelector('.Dialog')
    const main = document.querySelector('main')
    let count = 0

    button.addEventListener('click', () => {
        
        if (count == 0) {
            dialog.classList.toggle('Open')
            main.style.filter = 'blur(15px)'
            count += 1
        }

    })

    const close = document.querySelector('#close-button')
        close.addEventListener('click', () => {
            if (count == 1) {
                dialog.classList.toggle('Open')
                main.style.filter = 'blur(0px)'
                count -= 1
            }
        })

    formInteraction()

}

function formInteraction() {
    const submit = document.querySelector('#project-submit')
    const form = document.querySelector('#project-form')

    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const formData = new FormData(form)
        const name = formData.get('name')
        renderNewProject(name)
    })
    
}

function renderNewProject(name) {
    const list = document.querySelector('.List')
    const ul = list.firstElementChild
    
    const li = document.createElement('li')
    ul.append(li)
    const button = document.createElement('button')
    button.innerHTML = name
    li.append(button)
    

}




function removeElements() {
    const container = document.querySelector('.Right')
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild)
    }
}
