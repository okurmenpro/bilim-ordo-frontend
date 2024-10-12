import React, { useState } from 'react';
import './PopularCategories.scss'



import { popular_categories } from '../../data/popular_categories'

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
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
        </>
    )
}

export default PopularCategories