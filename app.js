
function encriptar(){
  let texto = texto_a_encriptar.value;
    if (texto != ''){ 
    const esValido = validarTexto(texto);
    if (esValido) {
      if (window.matchMedia("max-width: 480px").matches){
        texto_encriptado.style = 'height: 50vw;';
      }
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
}

function copiar(){
  const texto = texto_encriptado.value;
  copiarTextoAlPortapapeles(texto);
}
function mostarContenido(){
  texto_encriptado.style = 'display: block';
  cuadro_Texto_Encriptado.style = 'background-image: none;';
  texto_bajoimagen.style = 'display: none;';
  copiar_click.style = 'display: block; background:none; transition: 1s; :hover: scale: .9;';
  document.getElementById('copiar_click').innerHTML = "Copiar";
}
function limpiarCaja2(){
  texto_encriptado.value = '';
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
      copiar_click.style = 'background: rgba(0, 255, 0, .5); transition: 1s; display: block';
      document.getElementById('copiar_click').innerHTML = "Mensaje copiado";      
  } catch (error) {
      copiar_click.style = 'background: red;';
      document.getElementById('copiar_click').innerHTML = "No se ha podido copiar";
  }
}
 function escalar_Instrucciones(){
  elemento_instrucciones.style = 'transform: scale(1.2); transition: 1s; background-color: rgba(255, 0, 0, .5);';
  setTimeout(() => {
    elemento_instrucciones.style = 'transform: scale(1); transition: 1s; background: none;';}, 1000);
 }

 function escalar_mensaje(){
  cuadro_Texto_Encriptado.style = 'background-image: url("imagenes/Muñeco.png"); background-size: 22vw; background-repeat: no-repeat; background-position: center 30%;';
  texto_encriptado.style = 'display: none;';
  copiar_click.style = 'display: none;';
  texto_bajoimagen.style = 'display: relative; transform: scale(1.2); transition: 1s; background: rgba(255, 0, 0, .5);';
  setTimeout(() => {
  texto_bajoimagen.style = 'transform: scale(1); transition: 1s; background: none;';}, 1000);
 }

 window.addEventListener('resize', function(event){
  if (window.matchMedia("min-aspect-ratio: 3/4").matches){
    cuadro_Texto_Encriptado.style = 'background-image: none;';



  }
});