// ooriihoo ner, nas, uls, durtai ongo, suragch mon eseh

const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your name: ', (name) => {
  rl.question('Enter your age: ', (age) => {
    rl.question('Enter your country: ', (country) => {
      rl.question('Enter your fav color: ', (favcolor) => {
        rl.question('Enter your status: ', (status) => {
          console.log(`Hello ${name}, you are ${age} years old, your country ${country}, your fav color is ${favcolor}, your status is ${status}.`);

          // Close the readline interface
          rl.close();
        })
      })
    })
  });
});

const car = {
    brand: "toyota",
    model: "camry",
    year: 2021
};

console.log(Object.values(car));


const Person = {
    firstName: "Amarjargal",
    lastName: "Amarsaikhan",
    age: 39
};
delete Person.age
Person["city"] = "UB"
Person.position = "center"
Person["isMarried"] = true

console.log(Object.values(Person))

Person.getFullName = function () {
    return this.firstName + this.lastName
};
console.log(Person.getFullName());




const book1 = {
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2008
};

const book2 = {
    author: "Uncle Bob",
    description: "A handbook of agile software craftsmanship",
    category: "Programming",
    year: 2020
};
function mergeBooks(book1, book2) {
    return {
        ...book1,
        ...book2
    };
}
console.log(mergeBooks(book1, book2));



const config = {
  host: "localhost",
  port: 8080,
  protocol: "http"
}
Object.freeze(config);

config.port = 3000;  

console.log(config);

Object.seal(config);

config.port = 3000;      
config.user = "admin";   
delete config.protocol;

console.log(config);




const muur = {
  name: "George",
  age: 40,
  gender: "Male",
  address: {
    city: "UB",
    street: "Main",
    zip: 14050
  },

  getNestedEntries() {
    function helper(obj) {
      return Object.entries(obj).map(([key, value]) => {
        if (typeof value === "object" && value !== null) {
          return [key, helper(value)];
        }
        return [key, value];
      });
    }
    const { getNestedEntries, ...rest } = this;

    return {
      entries: helper(rest)
    };
  }
};

console.dir(muur.getNestedEntries(), { depth: null });





const Movie = {
    title: 1408,
    director: "me",
    year: 1999,
    genre: "horror"
};
function getKeysAndValues(Movie) {
    const keys = Object.keys(Movie);
    const values = Object.values(Movie);
    const entries = Object.entries(Movie);
    return { keys, values, entries }
};

console.log(getKeysAndValues(Movie));




const student = {
  name: "Amka",
  age: 39,
  address: {
    street: "Main",
    city: "Sincity",
    zipCode: 14050
  },

  getFullAddress() {
    return `${this.address.street}, ${this.address.city}, ${this.address.zipCode}`;
  }
};

console.log(student.getFullAddress());

const address = {
    street: "First Ave",
    city: "Metropolis",
    zipCode: 12345,
    student: {
        name: "John",
        age: 21,
        getFullAddress() {
            return `${address.street}, ${address.city}, ${address.zipCode}`;
        }
    },
    toString() {
        return `
Street: ${this.street}
City: ${this.city}
Zip: ${this.zipCode}
Student address: ${this.student.getFullAddress()}
        `;
    }
};

console.log(String(address));


const User = {
  name: "Amka",
  age: 25,
  greet() {
    return `Hello ${this.name}!`;
  },

  updateName(newName) {
    this.name = newName;
  }
};


console.log(User.greet());  

User.updateName("Turuu");
console.log(User.greet());       






const sports = ["basketball", "volleyball", "baseball", "football", "swimming"];
console.log(sports[2])


const animals = ["Lion", "Tiger", "Elephant", "Giraffe"];
animals[2] = "Panda";
console.log(animals);


const books = ["1984", "Brave New World", "Fahrenheit 451"];
books.push("Three Body Problem","Everything is eventual")
console.log(books);


const numbers = [10, 20, 30, 40, 50];
console.log(numbers.indexOf(30));


const fruits1 = ["orange","apple","pear"];
const fruits2 = ["melon","banana","cherry"];
const allFruits = fruits1.concat(fruits2);
console.log(allFruits);




const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

function checkColor(colorName) {
    if (colors.includes(colorName)) {
        console.log(`${colorName} өнгө жагсаалтанд БАЙНА.`);
    } else {
        console.log(`${colorName} өнгө жагсаалтанд БАЙХГҮЙ.`);
    }
}

checkColor("Orange");  



function compareArrayLength(arr1, arr2) {
    return arr1.length === arr2.length;
}

const array1 = ["a", "b", "c","d"];
const array2 = ["a", "b", "c"];

console.log(compareArrayLength(array1, array2)); 




const words = ["JavaScript", "is", "a", "versatile", "language"];

const sentence = words.join(" ");

console.log(sentence);




class emp {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
const emp1 = new emp("geek1","25years");
console.log(emp1.name);
console.log(emp1.age);





class Car { 
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    
    age() {
        const date = new Date(); 
        return date.getFullYear() - this.year;
    }
}

const myCar = new Car("Ford", 2014);

// document.getElementById("demo").innerHTML = "My car is " + myCar.age() + " years old.";

console.log("My car is " + myCar.age() + " years old.");




class Item {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    getTotalPrice() {
        return this.price * this.quantity
    }
}
const item = new Item ( "Apple", 6, 5 );
const totalPrice = item.getTotalPrice()
 console.log(`${item.name} niit une ${totalPrice}`);

