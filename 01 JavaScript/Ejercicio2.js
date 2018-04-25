/*La Empresa Eléctrica Quito tiene 19 generadores de múltiples tipos. Los primeros 4 generan 62 megawatts y los otros 15 generan 124 megawatts

La Empresa Eléctrica Quito ha decidido contratarlo a usted para diseñar un sistema de "loops" para imprimir en consola el total de megawatts generado por cada generador con el siguiente formato:

    - "Generador #1 está prendido, añadiendo 62 MW para un total de 62 MW."

    - "Generador #2 está prendido, añadiendo 62 MW para un total de 124 MW."

El primer loop es requerido que sea construido con "while" administrando los 4 primeros generadores y el segundo que sea construido con un "for" para los 15 generadores restantes.

    Como una funcionalidad adicional quisieran que se puedan activar los generadores pares, impares o todos.

    Es decir, en el ejemplo anterior el formato imprimiría lo siguiente para los generadores impares:

    - "Generador #1 está prendido, añadiendo 62 MW para un total de 62 MW."

    - "Generador #2 está apagado." */

var generador1 = 62;
var generador2= 124;
var sumaPotencia=0;
var i=0;
console.log('******************4 Generadores*******************');
while(i<4){
    sumaPotencia=sumaPotencia+generador1;
    console.log('Generador #'+(i+1)+' está prendido, añadiendo '+generador1+ ' MW para un total de '+sumaPotencia+ ' MW');
    i++;
}
sumaPotencia=0;
console.log('******************15 Generadores*******************');
for(var j=0;j<15;j++){
    sumaPotencia=sumaPotencia+generador2;
    console.log('Generador #'+(j+1)+' está prendido, añadiendo '+generador2+ ' MW para un total de '+sumaPotencia+ ' MW');
}

//Funcionalidad adicional Pares/Impares
sumaPotencia=0;
i=0;
console.log('******************4 Generadores Impares*******************');
while(i<4){
    i=i+2;
    sumaPotencia=sumaPotencia+generador1;
    console.log('Generador #'+(i-1)+' está prendido, añadiendo '+generador1+ ' MW para un total de '+sumaPotencia+ ' MW');
    console.log('Generador #'+i+' está apagado');
}

sumaPotencia=0;
console.log('******************15 Generadores Impares*******************');
for(var j=0;j<15;j=j+2){
    sumaPotencia=sumaPotencia+generador2;
    console.log('Generador #'+(j+1)+' está prendido, añadiendo '+generador2+ ' MW para un total de '+sumaPotencia+ ' MW');
    console.log('Generador #'+(j+2)+' está apagado');
}

sumaPotencia=0;
i=1;
console.log('******************4 Generadores Pares*******************');
while(i<=4){
    i=i+2;
    sumaPotencia=sumaPotencia+generador1;
    console.log('Generador #'+(i-2)+' está apagado');
    console.log('Generador #'+(i-1)+' está prendido, añadiendo '+generador1+ ' MW para un total de '+sumaPotencia+ ' MW');

}

sumaPotencia=0;
console.log('******************15 Generadores Pares*******************');
for(var j=0;j<16;j=j+2){
    sumaPotencia=sumaPotencia+generador2;
    console.log('Generador #'+(j+1)+' está apagado');
    console.log('Generador #'+(j+2)+' está prendido, añadiendo '+generador2+ ' MW para un total de '+sumaPotencia+ ' MW');

}