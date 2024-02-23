
const texto_Resultado = document.getElementById('texto_encriptado');

function encriptar(){
  texto_Resultado.innerHTML = '';
  mostarContenido();
  
  let texto = texto_a_encriptar.value;
  for( i = 0; i < texto.length; i = i + 1){
    let j = i + 1;
    let v = (texto.substring(i,j)).charCodeAt(0) + (texto.length);
    texto_Resultado.innerHTML = texto_Resultado.innerHTML + String.fromCharCode(v);
  }
  limpiarCaja();
  
  }

function desencriptar(){
  let texto = document.getElementById('texto_a_encriptar').value
  texto_Resultado.innerHTML = '';
  for( i = 0; i < texto.length; i = i + 1){
    let j = i + 1;
    let v = (texto.substring(i,j)).charCodeAt(0) - (texto.length);
    texto_Resultado.innerHTML = texto_Resultado.innerHTML + String.fromCharCode(v);
  }
    mostarContenido();
    limpiarCaja();
    
}

function copiar(){
  navigator.clipboard.writeText(texto_Resultado.innerHTML);
  const storage = document.createElement('textarea');
  storage.value = texto_Resultado.innerHTML;
  texto_Resultado.appendChild(storage);
  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand('copy');
  texto_Resultado.removeChild(storage);
  alert("Mensaje copiado");
}
function mostarContenido(){
  cuadro_Texto_Encriptado.style = 'background-image: none;';
  texto_bajoimagen.style = 'display: none';
  copiar_click.style = 'display: grid';
}
function limpiarCaja() {
    texto_a_encriptar.value = '';

}
