
const getOnePieceCharacters = async () => {
    const response = await fetch('https://onepiece.fandom.com/wiki/Devil_Fruit');
    
    return response.data;
}

export default getOnePieceCharacters;