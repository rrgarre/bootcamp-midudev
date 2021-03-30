const Mensaje = (props) => {
    console.log(props.numero)
    console.log(props.nombre)
    console.log(props.persona)
    return (
    <div>
        <p>Mensaje de {props.nombre} numero {props.numero}. Fila num {props.persona.nombre}</p>
        <h1 style={{color: 'red'}}>
            {props.persona.nombre+' '} 
            {props.persona.apellidos[0]+' '} 
            {props.persona.apellidos[1]+' '}
            y tiene {props.persona.edad} años
        </h1>
    </div>
    )
}

export default Mensaje