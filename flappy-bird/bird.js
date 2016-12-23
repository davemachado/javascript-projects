// Copyright 2016 Dave Machado

function Bird() {
    this.size = 32;
    this.y = height/2;
    this.x = 64;
    this.gravity = 0.6;
    this.lift = 15;
    this.velocity = 0;
    this.airResist = 0.9;

    this.passes = function(pipe) {
        if (this.x > pipe.x + (this.size * 2.6)) {
            return true;
        } else {
            return false;
        }
    }

    this.show = function() {
        fill(255, 255, 0);
        ellipse(this.x, this.y, this.size, this.size);
    }

    this.up = function() {
        this.velocity += -this.lift;
    }

    this.update = function() {
        this.velocity += this.gravity;
        this.velocity *= this.airResist;
        this.y += this.velocity;
        this.y = constrain(this.y, 0 + this.size / 2, height - this.size / 2);
    }
}
