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
      
        UpClient = client.toUpperCase() // No consigo que esto funcione :(

        if (photo.people.indexOf(client)>-1) { // Aquí haría referencia a UpClient... pero tampoco funciona

            PhotosOfYou.push(photo)

                    }
                }
            return PhotosOfYou
            
            }


client = 'Pablo'

result = PhotosofClient(client)

console.log(result)