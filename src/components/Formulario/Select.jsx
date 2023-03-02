import React from 'react';
import { getType } from './../hooks/getType';
import { useQuery } from 'react-query';

function Select() {
    const query = useQuery('getCharacters', getType);

    const { isLoading, isError, error, data } = query;

    console.log(data?.results);
    console.log(isError);

    return (
        <div className='input-contenedor'>
            <label> Tipo </label>
            <select name='select' disabled={isError}>
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

export default Select;
