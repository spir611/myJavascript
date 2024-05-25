/******************************************************/
/*                   JS de ejercicio 5                */
/*               Es Mayuscula Minuscula  -            */ 
/*                                                    */ 
/*              autora: Sandra Pirpamer               */
/******************************************************/

document.getElementById("myform").addEventListener("submit", esMayusMinus);

function esMayusMinus(){
    event.preventDefault()

    //captacion de datos

    let texto = (document.getElementById("cadenatxt").value);
    
    
    //validacion
    let regex = /^[A-Za-z]+$/;

    if (!regex.test(texto)) {
        document.getElementById("resultado").innerHTML = "<span class='text-danger'>Error en la introducción de datos.</span>";
    }else{

        //2-cálculo 
        let resultado;

        if(texto === texto.toUpperCase()){
            resultado="mayúscula";
        }else if(texto === texto.toLowerCase()){
            resultado="minuscula";
        }else{
            resultado="mayúscula y mínuscula mezclada";
        }


        //mostrar resultados
        document.getElementById("resultado").innerHTML ="La cadena de texto está en " + resultado+ ".";
    
    }

    return false; 
}