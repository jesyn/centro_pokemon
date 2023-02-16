import React, { useContext, useEffect } from 'react';
import { FormContext } from '../../context/ContextoFormulario';

const Detalle = () => {
    // Aqui deberíamos obtener los datos del formulario para poder mostrarlo en
    // la vista previa.
    const [store, dispatch] = useContext(FormContext);

    return (
        <div className='detalle-formulario'>
            <div className='encabezado'>
                <h3>Vista Previa de la Solicitud</h3>
            </div>
            <section className='datos-cliente'>
                <h4>Datos del Entrenador</h4>
                <div className='fila'>
                    <p>Nombre: {store.entrenador.nombre} </p>
                    <p>Apellido: {store.entrenador.apellido} </p>
                    <p>Email: {store.entrenador.email} </p>
                </div>
            </section>
            <section className='datos-cliente'>
                <h4>Datos del Pokémon</h4>
                <div className='fila'>
                    <p>Nombre:{store.pokemon.nombre} </p>
                    <p>Tipo: {store.pokemon.tipo} </p>
                    <p>Elemento: {store.pokemon.elemento} </p>
                    <p>Altura: {store.pokemon.altura} </p>
                    <p>Edad: {store.pokemon.edad} </p>
                </div>
            </section>
            <button
                className='boton-enviar'
                onClick={() => {
                    alert('Solicitud enviada :)');
                    dispatch({ type: 'RESET' });
                }}
            >
                Enviar Solicitud
            </button>
        </div>
    );
};

export default Detalle;
