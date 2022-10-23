import { Link } from 'react-router-dom'

import '../styles/List.css'

export default function ItemList({ items, isLoading }: any) {
    return (
        <ul className='item-list'>
            {
                items.map((item: any) => (
                    <Link to='/description' key={item.name} state={{ item: item }}>
                        <li className='item'>
                            <img className={isLoading ? 'loading' : ''}src={item.img} alt={item.name} />
                            <h3>{item.name}</h3>
                        </li>
                    </Link>
                ))
            }
        </ul>
    )
}