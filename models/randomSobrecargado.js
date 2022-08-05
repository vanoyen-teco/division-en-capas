const getNumbers = (max) => {
    let numbers = {};
    for (let i = 1; i <= max; i++) {
        let num = Math.floor(Math.random() * 1000) + 1;
        (num in numbers)
        ?numbers[num] += 1
        :numbers[num] = 1;
    }
    return numbers;
};

process.on("message", function (max) {
    process.send(getNumbers(max));
});