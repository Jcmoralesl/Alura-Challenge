

function encriptarDisplay() {
    textoUsuario = document.getElementById('textoUsuario').value;
    textoCifrado = textoUsuario.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    
}