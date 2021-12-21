var faker = require('faker');

var database = { users: []};

for (var i = 1; i<= 300; i++) {
  database.users.push({
    id: i,
    //name: faker.commerce.productName(),
    name:faker.commerce.name,
    email: faker.commerce.email,
    phone: faker.commerce.phone,
   
  });
}

console.log(JSON.stringify(database));