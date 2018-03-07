const life = require('./life')

const khaue = life();

khaue.init("Khauê").
    addSchool('SENAC').
    addWork('Concrete').
    addSomeone('Juliane');

console.log(JSON.stringify(khaue));