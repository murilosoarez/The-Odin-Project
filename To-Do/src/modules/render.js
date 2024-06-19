export function render() {
    const content = document.querySelector('.Content')
  
    // Renderiza a página de projeto
    const project = (name, icon) => {

        function createTitle() {
            const h1 = document.createElement('h1')
            h1.textContent = icon + name
            content.append(h1)
        }

        function createInput() {

            const form = document.createElement('form')
            const section = document.createElement('section')

            const label = document.createElement('label')
            label.textContent = 'Insira a sua tarefa: '

            const input = document.createElement('input')
            input.setAttribute('type', 'text')
            input.id = 'task'

            const submit = document.createElement('input')
            submit.setAttribute('type', 'submit')
            submit.id = 'add-task'

            section.append(label, input, submit)
            form.append(section)
            content.append(form)

        }

        function createTask() {

            const section = document.createElement('section')
            const label = document.createElement('label')
            const task = document.createElement('input')
            
            const input = document.querySelector('#task')
            task.setAttribute('type', 'checkbox')
            label.textContent = input.value 

            section.append(task, label)
            content.append(section)

        }
        
        createTitle()
        createInput()

        const submit = document.querySelector('#add-task')
        submit.addEventListener('click', (e) => {
            e.preventDefault()
            createTask()
        })
    }

    return { project }
}

