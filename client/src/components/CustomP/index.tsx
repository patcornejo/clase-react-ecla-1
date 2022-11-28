import React from "react"

export default () => {
    return (
        <>
            <div>
                <p>Hola! Comenzaremos 09o0el desafío. <br/>
                    El objetivo es construir una Componente para manejar opciones de cadena inversa (reverse string).
                    Para esto, deberán crear lo siguiente:
                </p>
                <h3 style={{fontWeight: 'bold'}}>Requisitos</h3>
                <ul>
                    <li>Crear un text input para ingresar cadenas de texto.</li>
                    <li>Crear un dropdown para seleccionar las diferentes opciones de inversa.</li>
                    <li>Crear un botón para realizar la operación de cadena inversa.</li>
                    <li>Deberán crear una lista con los resultados de las operaciones.</li>
                </ul>
                <h3>Operaciones:</h3>
                <ol>
                    <li>Inversa <b>Full String</b></li>
                    <ul>
                        <li>Ejemplo: Big Red Dog</li>
                        <li>Resultado: goD deR giB</li>
                    </ul>
                    <li>Inversa <b>Each Word</b></li>
                    <ul>
                        <li>Ejemplo: Big Red Dog</li>
                        <li>Resultado: giB deR goD</li>
                    </ul>
                    <li>Inversa <b>Order</b></li>
                    <ul>
                        <li>Ejemplo: Big Red Dog</li>
                        <li>Resultado: Dog Red Big</li>
                    </ul>
                </ol>
            </div>
        </>
    )
}
