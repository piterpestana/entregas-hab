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

const axios = require('axios');

const URL_POST = 'https://jsonplaceholder.typicode.com/posts';

async function retrieveData() {
    const responsePosts = await axios.get('https://jsonplaceholder.typicode.com/posts'); // respuesta de llamar a Axios
    const posts = responsePosts.data;
    let counters = {}
    for (post of posts) {
        post.userId
        counters[post.userId]
        if (counters[post.userId] != undefined) {
            counters[post.userId]++;
        } else {
            counters[post.userId] = 1;
        }
    }

    users = {}
    for (post of posts) {
        const responsePosts = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
        detailedPost = responsePosts.data
        if (users[detailedPost.userId] === undefined) {
            users[detailedPost.userId] = {
                userId: detailedPost.userId,
                posts: [
                    {
                        title: detailedPost.title,
                        body: detailedPost.body
                    }
                ]
            }
        } else {
            users[detailedPost.userId].posts.push({
                title: detailedPost.title,
                body: detailedPost.body
            });
        }
        console.log(counters)
        console.log('******************************************')
        console.log(users)
    }

}

retrieveData()
    .then(resultados => {

    })
    .catch(error => {
        console.log(' Imposible realizar la operación ', error)
    })
