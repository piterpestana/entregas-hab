/**
 * Entregable semana 2
 * 
 * Escribe el código necesario para decidir en qué
 * fotografías sale Pablo. Como resultado se debe
 * obtener un array de strings con los nombres de las
 * fotografías.
 *  
 */

const photos = [
    {
        name: 'Cumpleaños de 13',
        people: ['Maria', 'Pablo']
    },
    {
        name: 'Fiesta en la playa',
        people: ['Pablo', 'Marcos']
    },
    {
        name: 'Graduación',
        people: ['Maria', 'Lorenzo']
    },
]

PhotosofClient = (client) => {
    let PhotosOfYou = [];
    
    for (let photo of photos) {

        if (photo.people.indexOf(client)>-1) { 

            PhotosOfYou.push(photo.name)

                    }
                }
            return PhotosOfYou
            
            }


client = 'Pablo'

result = PhotosofClient(client)

console.log(result)