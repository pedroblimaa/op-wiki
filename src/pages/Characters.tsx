import { useState, useEffect } from 'react'

import opApi from '../services/opApi'
import placeholderImg from '../assets/luffy.jpg'
import ItemList from '../components/ItemList'
import SearchField from '../components/SearchField'
import '../styles/List.css'

export default function Characters() {
    const [characters, setCharacters] = useState<any>([])
    const [filteredCharacters, setFilteredCharacters] = useState<any>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const characters = generateLoadingCharacters()
        setFilteredCharacters(characters)

        getCharacters()
    }, [])

    const generateLoadingCharacters = () => {
        const characters: any = []

        for (let i = 1; i <= 20; i++) {
            characters.push({
                name: `Character ${i}`,
                img: placeholderImg,
            })
        }

        return characters
    }

    const getCharacters = async () => {
        const response = await opApi.getCharacters()
        setCharacters(response)
        setIsLoading(false)
        setFilteredCharacters(response)
    }

    const searchCharacters = async (event: any) => {
        const filteredCharacters = characters.filter((character: any) => {
            return character.name.toLowerCase().includes(event.target.value.toLowerCase())
        })

        setFilteredCharacters(filteredCharacters)
    }

    return (
        <div className='page'>
            <h1 className='page-title'>Characters</h1>
            <SearchField onChange={searchCharacters} />
            <ItemList items={filteredCharacters} isLoading={isLoading} />
        </div>
    )
}