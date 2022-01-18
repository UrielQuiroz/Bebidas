import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [ recetas, setRecetas ] = useState([]);

    const [ buscarReceta, setBuscarReceta ] = useState({
        nombre: '',
        categoria: ''
    });

    const [ consultando, setConsultando ] = useState(false);

    const { nombre, categoria } = buscarReceta;

    useEffect(() => {

        if(consultando) {
            const obtenerCategorias = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
                const result = await axios.get(url);
                setRecetas(result.data.drinks);
            }

            obtenerCategorias();
        }

    }, [buscarReceta])

    return (
        <RecetasContext.Provider
            value={{
                setBuscarReceta,
                setConsultando
            }}>

                {props.children}
        </RecetasContext.Provider>
    )
}

export default RecetasProvider;
