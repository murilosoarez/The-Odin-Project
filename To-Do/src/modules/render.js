class Task {
    constructor(project, name, date, section) {
        this.project = project
        this.name = name
        this.date = date
        this.section = section
    }
}



export function render() {

    const content = document.querySelector('.Right')

    // Renderiza a página de projeto
    const project = (name, icon, tasks) => {

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

            const section2 = document.createElement('section')
            const label2 = document.createElement('label')
            label2.textContent = 'Insira a data para finalizar a tarefa: '
            const input2 = document.createElement('input')
            input2.setAttribute('type', 'date')
            input2.id = 'date'
            input2.setAttribute('min', '2024-01-01')
            input2.setAttribute('max', '2024-12-31')

            const submit = document.createElement('input')
            submit.setAttribute('type', 'submit')
            submit.id = 'add-task'

            section.append(label, input)
            section2.append(label2, input2)
            form.append(section, section2, submit)
            content.append(form)

        }

        function createTask() {

            const section = document.createElement('section')
            const label = document.createElement('label')
            const task = document.createElement('input')

            const input = document.querySelector('#task')
            const input2 = document.querySelector('#date')

            task.setAttribute('type', 'checkbox')
            label.textContent = input.value

            section.append(task, label)
            content.append(section)

            tasks.push(new Task(name, input.value, input2.value, section))

            task.addEventListener('click', () => {
                label.style.textDecoration = 'line-through'
            })



        }

        function renderTask(tasks) {
            for (let i = 0; i < tasks.length; i++) {
                content.append(tasks[i].section)
            }
        }

        createTitle()
        createInput()
        renderTask(tasks)


        const submit = document.querySelector('#add-task')
        submit.addEventListener('click', (e) => {
            e.preventDefault()
            createTask()
        })
    }

    const calendar = (tasks) => {
        
        
        function createCalendar() {

            const year_number = 2024

            const months = [['January', 31], ['February', 29], ['Mars', 31], ['April', 30], ['May', 31], ['June', 30], ['July', 31], ['August', 31], ['September', 30], ['October', 31], ['November', 30], ['December', 31]]

            let entire = []
            const year = []

            for (let i = 0; i < months.length; i++) {
                for (let day = 1; day <= months[i][1]; day++) {
                    let date = new Date(`${months[i][0]} ${day}, ${year_number}`)
                    entire.push(date)
                }
                year.push([entire])
                entire = []
            }

            for (let i = 0; i < year.length; i++) {
                const monthName = months[i][0]
                const month = document.createElement('div')
                month.className = 'Month'
                const monthIndex = i

                const h1 = document.createElement('h1')
                h1.textContent = monthName

                month.append(h1)
                const section = document.createElement('section')
                for (let day = 1; day <= year[i][0].length; day++) {
                    const div = document.createElement('div')
                    div.innerHTML = `<p>${day}</p>`
                    let task = getTask(day, div, monthIndex)
                    section.append(div)
                }

                month.append(section)
                content.append(month)
            }
        }

        function hoverTask() {
            const task = document.querySelectorAll('#task')
            const div2 = document.querySelectorAll('.Window')
            console.log(task, div2, 'hovertask')
            task.forEach((t) => {
                t.addEventListener('mouseenter', () => {
                    div2.forEach((d) => {
                        d.classList.add('Open')
                        d.classList.remove('Closed')
                    })
                })
                t.addEventListener('mouseleave', () => {
                    div2.forEach((d) => {
                        d.classList.add('Closed')
                        d.classList.remove('Open')
                    })
                })
            })
        }

        function getTask(day, div, monthIndex) {

            function renderTask(task, date, div) {
                const button = document.createElement('button')
                button.id = 'task'
                button.innerHTML = task.project
                const div2 = document.createElement('div2')
                div2.className = 'Window'
                div2.innerHTML = `TASK DO DIA: ${task.name}`
                div.append(button)
                div.append(div2)
            }

            for (let i = 0; i < tasks.length; i++) {
                for (let q = 0; q < tasks[i].length; q++) {
                    // PEGANDO A DATA STRINGADA E TRANSFORMANDO EM OBJETO
                    const task = tasks[i][q]
                    const date = new Date(task.date)
                    date.setDate(date.getDate() + 1)
                    const calendary_day = date.getDate()
                    if (calendary_day == day && date.getMonth() == monthIndex) { renderTask(task, date, div) }
                }
            }
        }

        createCalendar()
        hoverTask()
    }

    return { project, calendar }
}



