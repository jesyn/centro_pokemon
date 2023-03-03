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
 * @property {string} nombrePokemon
 * @property {string} tipoPokemon
 * @property {string} elementoPokemon
 * @property {number} alturaPokemon
 * @property {number} edadPokemon
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
        nombrePokemon: '',
        tipoPokemon: '',
        elementoPokemon: '',
        alturaPokemon: 0,
        edadPokemon: 0,
    },
};

/**
 * funcion para actualizar el estado del entrenador y pokemon
 * @param {estado_incial} state recibe el estado inicial
 * @param {accion} action recibe la accion para modificar el estado
 * @returns {estado_incial}
 */

export const formularioReducer = (state, action) => {
    //console.log(action);
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
