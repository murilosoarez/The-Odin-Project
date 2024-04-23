class Book {
    constructor(name, author, pages, status) {
        this.name = name 
        this.author = author 
        this.pages = pages 
        this.status = status
    }
}

document.addEventListener('DOMContentLoaded', () => {
    
    const mainContainer = document.getElementById('main-container')
    const dialogueBox = document.getElementById('dialogue-box')
    
    const submit = document.getElementById('submit')
    const close = document.getElementById('close')
    const button = document.getElementById('btn')

    const bookcase = document.getElementById('bookcase')
   
    // DIALOGUE BOX 
    submit.addEventListener('click', (e) => {  
        
        e.preventDefault()
        
        let library = []
        
        let name = document.getElementById('name').value
        let author = document.getElementById('author').value
        let pages = document.getElementById('pages').value
        let status = document.getElementById('checkbox').checked
        
        let newBook = new Book(name, author, pages, status)
        
        library.push({
            'Title': newBook.name,
            'Author': newBook.author,
            'Pages': newBook.pages,
            'Status': newBook.status
        })
        
        createNewBook(library, bookcase)
        
        dialogueBox.style.display = 'none'
        mainContainer.style.filter = 'blur(0px)'
    })

    button.addEventListener('click', () => {
        dialogueBox.style.display = 'block'
        mainContainer.style.filter = 'blur(5px)'
    })
    
    close.addEventListener('click', () => {
        dialogueBox.style.display = 'none'
        mainContainer.style.filter = 'blur(0px)'
    })  
    
})



function createNewBook(array, bookcase) {
     
    for (i=0; i < array.length; i++) {
        
        const book = document.createElement('div')
        const bookTitle = document.createElement('div')
        const bookAuthor = document.createElement('div')
        const bookPages = document.createElement('div')
        const closeBook = document.createElement('button')
        const bookStatus = document.createElement('label')
        const checkbox = document.createElement('input')
        
        book.className = 'Book' 
        bookTitle.className = 'Title'
        bookAuthor.className = 'Author'
        bookPages.className = 'Pages'
        bookStatus.className = 'Status'

        closeBook.className = 'Close'
        closeBook.id = 'close-button'
        closeBook.innerHTML = 'X'

        checkbox.setAttribute('type', 'checkbox')

        book.append(bookTitle, closeBook, bookAuthor, bookPages, bookStatus)
        
        bookTitle.innerHTML = array[i].Title
        bookAuthor.innerHTML = '<strong> Author: </strong>' + array[i].Author
        bookPages.innerHTML = '<strong> Pages: </strong> ' + array[i].Pages
        bookStatus.innerHTML = '<strong> Read? </strong>'
        if (array[i].Status) { checkbox.checked = true  }

        bookStatus.append(checkbox)
        bookcase.append(book)

        closeBook.addEventListener('click', () => {
            book.remove()
            array.pop()
        })
    
    }
}

