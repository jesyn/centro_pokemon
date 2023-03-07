import React, { useState, useContext } from 'react';
import { FormContext } from '../../context/ContextoFormulario';
import { useQuery } from 'react-query';
import { getEspecie } from '../hooks/getEspecie';

// Debemos reemplazar este array por los datos provenientes de la API.
/* const especies = [
    { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-species/1/' },
    { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon-species/2/' },
    { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon-species/3/' },
]; */

export const InputEspecie = ({ name, label }) => {
    let [page, setPage] = useState(0);
    const [mostrarPopup, setMostrarPopup] = useState(false);
    const [store, dispatch] = useContext(FormContext);

    const query = useQuery(['getespecie', page], () => getEspecie(page), {
        keepPreviousData: false,
    });
    const { isLoading, isError, isSuccess, data } = query;

    const elegirEspecie = (e, nombreEspecie) => {
        e.preventDefault();

        dispatch({
            type: 'actualizar_pokemon',
            payload: { nombreEspecie },
        });
        setMostrarPopup(false);
        console.log(nombreEspecie);
    };

    let handlePrevioustPage = () => setPage((old) => Math.max(0, old - 20));
    let handleNextPage = () => setPage((old) => old + 20);

    console.log({ page });
    console.log({ data });

    const renderizarEspecies = () => (
        <>
            {data &&
                !isLoading &&
                data?.results.map((especie) => (
                    <button
                        key={especie.name}
                        className='botones-especie'
                        onClick={(e) => elegirEspecie(e, especie.name)}
                    >
                        {especie.name}
                    </button>
                ))}
        </>
    );

    return (
        <div className='input-contenedor'>
            {mostrarPopup && (
                <div className='popup-especie'>
                    <h4>Seleccionar especie</h4>
                    <div className='contenedor-especies'>
                        {renderizarEspecies()}
                    </div>
                    <div className='paginador'>
                        <button
                            className='boton-anterior'
                            onClick={handlePrevioustPage}
                            disabled={
                                data?.previous === null
                            } /* {page === 0} */
                        >
                            Anterior
                        </button>
                        <button
                            className='boton-siguiente'
                            onClick={handleNextPage}
                            disabled={data?.next === null}
                        >
                            Siguiente
                        </button>
                    </div>
                </div>
            )}

            <>
                <p htmlFor={name}>{label}</p>
                <button
                    className='boton-seleccionar-especies'
                    onClick={() => setMostrarPopup(true)} //probar poner un toogle
                >
                    Seleccionar
                </button>
            </>
        </div>
    );
};

export default InputEspecie;
