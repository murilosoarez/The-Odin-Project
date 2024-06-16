export function render() {
    const content = document.querySelector('.Content')
  
    const project = (name) => {
        const h1 = document.createElement('h1')
        h1.textContent = name 
        content.append(h1)
    }

    return { project }
}

function remove(content) {
    while (content.hasChildNodes()) {
        content.removeChild(content.firstChild)
    }
}