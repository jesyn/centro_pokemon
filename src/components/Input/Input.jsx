import React, { useContext, useState } from 'react';
import { FormContext } from '../../context/ContextoFormulario';
import PropTypes from 'prop-types';

const Input = ({ name, label, type = 'text', isEntrenador }) => {
    const [value, setValue] = useState('');

    const [store, dispatch] = useContext(FormContext);

    /**
     * @description funcion para actualizar el estado local del input
     * @param {InputEvent} e
     */
    const onChange = (e) => {
        setValue(e.target.value);
    };

    /**
     *@description funcion que se ejecuta cuando el input pierde el foco, enviando el valor del input al
     * contexto que el luego utilizado por el componente Detalle.
     * @param {InputEvent} e
     */
    const onBlur = (e) => {
        e.preventDefault();
        dispatch({
            type: isEntrenador ? 'actualizar_entrenador' : 'actualizar_pokemon',
            payload: { [e.target.name]: e.target.value },
        });
    };

    return (
        <div className='input-contenedor'>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
            />
        </div>
    );
};

export default Input;

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    isEntrenador: PropTypes.bool,
};
