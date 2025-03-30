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

function Fx(x, n) {
    return new Promise((resolve, reject) => {
        let currentResult = x;
        let index = 0;

        function nextStep() {
            if (index >= n) {
                console.log(`Result after ${n} steps: ${currentResult}`);
                resolve(currentResult);
                return;
            }

            functions[index](currentResult)
                .then(result => {
                    currentResult = result;
                    index++;
                    nextStep();
                })
                .catch(error => {
                    console.log(`Result after ${n} steps: ${currentResult}`);
                    reject(error);
                });
        }

        nextStep();
    })
}

function main() {
    console.log('Example 1: n = 2');
    Fx(3, 2)
        .then(() => {
            console.log('Example 2: n = 4');
            return Fx(3, 4);
        })
        .then(() => {
            console.log('Example 3: n = 6');
            return Fx(3, 6);
        })
        .then(() => {
            console.log('All examples completed');
        })
        .catch(error => console.error('Global error:', error))
}


main();