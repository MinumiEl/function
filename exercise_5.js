const power = (x, n) => {
    if (n < 0) {
        throw new Error("Показатель степени должен быть натуральным числом.");
    }
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
};

// Протестируем функцию
console.log(power(2, 3)); // 8
console.log(power(5, 2)); // 25
console.log(power(3, 4)); // 81
console.log(power(10, 0)); // 1
