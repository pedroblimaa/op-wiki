import { Link } from 'react-router-dom'

import '../styles/List.css'

export default function ItemList({ items, isLoading, isModal, onClick }: any) {
    const handleClick = (item: any) => {
        if (isModal) {
            onClick(item)
        }
    }

    return (
        <ul className='item-list'>
            {
                items.map((item: any) => (
                    <Link to='/details' onClick={event => isModal ? event.preventDefault() : ''} key={item.id ?? item.name} state={{ item: item }}>
                        <li className='item' onClick={() => handleClick(item)}>
                            <img className={isLoading ? 'loading' : ''} src={item.img} alt={item.name} />
                            <h3>{item.name}</h3>
                        </li>
                    </Link>
                ))
            }
        </ul>
    )
}