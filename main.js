// Canvas refecence:
// https://www.w3schools.com/graphics/canvas_reference.asp
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//passo 1 

var txtCor = document.getElementById("cor");
var txtTraco = document.getElementById("traco");

var cor = "red";
var traco = 2;

//passo 2
canvas.addEventListener("mousedown", mouseEvent);
canvas.addEventListener("mouseup", mouseEvent);
canvas.addEventListener("mouseleave", mouseEvent);


function mouseEvent (e) {
    eventoMouse = e.type;
    console.log(eventoMouse);
}

canvas.addEventListener("mousemove", mousemove);

function mousemove (e) {
   posicaoX = e.offsetX;
   posicaoY = e.offsetY;

    if (eventoMouse == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = cor;
        ctx.lineWidth = traco;

        ctx.moveTo(ultimaPosicaoX,ultimaPosicaoY);

        ctx.lineTo(posicaoX, posicaoY);

        ctx.stroke();
    }
    ultimaPosicaoX = posicaoX;
    ultimaPosicaoY = posicaoY;
}

function limpar () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById("cor").value = "";
  document.getElementById("traco").value = "";
}

txtCor.addEventListener("input", function () {
    cor = txtCor.value;
});

txtTraco.addEventListener("input", function (){
   if (txtTraco.value > 0) {
        traco = txtTraco.value;
   }
});