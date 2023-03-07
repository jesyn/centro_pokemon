import React, { useContext, useEffect } from 'react';
import { FormContext } from '../../context/ContextoFormulario';
import { useMutation } from 'react-query';
import { ingresarPokemon } from '../hooks/api';

const Detalle = () => {
    const [store, dispatch] = useContext(FormContext);
    //console.log({ store });

    const { mutate, isLoading, isSuccess, data, isError } =
        useMutation(ingresarPokemon);

    // Utilizamos un useEffect para que se ejecute una vez realiza la mutación y mostrar el mensaje de éxito o error.
    useEffect(() => {
        if (isSuccess) {
            alert(
                `Formulario enviado correctamente, id ${data ? data?.id : ''}`
            );
        } else if (isError) {
            alert(
                'Error al enviar el formulario. Por favor intente nuevamente'
            );
        }
    }, [isSuccess, data, isError]);

    return (
        <div className='detalle-formulario'>
            <div className='encabezado'>
                <h3>Vista Previa de la Solicitud</h3>
            </div>
            <section className='datos-cliente'>
                <h4>Datos del Entrenador</h4>
                <div className='fila'>
                    <p>Nombre: {store.entrenador?.nombre} </p>
                    <p>Apellido: {store.entrenador?.apellido} </p>
                    <p>Email: {store.entrenador?.email} </p>
                </div>
            </section>
            <section className='datos-cliente'>
                <h4>Datos del Pokémon</h4>
                <div className='fila'>
                    <p>Nombre:{store.pokemon?.nombrePokemon} </p>
                    <p>Tipo: {store.pokemon?.tipoPokemon} </p>
                    <p>Elemento: {store.pokemon?.elementoPokemon} </p>
                    <p>Altura: {store.pokemon?.alturaPokemon} </p>
                    <p>Edad: {store.pokemon?.edadPokemon} </p>
                    <p>Especie: {store.pokemon?.nombreEspecie} </p>
                </div>
            </section>
            <button
                className='boton-enviar'
                onClick={() => {
                    dispatch({ type: 'RESET' });
                    mutate(store);
                }}
            >
                {isLoading ? 'enviando ...' : 'Enviar Solicitud'}
            </button>
        </div>
    );
};

export default Detalle;
