function Menu(dato, sub, subsub) {
    if(sub === false && subsub === false){
        document.getElementById("demo").innerHTML = dato;
        document.getElementById("demo2").innerHTML = ' ';
        document.getElementById("demo3").innerHTML = ' ';
    }
    else if(subsub=== false){
        document.getElementById("demo").innerHTML = dato;
        document.getElementById("demo2").innerHTML = sub;
        document.getElementById("demo3").innerHTML = ' ';
    }
    else {
        document.getElementById("demo").innerHTML = dato;
        document.getElementById("demo2").innerHTML = sub;
        document.getElementById("demo3").innerHTML = subsub;
    }
}