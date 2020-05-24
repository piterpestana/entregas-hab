/**
 * El objetivo de este ejercicio es implementar una aplicación de consola
 * para calcular la cuota mensual de un préstamo. Para ello, la aplicación debe:
 *     - usar una librería para realizar los cálculos necesarios (buscad en npmjs
 *       por las palabras loan, mortgage o payoff)
 *     - recibir por línea de comandos los argumentos necesarios para realizar los
 *       cálculos. Para esto podéis usar directamente la API de NodeJS (process.argv)
 *       o bien usar una librería como commander o yargs 
 *     - el resultado debe aparecer en la consola
 * 
 */
 

// RECIBIENDO LOS RESULTADOS EN NAVEGADOR 

//SAMPLE URL: http://localhost:3000/calculate?amount=180000&rate=4.25&totalTerm=360&amortizeTerm=60


const express = require('express');
const amortize = require('amortize')
const app = express()

app.get('/calculate', function (req, res) {


    res.send(amortize({
        amount: req.query['amount'],
        rate: req.query['rate'],
        totalTerm: req.query['totalTerm'],
        amortizeTerm: req.query['amortizeTerm']
    }));

})

app.listen(3000);





