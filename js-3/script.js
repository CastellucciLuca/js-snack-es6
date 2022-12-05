/**
 *
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza.
 *
 * Calcola quanto pesano tutte le zucchine.
 *
 */

const zucchine = [
    {
    varietà:'Zucchino ortolano di Faenza',
    peso: 29,
    lunghezza: 16
    },
    {
    varietà:'Zucchino nero di Milano',
    peso: 105,
    lunghezza: 12
    },
    {
    varietà:'Zucchino siciliano',
    peso: 50,
    lunghezza: 15
    },
    {
    varietà:'Zucchina striata di Napoli',
    peso: 25,
    lunghezza: 12
    },
    {
    varietà:'Zucchina rigata pugliese',
    peso: 14,
    lunghezza: 17
    },
    {
    varietà:'Zucchino tondo di Piacenza',
    peso: 15,
    lunghezza: 15
    },
    {
    varietà:'Zucchino tondo di Nizza',
    peso: 12,
    lunghezza: 6
    },
    {
    varietà:'Zucchino tondo di Firenze',
    peso: 10,
    lunghezza: 16
    },
    {
    varietà:'Zucchina trombetta di Albenga',
    peso: 15,
    lunghezza: 17
    },
    {
    varietà:'Zucchina pâtisson',
    peso: 9,
    lunghezza: 4
    },
]

let pesoTotale = 0;
let mediaPeso = 0;

let lunghezza = 0;

for (let i = 0; i < zucchine.length; i++) {
    pesoTotale += zucchine[i].peso;
    mediaPeso = pesoTotale / zucchine.length;
}
console.log(pesoTotale +'kg');
console.log(mediaPeso + ' media dei pesi in kg');