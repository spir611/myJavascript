/******************************************************/
/*                   JS de ejercicio 6                */
/*                    Es Palíndrome  -                */ 
/*                                                    */ 
/*              autora: Sandra Pirpamer               */
/******************************************************/

function esPalindrome() {
    // Captación de datos
    let texto = document.getElementById("cadenatxt").value;

    // Cálculo
    let resultado;
    let textoInvertido;

    texto = texto.replace(/\s/g, '').toLowerCase();
    textoInvertido = texto.split('').reverse().join('');

    if (texto === textoInvertido) {
        resultado = "es palíndromo.";
    } else {
        resultado = "no es palíndromo.";
    }

    // Display de resultados
    if (texto.trim() === '') {
        document.getElementById("resultado").innerHTML = "<span class='text-danger'>Error en la introducción de datos.</span>";
    } else {
        document.getElementById("resultado").innerHTML = "Su cadena '" + texto + "' " + resultado+".";
        if(texto === textoInvertido){
        document.getElementById("resultado1").innerHTML = "El palíndromo es: '" + textoInvertido + "'.";
        }
    }

    return false;
}
