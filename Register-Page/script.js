document.addEventListener('DOMContentLoaded', () => {
    
    let viewPassword = Array.from(document.getElementsByClassName('bx bx-compass'))
    let input = document.querySelectorAll('input')
    let button = document.querySelector('button')

    viewPassword.forEach((button) => {
        button.addEventListener('click', () => {

            if (button.id == 'password') {

                input.forEach((i) => { 
                    if (i.id == 'password') {
                        if (i.type == 'password') {
                            i.type = 'text'
                            button.className = 'bx bxs-compass'
                        }
                        else {
                            i.type = 'password'
                            button.className = 'bx bx-compass'
                        }
                    } 
                })
            }

            if (button.id == 'confirm-password') {

                input.forEach((i) => { 
                    if (i.id == 'confirm-password') {
                        if (i.type == 'password') {
                            i.type = 'text'
                            button.className = 'bx bxs-compass'
                        }
                        else {
                            i.type = 'password'
                            button.className = 'bx bx-compass'
                        }
                    } 
                })
            }

        })
    })

    button.addEventListener('click', (e) => {
        //e.preventDefault()

        input.forEach((i) => { 

            if (i.id == 'email') {
                if (!(i.value.includes('@gmail.com'))) {
                    i.style.borderBottom = '1px solid red';
                }
                else {
                    i.style.borderBottom = '1px solid black';
                }
            }

            if (i.id == 'confirm-password') {
                if (i.value !== password) {
                    console.log('error', i.value, password)
                }
            }

        })

    })
})