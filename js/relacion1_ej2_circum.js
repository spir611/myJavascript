
/******************************************************/
/*                   JS de ejercicio 2                */
/*                 Tipos de Circumferencias           */ 
/*                                                    */ 
/*              autora: Sandra Pirpamer               */
/*   *******************************************************/                                                                                                        
function calcular(){
    
    //1-captacion de datos

    let n1 = parseFloat(document.getElementById("radio").value);
    
    

    //2-cálculo 
    
    

    let circumferencia = (2 * Math.PI * n1).toFixed(2);
    let areacirculo = (Math.PI * n1 * n1).toFixed(2);
    let volesfera = (4 / 3 * Math.PI * n1 * n1 * n1).toFixed(2);





        
    //3-display de resultados



    if(isNaN(n1)){
        document.getElementById("resultado").innerHTML = "<span class='text-danger'>Error en la introducción de datos.</span>";
    }else{
    
   document.getElementById("resultado").innerHTML =
    "La circumferencia del círculo es: " + circumferencia +"<br>"+
    "La area del círculo es: " + areacirculo +"<br>"+
    "El volumen de la esfera es: " + volesfera;
    }

    return false; 
}