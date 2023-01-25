let numerosIngresados =document.querySelector('#cardnumber');
console.log('posicion',numerosIngresados);

let str3 = numerosIngresados;
    console.log(str3[0]); // ¡
    console.log(str3[1]); // S
    console.log(str3[2]); // i
    console.log(str3[3]); // ,
console.log('hh: ',str3);

function lunh(){
    for( i=0; i<numeroFormateado.length; i++){
      console.log('posicion',i);
     }
    //let sum=sum0;
    //let sum1=0;
    //let sum2=0;
    for ( i=numeroFormateado.length-1; i>=0; i--){
            console.log('variable i lin55: ',i);
            //let p=0;
            //let num=numeroFormateado[i];
            num=numeroFormateado[i];
            console.log('variable num lin59: ',num);
            if (i%2==0){
                    console.log('variable posicion i%2==0 lin62: ',i);
                    p=num*2;
                    console.log('variable p=num*2 lin64: ',p);
                    if(p>9){
                        p=p-9;
                        console.log('variable p=p-9 lin67: ',p);
                        sum1=+p;
                        console.log('variable sum1=+p lin70: ',sum1);
                    }else{
                         sum1=+p;
                         console.log('variable sum1=+p en else lin73: ',sum1);
                         }
            }else{
                 p=num;
                 console.log('variable num lin78: ',num);
                 console.log('variable p=num lin78: ',p);
                 sum2=+p;
                 console.log('variable sum2=+p lin82: ',sum2);
                 }
    }
    sum=sum1+sum2;
    console.log('la suma1 es: ', sum1);
    console.log('la suma2 es: ', sum2);
    console.log('la suma es: ', sum);
    // let total=0,numeros = [1, 2, 3, 4, 5];
    // numeros.forEach(function(a){total += a;});
    // console.log(total);
    if(sum%10==0){
      console.log('tarjeta valida');
    }else{
         console.log('tarjeta Invalida');
         }
  }