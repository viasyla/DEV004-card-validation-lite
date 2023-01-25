const cardNumber=document.getElementById('cardNumber');
console.log(cardNumber);
const boton=document.getElementById('boton');
//const valid=isValid(cardNumber);


//boton=addEventListener('click', validate);



//Validacion de ingreso sin letras.
cardNumber.addEventListener('input', event => {
    
    //Obteniendo posicion del cursor 
    var val = event.target.value;//Valor de la caja de texto
    var pos = val.slice(0, event.target.value.selectionStart).length;

    var out = '';//Salida
    var filtro = '1234567890';
    var v = 0;//Contador de caracteres validos

    //Filtar solo los numeros
    for (var i = 0; i < val.length; i++) {
        if (filtro.indexOf(val.charAt(i)) != -1) {
            v++;
            out += val.charAt(i);
            //Agregando un espacio cada 4 caracteres
            // if ((v == 4) || (v == 8) || (v == 12))
            //     out += ' ';
        }
    }
    //Reemplazando el valor
    event.target.value = out;
    console.log( event.target.value);

    //En caso de modificar un numero reposicionar el cursor
    // if (event.target.value.keyCode == 8) {//Tecla borrar precionada
    //     console.log(event.taget.value.keyCode)
    //     event.target.value.selectionStart = pos;
    //     event.target.value.selectionEnd = pos;
    // }
   
});

//validacion del boton.
//const boton=document.getElementById('boton');




function validate() {
    const result = document.getElementById('result');
    const cardNumber = document.getElementById('cardNumber').value;
    //const valid = isValid(document.getElementById("cardnumber"))
    console.log('dentro del boton');

    if (cardNumber == '') {
        // Show success in div#result
        result.innerText = "Tarjeta Vacia, complete."
        return
    }

   const valid=isValid(cardNumber);

    if (valid) {
        // Show success in div#result
        result.innerHTML = "Tarjeta Valida."
      }
      else {
        // Show error message in div#result
        result.innerHTML = "Tarjeta Invalida."
      }

}


function isValid(creditCardNumber) {
    // is creditCardNumber valid?
   // const cardNumber = document.getElementById('cardNumber').value; //llamo el valor de cardNumber

//console.log(card);

const arreglo = creditCardNumber.split("").map(Number);
console.log('LN-84 arreglo inicial : '+arreglo);

let arregloReverse = arreglo.reverse()
console.log('LN-86 reversa del arreglo : '+arregloReverse);

let suma = 0;

    for (let i = 0; i < arregloReverse.length; i++) {
        const posicion = i + 1;
        console.log('LN-92 arregloReverse ' + [i] + ' :' + arregloReverse[i]);


        if (posicion % 2 == 0) {
            arregloReverse[i] = arregloReverse[i] * 2;
           // console.log('LN-97 arregloReverse' + [i] + ' * 2 : ', arregloReverse[i]);
           
        }
        if (arregloReverse[i] >9) {
            //console.log('LN-101 : ' + arregloReverse[i]);
            let num = arregloReverse[i].toString().split('').map(Number);
            arregloReverse[i]=num[0]+num[1]
            
        }
        suma+=arregloReverse[i];
        //console.log('suma : '+suma);
    }
//console.log('suma : '+suma);
return suma%10==0;
//     for (i = cardNumber.length - 1; i >= 0; i--) {
//         console.log('variable i lin55: ', i);
//         //let p=0;
//         //let num=numeroFormateado[i];
//         num = cardNumber[i];
//         console.log('variable num lin59: ', num);
//     **    if (i % 2 == 0) {
//       **      console.log('variable posicion i%2==0 lin62: ', i);
//         **    p = num * 2;
//           **  console.log('variable p=num*2 lin64: ', p);
//     **        if (p > 9) {
//                 p = p - 9;
//                 console.log('variable p=p-9 lin67: ', p);
//                 sum1 = +p;
//                 console.log('variable sum1=+p lin70: ', sum1);
//             } else {
//                 sum1 = +p;
//                 console.log('variable sum1=+p en else lin73: ', sum1);
//             }
//         } else {
//             p = num;
//             console.log('variable num lin78: ', num);
//             console.log('variable p=num lin78: ', p);
//             sum2 = +p;
//             console.log('variable sum2=+p lin82: ', sum2);
//         }
//     }
//      sum = sum1 + sum2;
//     console.log('la suma1 es: ', sum1);
//     console.log('la suma2 es: ', sum2);
//     console.log('la suma es: ', sum);
//     // let total=0,numeros = [1, 2, 3, 4, 5];
//     // numeros.forEach(function(a){total += a;});
//     // console.log(total);
//    return sum % 10 == 0;


















   // if (cardNumber = /[^0-9-\s]+/.test(value)) return false;
    
//     let nCheck = 0, bEven = false;
//     value = cardNumber.replace(/\D/g, "");  // \D reemplaza cualquier caracter que no sea digito a nada""
//     for (let n = cardNumber.length - 1; n >= 0; n--) {
//         let cDigit = cardNumber.charAt(n),
//         nDigit = parseInt(cDigit, 10);
//         if (bEven && (nDigit *= 2) > 9) nDigit -= 9; nCheck +=  nDigit; bEven = !bEven;
//     }
//    //console.log('imprimir nCheck: ',nCheck);
//     return (nCheck % 10) == 0;
//     alert('valor de nCheck : '+nCheck);



//     let sum = 0;
//     let sum1= 0;
//     let sum2= 0;

//     for (i = 0; i < cardNumber.length; i++) {
//         console.log('posicion', i);
//     }
//     //let sum=sum0;
//     //let sum1=0;
//     //let sum2=0;
//     for (i = cardNumber.length - 1; i >= 0; i--) {
//         console.log('variable i lin55: ', i);
//         //let p=0;
//         //let num=numeroFormateado[i];
//         num = cardNumber[i];
//         console.log('variable num lin59: ', num);
//         if (i % 2 == 0) {
//             console.log('variable posicion i%2==0 lin62: ', i);
//             p = num * 2;
//             console.log('variable p=num*2 lin64: ', p);
//             if (p > 9) {
//                 p = p - 9;
//                 console.log('variable p=p-9 lin67: ', p);
//                 sum1 = +p;
//                 console.log('variable sum1=+p lin70: ', sum1);
//             } else {
//                 sum1 = +p;
//                 console.log('variable sum1=+p en else lin73: ', sum1);
//             }
//         } else {
//             p = num;
//             console.log('variable num lin78: ', num);
//             console.log('variable p=num lin78: ', p);
//             sum2 = +p;
//             console.log('variable sum2=+p lin82: ', sum2);
//         }
//     }
//      sum = sum1 + sum2;
//     console.log('la suma1 es: ', sum1);
//     console.log('la suma2 es: ', sum2);
//     console.log('la suma es: ', sum);
//     // let total=0,numeros = [1, 2, 3, 4, 5];
//     // numeros.forEach(function(a){total += a;});
//     // console.log(total);
//    return sum % 10 == 0;
   
   
    // if (sum % 10 == 0) {
    //     console.log('tarjeta valida');
    // } else {
    //     console.log('tarjeta Invalida');
    // }




   // return false
}

