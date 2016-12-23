// Copyright 2016 Dave Machado

function Bird() {
    this.y = height/2;
    this.x = 64;
    this.gravity = 0.6;
    this.lift = 15;
    this.velocity = 0;
    this.airResist = 0.9;

    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, 32, 32);
    }

    this.up = function() {
        this.velocity += -this.lift;
    }

    this.update = function() {
        this.velocity += this.gravity;
        this.velocity *= this.airResist;
        this.y += this.velocity;

        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }
        if (this.y < 0) {
            this.y = height;
            this.velocity = 0;
        }
    }
}
