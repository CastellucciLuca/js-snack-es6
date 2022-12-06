// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:

// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]

// Crea un nuovo array con la lista dei mammiferi.
// Bonus 1 : trasforma ogni valore di ogni animale in tutto maiuscolo tranne la prima lettera, tipo // leone => lEONE, canidi => cANIDI

const animali = [   
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' }
]
const mammiferi = animali.filter((animale) => animale.classe === 'mammiferi');
console.log(mammiferi);

const newAnimali = animali.map((animale) => {
    animale.nome = animale.nome[0].toLowerCase() + animale.nome.substring(1, animale.nome.length).toUpperCase();
    animale.famiglia = animale.famiglia[0].toLowerCase() + animale.famiglia.substring(1, animale.famiglia.length).toUpperCase();
    animale.classe = animale.classe[0].toLowerCase() + animale.classe.substring(1, animale.classe.length).toUpperCase();
    return animale;
});
console.log(newAnimali);