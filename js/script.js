//1.** Creare un oggetto che descriva una studentessa o uno studente, con le seguenti proprietà: `nome`, `cognome` e `età`.
//2.** Stampare a schermo attraverso un ciclo `for-in` tutte le proprietà dell'oggetto.
//3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte) e mostriamoli.

const student = {
    name: 'Luca',
    surname: 'Giongi',
    age: 24
}

const secondStudent ={
    name: 'Pino',
    surname: 'Pinolo',
    age: 44
}

for (let key in student){
    console.log(key + " => " + student[key]);
}

const classe = [];

classe.push(student,secondStudent);
console.log(classe);