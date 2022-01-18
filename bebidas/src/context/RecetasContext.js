import React, { createContext, useState } from 'react'

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [ recetas, setRecetas ] = useState([]);

    const [ consultaReceta, setConsultaReceta ] = useState({
        nombre: '',
        categoria: ''
    });

    return (
        <RecetasContext.Provider
            value={{
                setConsultaReceta
            }}>

                {props.children}
        </RecetasContext.Provider>
    )
}

export default RecetasProvider;
