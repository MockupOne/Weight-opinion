var age = prompt("Введите ваш возраст")
var height = prompt("Введите ваш рост в метрах");
var weight = prompt("Ввелите ваш вес в килограммах");

var imt = weight / (height * height);

var groupNumber;

if(age >= 18 && age <= 25){
    groupNumber = 1
} else if(age > 25 && age <= 49){
    groupNumber = 2
} else {
    groupNumber = 3
}

if(groupNumber === 1 && imt < 17.5) {
    alert("Ваш вес Недостаточен, опасно для здоровья")
} else if (groupNumber === 1 && imt >= 17.5 && imt < 19.5) {
    alert("Ваш вес Слегка снижен, неопасно для здоровья")
} else if (groupNumber === 1 && imt >= 19.5 && imt < 23) {
    alert("Ваш вес Нормальный")
} else if (groupNumber === 1 && imt >= 23 && imt < 27.5) {
    alert("Ваш вес Излишний")
} else if (groupNumber === 1 && imt >= 27.5 && imt < 30) {
    alert("У вас Ожирение 1 степени")
} else if (groupNumber === 1 && imt >= 30 && imt < 35) {
    alert("У вас Ожирение 2 степени")
} else if (groupNumber === 1 && imt >= 35 && imt < 40) {
    alert("У вас Ожирение 3 степени")
} else if (groupNumber === 1 && imt >= 40 ) {
    alert("У вас Ожирение 4 степени")
} else if(groupNumber === 2 && imt < 18) {
    alert("Ваш вес Недостаточен, опасно для здоровья")
} else if (groupNumber === 2 && imt >= 18 && imt < 20) {
    alert("Ваш вес Слегка снижен, неопасно для здоровья")
} else if (groupNumber === 2 && imt >= 20 && imt < 26) {
    alert("Ваш вес Нормальный")
} else if (groupNumber === 2 && imt >= 26 && imt < 28) {
    alert("Ваш вес Излишний")
} else if (groupNumber === 2 && imt >= 28 && imt < 31) {
    alert("У вас Ожирение 1 степени")
} else if (groupNumber === 2 && imt >= 31 && imt < 36) {
    alert("У вас Ожирение 2 степени")
} else if (groupNumber === 2 && imt >= 36 && imt < 41) {
    alert("У вас Ожирение 3 степени")
} else if (groupNumber === 2 && imt >= 41 ) {
    alert("У вас Ожирение 4 степени")
} else if (groupNumber === 3){
    alert ("Програма не предназначена для вашего возраста - только от 18 до 46 лет")
}