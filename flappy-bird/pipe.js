// Copyright 2016 Dave Machado

function Pipe(bird) {
    var spacing = random(bird.size * 1.5, height / 4);
    var openingY = random(spacing, height - spacing);
    this.top = openingY - spacing / 2;
    this.bottom = height - (openingY + spacing / 2);
    this.x = width;
    this.pipeWidth = 20;
    this.speed = 2;
    this.highlight = false;

    this.hits = function(bird) {
        if (bird.y < this.top || bird.y > height - this.bottom) {
            if (bird.x > this.x && bird.x < this.x + this.pipeWidth) {
                this.highlight = true;
                return true;
            }
        } else {
            this.highlight = false;
            return false;
        }
    }

    this.offScreen = function() {
        if (this.x < -this.pipeWidth) {
            return true;
        } else {
            return false;
        }
    }

    this.show = function() {
        fill(255);
        if(this.highlight) {
            fill(255, 0, 0);
        }
        rect(this.x, 0, this.pipeWidth, this.top);
        rect(this.x, height - this.bottom, this.pipeWidth, this.bottom);
    }

    this.update = function() {
        this.x -= this.speed;
    }
}
