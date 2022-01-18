import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {

    const [ busqueda, setBusqueda ] = useState({
        nombre: '', 
        categoria: ''
    });

    const { categorias } = useContext(CategoriasContext);
    const { setBuscarReceta, setConsultando } = useContext(RecetasContext);

    //Función para leer los contenido
    const obtenerDatosReceta = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    return (
        <form 
            className='col-12'
            onSubmit={e => {
                e.preventDefault();
                setBuscarReceta(busqueda);
                setConsultando(true);
            }} >

            <fieldset className='text-center'>
                <legend>Busca bebidas por Categoria o Ingrediente</legend>
            </fieldset>

            <div className='row mt-4'>
                <div className='col-md-4'>
                    <input 
                        type="text"
                        className='form-control'
                        name='nombre'
                        placeholder='Busca por Ingrediente'
                        onChange={obtenerDatosReceta} />
                </div>

                <div className='col-md-4'>
                    <select 
                        name="categoria"
                        className='form-control'
                        onChange={obtenerDatosReceta} >

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
