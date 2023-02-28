//@ts-check

/**
 * @typedef {object} estado_incial
 * @property {entrenador | undefined}  entrenador
 * @property {pokemon | undefined} pokemon
 */

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

/**
 * @typedef {object} accion
 * @property {string} type
 * @property {object} payload
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
 * @param {estado_incial} state recibe el estado inicial
 * @param {accion} action recibe la accion para modificar el estado
 * @returns {estado_incial}
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
