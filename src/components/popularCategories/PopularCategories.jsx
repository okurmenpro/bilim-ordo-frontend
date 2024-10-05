import React from 'react'
import './PopularCategories.css'
import js from "../../assets/images/js.png"
import python from "../../assets/images/python.png"
import figma from "../../assets/images/figma.png"
import android from '../../assets/images/android.png'
import ios from '../../assets/images/IOS.png'
import oneC from '../../assets/images/oneC.png'


const PopularCategories = () => {
    return (
        <>
            <div className='title'>
                <h2>Популярные категории</h2>
            </div>
            <div className="photos">
                <div className="border-png">
                    <div className="background">
                        <img src={js} alt="js" />
                    </div>
                    <h6>Java Script</h6>
                </div>
                <div className="border-png">
                    <div className="background">
                        <img src={python} alt="python" />
                    </div>
                    <h6>Python</h6>
                </div>
                <div className="border-png">
                    <div className="background">
                        <img src={figma} alt="figma" />
                    </div>
                    <h6>Figma</h6>
                </div>
                <div className="border-png">
                    <div className="background">
                        <img src={android} alt="android" />
                    </div>
                    <h6>Android</h6>
                </div>
                <div className="border-png">
                    <div className="background">
                        <img src={ios} alt="ios" />
                    </div>
                    <h6>IOS</h6>
                </div>
                <div className="border-png">
                    <div className="background">
                        <img src={oneC} alt="oneC" />
                    </div>
                    <h6> 1 C</h6>
                </div>

            </div>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Посмотреть еще
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
        </>
    )
}

export default PopularCategories