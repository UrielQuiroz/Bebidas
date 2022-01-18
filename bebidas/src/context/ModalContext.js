import React, { createContext, useEffect, useState} from 'react';
import axios from 'axios';


export const ModalContext = createContext();

const ModalProvider = (props) => {

    //State del provider
    const [ idReceta, setIdReceta ] = useState(null);

    const [ infoReceta, setInfoReceta ] = useState({});

    //Una vez que tenemos una receta, llamamos la api
    useEffect(() => {

        const obtenerReceta = async () => {
            if(!idReceta) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
            const result = await axios.get(url);
            setInfoReceta(result.data.drinks[0]);
        }

        obtenerReceta();

    }, [idReceta])

    return (
        <ModalContext.Provider
            value={{
                infoReceta,
                setIdReceta,
                setInfoReceta
            }}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider
