console.log("Hola mundo 2");
var hola;
//let hola: any
var adios = 'Wilson';
hola = 'Adios';
hola = 1;
//adios = 'asdasd';
//Ducki Typing hola= 1;
var nombre = 'Wilson';
var edad = 21;
var casado = false;
var fechaNacimiento = new Date();
var Usuario = /** @class */ (function () {
    function Usuario(nombre, casado, edad) {
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;
    }
    return Usuario;
}());
var gabriel = {
    nombre: 'Gabriel', casado: false, edad: 21
};
var wilson = new Usuario('Wilson', false, 21);
console.log(wilson, gabriel);
var UsuarioDos = /** @class */ (function () {
    function UsuarioDos(nombre, _casado, _edad) {
        this.nombre = nombre;
        this._casado = _casado;
        this._edad = _edad;
    }
    Object.defineProperty(UsuarioDos.prototype, "casado", {
        get: function () {
            return this._casado;
        },
        set: function (casado) {
            this._casado = casado;
        },
        enumerable: true,
        configurable: true
    });
    UsuarioDos.prototype.imprimir = function (saludo) {
        //Template Strings
        return saludo + ". Mi nombre es " + this.nombre + ", estoy casado " + this._casado + ", mi edad es " + this._edad;
    };
    return UsuarioDos;
}());
var wilsonDos = new UsuarioDos('Wilson', false, 21);
console.log(wilsonDos.imprimirUsuario('Hola soy Wilson'));
var carla = {
    nombre: 'WilSon',
    edad: 21
};
console.log(carla);
