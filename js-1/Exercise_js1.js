/**
 * El objetivo del ejercicio es crear un nuevo array que contenga
 * todos los hashtags del array `tweets`, pero sin repetir
 * 
 * Nota: como mucho hay 2 hashtag en cada tweet
 */

const tweets = [
    'aprendiendo #javascript en  Vigo',
    'empezando el segundo módulo del bootcamp!',
    'hack a boss bootcamp vigo #javascript #codinglive']


function getHastags(tweet) {

    let hashtags = [];

    const position1 = tweet.indexOf('#');
    const position2 = tweet.indexOf('#', position1 + 1);

    if (position1 != -1) {

        const firstHashTag = tweet.slice(position1, position1 + 10 + 1);

        hashtags.push(firstHashTag);
    }

    if (position2 != -1) {
        const secondHashTag = tweet.slice(position2, position2 + 10 + 1);
        hashtags.push(secondHashTag);
    }

    return hashtags;

}

for (let tweet of tweets) {

    let hashtags = getHastags(tweet);
    console.log(hashtags);

}

