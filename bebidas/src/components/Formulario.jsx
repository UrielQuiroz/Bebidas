import React, { useContext } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';

const Formulario = () => {

    const { categorias } = useContext(CategoriasContext);
    
    return (
        <form className='col-12'>
            <fieldset className='text-center'>
                <legend>Busca bebidas por Categoria o Ingrediente</legend>
            </fieldset>

            <div className='row mt-4'>
                <div className='col-md-4'>
                    <input 
                        type="text"
                        className='form-control'
                        name='nombre'
                        placeholder='Busca por Ingrediente' />
                </div>

                <div className='col-md-4'>
                    <select name="categoria"
                            className='form-control' >
                                <option value="">--Selecciona Categoría--</option>
                                {categorias.map( categoria => (
                                    <option
                                        key={categoria.strCategory} 
                                        value={categoria.strCategory}>

                                            {categoria.strCategory}

                                    </option>
                                ))}
                    </select>
                </div>

                <div className='col-md-4'>
                    <input 
                        type="submit"
                        className='btn btn-block btn-primary'
                        value="Buscar Bebidas" />
                </div>
            </div>
        </form>
    )
}

export default Formulario
