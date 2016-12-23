var s;
var snakeIsDead;
var songGame;
var songDie;
var score;
var slider;
var button;
var scl = 20;
var food;

function setup() {
    createCanvas(600,600);
    frameRate(10);
    s = new Snake();
    snakeIsDead = false;
    pickLocation();
    slider = createSlider(0, 1, 0.5, 0.01);
    button = createButton("pause");
    button.mousePressed(toggleSong);
    songGame.loop();
}

function preload() {
    songGame = loadSound("music/gameplay.mp3");
    songDie = loadSound("music/die.mp3");
    songCollect = loadSound("music/collect.mp3");
}

function toggleSong() {
    if(songGame.isPlaying()) {
        songGame.pause();
        button.html("play");
    } else {
        songGame.play();
        button.html("pause");
    }
}

function pickLocation() {
    var cols = floor(width / scl);
    var rows = floor(height / scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function gameOver() {
    songGame.stop();
    songDie.play();
    str = "GAME OVER\nScore: " + s.total;
    fill(255);
    textAlign(CENTER);
    textSize(12 + scl);
    text(str, width/2, height/2);
}

function draw() {
    background(51);
    if (!snakeIsDead) {
        songGame.setVolume(slider.value());
        score = s.total;
        str = "SCORE\n" + score;

        if (s.eat(food)) {
            songCollect.play();
            pickLocation();
        }
        if(s.death()) {
            songGame.stop();
            songDie.play();
            button.attribute('disabled','true');
            snakeIsDead = true;
        }
        s.update();
        s.show();
        fill(255, 0, 100);
        rect(food.x, food.y, scl, scl);
        fill(255);
        textAlign(CENTER);
        textSize(12 + scl);
        text(str, width/2, height/2);
    } else {
        str = "GAME OVER\n\nFinal Score: " + score;
        fill(255);
        textAlign(CENTER);
        textSize(12 + scl);
        text(str, width/2, height/2);
    }
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        s.dir(0, -1);
    } else if (keyCode == DOWN_ARROW) {
        s.dir(0, 1);
    } else if (keyCode == LEFT_ARROW) {
        s.dir(-1, 0);
    } else if (keyCode == RIGHT_ARROW) {
        s.dir(1, 0);
    }
}
