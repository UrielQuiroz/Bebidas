import React, { createContext, useState } from 'react'

//Crear el context
export const CategoriasContext = createContext();

//Provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {
    
    //Crear el state del context
    const [ hola, setHola ] = useState('hola desde state');

    return (
        <CategoriasContext.Provider
            value={{
                hola
            }}>

            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;