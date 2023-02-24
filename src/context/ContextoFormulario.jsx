import { createContext, useReducer } from 'react';
import { formularioReducer, initialState } from '../components/hooks/reducer';
import PropTypes from 'prop-types';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [store, dispatch] = useReducer(formularioReducer, initialState);

    return (
        <FormContext.Provider value={[store, dispatch]}>
            {children}
        </FormContext.Provider>
    );
};

FormProvider.propTypes = {
    children: PropTypes.element.isRequired,
};
