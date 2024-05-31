import './restaurant.css'

const pageRelation = [
    { 'Food': 'Feijoada', 'Price': '.... R$ 15.99', 'URL': 'https://i.imgur.com/WPC6Toa.jpeg', 'Description': 'Tradicional prato brasileiro feito com feijão preto e várias partes de carne de porco' },
    { 'Food': 'Pão de Queijo', 'Price': '.... R$ 13.99', 'URL': 'https://imgur.com/Vj5CFbu.jpeg', 'Description': 'Pãozinho de queijo mineiro feito com polvilho e queijo, crocante por fora e macio por dentro.'},
    { 'Food': 'Acarajé', 'Price': '.... R$ 12.99', 'URL': 'https://imgur.com/X195JgL.jpeg', 'Description': 'Bolinho frito de massa de feijão-fradinho recheado com vatapá e camarão seco, típico da culinária baiana.' },
    { 'Food': 'Brigadeiro', 'Price': '.... R$ 10.99', 'URL': 'https://imgur.com/RqS4lo6.jpeg', 'Description': 'Doce brasileiro feito com leite condensado, chocolate em pó e manteiga, enrolado em bolinhas e coberto com granulado.' },
    { 'Food': 'Galinhada', 'Price': '.... R$ 19.99', 'URL': 'https://imgur.com/Vj2CF8H.jpeg', 'Description': 'Prato brasileiro à base de arroz cozido com pedaços de frango e temperos variados.' },
    { 'Food': 'Coxinha', 'Price': '.... R$ 7.99', 'URL': 'https://imgur.com/zv3gzDQ.jpeg', 'Description': 'Salgado brasileiro em forma de coxa de galinha, recheado com frango desfiado e empanado antes de ser frito.' }
]
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

    const createElement = (element, class_name) => {

        const title = document.createElement(element)
        title.className = class_name
        return title
    }

    const createContent = (type, content, destiny) => {
        const element = document.createElement(type)
        element.textContent = content
        destiny.append(element)
    }

    const setAttribute = (destiny, attribute, data) => {
        destiny.setAttribute(attribute, data)
    }

    /*
    const createText = (name, class_name) => {
        const paragraph = document.createElement('section')
        const paragraphContent = document.createElement('p')
        paragraphContent.textContent = name
        paragraph.className = class_name
        paragraph.append(paragraphContent)
        return paragraph
    }

    */
    return { createElement, createContent, setAttribute }
}

function renderHome(content, render) {

    content.className = 'Main-Content'

    const section_one = render.createElement('section', 'Main-Section-One')
    const section_two = render.createElement('section', 'Main-Section-Two')

    const title_one = render.createElement('section', 'Main-Title')
    render.createContent('h1', 'Bem vindo ao Chapa Quente!', title_one)
    render.createContent('h2', 'Especializado em refeições brasileiras', title_one)
    
    const image = render.createElement('section', 'Content-Image')
    const img = render.createElement('img', '')
    render.setAttribute(img, 'src', 'https://imgur.com/wga9Vb5.gif')
    image.append(img)

    const text = render.createElement('section', 'Content-Text')
    const toggler = render.createElement('div', 'Toggler')
    const toggler_img_one = render.createElement('img', 'Toggler-Image')
    const toggler_img_two = render.createElement('img', 'Toggler-Image')

    const toggler_text = render.createElement('div', 'Toggle-Text')
    const toggler_text_one = render.createElement('div', 'Toggler-One Deact')
    const toggler_text_two = render.createElement('div', 'Toggler-One Deact')

    toggler_img_one.addEventListener('mouseenter', () => {toggler_text_one.className = toggler_text_one.className.replace('Deact', 'Act')})
    toggler_img_one.addEventListener('mouseleave', () => {toggler_text_one.className = toggler_text_one.className.replace('Act', 'Deact')})
    toggler_img_two.addEventListener('mouseenter', () => {toggler_text_two.className = toggler_text_two.className.replace('Deact', 'Act')})
    toggler_img_two.addEventListener('mouseleave', () => {toggler_text_two.className = toggler_text_two.className.replace('Act', 'Deact')})
    
    toggler_text.append(toggler_text_one, toggler_text_two)
    render.createContent('p', 'Refeições', toggler_text_one)
    render.createContent('p', 'Sobremesas', toggler_text_two)
    render.setAttribute(toggler_img_one, 'src', 'https://imgur.com/BOTxOQI.jpeg')
    render.setAttribute(toggler_img_two, 'src', 'https://imgur.com/LHNq05T.jpeg')
    toggler.append(toggler_img_one, toggler_img_two)
    render.createContent('h3', 'Sabor autêntico da culinária brasileira, servido com carinho', text)
    const big_text_sect = render.createElement('sect', 'Big-Text')
    render.createContent('p', ' lugar perfeito para quem deseja saborear o melhor da culinária brasileira em um ambiente acolhedor e vibrante. A Chapa oferece uma experiência culinária autêntica e deliciosa que destaca os sabores intensos e únicos dos ingredientes frescos.', big_text_sect)
    text.append(toggler, toggler_text, big_text_sect)
    
    section_one.append(title_one)
    section_two.append(image, text)

    //render.setAttribute(image, 'src', '')
    //section_two.append(image)
    content.append(section_one, section_two)
}

function renderMenu(content, render) {
    content.className = 'Menu-Content'

    const menuGrid = render.createElement('section', 'Menu-Grid')

    const Box_1 = render.createElement('div', 'Box-1')
    const Box_2 = render.createElement('div', 'Box-2')
    const Box_3 = render.createElement('div', 'Box-3')
    const Box_4 = render.createElement('div', 'Box-4')
    const Box_5 = render.createElement('div', 'Box-5')
    const Box_6 = render.createElement('div', 'Box-6')

    const array = [Box_1, Box_2, Box_3, Box_4, Box_5, Box_6]

    let dict = 0;
    for (let i = 0; i < array.length; i++) {

        const menu_section_one = render.createElement('section', 'Menu-Sect-One')

        const image_section = render.createElement('div', 'Image-Section')
        const title_section = render.createElement('div', 'Title-Section')
        const image = render.createElement('img', '')

        render.setAttribute(image, 'src', pageRelation[dict]['URL'])
        render.createContent('h2', pageRelation[dict]['Food'], title_section)
        render.createContent('p', pageRelation[dict]['Price'], title_section)
        
        image_section.append(image)
        menu_section_one.append(image_section)
        //
        const menu_section_two = render.createElement('section', 'Menu-Sect-Two')
        const description_section = render.createElement('div', 'Description-Section')
        render.createContent('p', pageRelation[dict]['Description'], description_section)
        menu_section_two.append(title_section, description_section)

        array[i].append(menu_section_one, menu_section_two)
        menuGrid.append(array[i])
        dict++
    }
    content.append(menuGrid)
}

function renderAbout(content, render) {
    content.className = 'About-Content'
    
    const section_one = render.createElement('section', 'About-Section-One')
    const section_two = render.createElement('section', 'About-Section-Two')
    const section_three = render.createElement('section', 'About-Section-Three')
    const section_four = render.createElement('section', 'About-Section-Four')

    const image = render.createElement('img', '')
    render.setAttribute(image, 'src', 'https://imgur.com/k7oW316.jpeg')
    section_one.append(image)

    const title_section = render.createElement('div', 'About-Title')
    render.createContent('h1', 'Conheça a Chapa Quente!', title_section)
    render.createContent('p', 'O Chapa Quente é o lugar perfeito para quem deseja saborear o melhor da culinária brasileira em um ambiente acolhedor e vibrante. Especializado em pratos preparados na chapa, o Chapa Quente oferece uma experiência culinária autêntica e deliciosa que destaca os sabores intensos e únicos dos ingredientes frescos.', title_section)
    
    const contact_section = render.createElement('div', 'Contact-Section')
    const telephone_section = render.createElement('div', 'Telephone-Section')
    const telephone_icon = render.createElement('i', 'bx bxs-phone-call')
    telephone_section.append(telephone_icon)
    render.createContent('p', "Telefone: 4002-8922", telephone_section)
    const email_section = render.createElement('div', 'Email-Section')
    const email_icon = render.createElement('i', 'bx bx-book-bookmark')
    email_section.append(email_icon)
    render.createContent('p', "Email: chaponaquente@gmail.com", email_section)
    contact_section.append(telephone_section, email_section)
    
    section_two.append(title_section, contact_section)

    content.append(section_one, section_two, section_three, section_four)

}



function unRender(content) {
    while (content.hasChildNodes()) {
        content.removeChild(content.firstChild)
    }
}


document.addEventListener('DOMContentLoaded', renderContent)