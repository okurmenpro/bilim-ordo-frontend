import React, { useState } from 'react';
import './PopularCategories.css'
import { popular_categories } from '../../data/popular_categories'

const dropdown_items = [
    {
        name: "Action"
    },
    {
        name: "Another action"
    },
    {
        name: "Something else here"
    }
]
const PopularCategories = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const handleClick = () => {
        setIsDropdownVisible(oldValue => !oldValue);
    };
    return (
        <>
            <div className='title'>
                <h2>Популярные категории</h2>
            </div>
            <div className="photos">
                {popular_categories.map((elements, index) =>
                    <div className="border-png">

                        <div key={index} className="background">
                            <img src={elements.img} alt="" />
                        </div>
                        <h6>{elements.title}</h6>

                    </div>
                )}
            </div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleClick}>
                    Посмотреть еще
                </button>
                <ul className={`dropdown-menu ${isDropdownVisible ? 'show' : ''}`} aria-labelledby="dropdownMenuButton1">
                    {dropdown_items.map((el, index) =>
                        <li key={index}><a className="dropdown-item" href="#">{el.name}</a></li>
                    )}

                </ul>
            </div>
        </>
    )
}

export default PopularCategories