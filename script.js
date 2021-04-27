const grid = document.querySelector('.grid')
const scoreDisplay = document.querySelector('#scoreboard')
let blocks = []
const width = 28;
let score = 0;



  // 0 - pac-dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty

  // wall decoration
  // 5
  // 6 

  // to improve > the output > setting new class for wall'edge 
  // to make the wall and game look more spae 

  const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,5,5,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 
]

const createGrid = () => {
    for (let i = 0; i < layout.length; i++) {
        // create block
        const block = document.createElement('div')
        // adding styling to each block
        // block.classList.add('block')
        grid.appendChild(block)
        blocks.push(block)
        // console.log(blocks)
        if(layout[i] === 0) {
            blocks[i].classList.add('pac-dot')
        }else if(layout[i] === 1) {
            blocks[i].classList.add('wall')
        }else if (layout[i] === 2) {
            blocks[i].classList.add('ghost-spawn')
        }else if(layout[i] === 3) {
            blocks[i].classList.add('power-pellet')
         }else if(layout[i] === 5){
        blocks[i].classList.add('gate')
        }
    }
}
createGrid()
console.log(blocks.length)

// Pacman positioning 
let pacmanCurrentIndex = 490;

blocks[pacmanCurrentIndex].classList.add('pacman')

// Moving pacman  with arrow key || fps controler mode
// By using this ref. to refer to each arrow key https://keycode.info/
function control(e) {

    blocks[pacmanCurrentIndex].classList.remove('pacman')


    // if(e.keyCode === 37 || e.keyCode === 65) {
    //     console.log('left arrow')
    // }else if(e.keyCode === 38 || e.keyCode === 87) {
    //     console.log('up arrow')
    // }else if(e.keyCode === 39 || e.keyCode === 68) {
    //     console.log('right arrow')
    // }else if(e.keyCode === 40 || e.keyCode === 83) {
    //     console.log('down arrow')
    // }

    // switch statement

    switch(e.keyCode) {
        case 37:
        case 65:
            // to see that pacman doesn't going to hit the wall by 
            // checking the block index of blocks that it not contain class of wall in there  
        if(pacmanCurrentIndex % width !== 0 && !blocks[pacmanCurrentIndex - 1 ].classList.contains('wall') && !blocks[pacmanCurrentIndex - 1 ].classList.contains('ghost-spawn')) {
            pacmanCurrentIndex -= 1;
            if(pacmanCurrentIndex === 364) {
                pacmanCurrentIndex = 391
            }
        console.log('left arrow')
        } 
        break // using break to break block of code that contain in that case

        case 38:
        case 87:
        if(pacmanCurrentIndex - width >= 0 && !blocks[pacmanCurrentIndex - width ].classList.contains('wall') && !blocks[pacmanCurrentIndex - width ].classList.contains('ghost-spawn')) {
            pacmanCurrentIndex -= width;
        }
        console.log('up arrow')
        break

        case 39:
        case 68:
        if(pacmanCurrentIndex % width < 27 && !blocks[pacmanCurrentIndex + 1 ].classList.contains('wall') && !blocks[pacmanCurrentIndex + 1 ].classList.contains('ghost-spawn')) {
            pacmanCurrentIndex += 1
            }
            if(pacmanCurrentIndex === 391) {
                pacmanCurrentIndex = 364
            }
        console.log('right arrow')
        break

        case 40:
        case 83:
        if(pacmanCurrentIndex + width < 784 && !blocks[pacmanCurrentIndex + width ].classList.contains('wall') && !blocks[pacmanCurrentIndex + width ].classList.contains('ghost-spawn')) {
            // 784 = width & width 
            pacmanCurrentIndex += width;
        }
        console.log('down arrow')
        break
    }
    blocks[pacmanCurrentIndex].classList.add('pacman')
    pacmanEatting ()
    superFood ()
    winner ()
    gameover()
    blocks[pacmanCurrentIndex].classList.remove('pac-dot')
    blocks[pacmanCurrentIndex].classList.remove('power-pellet')
    }



document.addEventListener('keydown', control)

function pacmanEatting () {

    if (blocks[pacmanCurrentIndex].classList.contains('pac-dot')) {
        score += 10
        scoreDisplay.innerHTML = score;
    }
}

function superFood () {
    if(blocks[pacmanCurrentIndex].classList.contains('power-pellet')){
        score += 100
        scoreDisplay.innerHTML = score;
        ghosts.forEach(ghost => ghost.isScared = true)
        setTimeout(unscared, 15000) 
    }

}

function unscared () {
    ghosts.forEach(ghost => ghost.isScared = false)
}


class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className;
        this.startIndex = startIndex;
        this.speed = speed;
        this.currentIndex = startIndex;
        this.isScared = false 
        this.timerId = NaN
    }

}

const ghosts = [
    new Ghost('blinky', 348, 250),
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 300),
    new Ghost('clyde', 379, 500)
]


// draw ghost to grid
ghosts.forEach(ghost => { 
    blocks[ghost.startIndex].classList.add(ghost.className)
    blocks[ghost.startIndex].classList.add('ghost')
})



// moving ghost 
ghosts.forEach(ghost => movedGhost(ghost))


function movedGhost(ghost) {
        console.log('moveghost')
        const directions = [-1, +1, -width, +width]
        let direction = directions[Math.floor(Math.random() * 4)]
        console.log(direction)

            ghost.timerId = setInterval(function(){

                if(!blocks[ghost.currentIndex + direction].classList.contains('wall') 
                && !blocks[ghost.currentIndex + direction].classList.contains('ghost')){
                    
                    blocks[ghost.currentIndex].classList.remove(ghost.className)
                    blocks[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
                    ghost.currentIndex += direction

                    blocks[ghost.currentIndex].classList.add(ghost.className)
                    blocks[ghost.currentIndex].classList.add('ghost')
                }else direction = directions[Math.floor(Math.random() * 4)]


                if(ghost.isScared) {
                    blocks[ghost.currentIndex].classList.add('scared-ghost')
                    // console.log('hi')
                }

                if(ghost.isScared && blocks[ghost.currentIndex].classList.contains('pacman')) {
                    blocks[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
                    ghost.currentIndex = ghost.startIndex
                    score +=200
                    scoreDisplay.innerHTML = score;
                    blocks[ghost.startIndex].classList.add(ghost.className)
                    blocks[ghost.startIndex].classList.add('ghost')    
                }
                gameover()
            }, ghost.speed)

}
// clearInterval(ghost.TimerId)

function gameover() {
    if(blocks[pacmanCurrentIndex].classList.contains('ghost') && !blocks[pacmanCurrentIndex].classList.contains('scared-ghost')) {
        scoreDisplay.innerHTML = 'game over'
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        console.log('game over')
        document.removeEventListener('keydown', control)
    }
}

function winner () {
    if(score === 1000) {
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener('keydown', control)
        scoreDisplay.innerHTML = "youre the winner"
    }
}