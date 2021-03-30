// console.log('Hola mundo')

const persona = {
    nombre: 'Rafa',
    apellidos: ['Ruiz','Garre', cadena = {entera: 'Ruiz Garre', reves: 'GarreRuiz'}],
    edad: 35,
    desarrollador: true,
    enlazado: 'Elemento encontrado con el nombre de una variable'
}

const field = 'enlazado'

console.log(persona.apellidos[1])
console.log(persona.apellidos[0])
console.log(persona.apellidos[2].entera)
console.log(persona.apellidos[2].reves)
console.log(persona[field])

const suma = (operando1, operando2) => {
    console.log(operando1)
    console.log(operando2)
    return operando1 + operando2
}

console.log(suma(7, 8))