
function encriptar(){
  mostarContenido();
  
  let texto = texto_a_encriptar.value;
 
  for( i = 0; i < texto.length; i = i + 1){
    let j = i + 1;
    let v = (texto.substring(i,j)).charCodeAt(0) + 98;
    texto_encriptado.value = texto_encriptado.value + String.fromCharCode(v);
  }
  console.log(texto_encriptado.value);
  limpiarCaja();
  
  }

function desencriptar(){
  let texto = document.getElementById('texto_a_encriptar').value
  texto_encriptado.value = '';
  for( i = 0; i < texto.length; i = i + 1){
    let j = i + 1;
    let v = (texto.substring(i,j)).charCodeAt(0) - 98;
    texto_encriptado.value = texto_encriptado.value + String.fromCharCode(v);
  }
    mostarContenido();
    limpiarCaja();
    
}

function copiar(){
  navigator.clipboard.writeText(texto_encriptado.value);
  alert("Mensaje copiado");
  location.reload();
}

function limpiarCaja() {
    texto_a_encriptar.value = '';

}
function mostarContenido(){
  texto_encriptado.style = "background-image: none;";
  copiar_click.style = 'visibility: visible;';
  texto_bajoimagen.style = 'visibility: hidden;';
}
function ocultarContenido(){
  texto_encriptado.style = "background-image: url('/imagenes/Muñeco.png');";
  copiar_click.style = 'visibility: hidden;';
  texto_bajoimagen.style = 'visibility: visible;';
}

/*function redimensionar_caja(){
  if (window.matchMedia("(max-width: 768px)").matches = true){
    texto_encriptado.style = "height: 180px;";
  }else{
    texto_encriptado.style = "height: 781px;";
  }
  if (window.matchMedia("(max-width: 375px)").matches = true){
    texto_encriptado.style = "height: 432px;";
    }else{
      texto_encriptado.style = "height: 781px;"
    }
}*/
function condicionesIniciales(){
  ocultarContenido();
}
//window.onresize = redimensionar_caja;