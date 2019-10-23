let animate1Interval, animate2Interval,
    canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');


let buttonStart = document.querySelector('#buttonStart'),
     buttonStop = document.querySelector('#buttonStop'),
     score = document.querySelector('#score');


buttonStart.onclick = function () {
    requestAnimationFrame(animate);
};

buttonStop.onclick = function () {
  clearInterval(animate1Interval);
  clearInterval(animate2Interval);
  ctx.clearRect(0,0, canvas.clientWidth, canvas.clientWidth);
  score.innerHTML = 0;
};

function animate() {
    function Square() {
        this.count = Math.random() * 3;
        this.x = Math.random() * 620;
        this.y = 0;
        this.w = 20;
        this.h = 20;

        this.r = Math.round(Math.random() * 255);
        this.g = Math.round(Math.random() * 255);
        this.b = Math.round(Math.random() * 255);
        this.rgba = "rgba(" + this.r + ", " + this.g + ", " + this.b + ", 1)";

        this.draw = function () {
            ctx.fillStyle = this.rgba;
            ctx.fillRect(this.x, this.y, 20, 20);
            this.update();
        };

        this.update = function () {
            this.y += this.count;
        }
    }

    let squares = [];

    function draw() {
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        for (i =0; i < squares.length; i++)
            squares[i].draw();
        update();
        }

        function update() {
            for (let i = 0; i < squares.length; i++) {
                squares[i].update();
            }
        }
        let time = Math.random()*1500;
        animate1Interval = setInterval(function () {

            squares.push(new Square())
        },time);

        animate2Interval = setInterval(draw, 20);

        let isCursorInSquares = function (x, y, squares) {
            return x > squares.x && x < squares.x + squares.w + 8 &&
                   y > squares.y && y < squares.y + squares.h + 20;
        };
console.log('sdsaddsd')
        canvas.onclick = function (e) {
            let x = e.pageX,
                y = e.pageY;

            for (let i = squares.length - 1; i >=0; --i) {
                if (isCursorInSquares(x, y, squares[i])) {
                    delete squares.splice(i, 1);
                    score.innerHTML = Number(score.innerHTML) + 1;

            }
        }
    }
}

























