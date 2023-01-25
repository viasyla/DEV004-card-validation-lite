let ingresoNumeros = document.querySelector('#cardNumber');
let valorObtenido = "";
let cardnumbercomprobado="";

/*-------------------------------------------------

/*-------------------------------------------------*/
ingresoNumeros.addEventListener('input', event => {
    //let valorIngresado=cc.value;
    let valorIngresado2 = event.target.value;
    //     VAL          = CC.TARGET.VALUE;    
    //console.log('es value '+valorIngresado);
    console.log('es taget.value ' + valorIngresado2);

    var posicion = valorIngresado2.slice(0, event.target.selectionStart).length;
    console.log('**POSICION **: ' + posicion);

    //variables para usar en Filtrar numeros
    var out = '';//Salida
    var filtro = '1234567890';
    var v = 0;//Contador de caracteres validos
    console.log('tipeof Filtro: ' + typeof filtro)
    console.log('tipeof valorIngresado2: ' + typeof valorIngresado2)
    //filtrar solo numeros
    for (var i = 0; i < valorIngresado2.length; i++) {
        //const element = array[i];
        console.log('arreglo: ' + valorIngresado2[i]);
        if (filtro.indexOf(valorIngresado2.charAt(i)) != -1) {
            v++;
            console.log('valor V= ' + v);
            console.log('dentro de if filtro : ' + filtro.indexOf(valorIngresado2.charAt(i)));
            out += valorIngresado2.charAt(i);
            console.log('valor OUT=' + out);
            //Para agregar un espacio cada 4 caracteres
            //  if ((v == 4) || (v == 8) || (v == 12))
            //      out += '-';
        }
        //  Reemplazando el valor
        event.target.value = out;


        console.log(event.target.key);
        // Si es el retroceso, mostrar alerta
        // if(event.target.key === "Backspace") 
        // alert("estás borrando!");

        //En caso de modificar un numero reposicionar el cursor
        if (valorIngresado2.keyCode == 8) {//Tecla borrar precionada
            alert('presionada borrar');
            event.target.selectionStart = posicion;
            console.log('START' + event.target.selectionStart);
            event.target.selectionEnd = posicion;
            console.log('END' + event.target.selectionEnd);
        } else { /* alert('no estoy leyendo la tecla 8') */ }

        valorObtenido = out;
        console.log('valor de Valor Obtenido dentro numpress: ' + valorObtenido);
        console.log('valor de Valor Obtenido dentro numpress Ingrsado2: ' + valorIngresado2);
        //valorIngresado2.value=valorObtenido;
        console.log('2Valor Obtenido dentro numpress Ingrsado2: ' + valorIngresado2);
    }
  
  
});
const boton=document.getElementById('boton');
boton.addEventListener('click',validate);

function validate(valid) {
    const valid = isValid(document.getElementById("cardnumber").value)
    //const carNumber =document.getElementById("cardnumber").value;
    if (valid) {
       console.log('tarjeta validada'); // Show success in div#result
    }
    else {
        console.log('tarjeta INvalidada');
        // Show error message in div#result
    }
}

function isValid(creditCardNumber) {
    // is creditCardNumber valid?
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

    //return false
}





/*-------------------------------------------------
Funcion Lunh
/*-------------------------------------------------
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
*/

// function lunh(){
//     for( i=0; i<numeroFormateado.length; i++){
//       console.log('posicion',i);
//      }
    
//     for ( i=numeroFormateado.length-1; i>=0; i--){
//             console.log('variable i lin55: ',i);
//             //let p=0;
//             //let num=numeroFormateado[i];
//             num=numeroFormateado[i];
//             console.log('variable num lin59: ',num);
//             if (i%2==0){
//                     console.log('variable posicion i%2==0 lin62: ',i);
//                     p=num*2;
//                     console.log('variable p=num*2 lin64: ',p);
//                     if(p>9){
//                         p=p-9;
//                         console.log('variable p=p-9 lin67: ',p);
//                         sum1=+p;
//                         console.log('variable sum1=+p lin70: ',sum1);
//                     }else{
//                          sum1=+p;
//                          console.log('variable sum1=+p en else lin73: ',sum1);
//                          }
//             }else{
//                  p=num;
//                  console.log('variable num lin78: ',num);
//                  console.log('variable p=num lin78: ',p);
//                  sum2=+p;
//                  console.log('variable sum2=+p lin82: ',sum2);
//                  }
//     }
//     sum=sum1+sum2;
//     console.log('la suma1 es: ', sum1);
//     console.log('la suma2 es: ', sum2);
//     console.log('la suma es: ', sum);
//     // let total=0,numeros = [1, 2, 3, 4, 5];
//     // numeros.forEach(function(a){total += a;});
//     // console.log(total);
//     if(sum%10==0){
//       console.log('tarjeta valida');
//     }else{
//          console.log('tarjeta Invalida');
//          }
//   }



/*----------------------------------
 //  Reemplazando el valor
 cc.value = out;
     
 //En caso de modificar un numero reposicionar el cursor
 if(valorIngresado2.keyCode==8){//Tecla borrar precionada
     cc.selectionStart = posicion;
     cc.selectionEnd = posicion;
 }
 ----------------------------------*/

// function Principal(algo){
//     //cardNumber.addEventListener('keyup', numPresionado);
// console.log(numPresionado);

// }

//console.log('carNumber tiene el valor = '+CardPress);

//cardNumber('cardNumber');


// ------------------------------------
/*
function numPresionado(cc) {
    //let valorIngresado=cc.value;
    var valorIngresado2 = cc.target.value;
    //     VAL          = CC.TARGET.VALUE;    
    //console.log('es value '+valorIngresado);
    console.log('es taget.value ' + valorIngresado2);

    var posicion = valorIngresado2.slice(0, cc.selectionStart).length;
    console.log('posicion: ' + posicion);

    //variables para usar en Filtrar numeros
    var out = '';//Salida
    var filtro = '1234567890';
    var v = 0;//Contador de caracteres validos
    console.log('tipeof Filtro: '+typeof filtro)
    console.log('tipeof valorIngresado2: '+typeof valorIngresado2 )
    //filtrar solo numeros
    for (var i = 0; i < valorIngresado2.length; i++) {
        //const element = array[i];
        console.log('arreglo: ' + valorIngresado2[i]);
        if (filtro.indexOf(valorIngresado2.charAt(i)) != -1){
            v++;
            console.log('valor V= '+v);
            console.log('dentro de if filtro : '+filtro.indexOf(valorIngresado2.charAt(i)));
            out += valorIngresado2.charAt(i);
            console.log('valor OUT=' +out);
            //Para agregar un espacio cada 4 caracteres
            if ((v == 4) || (v == 8) || (v == 12))
                out += '-';


    }
   //  Reemplazando el valor
     cc.value = out;
     
     //En caso de modificar un numero reposicionar el cursor
     if(valorIngresado2.keyCode==8){//Tecla borrar precionada
         cc.selectionStart = posicion;
         cc.selectionEnd = posicion;
     }
    valorObtenido=out;
    console.log('valor de Valor Obtenido dentro numpress: '+valorObtenido);
}
}

//--------------------------------
 */



// function CardPress(event,el){
//      //Obteniendo posicion del cursor 
//      var val = el.value;//Valor de la caja de texto
//      var pos = val.slice(0, el.selectionStart).length;
     
//      var out = '';//Salida
//      var filtro = '1234567890';
//      var v = 0;//Contador de caracteres validos
     
//      //Filtar solo los numeros
//      for (var i=0; i<val.length; i++){
//         if (filtro.indexOf(val.charAt(i)) != -1){
//           v++;
//           out += val.charAt(i);		   
//           //Agregando un espacio cada 4 caracteres
//           if((v==4) || (v==8) || (v==12))
//               out+=' ';
//         }
//      }
//      //Reemplazando el valor
//      el.value = out;
     
//      //En caso de modificar un numero reposicionar el cursor
//      if(event.keyCode==8){//Tecla borrar precionada
//          el.selectionStart = pos;
//          el.selectionEnd = pos;
//      }
// }