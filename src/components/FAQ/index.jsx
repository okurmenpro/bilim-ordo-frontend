import "./FAQ.scss";
import iconArrowDrop from "../../assets/svg/arrow_drop_down.svg";
import { useState } from "react";
import { accortionsData } from "../../data/FAQ";

const FAQ = () => {
  const [dataAccordions, setDataAccordions] = useState(accortionsData);

  const handleOpen = (id) => {
    setDataAccordions((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, isOpen: !item.isOpen }
          : { ...item, isOpen: false }
      )
    );
  };

  return (
    <div className="faq-content">
      <h2 className="faq-title">FAQ</h2>
      <div className="accordions-container">
        {dataAccordions.map((el) => (
          <>
            <div className="accordion-content">
              <div
                key={el.id}
                className="accordion"
                onClick={() => {
                  handleOpen(el.id);
                }}
              >
                <div className="accordion-title">
                  <h3>{el.title}</h3>
                </div>
                <div
                  className={
                    el.isOpen ? `icon-arrow-drop icon-down` : " icon-arrow-drop"
                  }
                >
                  <img src={iconArrowDrop} alt="" />
                </div>
              </div>
              <div className={el.isOpen ? "container-childs" : " none"}>
                <div className="child-content">
                  <ul>
                    <li>
                      <p>
                        {el.title} {el.id}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
