const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")
var h3 = document.querySelector(".contenedorH3")
var parrafo = document.querySelector(".contenedorP")
var btncopiar = document.querySelector(".btncopiar")

function ocultar(){
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar")
    btncopiar.classList.add("mostrar") 
}

function btnEnciptar(){
    const TextoEncriptado = encriptar(inputTexto.value)
    mensaje.value = TextoEncriptado;
    mensaje.style.backgroundImage = "none"
    ocultar();
    inputTexto.value = ""
}


function encriptar(stringEncriptada) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],
    ["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])

        }
        
    }
    return stringEncriptada;
}


function btnDesencriptar(){
    const TextoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = TextoEncriptado;
    ocultar();
    mensaje.style.backgroundImage = "none"
    inputTexto.value = ""
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["a","ai"],["e","enter"],["i","imes"],
    ["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll
            (matrizCodigo[i][1],matrizCodigo[i][0])

        }
        
    }
    return stringDesencriptada;
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value) 
    mensaje.value=""
    alert("Texto copiado") 
}