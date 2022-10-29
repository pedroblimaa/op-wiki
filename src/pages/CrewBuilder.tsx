import { useState } from 'react';

import styles from '../styles/CrewBuilder.module.css'
import CrewCharCard from '../components/CrewCharCard'
import Characters from '../components/Characters'
import Modal from '../components/Modal';
import AkumaNoMi from '../components/AkumaNoMi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CrewBuilder() {
    const [modal, setModal] = useState(false);
    const [crewList, setCrewList] = useState<any>([]);
    const [isCharModal, setIsCharModal] = useState(false);
    const [modalCardIndex, setModalCardIndex] = useState<any>(0);

    const toggleModal = () => {
        setModal(!modal)
    }

    const selectChar = (item: any) => {
        let newCrewList = []

        if (modalCardIndex == null) {
            newCrewList = [...crewList, { char: item }]
        } else {
            newCrewList = [...crewList]
            newCrewList[modalCardIndex].char = item;
        }

        setCrewList(newCrewList);
        toggleModal()
    }

    const selectAkumaNoMi = (item: any) => {
        let newCrewList = [...crewList]

        if (modalCardIndex == null) {
            newCrewList = [...crewList, { akumaNoMi: item }]
        } else {
            newCrewList = [...crewList]
            newCrewList[modalCardIndex].akumaNoMi = item;
        }

        setCrewList([...newCrewList])
        toggleModal()
        console.log(crewList)
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
        let newCrewList = [...crewList]
        newCrewList.splice(index, 1)
        setCrewList(newCrewList)
    }

    return (
        <div className='page'>
            <div className={styles.Header}>
                <h1 className='page-title'>Crew Builder</h1>
                <button className={styles.SaveBtn}>
                    <FontAwesomeIcon className={styles.TrashIcon} icon={['far', 'floppy-disk']} />
                </button>
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
                <CrewCharCard onClick={(isChar: any) => { createNewCard(isChar) }} />
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