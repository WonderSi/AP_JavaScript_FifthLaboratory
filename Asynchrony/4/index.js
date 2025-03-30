function deferredSum(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject(new Error('Оба аргемента должны быть числами!'));
            return;
        }

        console.log(`Изначальные значения: ${a}, ${b}`)

        let currentSum = a;
        let currentCallCount = 0;

        const intervalId = setInterval(() => {
            currentSum += b;
            currentCallCount++;

            console.log(`Текущая сумма: ${currentSum}, количество вызовов: ${currentCallCount}`);

            if (currentCallCount === 5) {
                clearInterval(intervalId);
                resolve(currentSum);
            }
        }, 2000);
    });
}

function main() {
    deferredSum(2, 3)
        .then(result => {
            console.log(`Первый результат: ${result}`);
            return deferredSum(2, 'txt');
        })
        .then(result => console.log(`Второй результат: ${result}`))
        .catch(error => console.error(error));
}


main();