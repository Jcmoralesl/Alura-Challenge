// Funcion para encriptar el texto

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
    //deshabilitar el parrafo 1
    let parrafo1Off = document.getElementById('parrafo1');
    if (parrafo1Off.style.display === 'none') {
        parrafo1Off.style.display = 'block';
    } else {
        parrafo1Off.style.display = 'none';
    }
    // deshabilitar el parrafo 2
    let parrafo2Off = document.getElementById('parrafo2');
    if (parrafo2Off.style.display === 'none') {
        parrafo2Off.style.display = 'block';
    } else {
        parrafo2Off.style.display = 'none';
    }
    //mostrar mensaje encriptado
    document.getElementById('mensajeEncriptado').value = textoCifrado;
    document.getElementById('textoUsuario').value = '';
    
};

// Funcion para desencriptar el texto

function desencriptarDisplay() {
    //cambio de encriptado por vocales
    textoDesencriptado = document.getElementById('textoUsuario').value;
    textoUsuario = textoDesencriptado.replace(/enter/gi, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    //mostrar mensaje desencriptado 
    document.getElementById('mensajeEncriptado').value = textoUsuario;
    document.getElementById('textoUsuario').value = '';

    //habilitar la imagen 
    
}
