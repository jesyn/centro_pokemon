import React, { useContext, useState } from 'react';
import { FormContext } from '../../context/ContextoFormulario';

const Input = ({ name, label, type = 'text', isEntrenador }) => {
    const [value, setValue] = useState('');
    const [store, dispatch] = useContext(FormContext);

    // Aqui deberíamos acceder al estado global para poder obtener los datos
    // del formulario y una manera de actualizar los mismos.
    // También, utilizaremos un estado local para manejar el estado del input.

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onBlur = (e) => {
        //e.preventDefault();
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
                //value={value}
                id={name}
                onChange={onChange}
                onBlur={onBlur}
            />
        </div>
    );
};

export default Input;
