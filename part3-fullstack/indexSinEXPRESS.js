const http = require('http')

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

const app = http.createServer((request, response) => {
    // response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.writeHead(200, { 'Content-Type': 'application/json' })
    // response.end('Hola mundo')
    response.end(JSON.stringify(notes))
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)