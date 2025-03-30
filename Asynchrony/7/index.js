async function interviews(applicants) {
    const delay = (time) => {new Promise(resolve => setTimeout(resolve, time))};

    async function applicant([name, t1, d1, t2, d2]) {
        console.log(`${name} started the 1 task.`);
        await delay(t1 * 100);
        console.log(`${name} moved on to the defense of the 1 task.`);
        await delay(d1 * 100);
        console.log(`${name} completed the 1 task.`);

        console.log(`${name} is resting.`);
        await delay(500);

        console.log(`${name} started the 2 task.`);
        await delay(t2 * 100);
        console.log(`${name} moved on to the defense of the 2 task.`);
        await delay(d2 * 100);
        console.log(`${name} completed the 2 task.`);
    }

    await Promise.all(applicants.map(applicant));
}

interviews([
    ['Ivan', 5, 2, 7, 2],
    ['John', 3, 4, 5, 1],
    ['Sophia', 4, 2, 5, 1]
]);