import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../styles/CrewBuilder.module.css'
import CrewCharCard from '../components/CrewCharCard'
import Characters from '../components/Characters'
import Modal from '../components/Modal';
import AkumaNoMi from '../components/AkumaNoMi';
import db from '../services/db.js';
import opApi from '../services/opApi';

export default function CrewBuilder() {
    const [modal, setModal] = useState(false);
    const [crewList, setCrewList] = useState<any>([]);
    const [isCharModal, setIsCharModal] = useState(false);
    const [modalCardIndex, setModalCardIndex] = useState<any>(0);

    useEffect(() => {
        getCrewChars();
    }, []);

    const getCrewChars = async () => {
        const crewDBList = await db.getCrewChars();
        const allChars = await opApi.getCharacters();
        const allAkumas = await opApi.getAkumaNoMi();

        let newCrewList: any[] = []

        crewDBList.forEach((crewChar: any) => {
            let crewItem = {char: null, akumaNoMi: null}
            crewItem.char = allChars.find((char: any) => char.id == crewChar.charId);
            crewItem.akumaNoMi = allAkumas.find((akuma: any) => akuma.id == crewChar.akumaId);

            newCrewList.push(crewItem);

            setCrewList([...crewList, crewItem]);
        });

        setCrewList(newCrewList);
    }

    const toggleModal = () => {
        setModal(!modal)
    }

    const selectChar = (item: any) => {
        const charExist = verifyItemExist(item, 'char');
        if (charExist) {
            alert('Character already in crew');
            return;
        }

        let newCrewList = [...crewList];
        let akumaNoMi = null;

        if (modalCardIndex == null) {
            newCrewList = [...crewList, { char: item }]
        } else {
            let newCrewList = [...crewList]
            newCrewList[modalCardIndex].char = item;
            akumaNoMi = newCrewList[modalCardIndex].akumaNoMi;
        }

        db.addCrewChar({ char: item, akumaNoMi: akumaNoMi });

        setCrewList(newCrewList);
        toggleModal()
    }

    const verifyItemExist = (item: any, itemName: any) => {
        const itemExist = crewList.find((crewChar: any) => crewChar[itemName]?.id === item.id);

        return itemExist;
    }

    const selectAkumaNoMi = (item: any) => {
        const akumaExist = verifyItemExist(item, 'akumaNoMi');
        if (akumaExist) {
            alert('Akuma No Mi already in a Character');
            return;
        }

        let newCrewList = [...crewList];

        if (modalCardIndex == null) {
            newCrewList = [...crewList, { akumaNoMi: item }]
        } else {
            let newCrewList = [...crewList]
            newCrewList[modalCardIndex].akumaNoMi = item;
            db.addCrewChar(newCrewList[modalCardIndex])
        }

        setCrewList([...newCrewList])
        toggleModal()
    }

    const handleModalToggle = (isChar: boolean) => {
        setIsCharModal(isChar)
        toggleModal()
    }

    const createNewCard = (isChar: boolean) => {
        setModalCardIndex(null)
        handleModalToggle(isChar)
    }

    const changeExistingCard = (index: number, isChar: boolean) => {
        setModalCardIndex(index)
        handleModalToggle(isChar)
    }

    const deleteCard = (index: number) => {
        const crewChar = crewList[index]
        db.deleteCrewChar(crewChar)

        let newCrewList = [...crewList]
        newCrewList.splice(index, 1)
        setCrewList(newCrewList)
    }

    const evaluateCardCreation = () => {
        const lastCrewChar = crewList[crewList.length - 1];

        return lastCrewChar?.char != null || lastCrewChar?.akumaNoMi == null;
    }

    return (
        <div className='page'>
            <div className={styles.Header}>
                <h1 className='page-title'>Crew Builder</h1>
                {/* <button className={styles.SaveBtn}>
                    <FontAwesomeIcon className={styles.TrashIcon} icon={['far', 'floppy-disk']} />
                </button> */}
            </div>

            <ul className={styles.CrewContent}>
                {crewList.map((crewElement: any, index: number) => {
                    return (
                        <CrewCharCard
                            crewChar={crewElement.char}
                            crewAkumaNoMi={crewElement.akumaNoMi}
                            key={index}
                            deleteCard={() => { deleteCard(index) }}
                            onClick={(isChar: any) => { changeExistingCard(index, isChar) }} />
                    )
                })}
                {evaluateCardCreation() &&
                    <CrewCharCard onClick={(isChar: any) => { createNewCard(isChar) }} />
                }
            </ul>
            {modal &&
                <Modal toggleModal={toggleModal} modal={modal}>
                    {isCharModal
                        ? <Characters isModal={modal} selectChar={selectChar} />
                        : <AkumaNoMi isModal={modal} selectAkumaNoMi={selectAkumaNoMi} />
                    }
                </Modal>
            }
        </div >
    )
}