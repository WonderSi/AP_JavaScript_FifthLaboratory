function f1(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = x * x;
            console.log(`f1(${x}) = ${result}`);
            resolve(result);
        }, Math.floor(Math.random() * 1000));
    })
}

function f2(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = 2 * x;
            console.log(`f2(${x}) = ${result}`);
            resolve(result);
        }, Math.floor(Math.random() * 1000));
    })
}

function f3(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = -2;
            console.log(`f3(${x}) = ${result}`);
            resolve(result);
        }, Math.floor(Math.random() * 1000));
    })
}

function f4(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = x * 4;
            console.log(`f4(${x}) = ${result}`);
            resolve(result);
        }, Math.floor(Math.random() * 1000));
    })
}

function f5(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = x * 5;
            console.log(`f5(${x}) = ${result}`);
            resolve(result);
        }, Math.floor(Math.random() * 1000));
    })
}

function f6(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = x * 6;
            console.log(`f6(${x}) = ${result}`);
            resolve(result);
        }, Math.floor(Math.random() * 1000));
    })
}

const functions = [f1, f2, f3, f4, f5, f6];

async function Fx(x, n) {
    let currentResult = x;

    try {
        for (let i = 0; i < n; i++) {
            currentResult = await functions[i](currentResult);
        }
        console.log(`Result after ${n} steps: ${currentResult}`);
        return currentResult;
    } catch (error) {
        console.error(`Ошибка после ${n} шага:`, error);
        throw error;
    }
}

async function main() {
    try {
        console.log('Example 1: n = 2');
        await Fx(3, 2);

        console.log('Example 2: n = 4');
        await Fx(3, 4);

        console.log('Example 3: n = 6');
        await Fx(3, 6);

        console.log('All examples completed');
    } catch (error) {
        console.error(error);
    }
}


main();