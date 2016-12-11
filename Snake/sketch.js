var s;
var scl = 20;
var food;

function setup() {
    createCanvas(600,600);
    frameRate(10);
    s = new Snake();
    pickLocation();

}

function pickLocation() {
    var cols = floor(width / scl);
    var rows = floor(height / scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function draw() {
    background(51);

    if (s.eat(food)) {
        pickLocation();
    }

    s.death();
    s.update();
    s.show();
    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
    fill(255);
    textAlign(CENTER);
    textSize(12 + scl);
    text("SCORE\n" + s.total, width/2, height/2);
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
