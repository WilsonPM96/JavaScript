console.log('Hola mundo');
var mutar;
var nombre = 'Wilson';
var edad = 21;
var peso = 70.5;
var casado = false;
var fechaNacimiento = new Date();
var noExisto = null;  //falso
var noEstoyDefinido = undefined;  //FALSO
//0 false 1 true -1 true
if (noExisto) {
    console.log('Verdadero');
} else {
    console.log('Falso');
}
if (noEstoyDefinido) {
    console.log('Verdadero');
} else {
    console.log('Falso');
}

//Json
//Objetos
var usuario = {
    nombre: 'Wilson',
    apellido: 'Ramos',
    cedula: '1723584098',
    edad: 21,
    imprimir: function(){
        console.log(this.nombre + ' ' + this.apellido + ' ' + this.edad);
    }
};

console.log(usuario.nombre + usuario.apellido); //Wilson Ramos
console.log(usuario);
console.log(usuario);
usuario.fechaNacimient = new Date();
console.log(usuario);
usuario.mascotas = {};
usuario.mascotas.nombre = 'Wilson';
console.log(usuario);
var arreglo = [1, 'Wilson', true, undefined, null,usuario.imprimir(),usuario.imprimir, new Date(), {nombre: 'Wilson'}, [1, 2, 3, true]];
console.log(arreglo);

function sumarNumeros(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

console.log(sumarNumeros(1, 2));
console.log(sumarNumeros(2, 6.423));
//funciones anonimas
var potenciaDeDosDeUnNumero = function noEsNecesarioPonerElNombre(numero) {
    return numero * numero;
};
var potenciadedosdeunnumero = function (numero) {
    return numero * numero;
};
console.log(potenciadedosdeunnumero(4, 23, 3, 5, 4));

usuario.imprimir();
