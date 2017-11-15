//OBJECT DESTRUCTURING

const person = {
    name: 'Andres',
    age: 30,
    location: {
        county: 'Miami-Dade',
        temp: '76'
    }
};

const {name = 'Anonymous', age} = person;       //Use = to set default
//const name = person.name;
//const age = parson.age;

console.log(`${name} is ${age}.`);

const {county, temp: temperature} = person.location;      //Use : to rename variable

if (county && temperature) {
    console.log(`It's ${temperature} in ${county}.`);
}

const book = {
    title: 'The Three Body Problem',
    author: 'Cixin Liu',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);


//ARRAY DESTRUCTURING

const address = ['2101 Ludlam Rd', 'Miami', 'FL', '33155'];

const [street = '123 Main St', city, state] = address;

console.log(`You are in ${city}, ${state}`);


const item = ['Coffee(hot)', '2.00', '2.50', '2.75'];

const [beverage, , priceMedium] = item;

console.log(`A medium ${beverage} costs ${priceMedium}`);