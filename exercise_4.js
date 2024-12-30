const printNumbers = (start, end) => {
    let current = start;

    const intervalId = setInterval(() => {
        console.log(current);
        current++;

        // Остановить интервал, когда достигнем конца
        if (current > end) {
            clearInterval(intervalId);
        }
    }, 1000);
};

// Пример использования
printNumbers(5, 15);
