var d=document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l=0, m=0, n=0, o=0;
var colorcito = "#FAA";

for(l=0;l<lineas;l++){
    dibujarLinea(colorcito, 0, 10*l, 10*l+10, 300);
    console.log("Línea "+l);
}

for(m=0;m<lineas;m++){
    dibujarLinea(colorcito, 10*m, 0, 300, 10*m+10);
    console.log("Línea "+l);
}

for(n=0;n<lineas;n++){
    dibujarLinea(colorcito, 300, 10*n, 300-10*n, 300);
    console.log("Línea "+l);
}

for(o=0;o<lineas;o++){
    dibujarLinea(colorcito, 300-10*o, 0, 0, 10*o+10);
    console.log("Línea "+l);
}



dibujarLinea(colorcito,1,1,1,299);
dibujarLinea(colorcito,1,299,299,299);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle=color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}