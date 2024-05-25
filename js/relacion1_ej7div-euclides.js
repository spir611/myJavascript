/******************************************************/
/*                   JS de ejercicio 7                */
/*                 División por Euclides              */ 
/*                                                    */ 
/*                autora: Sandra Pirpamer             */
/******************************************************/


document.getElementById("myform").addEventListener("submit", diviEuclides); 

function diviEuclides(){
    event.preventDefault();
    //datos y conversion de datos a integer
    let divi =parseInt(document.getElementById("dividendo").value);
    let disor =parseInt(document.getElementById("divisor").value);
    let cociente=0;
    
    //validacion
    if(isNaN(divi) || isNaN(disor)){
        document.getElementById("resultado").innerHTML = "<span class='text-danger'>Error en la introducción de datos.</span>";

        }else{ 
        //calculo
        while(divi >= disor){
            divi -= disor;
            cociente++;
        }
        
        //mostrar resultados
        document.getElementById("resultado").innerHTML="El cociente es: " + cociente + " y el resto es: " + divi+".";

    
    }
    return false;
}