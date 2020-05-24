// RECIBIENDO LOS DATOS EN CONSOLA

const axios = require('axios');


(async () => {

    let amount = process.argv[2];
    let rate = process.argv[3];
    let totalTerm = process.argv[4];
    let amortizeTerm = process.argv[5];

    const URL = `http://localhost:3000/calculate?amount=${amount}&rate=${rate}&totalTerm=${totalTerm}&amortizeTerm=${amortizeTerm}`

    const importacion = await axios.get(URL);

try {
    console.log(importacion.data);
  } catch (e) {
    console.log('ESTO ES UN ERROR');

  }

})()