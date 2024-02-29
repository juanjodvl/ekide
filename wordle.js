let intentos = 6
let lista = ["TORTA","CORTA","TOMAR","COMER","USUAL","YERBA","QUESO"]
let indice = Math.round(Math.random()*(lista.length - 1) + 0)
let palabra = lista[indice]
console.log(palabra)

const boton_reiniciar = document.getElementById("reiniciar");
boton_reiniciar.addEventListener("click", _ =>{
    location.reload()
})

const boton_intentar = document.getElementById("intentar");
boton_intentar.addEventListener("click", intentar)
function intentar(){
    const pal = intento()
    if (pal.length == 5){
        if (pal === palabra){
            boton_intentar.style.backgroundColor = "green"
            let mensaje = fin("<h1>¡HAS GANADO!</h1>")
            boton_reiniciar.style.display = "block"
        }
        const grid = document.getElementById("grid");
        const row = document.createElement("div");
        row.className = "row";
        for (i in palabra){
            const span = document.createElement("span");
            span.className = "letter";
            if (pal[i] === palabra[i]){
                span.innerHTML = pal[i];
                span.style.backgroundColor = "green";
            }else if (palabra.includes(pal[i])){
                span.innerHTML = pal[i];
                span.style.backgroundColor = "yellow";
            }else{
                span.innerHTML = pal[i];
                span.style.backgroundColor = "gray";
            }
            row.appendChild(span)
        }
        grid.appendChild(row)
        intentos --
        if (intentos == 0){
            boton_intentar.style.backgroundColor = "red"
            let mensaje = fin("<h1>¡HAS PERDIDO!</h1>")
            boton_reiniciar.style.display = "block"
        }
    }else{
        document.getElementById("input").value = ""
        document.getElementById("error").style.display = "block"
    }
}
function intento(){
    let intento = document.getElementById("input")
    intento = intento.value 
    intento = intento.toUpperCase()
    return intento
}
function fin(mensaje){
    const input = document.getElementById("input");
    input.disabled = true;
    boton_intentar.disabled = true;
    let contenedor = document.getElementById("intentar");
    contenedor.innerHTML = mensaje;
    return
}

    

