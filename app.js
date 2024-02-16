

function encriptar(){
    let texto_a_Encriptar = texto_a_Procesar.value;
    console.log(texto_a_Encriptar);
    texto_a_Procesado.style="background:#FFFFFF;";
    copiar_click.style.visibility = 'visible';
    mensaje_global_id.style.visibility = 'hidden';
    texto_a_Procesado.value = texto_a_Encriptar;

    //let variable2 = document.getElementById("texto_a_Procesado");
    //variable.style.visibility = "hidden";
    //document.querySelector('#imagenmon').setAttribute('hidden','true');
    

  //let array = texto_a_Encriptar.value.replace(/\s+/g, ' ').split(' ').filter((e) => e.length > 0);
  
 //console.log(array);
}

function desencriptar(){

}