//ingreso numeros de tarjeta de credito
let numerosIngresados =document.querySelector('#cardnumber');
let errorNumIngresados = document.querySelector('.formulario_carnumber--error');
 var sum=parseInt(0);
 var sum1=parseInt(0);
 var sum11=0;
 var sum2=parseInt(0);
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
        //errorNumIngresados.innerText ='';
    }

    //console.log('numero de la carnumber : ',valorIngresado);
    //console.log('numero de la carnumber total: ',valorIngresado.value);
    //console.log('numero de la carnumber x: ',numerosIngresados.value);


    let numeroFormateado = valorIngresado.replace(/\s/g, '');
    console.log('numero de la carnumber 2x: ',numeroFormateado);

    // probando un arreglo

    let str3 = numeroFormateado;
   /* console.log(str3[0]); // ¡
    console.log(str3[1]); // S
    console.log(str3[2]); // i
    console.log(str3[3]); // ,*/
console.log('hh: ',str3);


    for( i=0; i<numeroFormateado.length; i++){
        console.log('posicion',i);
    }
//let sum=sum0;
//let sum1=0;
//let sum2=0;
    if (numeroFormateado != "") {
        for (i = numeroFormateado.length - 1; i >= 0; i--) {
            console.log('variable i lin55: ', i);
            //let p=0;
            //let num=numeroFormateado[i];
            num = numeroFormateado[i];
            console.log('variable num lin59: ', num);

            if (i % 2 == 0) {
                console.log('variable posicion i%2==0 lin62: ', i);
                if (num * 2 >= 10) {
                    console.log('>=10 resultado num*2:', num);
                    sum11 += ((num * 2) - 9);
                    console.log('resultado sum11+=((num*2)-9):', sum11);
                    sum1 = +sum11;
                    console.log('resultado sum1=+sum11:', sum1);
                } else {
                    sum1 += num * 2;
                    console.log('resultado sum1+=num*2 cuando es menor:', sum1);
                }
            } else {
                sum2 += parseInt(num);
                console.log('sum2+=parseInt(num) :', sum2);
            }
            sum = (sum1 + sum2);//%10===0;
            console.log('la suma total sum :', sum);
        }
        // let total=0,numeros = [1, 2, 3, 4, 5];
        // numeros.forEach(function(a){total += a;});
        // console.log(total);

        if (sum % 10 == 0) {
            console.log('tarjeta valida');
        } else {
            console.log('tarjeta Invalida');
        }
    }
});

//numerosIngresados,errorNumerosIngresados,mensaje de texto que dice cual esel error) 
function mostrarError(errorMensaje, errorCampoingreso, msgError){

//errorCampoingreso.innerText = msgError;
errorMensaje.style.borderColor ='#FF0010';
}


