async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
}
function f() {
    return wait()
        .then(result => {
            console.log('Результат: ', result);
            return result;
        })

// ...что здесь написать?
// чтобы вызвать wait() и дождаться результата "10" от async–функции
// не забывайте, здесь нельзя использовать "await"
}

f();