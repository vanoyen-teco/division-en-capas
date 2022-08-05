//const { fork } = require("child_process");
//Desactivado child

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

const get = (req, res) => {
    const max = (req.params.cant)?parseInt(req.params.cant):100000000;
    //const childProcess = fork("./models/randomSobrecargado.js");
    const data = getNumbers(max);// agregado funcion directo.
    res.send(data);
    // childProcess.on("message", function (data) {
    //     return res.send(data);
    // });
}

module.exports = {
    get,
};