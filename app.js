
let texto_Resultado = document.getElementById('texto_encriptado');

function encriptar(){
  texto_Resultado.innerHTML = '';
  mostarContenido();
  
  let texto = texto_a_encriptar.value;
 
  for( i = 0; i < texto.length; i = i + 1){
    let j = i + 1;
    let v = (texto.substring(i,j)).charCodeAt(0) + 98;
    texto_Resultado.innerHTML = texto_Resultado.innerHTML + String.fromCharCode(v);
  }
  limpiarCaja();
  
  }

function desencriptar(){
  let texto = document.getElementById('texto_a_encriptar').value
  texto_Resultado.innerHTML = '';
  for( i = 0; i < texto.length; i = i + 1){
    let j = i + 1;
    let v = (texto.substring(i,j)).charCodeAt(0) - 98;
    texto_Resultado.innerHTML = texto_Resultado.innerHTML + String.fromCharCode(v);
  }
    mostarContenido();
    limpiarCaja();
    
}

function copiar(){

  navigator.clipboard.writeText(texto_Resultado.innerHTML);
  alert("Mensaje copiado");
  //location.reload();
  texto_Resultado.innerHTML = '';
  copiar_click.style = 'display: none;';
  cuadro_Texto_Encriptado.style = 'background-image: url("/imagenes/Muñeco.png");';
  texto_bajoimagen.style = 'display: grid;';
}
function mostarContenido(){
  cuadro_Texto_Encriptado.style = 'background-image: none;';
  texto_bajoimagen.style = 'display: none';
  copiar_click.style = 'display: grid';
}
function limpiarCaja() {
    texto_a_encriptar.value = '';

}
