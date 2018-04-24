//Crear una función en JavaScript que acepte como parámetro un arreglo.
var arreglo = ['Wilson','Ramos',2,46,3.5,'Ejercicio',5,'Aplicaciones Web','Ejercicio 1'];
var counter=0;
validadNumeroDeStringsEnArreglo(arreglo);
function validadNumeroDeStringsEnArreglo (arreglo) {
    for(var i=0;i<arreglo.length;i++){
        if((typeof arreglo[i])=='string'){
            counter=counter+1;
        }
    }
    console.log('En el arreglo existen '+counter+ ' strings');

}
