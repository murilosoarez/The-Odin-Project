import './restaurant.css'

function renderContent() {
    
    const button = document.querySelectorAll('button')
    const content = document.querySelector('.Content')
    const render = renderComponents()
    renderHome(content, render)
    
    button.forEach((btn) => {
        btn.addEventListener('click', () => {
            
            unRender(content)
            if (btn.id == 'home') {
                renderHome(content, render)
            }

            else if (btn.id == 'menu') {
                renderMenu(content, render)
            }

            else if (btn.id == 'about') {
                renderAbout(content, render)
            }
            
        })
    })
}   

function renderComponents() {

    const createTitle = (name) => {
        const title = document.createElement('section')
        title.className = 'Title'
        const titleName = document.createElement('h1')
        titleName.textContent = name
        title.append(titleName)
        return title
    }

    return { createTitle }
}

function renderMenu(content, render) {
    const title = render.createTitle('Menu')

    content.append(title)
}

function renderAbout(content, render) {
    const title = render.createTitle('Sobre')
    content.append(title)
}

function renderHome(content, render) {
    const title = render.createTitle('Sobre')
    const image = document.createElement('section')
    const text = document.createElement('section')
  
    const wrapperDiv = document.createElement('div')
    wrapperDiv.append(image, text)

    image.className = 'Image'
    text.className = 'Text'
    wrapperDiv.className = 'Wrapper'

    content.append(title, wrapperDiv)

    const img = document.createElement('img')
    const paragraph1 = document.createElement('p')
    const paragraph2 = document.createElement('p')

    img.setAttribute('src', 'https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg')
    paragraph1.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consequuntur repudiandae tenetur nam rem quasi aspernatur perferendis iste tempora doloribus numquam, accusamus itaque possimus, laboriosam amet exercitationem eaque saepe nisi!'
    paragraph2.textContent = 'Voluptatibus aliquid neque, nostrum, debitis sequi ipsa dolores non exercitationem beatae recusandae totam incidunt, accusamus enim laudantium perspiciatis perferendis itaque aspernatur ratione doloribus odit dolorem! Ex eius sunt velit similique?'
    
    image.append(img)
    text.append(paragraph1, paragraph2)

}

function unRender(content) {
    while (content.hasChildNodes()) {
        content.removeChild(content.firstChild)
    }
}


document.addEventListener('DOMContentLoaded', renderContent)