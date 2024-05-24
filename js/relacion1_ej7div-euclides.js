/******************************************************/
/*                   JS de ejercicio 7                */
/*                 División por Euclides              */ 
/*                                                    */ 
/*                autora: Sandra Pirpamer             */
/******************************************************/


//lo mismo que tenia en etiqueta form   onsubmit= "return diviEuclides()") en html, la ventaja es que html etiqueta mas limpia

//document.getElementById("myform").addEventListener("submit", diviEuclides); //sin parentesis se lo invoca..no funciona pq no se ve resultado ya no funcion result false

function diviEuclides(){

    let divi =parseInt(document.getElementById("dividendo").value);
    let disor =parseInt(document.getElementById("divisor").value);
    let cociente=0;
    /**el resto es lo que queda en el monton despues del ultimo reparto */

    while(divi >= disor){
        divi -= disor;
        cociente++;
    }
    if(isNaN(divi) || isNaN(disor)){
        document.getElementById("resultado").innerHTML = "<span class='text-danger'>Error en la introducción de datos.</span>";

    }else if(!isInteger(divi) || !isInteger(disor)){
        document.getElementById("resultado").innerHTML = "<span class='text-danger'>Error. Solamente números enteros.</span>";


    }else{    
    document.getElementById("resultado").innerHTML="El cociente es: " + cociente + " y el resto es: " + divi;

    
    }
    return false;
}