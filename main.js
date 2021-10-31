const gridSize = 20;
let snake;

function setup() {
    createCanvas(800, 550);
    frameRate(6);
    snake = new Snake();
}

function draw() {
    background(0);
    snake.move();
    snake.draw();
}

function keyPressed(){
    if(keyCode == LEFT_ARROW){
        snake.changeDirection(DIRECTION.LEFT);
    }else if(keyCode == RIGHT_ARROW){
        snake.changeDirection(DIRECTION.RIGHT);
    }else if(keyCode == UP_ARROW){
        snake.changeDirection(DIRECTION.UP);
    }else if(keyCode == DOWN_ARROW){
        snake.changeDirection(DIRECTION.DOWN);
    }else if(keyCode == 32){
        frameRate(24);
    }else if(keyCode == 83){
        frameRate(0);
    }else if(keyCode == 80){
        frameRate(6);
    } 
}

function drawBox(x, y){
    let maxCol = Math.floor(width / gridSize);
    let maxRow = Math.floor(height / gridSize);

    if(x >= 0 && x < maxCol && y >= 0 && y < maxRow){
        rect(x * gridSize, y * gridSize, gridSize, gridSize);
    }
}