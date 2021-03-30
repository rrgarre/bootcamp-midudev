// Lo dejamos de usar al introducir EXPRESS
// const http = require('http')

// importamos express
const { request, response } = require('express')
const express = require('express')

// Creamos la aplicacion
const app = express()

// Añadimos la herramienta que parseará la info adjunta en los POST dentro de la request
app.use(express.json())

let notes = [
    {
        "id":1,
        "content": "Empezamos con la instalación de NodeJS",
        "date": "2021-03-20T10:00:00.000Z",
        "important": true
    },
    {
        "id":2,
        "content": "Escribimos el paso a paso",
        "date": "2021-03-20T11:00:00.000Z",
        "important": false
    },
    {
        "id":3,
        "content": "Arrancamos el servidor para ver las notas",
        "date": "2021-03-20T12:00:00.000Z",
        "important": true
    },
    {
        "id":4,
        "content": "Usamos nodemon para reiniciar servidor automáticamente con cada cambio",
        "date": "2021-03-20T19:00:00.000Z",
        "important": true
    }
]

// Lo dejamos de usar al introducir EXPRESS
// const app = http.createServer((request, response) => {
//     // response.writeHead(200, { 'Content-Type': 'text/plain' })
//     response.writeHead(200, { 'Content-Type': 'application/json' })
//     // response.end('Hola mundo')
//     response.end(JSON.stringify(notes))
// })

// Configuramos la app
// si recibimos un GET en el path '/'
app.get('/', (request, response) => {
    response.end('<h1>Hello world</h1>')
})
// Recupera las notas 
app.get('/api/notes', (request, response) => {
    // response.end(JSON.stringify(notes)) asi se haría sin framework EXPRESS
    response.json(notes)
})
// Recupera una nota
app.get('/api/notes/:id', (request, response) => {
    const id = parseInt(request.params.id)
    const note = notes.find(note => note.id == id)
    // Para verificar que se ha encontrado la nota
    if(note){
        console.log({note})
        response.json(note)
    }else{
        response.status(404).end()
    }
})
// Borra una nota (usando un filtro donde incluiremos las que estan sin borrar)
// Y se MACHACARÁ en 'notes' con las notas no eliminadas
app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id != id)
    // incluimos un status 204 de no hay contenido que mostrar... por ejemplo...
    response.status(204).end()
})
// Añadir nota
app.post('/api/notes', (request, response) => {
    const note = request.body
    // console.log(note)
    // response.json(note)

    // Buscar info de .map() y de los 3 puntos en JS
    const ids = notes.map(note => note.id)
    const maxId = Math.max(...ids)

    const newNote = {
        "id": maxId+1,
        "content": note.content,
        // Si important no es indefinido, que valga lo indicado, si no, a false
        "important": typeof note.important != 'undefined' ? note.important : false,
        "date": new Date().toISOString()
    }

    // Añadimos la nueva nota al final de las notas. 
    // Esto es como un concat()
    notes = [...notes, newNote]

    response.status(201).json(newNote)
})



const PORT = 3001

// El servidor con Express se levanta de forma asincrona
// Para que el mensaje se ejecute al terminar la primera accion
// debemos hacerlo con un 'callBack'
// app.listen(PORT)
// console.log(`Server running on port ${PORT}`)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})