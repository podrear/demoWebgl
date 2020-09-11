var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var k="ball";
let X =[100,150,100,127,200,1200,527];
var Y =[100,275,700,350,500,100,100];
var i;
var C=["blue","red","green","yellow","purple","pink","orange"];


var ball0 = {
    x: 100,
    y: 100,

    radius: 25,
    color: "blue",
    draw: function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  };
  var ball1 = {
    x: 150,
    y: 275,
    vx: 0,
    vy: 5,
    radius: 25,
    color: "red",
    draw: function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  };
  var ball2 = {
    x: 500,
    y: 70,
    vx: 5,
    vy: 0,
    radius: 25,
    color: "green",
    draw: function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  };
  var ball3 = {
    x: 1000,
    y: 12,
    vx: 0,
    vy: 5,
    radius: 25,
    color: "yellow",
    draw: function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  };
  var ball4 = {
    x: 50,
    y: 170,
    vx: 5,
    vy: 0,
    radius: 25,
    color: "purple",
    draw: function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  };
  var ball5 = {
    x: 900,
    y: 12,
    vx: 0,
    vy: 5,
    radius: 25,
    color: "pink",
    draw: function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  };
  var ball6 = {
    x: 282,
    y: 178,
    vx: 5,
    vy: 0,
    radius: 25,
    color: "orange",
    draw: function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  };





    
 function draw() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ball1.draw();
    ball1.x +=ball1.vx;
    ball1.y += ball1.vy;
    if (ball1.y + ball1.vy > canvas.height || ball1.y + ball1.vy < 0) {
        ball1.vy = -ball1.vy;
      }
    if(ball1.x==ball0.x&&ball1.y==ball0.y){
        ball1.vx=ball0.vx;
        ball1.vy=ball0.vy;
    }
    ball0.draw();
    ball2.draw();
    ball2.x +=ball2.vx;
    ball2.y += ball2.vy;
      if (ball2.x + ball2.vx > canvas.width || ball2.x + ball2.vx < 0) {
        ball2.vx = -ball2.vx;
      }
    ball3.draw();
    ball3.x +=ball3.vx;
    ball3.y += ball3.vy;
    if (ball3.y + ball3.vy > canvas.height || ball3.y + ball3.vy < 0) {
        ball3.vy = -ball3.vy;
      }
      
    ball4.draw();
    ball4.x +=ball4.vx;
    ball4.y += ball4.vy;
      if (ball4.x + ball4.vx > canvas.width || ball4.x + ball4.vx < 0) {
        ball4.vx = -ball4.vx;
      }
    ball5.draw();
    ball5.x +=ball5.vx;
    ball5.y += ball5.vy;
    if (ball5.y + ball5.vy > canvas.height || ball5.y + ball5.vy < 0) {
        ball5.vy = -ball5.vy;
      }
    ball6.draw();
    ball6.x +=ball6.vx;
    ball6.y += ball6.vy;

      if (ball6.x + ball6.vx > canvas.width || ball6.x + ball6.vx < 0) {
        ball6.vx = -ball6.vx;
      }
    raf = window.requestAnimationFrame(draw);

}


    canvas.addEventListener('mousemove', function(e){
        
          ball0.x = e.clientX;
          ball0.y = e.clientY;
          raf = window.requestAnimationFrame(draw);
    
      });
