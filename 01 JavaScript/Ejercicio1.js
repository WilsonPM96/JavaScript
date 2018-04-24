//Crear una función en JavaScript que acepte como parámetro un arreglo.
var arreglo = ['Wilson','Ramos',2,46,3.5,'Ejercicio',5,'Aplicaciones Web'];
var counter=0;

function validadNumeroDeStringsEnArreglo (arreglo) {
    for(var i=0;i<arreglo.length;i++){
        if(console.log(typeof i)=="string"){
            counter=counter+1;
        }
    }
    return counter

}
