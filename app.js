

function encriptarDisplay() {
    //cambio de vocales por encriptado
    textoUsuario = document.getElementById('textoUsuario').value;
    textoCifrado = textoUsuario.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    
    //deshabilitar la imagen mostrar texto encriptado
    let imagenOff = document.getElementById('image_1');
    if (imagenOff.style.display === 'none') {
        imagenOff.style.display = 'block';
    } else {
        imagenOff.style.display = 'none';
    }
}