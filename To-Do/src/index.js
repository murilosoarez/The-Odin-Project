import './styles.css'

function render() {
    const home = (final) => {
        const h1 = document.createElement('h1')
        h1.textContent = 'Home'
        final.append(h1)
    }

    return { home }
}
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.Button')
    const dialog = document.querySelector('.Dialog')
    const main = document.querySelector('main')
    const rendering = render()

    const right = document.querySelector('.Right')
    let count = 0
    button.addEventListener('click', () => {
        dialog.classList.toggle('Open')
        if (count == 0) {
            main.style.filter = 'blur(2px)'
            count += 1
            rendering.home(right)
        }
        else {
            main.style.filter = 'blur(0px)'
            count = 0
        }
   })
})
