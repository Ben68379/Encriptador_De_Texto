
function encriptar(){
  let texto = texto_a_encriptar.value;
    if (texto != ''){ 
    const esValido = validarTexto(texto);
    if (esValido) {
      limpiarCaja2();
      encriptarTexto(texto);
      mostarContenido();

    } else {
      escalar_Instrucciones();
    }
    }else{
      escalar_mensaje();
    }
}
function encriptarTexto(texto){
  const listaCaracteres  = texto.split('');
      const otraLista = ['a', 'e', 'i', 'o', 'u'];
      const listaReemplazada = listaCaracteres.map((caracter) => {
        if (otraLista.includes(caracter)) {
          switch(caracter){
          case 'a':
            return 'ai';
          case 'e':
            return 'enter';
          case 'i':
            return 'imas';
          case 'o':
            return 'ober';
          case 'u':
            return 'ufat';
          }
        }
        return caracter; 
      });
      texto_encriptado.value = listaReemplazada.join('');
      texto_encriptado_tablet.value = texto_encriptado.value;
      texto_encriptado_celular.value = texto_encriptado.value;
}
function desencriptar(){
  const texto = texto_a_encriptar.value;
  if (texto != ''){
    validarTexto(texto);
    const esValido = validarTexto(texto);
    if (esValido) {
      limpiarCaja2();
      desencriptarTexto(texto);
      mostarContenido();
    }
    else{ 
      escalar_Instrucciones();
    }
  }else{
    escalar_mensaje();
  }
  
}
function desencriptarTexto(texto){
  let resultado = texto.replace(/enter/g, "e");
    resultado = resultado.replace(/ober/g, "o");
    resultado = resultado.replace(/ufat/g, "u");
    resultado = resultado.replace(/ai/g, "a");
    resultado = resultado.replace(/imas/g, "i");

    texto_encriptado.value = resultado;
    texto_encriptado_tablet.value = texto_encriptado.value;
    texto_encriptado_celular.value = texto_encriptado.value;
}

function copiar(){
  const texto = texto_encriptado.value;
  copiarTextoAlPortapapeles(texto);
}
function mostarContenido(){
  cuadro_Texto_Encriptado.style = 'background-image: none; position: absolute;';
  texto_bajoimagen.style = 'display: none;';
  texto_bajoimagen_tablet.style = 'display: none;';
  texto_bajoimagen_celular.style = 'display: none;';
  copiar_click.style = 'display: static; background:none; transition: 1s; :hover: scale: .9;';
  copiar_click_tablet.style = 'display: static; background:none; transition: 1s; :hover: scale: .9;';
  copiar_click_celular.style = 'display: static; background:none; transition: 1s; :hover: scale: .9;';
  copiar_click.style = 'background: rgba(0, 255, 0, .5); transition: 1s';
  document.getElementById('copiar_click').innerHTML = "Copiar";
  document.getElementById('copiar_click_celular').innerHTML = "Copiar";
  document.getElementById('copiar_click_tablet').innerHTML = "Copiar";
  cuadro_Texto_Encriptado_tablet.style = `height: 20%; transition: 1s`;
  cuadro_Texto_Encriptado_celular.style = "height: 70%; transition: 1s;";
  document.getElementById('copiar_click').innerHTML = "Copiar";
}
function limpiarCaja2(){
  texto_encriptado.value = '';
    texto_encriptado_tablet.value = '';
    texto_encriptado_celular.value = '';
}

function validarTexto(cadena) {
  // Eliminar acentos
  const cadenaSinAcentos = cadena.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  console.log(cadenaSinAcentos);
  // Eliminar símbolos y convertir a minúsculas
  const cadenaLimpia = cadenaSinAcentos.replace(/[^a-zA-Z\s]/g, '').toLowerCase();
  // Verificar si la cadena limpia es igual a la original
  console.log(cadenaLimpia, cadena);
  return cadenaLimpia === cadena;
 
}

async function copiarTextoAlPortapapeles(texto) {
  try {
      await navigator.clipboard.writeText(texto);
      copiar_click.style = 'background: rgba(0, 255, 0, .5); transition: 1s';
      document.getElementById('copiar_click').innerHTML = "Mensaje copiado";
      copiar_click_celular.style = 'background: rgba(0, 255, 0, .5); transition: 1s';
      document.getElementById('copiar_click_celular').innerHTML = "Mensaje copiado";
      copiar_click_tablet.style = 'background: rgba(0, 255, 0, .5); transition: 1s';
      document.getElementById('copiar_click_tablet').innerHTML = "Mensaje copiado";
      

  } catch (error) {
      copiar_click.style = 'background: red;';
      document.getElementById('copiar_click').innerHTML = "No se ha podido copiar";
      copiar_click_celular.style = 'background: red;';
      document.getElementById('copiar_click_celular').innerHTML = "No se ha podido copiar";
      copiar_click_tablet.style = 'background: red;';
      document.getElementById('copiar_click_tablet').innerHTML = "No se ha podido copiar";
  }
}
 function escalar_Instrucciones(){
  elemento_instrucciones.style = 'transform: scale(1.2); transition: 1s; background-color: rgba(255, 0, 0, .5); display: flex; position: absolute; border-radius:3vw;';
  setTimeout(() => {
    elemento_instrucciones.style = 'transform: scale(1); transition: 1s; background: none; display: flex; position: absolute;';}, 1000);
 }

 function escalar_mensaje(){
  texto_bajoimagen_tablet.style = 'transform: scale(1.5); transition: 1s; background: rgba(255, 0, 0, .5); display: grid; position: absolute; border-radius:1.5vw;';
  setTimeout(() => {
  texto_bajoimagen_tablet.style = 'transform: scale(1); transition: 1s; background: none; display: grid; position: absolute;';}, 1000);
  texto_bajoimagen_celular.style = 'transform: scale(1.1); transition: 1s; background: rgba(255, 0, 0, .5); display: grid; position: absolute; border-radius:1.5vw;';
  setTimeout(() => {
  texto_bajoimagen_celular.style = 'transform: scale(1); transition: 1s; background: none; display: grid; position: absolute;';}, 1000);
  texto_bajoimagen.style = 'transform: scale(1.2); transition: 1s; background: rgba(255, 0, 0, .5); display: grid; position: absolute; border-radius:1.5vw;';
  setTimeout(() => {
  texto_bajoimagen.style = 'transform: scale(1); transition: 1s; background: none; display: grid; position: absolute;';}, 1000);
 }
        