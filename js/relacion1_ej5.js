/******************************************************/
/*                   JS de ejercicio 5                */
/*               Es Mayuscula Minuscula  -            */ 
/*                                                    */ 
/*              autora: Sandra Pirpamer               */
/******************************************************/

function esMayusMinus(){
    
    //1-captacion de datos

    let texto = (document.getElementById("cadenatxt").value);
    
    

    //2-cálculo 
    let resultado;

    if(texto === texto.toUpperCase()){
        resultado="mayúscula";
    }else if(texto === texto.toLowerCase()){
        resultado="minuscula";
    }else{
        resultado="mayúscula y mínuscula mezclada";
    }

    

    //3-display de resultados
    let regex = /^[A-Za-z]+$/;

    if (!regex.test(texto)) {
        document.getElementById("resultado").innerHTML = "<span class='text-danger'>Error en la introducción de datos.</span>";
    }else{
    
        document.getElementById("resultado").innerHTML ="La cadena de texto está en " + resultado+ ".";
    
    }

    return false; 
}