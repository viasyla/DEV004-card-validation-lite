const cardnumber = document.getElementById('cardnumber');
const boton=document.getElementById('boton');
let cardnumbercomprobado="";
//cardnumber.addEventListener('keyup',numIngresados);
cardnumber.addEventListener('keyup', numIngresados);
//console.log(numerosIngresados);

function numIngresados(cc) {
    let valorIngresado = cc.target.value;
    let regExp = /[A-z]/g;
    console.log('regexp : ', regExp.test(cardnumber.value))
    console.log(regExp.test(valorIngresado));
    if (regExp.test(cardnumber.value)) {
        console.log('TIENE LETRA if (regExp.test(cardnumber.value) : ',valorIngresado);
        // console.log('hay una letra');
        // let errorNumIngresados.innerText = 'El texto contiene letras !';
        mostrarError("Solo numeros..");
    } else {
        console.log('valor ingresado: ',valorIngresado);
        //si seingresan espacio los reemplaza por ""
        //.replace(/([0-9]{4})/g, '$1 ') cada 4 numeros agrega 1 espacio en blanco, efecto de grupos en el ingreso
        //.trim(); lo mismo que en filemarket, elimina espacio en blanco al final de una cadena
        //valorIngresado.value = valorIngresado.replace(/\s/g, '');//.replace(/([0-9]{4})/g, '$1 ').trim();
        //console.log(valorIngresado.value);
        //esta linea borra el mensaje de error al corregirlo dinamicamente
        mensajeError.innerText = '';
       // modificarEspacios();
       cardnumbercomprobado=valorIngresado;
    }
};

boton.addEventListener('click', function (gg) {
    gg.preventDefault();
    console.log(cardnumbercomprobado, 'dentro del btn');
    luhn(cardnumbercomprobado);
    console.log(luhn(cardnumbercomprobado));
    alert(luhn(cardnumbercomprobado));
    let validado = luhn(cardnumbercomprobado);
    
    if (validado === true) {
        alert('numero bien validado');
    }
    else {
        alert('mal validado');
    }
}



);


/*function modificarEspacios(event){
    valorIngresado = event.target.value;   
    //let regExp = /\s/g;
    //console.log('regexp : ', regExp.test(cardnumber.value))
    //console.log(regExp.test(valorIngresado));
    valorIngresado.value = valorIngresado.replace(/\s/g, '');//.replace(/([0-9]{4})/g, '$1 ').trim();
    
   console.log('pasa poraqui');
}*/
//numerosIngresados,errorNumerosIngresados,mensaje de texto que dice cual esel error) 
function mostrarError(msgError) {
    const mensajeError = document.getElementById('mensajeError');
    //msgError = ();
    mensajeError.innerText = msgError;
    mensajeError.style.borderColor='#FF0000';
    
}

function luhn(value) {
    if (/[^0-9-\s]+/.test(value)) return false;
    
    let nCheck = 0, bEven = false;
    value = value.replace(/\D/g, "");  // \D reemplaza cualquier caracter que no sea digito a nada""
    for (let n = value.length - 1; n >= 0; n--) {
        let cDigit = value.charAt(n),
        nDigit = parseInt(cDigit, 10);
        if (bEven && (nDigit *= 2) > 9) nDigit -= 9; nCheck +=  nDigit; bEven = !bEven;
    }
   //console.log('imprimir nCheck: ',nCheck);
    return (nCheck % 10) == 0;
    alert('valor de nCheck : '+nCheck);
}