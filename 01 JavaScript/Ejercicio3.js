var osos=3;
var maxOsos=10000;
var crecimientoMes=4;
var i=0;
var meses=8;
while(i<meses){

    if(osos>maxOsos){
        console.log('Removiendo '+(osos/2)+' osos de anteojos de la poblacion');
        osos=osos/2;
    }
    else{
        i++;
        console.log('Van a existir '+osos+' osos de anteojos despúes del mes '+i);
        osos=osos*crecimientoMes;
    }


}