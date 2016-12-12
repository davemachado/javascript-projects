var angle = 0;
var slider;

function setup() {
    createCanvas(600, 600);
    slider = createSlider(0, PI, PI / 4, 0.001);
    slider.position(20, 20);
}

function draw() {
    background(25);
    angle = slider.value();
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
        branch(len * 0.67);
        pop();
        push();
        rotate(-angle);
        branch(len * 0.67);
        pop();
    }
}
