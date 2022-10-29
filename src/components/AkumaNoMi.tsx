import { useState, useEffect } from 'react'

import opApi from '../services/opApi'
import ItemList from './ItemList'
import SearchField from './SearchField'
import '../styles/List.css'
import placeholderImg from '../assets/akuma_no_mi.png'

export default function AkumaNoMi({isModal, selectAkumaNoMi}: any) {
    const [akumaNoMi, setAkumaNoMi] = useState<any>([])
    const [filteredAkumaNoMi, setFilteredAkumaNoMi] = useState<any>([])
    const [isLoading, setIsLoading] = useState(true)

    const onClick = (item: any) => {
        selectAkumaNoMi(item)
    }

    useEffect(() => {
        const akumaNoMi = generateLoadingAkumaNoMi()
        setFilteredAkumaNoMi(akumaNoMi)

        getAkumaNoMi()
    }, [])

    const generateLoadingAkumaNoMi = () => {
        const characters: any = []

        for (let i = 1; i <= 20; i++) {
            characters.push({
                name: `Akuma No Mi ${i}`,
                img: placeholderImg,
            })
        }

        return characters
    }

    const getAkumaNoMi = async () => {
        const response = await opApi.getAkumaNoMi()
        setAkumaNoMi(response)
        setFilteredAkumaNoMi(response)
        setIsLoading(false)
    }

    const searchAkumaNoMi = async (event: any) => {
        const filteredAkumaNoMi = akumaNoMi.filter((akumaNoMi: any) => {
            return akumaNoMi.name.toLowerCase().includes(event.target.value.toLowerCase())
        })

        setFilteredAkumaNoMi(filteredAkumaNoMi)
    }

    return (
        <>
            <SearchField onChange={searchAkumaNoMi} />
            <ItemList items={filteredAkumaNoMi} isLoading={isLoading} isModal={isModal} onClick={onClick}/>
        </>
    )
}