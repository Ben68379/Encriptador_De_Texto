
function encriptar(){
  limpiarCaja2();
  let texto = texto_a_encriptar.value;
  for( i = 0; i < texto.length; i = i + 1){
    let j = i + 1;
    let v = (texto.substring(i,j)).charCodeAt(0) + (texto.length);
    texto_encriptado.value = texto_encriptado.value  + String.fromCharCode(v);
    texto_encriptado_tablet.value = texto_encriptado.value;
    texto_encriptado_celular.value = texto_encriptado.value;
  }
  mostarContenido();
  limpiarCaja();
  
  }

function desencriptar(){
  limpiarCaja2();
  let texto = texto_a_encriptar.value;
  for( i = 0; i < texto.length; i = i + 1){
    let j = i + 1;
    let v = (texto.substring(i,j)).charCodeAt(0) - (texto.length);
    texto_encriptado.value = texto_encriptado.value  + String.fromCharCode(v);
    texto_encriptado_tablet.value = texto_encriptado.value;
    texto_encriptado_celular.value = texto_encriptado.value;
  }
    mostarContenido();
    limpiarCaja();
    
}

function copiar(){
  navigator.clipboard.writeText(texto_encriptado.value);
  const storage = document.createElement('textarea');
  storage.value = texto_encriptado.value;
  texto_encriptado.value.appendChild(storage);
  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand('copy');
  texto_encriptado.value.removeChild(storage);
  alert("Mensaje copiado");
}
function mostarContenido(){
  cuadro_Texto_Encriptado.style = 'background-image: none;';
  texto_bajoimagen.style = 'display: none;';
  texto_bajoimagen_tablet.style = 'display: none;';
  texto_bajoimagen_celular.style = 'display: none;';
  copiar_click.style = 'display: grid;';
  copiar_click_tablet.style = 'display: grid;';
  copiar_click_celular.style = 'display: grid;';
  cuadro_Texto_Encriptado_tablet.style = "height: 20%; transition: 1s";
  cuadro_Texto_Encriptado_celular.style = "height: 70%; transition: 1s;";
}
function limpiarCaja() {
    texto_a_encriptar.value = '';

}
function limpiarCaja2(){
  texto_encriptado.value = '';
    texto_encriptado_tablet.value = '';
    texto_encriptado_celular.value = '';
}
