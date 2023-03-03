import React, { useContext } from 'react';
import { getType } from './../hooks/getType';
import { FormContext } from '../../context/ContextoFormulario';
import { useQuery } from 'react-query';
import PropTypes from 'prop-types';

function Select({ name, label, isEntrenador }) {
    const [store, dispatch] = useContext(FormContext);
    const query = useQuery('gettype', getType, {
        //retry: false,
    });
    const { isLoading, isError, isSuccess, data } = query;

    //console.log(isError);

    const onBlur = (e) => {
        e.preventDefault();
        dispatch({
            type: isEntrenador ? 'actualizar_entrenador' : 'actualizar_pokemon',
            payload: { [e.target.name]: e.target.value },
        });
    };

    return (
        <div className='input-contenedor'>
            <label htmlFor={name}> {label} </label>
            <select name={name} disabled={!isSuccess} onBlur={onBlur}>
                {data &&
                    !isLoading &&
                    data?.results.map((item, index) => (
                        <option key={index} value={item.name}>
                            {item.name}
                        </option>
                    ))}
            </select>
        </div>
    );
}

Select.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    isEntrenador: PropTypes.bool,
};

export default Select;
