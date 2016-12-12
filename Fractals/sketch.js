var angle = 0;
var branchLength = 0;
var sliderAngle;
var sliderLength;

function setup() {
    createCanvas(600, 600);
    sliderAngle = createSlider(0, PI, PI / 4, 0.001);
    sliderLength = createSlider(0, 0.70, 0.45, 0.001);
    sliderAngle.position(20, 20);
    sliderLength.position(20, 60);
}

function draw() {
    background(25);
    angle = sliderAngle.value();
    branchLength = sliderLength.value();
    stroke(255);
    translate(height / 2, height);
    branch(height / 4);
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 4) {
        push();
        rotate(angle);
        branch(len * branchLength);
        pop();
        push();
        rotate(-angle);
        branch(len * branchLength);
        pop();
    }
}
