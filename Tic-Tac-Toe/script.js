/*

Preciso de três funções:

-> Gameboard (vai controlar o array e o gameboard)
-> No gameboard eu preciso:
    Criar o gameboard
    Pegar o gameboard
    Definir se lacuna está vazia
-> Game (vai preencher as colunas)
-> User (vai armazenar as informações)
*/

function Gameboard() {

    let board = ['', '', '',
                 '', '', '',
                 '', '', '']

    const getBoard = () => board
    
    const getWinninBoard = () =>  [[[0], [3], [6]], [[1], [4], [7]], [[2], [5], [8]], [[0], [1], [2]], [[3], [4], [5]], [[6], [7], [8]], [[0], [4], [8]], [[6], [4], [2]]]

    const getFullBoard = () => {
        board = getBoard()
        let fullBoard = 0
        board.forEach((cell) => {
            if (cell !== '') { fullBoard += 1}
        })
        return fullBoard
    }
    
    
    return { getBoard  , getWinninBoard , getFullBoard}

}

function Game() {

    const randomic = () => { return Math.floor(Math.random() * 9)}

    let user = User()
    let gameboard = Gameboard()
    let board = gameboard.getBoard()

    
    const checkWin = () => {
        
        let winningP = gameboard.getWinninBoard()
       
        for (i = 0; i < winningP.length; i ++) {
            
                for (checkBoard = 0; checkBoard < board.length; checkBoard ++) {
    
                    if (checkBoard == winningP[i][0][0]) {
                        var board1 = board[checkBoard]
                    }
    
                    if (checkBoard == winningP[i][1][0]) {
                        var board2 = board[checkBoard]
                    }
    
                    if (checkBoard == winningP[i][2][0]) {
                        var board3 = board[checkBoard]
                    }
                    
                    if (board1 !== '' && board2 !== '' && board3 !== '') {
                        if (board1 == board2 && board2 == board3) {
                            return true 
                        }
                    }
                }
            }
            
        }
        console.log(checkWin())
    
        
    while (true) {
        board[randomic()] = user.player()
        user.switchPlay()
        checkWin()
        
        if (checkWin() == true) {
            console.log(board)
            console.log(user.player() + ' won!')
            break
        }
        
        if (gameboard.getFullBoard() == 9) {
            console.log('Its a tie')
            break
        }
    }
    
}    




function User() {

    let play = 'X'
    const player = () => play

    const switchPlay = () => {
        play = play === 'X' ? 'O' : 'X';
    }

    return { player , switchPlay }
}

Game()