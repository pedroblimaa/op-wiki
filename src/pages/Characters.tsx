import { useState, useEffect } from 'react';

import opApi from '../services/opApi';

export default function Characters() {
    const [characters, setCharacters] = useState<any>([]);

    useEffect(() => {
        getCharacters()
    }, [])

    const getCharacters = async () => {
        const response = await opApi.getCharacters()
        setCharacters(response);
        console.log(response);
    }

    return (
        <div>
            <h1>Characters</h1>
        </div>
    )
}