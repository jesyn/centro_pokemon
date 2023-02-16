// Aqui debemos crear nuestro contexto y nuestro provider.
import { createContext, useReducer } from "react";
import { formularioReducer, initialState } from "../components/hooks/reducer";


export const FormContext = createContext()

export const FormProvider = ({ children }) => {
    const [store, dispatch] = useReducer(formularioReducer, initialState)
    console.log(store)
    return (
        <FormContext.Provider value={[store, dispatch]}>
            {children}
        </FormContext.Provider>
    )
}