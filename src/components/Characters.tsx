import { useState, useEffect } from "react"

import '../styles/List.css'
import opApi from "../services/opApi"
import ItemList from "./ItemList"
import SearchField from "./SearchField"
import PlaceholderImg from "../assets/luffy.jpg"

export default function Characters({isModal, selectChar}: any) {
    const [characters, setCharacters] = useState<any>([])
    const [filteredCharacters, setFilteredCharacters] = useState<any>([])
    const [isLoading, setIsLoading] = useState(true)

    const onClick = (item: any) => {
        selectChar(item)
    }

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
                img: PlaceholderImg,
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
        <>
            <SearchField onChange={searchCharacters} />
            <ItemList items={filteredCharacters} isLoading={isLoading} isModal={isModal} onClick={onClick}/>
        </>
    )
}