//ingreso numeros de tarjeta de credito
let numerosIngresados =document.querySelector('#cardnumber');
let errorNumIngresados = document.querySelector('.formulario_carnumber--error');
 var sum=0;
 var sum1=0;
 var sum2=0;
 var p=0;
//Validacion restriccion de letras durante el ingreso
numerosIngresados.addEventListener('input', ()=>{
        //asigna el valor ingresado por el usuario a la var
    let valorIngresado = event.target.value;
    
    let regExp = /[A-z]/g;
  
     //** */ console.log('regexp : ',regExp.test(numerosIngresados.value))
  
    if(regExp.test(numerosIngresados.value)){
        //** */  console.log('hay una letra');
       // errorNumIngresados.innerText = 'El texto contiene letras !';
        mostrarError(numerosIngresados, errorNumIngresados,'Solamente numeros !');

    }else{
        //si seingresan espacio los reemplaza por ""
        //.replace(/([0-9]{4})/g, '$1 ') cada 4 numeros agrega 1 espacio en blanco, efecto de grupos en el ingreso
        //.trim(); lo mismo que en filemarket, elimina espacio en blanco al final de una cadena
        numerosIngresados.value = valorIngresado.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
        
        //esta linea borra el mensaje de error al corregirlo dinamicamente
        errorNumIngresados.innerText ='';
    }

    //console.log('numero de la carnumber : ',valorIngresado);
    //console.log('numero de la carnumber total: ',valorIngresado.value);
    //console.log('numero de la carnumber x: ',numerosIngresados.value);


    let numeroFormateado = valorIngresado.replace(/\s/g, '');
    console.log('numero de la carnumber 2x: ',numeroFormateado);

    // probando un arreglo

    let str3 = numeroFormateado;
    console.log(str3[0]); // ¡
    console.log(str3[1]); // S
    console.log(str3[2]); // i
    console.log(str3[3]); // ,
console.log('hh: ',str3);


});

//numerosIngresados,errorNumerosIngresados,mensaje de texto que dice cual esel error) 
function mostrarError(errorMensaje, errorCampoingreso, msgError){

errorCampoingreso.innerText = msgError;
errorMensaje.style.borderColor ='#FF0010';
}





function luhn(value) {
    // Accept only digits, dashes or spaces
    if (/[^0-9-\s]+/.test(value)) return false;
    // The Luhn Algorithm. It's so pretty.
    let nCheck = 0, bEven = false;
    value = value.replace(/\D/g, "");
    for (var n = value.length - 1; n >= 0; n--) {
        var cDigit = value.charAt(n),
        nDigit = parseInt(cDigit, 10);
        if (bEven && (nDigit *= 2) > 9) nDigit -= 9; nCheck +=  nDigit; bEven = !bEven;
    }
    return (nCheck % 10) == 0;
}