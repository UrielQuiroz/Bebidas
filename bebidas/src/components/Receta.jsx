import React, { createContext } from 'react';
import { useContext } from 'react/cjs/react.development';
import { ModalContext } from '../context/ModalContext';

const Receta = ({receta}) => {

    const { setIdReceta } = useContext(ModalContext);

    return (
        <div className='col-md-4 mb-4'>
            <div className='card' >
                <h2 className='card-header'>{receta.strDrink}</h2>

                <img src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} />

                <div className='card-body'>
                    <button
                        type='button'
                        className='btn btn-block btn-primary'
                        onClick={ () => {
                            setIdReceta(receta.idDrink);
                        }} >Ver Receta</button>
                </div>
            </div>
        </div>
    )
}

export default Receta
