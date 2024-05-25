/******************************************************/
/*                   JS de ejercicio 9                */
/*                   Los meses en letras             */ 
/*                                                    */ 
/*                autora: Sandra Pirpamer             */
/******************************************************/
document.getElementById("myform").addEventListener("submit", mostrarMes);

const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

function mostrarMes() {
    event.preventDefault();

    let mesSelect = parseInt(document.getElementById("mes").value);

    // cálculo 
    if(isNaN(mesSelect)){
        document.getElementById("resultado").innerHTML = "<span class='text-danger'>No has seleccionado ninguna opción.</span>"; 
    }else{

        let nombreMes = meses[mesSelect - 1];

        //resultados    
        document.getElementById("resultado").innerHTML = "El nombre del mes seleccionado es: " + nombreMes +".";

    }    
    return false; 
}