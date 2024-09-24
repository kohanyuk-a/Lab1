const arr = [true, 'hello', 5, 12, -200, false, false, 'word', null, true, 98, null, 6, null,
    { a: 1 }, false, "frog", -18];
const typeCount = {};

for (const item of arr) {
    const type = typeof item;

    if (!typeCount[type]) {
        typeCount[type] = 0;
    }

    typeCount[type]++;
}

console.log(typeCount);
