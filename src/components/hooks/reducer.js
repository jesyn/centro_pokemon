export const initialState = {
    entrenador: {
        nombre: '',
        apellido: '',
        email: '',
    },
    pokemon: {
        nombre: '',
        tipo: '',
        elemento: '',
        altura: '',
        edad: '',
    },
};

export const formularioReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'update_nombre':
            return {
                ...state,
                entrenador: { ...state.entrenador, nombre: action.payload },
            };
        case 'update_apellido':
            return {
                ...state,
                entrenador: { ...state.entrenador, apellido: action.payload },
            };
        case 'update_email':
            return {
                ...state,
                entrenador: { ...state.entrenador, email: action.payload },
            };
        case 'update_nombrePokemon':
            return {
                ...state,
                pokemon: { ...state.pokemon, nombre: action.payload },
            };
        case 'update_tipoPokemon':
            return {
                ...state,
                pokemon: { ...state.pokemon, tipo: action.payload },
            };
        case 'update_elementoPokemon':
            return {
                ...state,
                pokemon: { ...state.pokemon, elemento: action.payload },
            };
        case 'update_alturaPokemon':
            return {
                ...state,
                pokemon: { ...state.pokemon, altura: action.payload },
            };
        case 'update_edadPokemon':
            return {
                ...state,
                pokemon: { ...state.pokemon, edad: action.payload },
            };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};
