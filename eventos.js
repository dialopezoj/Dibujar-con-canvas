var teclas ={
    UP:38, DOWN: 40, LEFT: 37, RIGHT: 39
};


document.addEventListener("keydown", dibujarTeclado);
document.addEventListener("mousedown", inicioMouse);
document.addEventListener("mouseup", finalMouse);
document.addEventListener("mousemove", dibujarMouse);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x=150;
var y=150;


dibujarLinea("red", x-1, y-1, x+1, y+1, papel); //Punto inicial teclado
//Bordes externos del canvas
dibujarLinea("black", 1, 1, 299, 1, papel);
dibujarLinea("black", 1, 1, 1, 299, papel);
dibujarLinea("black", 299, 299, 299, 1, papel);
dibujarLinea("black", 299, 299, 1, 299, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle=color;
    lienzo.lineWidth=3;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
    }

function dibujarTeclado(evento){
    var colorcito="green";
    var movimiento=5;
    switch (evento.keyCode){
        case teclas.DOWN: dibujarLinea(colorcito, x, y, x, y+movimiento, papel);
        y=y+movimiento;
        break;
        case teclas.UP: dibujarLinea(colorcito, x, y, x, y-movimiento, papel);
        y=y-movimiento;
        break;
        case teclas.RIGHT: dibujarLinea(colorcito, x, y, x+movimiento, y, papel);
        x=x+movimiento;
        break;
        case teclas.LEFT: dibujarLinea(colorcito, x, y, x-movimiento, y, papel);
        x=x-movimiento;
        break;
    }
}

var colormouse="green";
var cambio=5;

var a,b=0;
var estado=0;

function inicioMouse(evento){
    estado=1;
    x=evento.layerX;
    y=evento.layerY;
}

function finalMouse(evento){
    estado=0;
    x=evento.layerX;
    y=evento.layerY;
}

function dibujarMouse(evento){
    if (estado==1){
        dibujarLinea(colormouse, x, y, evento.layerX, evento.layerY, papel);    
    }    
    x=evento.layerX;
    y=evento.layerY;
}