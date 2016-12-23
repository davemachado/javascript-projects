// Copyright 2016 Dave Machado
var bird;
var pipes = [];
var score = 0;
var soundUP;
var soundGO;
var soundPT;
var soundDD;
var gameOver = false;

function setup() {
    createCanvas(400, 600);
    bird = new Bird;
    pipes.push(new Pipe(bird));
}

function preload() {
  soundUP = loadSound('assets/wing.wav');
  soundGO = loadSound('assets/hit.wav');
  soundPT = loadSound('assets/point.wav');
  soundDD = loadSound('assets/die.wav');
}

function playSound(sound) {
    if(!sound.isPlaying()) {
        sound.play();
    }
}

function printScore() {
    fill(255);
    textAlign(CENTER);
    textSize(50);
    if(!gameOver) {
        text(score, width/2, 50 + bird.size);
    } else {
        text("Final Score\n" + score, width/2, height/2);
    }
}

function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}

function draw() {
    background(0, 150, 255);

    for (var i = pipes.length - 1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].update();

        if (pipes[i].hits(bird)) {
            if(!gameOver) {
                gameOver = true;
                playSound(soundGO);
                sleep(1000);
                bird.up();
                bird.gravity *= 3;
                playSound(soundDD);
            }
        }

        if (pipes[i].offScreen()) {
            pipes.splice(i, 1);
        }

        if(bird.passes(pipes[i]) && !gameOver) {
            score++;
            playSound(soundPT);
        }
    }

    bird.show();
    bird.update();
    printScore();

    if (frameCount % 100 == 0) {
        pipes.push(new Pipe(bird));
    }
}

function keyPressed() {
    if (key == ' ' && !gameOver) {
        bird.up();
        soundUP.play();
    }
}
