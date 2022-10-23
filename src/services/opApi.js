import config from "../config/apiConfig";

const url = config.baseUrl
console.log(url)

const getCharacters = async () => {
    let characters = await get('characters')

    characters = removeDuplicates(characters, 'name')

    return adjustCharacters(characters)
}

const getAkumaNoMi = async () => {
    let akumaNoMiList = await get('akuma-no-mi')

    akumaNoMiList = adjustImages(akumaNoMiList)

    return akumaNoMiList
}

const adjustCharacters = (characterList) => {
    return characterList.map(character => {
        const id = character.name.replace(/\s/g, '_').toLowerCase()
        const image = character.img.split('.png')[0] + '.png'

        return {
            ...character,
            id: id,
            img: image
        }
    })
}

const adjustImages = (akumaNoMiList) => {
    return akumaNoMiList.map(akumaNoMi => {
        const image = akumaNoMi.img.split('.png')[0] + '.png'

        return {
            ...akumaNoMi,
            img: image
        }
    })
}


const removeDuplicates = (array, key) => {
    return array.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[key]).indexOf(obj[key]) === pos;
    });
}

const get = async path => {
    try {
        const res = await fetch(`${url}/${path}`)
        return await res.json()
    } catch (error) {
        console.log(error)
        alert('Error when trying to get data from the server')
    }
}

const opApi = { getCharacters, getAkumaNoMi }

export default opApi;