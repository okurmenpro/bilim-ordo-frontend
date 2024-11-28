// src/hooks/useCountAnimation.js
import { useEffect, useState } from 'react';

const useCountAnimation = (statisticsData, isVisible) => {
  const [counts, setCounts] = useState(statisticsData.map(() => 0)); // Инициализируем массив с нулями

  useEffect(() => {
    if (!isVisible) return;

    const duration = 20;
    const steps = 20; 
    const increment = (duration / steps) / 1000;

    const newCounts = statisticsData.map(() => 0); 
    setCounts(newCounts); 

    const animate = (index) => {
      if (index < statisticsData.length) {
        const target = parseInt(statisticsData[index].value, 10);
        const stepValue = Math.ceil(target / steps);
        let count = 0; 

        const updateCount = () => {
          if (count < target) {
            count += stepValue; 
            if (count > target) count = target;
            newCounts[index] = count;
            setCounts([...newCounts]); 
            requestAnimationFrame(updateCount);
          } else {
         
            animate(index + 1);
          }
        };

        updateCount();
      }
    };

    animate(0);

  }, [statisticsData, isVisible]); 

  return counts;
};

export default useCountAnimation;