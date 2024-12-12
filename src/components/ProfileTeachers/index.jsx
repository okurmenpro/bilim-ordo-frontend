import React from 'react'
import "./ProfileTeachers.scss"
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsFilter } from "react-icons/bs";
import { TeachersData } from '../../data/Teachers';
import { FaRegEnvelope } from "react-icons/fa6";
import Filter from "../Filter"

const TeachersProfile = () => {
  return (
    <div className='teachers-profile'>
      <Filter name={"Teachers"} count={TeachersData.length} />
      <div className="cards-teach-prof">
        {TeachersData.map(el => (
          <div className="card-teach-prof">
            <img src={el.img} alt="" />
            <h4>{el.name}</h4>
            <p>{el.author}</p>
            <hr />
            <button>Send Message <FaRegEnvelope className='send-messange-icon' /></button>
          </div>
        ))}
      </div>
      <div className="end-teach-prof">
        <button className='back-button-teach'><IoIosArrowBack /></button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className='for-button-teach'><IoIosArrowForward /></button>
      </div>
    </div>
  )
}

export default TeachersProfile