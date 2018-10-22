var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 

/*stands for context*/ 
var c = canvas.getContext("2d");
var ctx = canvas.getContext("2d");

c.beginPath();
c.moveTo(350, 200);
c.lineTo(550, 200);
c.lineTo(550, 300);
c.arc(550, 450, 150, Math.PI * 1.5, Math.PI * 1.499, false);
c.strokeStyle="white";
c.lineWidth=5;
c.stroke();


c.beginPath();
c.moveTo(550, 200);
c.lineTo(900, 200);
c.lineTo(900, 300);
c.arc(900, 450, 150, Math.PI * 1.5, Math.PI * 1.499, false);
c.strokeStyle="white";
c.lineWidth=5;
c.stroke();


c.beginPath();
c.moveTo(900, 200);
c.lineTo(1250, 200);
c.lineTo(1250, 300);
c.arc(1250, 450, 150, Math.PI * 1.5, Math.PI * 1.499, false);
c.strokeStyle="white";
c.lineWidth=5;
c.stroke();

c.beginPath();
c.moveTo(1250, 200);
c.lineTo(1400, 200);
c.strokeStyle="white";
c.lineWidth=5;
c.stroke();


ctx.font = "35px Helvetica";
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.fillText("About Me", 550,450); 
ctx.fillText("Most Recent Jobs", 900,450); 
ctx.fillText("Top Three Skills", 1250,450); 


