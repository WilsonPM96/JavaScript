console.log("Hola mundo 2");
let hola: number | string;
//let hola: any
const adios = 'Wilson';
hola = 'Adios';
hola = 1;
//adios = 'asdasd';
//Ducki Typing hola= 1;
let nombre: string = 'Wilson';
let edad: number = 21;
let casado: boolean = false;
let fechaNacimiento: Date = new Date();

class Usuario {
    public nombre: string; //no es necesario escribirlo
    private casado: boolean;
    protected edad: number;

    constructor(nombre: string, casado: boolean, edad: number) {
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;

    }
}
let gabriel = {
    nombre:'Gabriel', casado:false, edad: 21
};
let wilson: Usuario = new Usuario('Wilson', false
    , 21);
console.log(wilson,gabriel);

class UsuarioDos{
    constructor(public nombre:string, private _casado:boolean, protected _edad:number){
    }
    get casado(){  //transformar, debugear o validar dato que esta entrando
        return this._casado;
    }
    set casado(casado: boolean) {
        this._casado = casado;
    }
    imprimir?(saludo: string):string {
        //Template Strings
        return `${saludo}. Mi nombre es ${this.nombre}, estoy casado ${this._casado}, mi edad es ${this._edad}`;
    }
}
let wilsonDos = new UsuarioDos('Wilson', false, 21);
console.log(wilsonDos.imprimirUsuario('Hola soy Wilson'));

let carla:UsuarioTres = {
    nombre: 'WilSon',
    edad: 21
};
interface UsuarioTres {
    nombre: string;
    casado?: boolean;
    edad: number;
    imprimir(saludo: string):string;
}
console.log(carla);