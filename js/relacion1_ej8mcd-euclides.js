/******************************************************/
/*                   JS de ejercicio 8                */
/*                    MCD por Euclides                */ 
/*                                                    */ 
/*                autora: Sandra Pirpamer             */
/******************************************************/



document.getElementById("myform").addEventListener("submit", calcularMCD); 

function calcularMCD() {
    event.preventDefault();
    let number1 = parseInt(document.getElementById("num1").value);
    let number2 = parseInt(document.getElementById("num2").value);

    //validacion
    if(isNaN(number1) || isNaN(number2)){
        document.getElementById("resultado").innerHTML = "<span class='text-danger'>Error en la introducción de datos.</span>";

    }else if(!Number.isInteger(number1) || !Number.isInteger(number2)){
        document.getElementById("resultado").innerHTML = "<span class='text-danger'>Error. Solamente números enteros.</span>";
    } else {  
        // calculo :Algoritmo de Euclides para encontrar el MCD
        let a = number1;
        let b = number2;

        while (b != 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }

    
        //mostrar los resultados
        document.getElementById("resultado").innerHTML = "El MCD de " + number1 + " y " + number2 + " es: " + a;

    }

    return false;
}