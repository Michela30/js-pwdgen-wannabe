
const firstName = prompt ('Inserisci il tuo nome');

console .log(firstName, typeof firstName);

const lastName = prompt ('Inserisci il tuo cognome');

console .log(lastName, typeof lastName);

const favouriteColor = prompt ('Inserisci il tuo colore preferito');

console .log(favouriteColor, typeof favouriteColor);

document .writeln(`${firstName}
${lastName}
${favouriteColor}
${101}`)


document .getElementById('my-text').innerHTML = (`${firstName}
${lastName}
${favouriteColor}`)
