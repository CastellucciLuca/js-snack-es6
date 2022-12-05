/**
 * 
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
 */
//lista macchine
const cars = [
    {
    marca: 'mercedes',
    modello: 'classe A',
    alimentazione :'diesel'
},
    {
    marca: 'audi',
    modello: 'A1',
    alimentazione :'benzina'
},
    {
    marca: 'bmw',
    modello: 'X1',
    alimentazione :'benzina'
},
    {
    marca: 'mini',
    modello: 'one',
    alimentazione :'benzina'
},
    {
    marca: 'volkswagen',
    modello: 'polo',
    alimentazione :'diesel'
},
    {
    marca: 'dacia',
    modello: 'duster',
    alimentazione :'benzina'
},
    {
    marca: 'tesla',
    modello: 'model Y',
    alimentazione :'elettrico'
},
    {
    marca: 'toyota',
    modello: 'Toyota Supra Fuji Speedway',
    alimentazione :'benzina'
},
    {
    marca: 'fiat',
    modello: 'punto',
    alimentazione :'diesel'
},
    {
    marca: 'ferrari',
    modello: 'ferrari roma',
    alimentazione :'benzina'
}
];
//alimentazione macchine
const dieselCars = [], benzinaCars = [], otherCars = [];
//divisione in 3 array a seconda dell'alimentazione della macchina
for (let i = 0; i < cars.length; i++) {
    switch(cars[i].alimentazione){
        case 'benzina':
            benzinaCars.push(cars[i]);
            break;
        case 'diesel':
            dieselCars.push(cars[i]);
            break;
        default:
            otherCars.push(cars[i]);
            break;
    }
}
cars.push(dieselCars,benzinaCars,otherCars);
console.log('benzina',benzinaCars);
console.log('diesel',dieselCars);
console.log('other',otherCars);
