function comenzar(){
    var e = document.getElementById("c");
    c=e.getContext("2d");
    c.font="bold 24px times";

    c.textAlign="star";
    c.textBaseline="top";
    c.fillText("Hola",100,100);
   var d =c.measureText("Hola");
   c.strokeRect(100,100 d.width,24);

}

window.addEventListener("load", comenzar,false);
