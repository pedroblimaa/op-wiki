
import firebaseApi from "../config/firebaseConfig";

const getCharacters = async () => {
    const characters = await getAll('characters')

    return characters
}

const getAll = async (collectionName) => {
    const collection = await firebaseApi.get(collectionName)

    return collection
}

const opApi = { getCharacters }

export default opApi;