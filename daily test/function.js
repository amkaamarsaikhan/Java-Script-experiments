const temperature = {
    celcius: convertToCelcius(100),      
    Fahrenheit: convertToFahrenheit(37)
}

function convertToFahrenheit(Celcius){
    let Fahrenheit = ((Celcius * 9) / 5) + 32;
    return `${Celcius}°C is ${Fahrenheit.toFixed(1)}°F`; 
}

function convertToCelcius(Fahrenheit){
    let celcius = ((Fahrenheit - 32) * 5) / 9;
    return `${Fahrenheit}°F is ${celcius.toFixed(1)}°C`;
}
console.log(
    temperature.celcius, 
    temperature.Fahrenheit
);




class Person {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    greet(){
        console.log(`Hello my name is ${this.name}.`)
    }
}
class Student extends Person {
    constructor(name, age, gender, studentId) {
        super(name, age, gender);
        this.studentId = studentId
    }
    study() {
        console.log(`${this.name} is studying.`);
    }
}

const person = new Person("Amka", 39, "female");
person.greet()

const student = new Student("Bob", 30, "male", "S12344");
student.greet();
student.study();