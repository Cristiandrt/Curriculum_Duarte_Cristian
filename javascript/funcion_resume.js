

function mensaje(){

    var txtnombre = document.getElementById('txtinput');
    var txtmensaje = document.getElementById('mensaje');

    function incompleto(){
        alert("Por favor complete los dos campos. no se olvide de dejar un telefono de contacto.");
    }
    
    function completo(){
        alert("Mensaje enviado con Éxito!. Me contactaré a la brevedad!");
    }

    if(txtnombre.value === '' || txtmensaje.value ===''){
        incompleto();
    }
    else{
        completo();
    }
}   

    var btnenviar = document.getElementById('btnenviar');
    btnenviar.addEventListener("click",mensaje);
