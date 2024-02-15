

function encriptar(){
    let texto_a_Encriptar = texto_a_Procesar.value;
    console.log(texto_a_Encriptar);
    imagenmono.visibility = 'hidden';
    let variable = document.getElementById("imagenmasmensaje");
    variable.style.visibility = "hidden";
    let variable3 = document.getElementById("contenidooculto");
    variable3.style.visibility = "visible";
    let variable4 = document.getElementById("bloqueresultados");
    variable4.style.visibility = "hidden";
    texto_a_Procesado.value = texto_a_Encriptar;

    //let variable2 = document.getElementById("texto_a_Procesado");
    //variable.style.visibility = "hidden";
    //document.querySelector('#imagenmon').setAttribute('hidden','true');
    

  //let array = texto_a_Encriptar.value.replace(/\s+/g, ' ').split(' ').filter((e) => e.length > 0);
  
 //console.log(array);
}

function desencriptar(){

}