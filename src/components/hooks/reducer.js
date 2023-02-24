//@ts-check

/**
 * @typedef {object} entrenador
 * @property {string} nombre
 * @property {string} apellido
 * @property {string} email
 */

/**
 * @typedef {object} pokemon
 * @property {string} nombre
 * @property {string} tipo
 * @property {string} elemento
 * @property {number} altura
 * @property {number} edad
 */

export const initialState = {
    /**
     * @type {entrenador}
     */
    entrenador: {
        nombre: '',
        apellido: '',
        email: '',
    },
    /**
     * @type {pokemon}
     */
    pokemon: {
        nombre: '',
        tipo: '',
        elemento: '',
        altura: 0,
        edad: 0,
    },
};

/**
 * funcion para actualizar el estado del entrenador y pokemon
 * @param {object} state recibe el estado inicial
 * @param {object} action recibe la accion para modificar el estado
 * @returns {object}
 */

export const formularioReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'actualizar_entrenador':
            return {
                ...state,
                entrenador: { ...state.entrenador, ...action.payload },
            };

        case 'actualizar_pokemon':
            return {
                ...state,
                pokemon: { ...state.pokemon, ...action.payload },
            };
        default:
            return state;
    }
};
