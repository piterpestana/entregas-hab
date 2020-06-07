// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/posts/1

// a) Generar contador de mensajes por usario
// b) Generar una lista con la siguiente estructura:
/*[
    {
        userId: <userId>,
        posts: [
            {
                title: <title>
                body: <body>     // hay que obtenerlo de la segunda petición
            },
            {
                title: <title>
                body: <body>
            },
        ]
    }

]
*/
// CONTADOR DE MENSAJES POR INDIVIDUO

const axios = require('axios');

const URL_MESSAGES = 'https://jsonplaceholder.typicode.com/posts';

async function retrieveData() {
    const messages = await axios.get(URL_MESSAGES);
    const cleanedMessages = messages.data
    let counter = {}

    for (message of cleanedMessages) {
        message.userId
        counter[message.userId]
        if (counter[message.userId] != undefined) {
            counter[message.userId]++;
        } else {
            counter[message.userId] = 1;
        }
    }
    
    console.log(counter) 
}
retrieveData()
    .then(resultados => {

    })
    .catch(error => {
        console.log(' Imposible realizar la operación ')
    })

 
// LISTA CON ESTRUCTURA REQUERIDA

/*

async function getStructure() {

const messages = await axios.get(`https://jsonplaceholder.typicode.com/posts/`);
const cleanedMessages = messages.data

users = {}
    for (message of cleanedMessages) {
        const responseMessages = await axios.get(`https://jsonplaceholder.typicode.com/posts/${message.id}`)
        detailedMessage = responseMessages.data
        if (users[detailedMessage.userId] === undefined) {
            users[detailedMessage.userId] = {
                userId: detailedMessage.userId,
                messages: [
                    {
                        title: detailedMessage.title,
                        body: detailedMessage.body
                    }
                ]
            }
        } else {
            users[detailedMessage.userId].messages.push({
                title: detailedMessage.title,
                body: detailedMessage.body
            });
        }
       
        console.log(users)
    }

}

getStructure()
    .then(resultados => {

    })
    .catch(error => {
        console.log(' Imposible realizar la operación ', error)
    })



//NUMERO DE POSTS TOTALES


/*
function getTotalNumberOfPosts(lines) {
    // sabiendo que cada línea contiene una sola playa,
    // el problema consiste en contar cuántas líneas hay.
    // Sin embargo, hay línea que no debemos contar:
    //     - la primera, ya que es la cabecera del fichero
    //     - las que están vacías
    //     - las que tienen separadores pero no tienen playa (;;;;;;)
    let counter = 0;

    for (let line of lines) {

    let line.userId : 1

}

        // si el split nos da una sola entrada, es que no había campos, así que
        // no cuento esta línea
        // if (fields.length <= 1) {
        //  continue; // instrucción para pasar a la siguiente iteracción del bucle.
        //}

        // Si habiendo campos, están vacíos, no los contamos tampoco.
        // Vamos a coger el primer campo como referencia
        // Uso la función 'trim()', que elimina espacios al principio
        // y al final de la palabra. De esta forma, me da igual que haya '   ' o '',
        // ya que después de aplicar el trim() su longitud será 0
        if (fields[0].trim().length == 0) {
            continue;
        }

    }

    return counter;
    }

    counterOfPosts = getTotalNumberOfPosts(cleanedMessages)

*/
