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
    lunghezza: '16cm',
    },
    {
    varietà:'Zucchino nero di Milano',
    peso: 105,
    lunghezza: '12cm',
    },
    {
        varietà:'Zucchino siciliano',
        peso: 50,
        lunghezza: '15cm',
    },
    {
        varietà:'Zucchina striata di Napoli',
        peso: 25,
        lunghezza: '12cm',
    },
    {
        varietà:'Zucchina rigata pugliese',
        peso: 14,
        lunghezza: '17cm',
    },
    {
        varietà:'Zucchino tondo di Piacenza',
        peso: 15,
        lunghezza: '15cm',
    },
    {
        varietà:'Zucchino tondo di Nizza',
        peso: 12,
        lunghezza: '6cm',
    },
    {
        varietà:'Zucchino tondo di Firenze',
        peso: 10,
        lunghezza: '16cm',
    },
    {
        varietà:'Zucchina trombetta di Albenga',
        peso: 15,
        lunghezza: '17cm',
    },
    {
        varietà:'Zucchina pâtisson',
        peso: 9,
        lunghezza: '6mt',
    },
]

let peso = 0;
for (let i = 0; i < zucchine.length; i++) {
    peso += zucchine[i].peso;
}
console.log(peso +'kg');