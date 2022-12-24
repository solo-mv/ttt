const addPlayer = (name, character) =>{
    return {name, character}
}

const gameboard = (()=>{
    let block = document.querySelector(".main-body")
    let board = Array(9);
    

   Array.from(block.children).forEach((square, index)=>{
    square.addEventListener("click", ()=>{
        square.innerHTML = playing.activePlayer.character;
        board[index] = playing.activePlayer.character;
        console.log(board);
        playing.checkWinner();
        playing.changeActivePlayer();

        if(playing.done == false){
            
        }
    })    
   })

   return{
    board
   }
})();

const playing = (()=>{
    const PlayerOne = addPlayer("player one", "X");
    const PlayerTwo = addPlayer("player two", "O");

    let activePlayer = PlayerTwo;
    let done = false;

    const winningCombinations = [
        [0,4,8], [2,4,6], 
        [0,3,6], [1,4,7], [2,5,8], 
        [0,1,2], [3,4,5], [6,7,8]
    ];

    const changeActivePlayer = () => {

        this.activePlayer === PlayerOne? this.activePlayer = PlayerTwo: this.activePlayer = PlayerOne
        console.log(activePlayer.character)
    }

    const randomWinner = () =>{
        let min = 0;
        let max = 8;

        let randomNumber = Math.floor(Math.random()*(max-min+1))+min;

    
    }
    const checkWinner = () =>{
        for(let index = 0; index<winningCombinations.length; index++){
            if(gameboard.board[winningCombinations[index][0]]=== activePlayer.character && gameboard.board[winningCombinations[index][1]]=== activePlayer.character && gameboard.board[winningCombinations[index][2]] === activePlayer.character){
                let heading = document.querySelector(".heading");
                heading.innerHTML = `${this.activePlayer.name} has won the game`
                done = true;
            }else{

            }
        }

        console.log(done)
        changeActivePlayer();
    }

    return{
        checkWinner,
        changeActivePlayer,
        activePlayer,


    }
})();


