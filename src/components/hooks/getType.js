export const getType = async () => {
    const info = await fetch('https://pokeapi.co/api/v2/type/')
        .then((res) => res.json())
        .catch((e) => 'error');

    return info;
};
