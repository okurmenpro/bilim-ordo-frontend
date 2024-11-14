import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API } from "../helpers/const";

export const courseContext = createContext();
export const useCourses = () => useContext(courseContext);

const CoursContextProvider = ({ children }) => {
  const INIT_STATE = {
    courses: [],
    oneCourse: {},
  };
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_COURSES":
        return { ...state, courses: action.payload };
      case "GET_ONE_COURSE":
        return { ...state, oneCourse: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //!get
  const getCourses = async (id) => {
    const { data } = await axios.get(`${API}/categories`);
    dispatch({
      type: "GET_COURSES",
      payload: data,
    });
  };

  const values = {
    getCourses,
    courses: state.courses,
    oneCourse: state.oneCourse,
  };
  return (
    <courseContext.Provider value={values}>{children}</courseContext.Provider>
  );
};

export default CoursContextProvider;
