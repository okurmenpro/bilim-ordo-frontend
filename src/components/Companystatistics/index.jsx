// src/components/Companystatistics/Companystatistics.js
import React, { useEffect, useRef, useState } from "react";
import "./Companystatistics.css";
import { statisticsData } from "../../data/statisticscompany.js";
import useCountAnimation from "../hooks/UseCountAnimation.jsx";

function Companystatistics() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const counts = useCountAnimation(statisticsData, isVisible);

  return (
    <div className="Companystatistics container" ref={ref}>
      {statisticsData.map((item, index) => (
        <div key={item.id} className={`Statistic Statistic-${item.id}`}>
          <div className="Statistica">
            <strong>{counts[index]}+</strong> {}
            <h3>{item.title}</h3>
          </div>
          {}
          {index < statisticsData.length - 1 && <hr className="line" />} {}
        </div>
      ))}
    </div>
  );
}

export default Companystatistics;
