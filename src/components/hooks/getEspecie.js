export const getEspecie = async (page) => {
    const info = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/?limit=20&offset=${page}`
    ).then((res) => res.json());

    return info;
};
