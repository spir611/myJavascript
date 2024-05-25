
/******************************************************/
/*                   JS de ejercicio 3                */
/*                 Tipos de triángulos -              */ 
/*                                                    */ 
/*              autora: Sandra Pirpamer               */
/******************************************************/

document.getElementById("myform").addEventListener("submit", calcular);

function calcular(){
    event.preventDefault()
    //captacion de datos

    let lado1 = parseFloat(document.getElementById("numero1").value);
    let lado2 = parseFloat(document.getElementById("numero2").value);
    let lado3 = parseFloat(document.getElementById("numero3").value);

    //cálculo 
    let resultado;
    // Verificación de validez del triángulo
    if ((lado1 + lado2 > lado3) && (lado1 + lado3 > lado2) && (lado2 + lado3 > lado1)) {
        // Determinación del tipo de triángulo
        if (lado1 == lado2 && lado1 == lado3) {
            resultado = "equilátero";
        } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
            resultado = "isósceles";
        } else {
            resultado = "escaleno";
        }
    }    

    //3. validacion y mostrar resultados
    if(isNaN(lado1)||isNaN(lado2)||isNaN(lado3)) {
        document.getElementById("resultado").innerHTML = "<span class='text-danger'>Error en la introducción de datos.</span>";
    }else{
    
        document.getElementById("resultado").innerHTML ="Es un triángulo " + resultado+".";
    
    }

    return false; 
        
}   