/******************************************************/
/*                   JS de ejercicio 4                */
/*               Calculo de la letra DNI -            */ 
/*               con paleta Dark y Light              */ 
/*              autora: Sandra Pirpamer               */
/******************************************************/
  
//document.getElementById("btn").addEventListener("click", calcular);

/**
 * funcion para calcular la letra del dni
 * @returns false
 */
function calculoLetra(){
    const LETRA = "TRWAGMYFPDXBNJZSQVHLCKE"  //posicion 0 a 21
    let dni = parseInt(document.getElementById("dni").value);
    let dniRegex = /^[0-9]{7,8}$/;

    // Verificar si el valor del DNI es un número y cumple con el formato
    if (!isNaN(dni) && dniRegex.test(dni)) {
        let resto = dni % 23;
        document.getElementById("resultado").innerHTML = "La letra es : " + LETRA[resto];
    } else {
        // Si el valor del DNI no es un número válido o no cumple con el formato
        document.getElementById("resultado").innerHTML = "Por favor, introduce un DNI válido (8 números).";
    }
    return false; 
}

        
function cambiarPaleta(fondo, texto, colorH1, btnEnviar, btnPaleta) {
    document.body.style.backgroundColor = fondo;
    document.body.style.color = texto;

    let encabezados1 = document.getElementsByTagName("h1");
    for (let i = 0; i < encabezados1.length; i++) {
        encabezados1[i].setAttribute("class", "text-center " + colorH1);
    }

    let botones1 = document.getElementsByTagName("button");
    botones1[0].setAttribute("class", "btn " + btnEnviar);

    let secondarys = document.getElementsByClassName("btn-secondary");
    for (let i = 0; i < secondarys.length; i++) {
        secondarys[i].setAttribute("class", "btn " + btnPaleta + " m-2");
    }
}
   
    
/*funcion para cambiar entre fondo dark o *light
*
*/
/* function cambiarPaleta(fondo,texto,colorH1,btnEnviar, btnPaleta){
/*1 se define el estilo del body (color texto y color fondo)    
    document.body.style.backgroundColor = "fondo" ;
    document.body.style.color = "texto" ;

 /*2 se itera los encabezados al poder ser un array* 
    let encabezados1 = document.getElementsByTagName("h1"); 

    for(let i=0; i<encabezados1.length;i++){
            encabezados1[i].setAttribute("class","text-center" + colorH1);            
    } 
    


/*3 modificar el atributo
    let botones1 = document.getElementsByTagName("button");  
    
    
        botones1[0].setAttribute("class","btn" + btnEnviar); 
        
/*4. acceder a traves boton*       
        let secondarys =document.getElementsByClassName("btn-secondary");

        for(let i=0; i<=secondarys.length; i++){
            secondarys[i].setAttribute("class", "btn "+ btnPaleta + "m-2");
        }
    
}
 */