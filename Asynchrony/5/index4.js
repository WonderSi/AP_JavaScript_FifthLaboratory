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

async function main() {
    try {
        const firstResult = await deferredSum(2, 3);
        console.log(`Первый результат: ${firstResult}`);

        const secondResult = await deferredSum(2, 'txt');
        console.log(`Второй результат: ${secondResult}`);
    } catch (error) {
        console.error(error);
    }
}


main();