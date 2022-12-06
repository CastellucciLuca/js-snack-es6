/***
 * 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età, creiamone almeno una decina.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

 */
const peoples =  [
    { name: 'Luca', surname: 'poddighe', age: 25 },
    { name: 'Laura', surname: 'pausini', age: 27 },
    { name: 'Lorenzo', surname: 'militare', age: 33 },
    { name: 'Andrea', surname: 'ostrogoti', age: 22 },
    { name: 'Martina', surname: 'rossi', age: 17 },
    { name: 'Sara', surname: 'verdi', age: 20 },
    { name: 'Leonardo', surname: 'restio', age: 45 },
    { name: 'Diego', surname: 'lamberti', age: 14 },
    { name: 'Giovanni', surname: 'oliberti', age: 54 },
    { name: 'Josue', surname: 'carducci', age: 15 },
];

const driversList = peoples.map((people) => {
    if (people.age > 17){
        return `${people.name} ${people.surname} can drive`;
    }
    return `${people.name} ${people.surname} can't drive`;
});

console.log(driversList);