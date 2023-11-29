function oneSubWhileTask() {
    let number = prompt("Введите количество (#):");
    let i = 0;
    let result = "";

    while (i < number) {
        result += "#";
        i++;
    }

    alert(result);
}

function twoSubWhileTask() {
    let number = prompt("Введите число:");
    let i = number;
    let result = "";

    while (i >= 0) {
        result += i + " ";
        i--;
    }

    alert(result);
}   

function threeSubWhileTask(){
    let number = prompt("Введите число:");
    let degree = prompt("Введите степень:");
    let result = 1;
    let i = 0;

    while (i < degree) {
        result *= number;
        i++;
    }

    alert(`Результат: ${result}`);
}

function fourSubWhileTask(){
    let number1 = prompt("Введите первое число:");
    let number2 = prompt("Введите второе число:");
    let commonDivisors = "";

    let i = 1;
    while (i <= number1 && i <= number2) {
        if (number1 % i === 0 && number2 % i === 0) {
            commonDivisors += i + " ";
        }
            i++;
    }

    alert(`Общие делители: ${commonDivisors}`);
}

function fiveSubWhileTask(){
    let number = prompt("Введите число для факториала:");
    let factorial = 1;
    let i = 1;

    while (i <= number) {
        factorial *= i;
        i++;
    }

    alert(`Факториал числа ${number}: ${factorial}`);
}


function oneSubDoWhileTask(){
    let number;

    do {
        number = prompt("Решите пример: 2 + 2 * 2");
    
        if (number !== "6") {
            alert("Неправильно!");
        }
    
    } while (number !== "6");
    
    alert("Правильно!");
    
}

function twoSubDoWhileTask(){
    let number = 1000;
    let count = 0;

    do {
        number /= 2;
        count++;
    } while (number > 50);

    alert(`Число: ${number}, количество делений: ${count}`);
}

function oneSubForTask(){
    let number = prompt("Введите число для поиска кратных:");
    let result = "";

    for (let i = 1; i <= 100; i++) {
        if (i % number === 0) {
        result += i + " ";
        }
    }

    alert(result);

}

function twoSubForTask(){
    let minNumber = parseInt(prompt("Введите минимальный диапазон:"));
    let maxNumber = parseInt(prompt("Введите максимальный диапазон:"));
    let result = "";
    
    for (let i = minNumber; i <= maxNumber; i++) {
        if ((i - minNumber) % 4 === 0) {
            result += i + " ";
        }
    }
    
    alert(result);
}

function threeSubForTask(){
    let number = prompt("Введите число для проверки на простое:");

    let isFlag = true;

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isFlag = false;
            break;
        }
    }

    if (isFlag) {
        alert(`${number} - простое число.`);
    } else {
        alert(`${number} - не простое число.`);
    }
}