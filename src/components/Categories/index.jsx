import React, { useEffect, useState } from "react";
import "./Categories.scss";
import { categories } from "../../data/categories";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Categories() {
  const [topcategories, setcategories] = useState(categories);

  const catagoriesarr = async () => {
    try {
      const response = await axios.get("/categories");
      setcategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    catagoriesarr();
  }, []);
  return (
    <div className="categories container">
      <div className="astrology">
        {topcategories.map((course) => (
          <div key={course.id} className="astrology-cours">
            <NavLink to={"/categoriespage"}>
              <img src={course.image} alt={course.title} />
            </NavLink>
            <span className="span">{course.title}</span>
            <span className="span1">{course.courseCount} Courses</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
