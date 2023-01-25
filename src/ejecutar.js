const cardNumber=document.getElementById('cardNumber');
let valorObtenido="";

cardNumber.addEventListener('keyup', numPresionado);

// function Principal(algo){
//     //cardNumber.addEventListener('keyup', numPresionado);
// console.log(numPresionado);

// }

//console.log('carNumber tiene el valor = '+CardPress);

//cardNumber('cardNumber');
console.log('valor de Valor Obtenido : '+valorObtenido);

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