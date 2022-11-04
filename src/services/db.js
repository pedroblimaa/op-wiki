import Dexie from 'dexie';

export const db = new Dexie('op-wiki-db');

db.version(1).stores({
    crewChars: 'charId, akumaId',
});

const addCrewChar = async (crewChar) => {
    const crewCharExists = await db.crewChars.get(crewChar.char.id)

    if (crewCharExists) {
        update(crewChar);
    } else {
        add(crewChar);
    }
};


const getCrewChars = async () => {
    return await db.crewChars.toArray();
};

const add = async (crewChar) => {
    return await db.crewChars.add(convertCrewChar(crewChar));
};

const deleteCrewChar = async (crewChar) => {
    return await db.crewChars.delete(crewChar.char?.id);
}

const deleteAllCrewChars = async () => {
    return await db.crewChars.clear();
}

const update = async (crewChar) => {
    return await db.crewChars.update(crewChar.char.id, convertCrewChar(crewChar));
}

const convertCrewChar = (crewChar) => {
    return { charId: crewChar.char.id, akumaId: crewChar.akumaNoMi?.id ?? null }
}

export default {
    getCrewChars,
    addCrewChar,
    deleteCrewChar,
    deleteAllCrewChars
}