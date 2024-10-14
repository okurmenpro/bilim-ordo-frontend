import React from 'react';
import "./Companystatistics.css";
import { statisticsData } from '../../data/statisticscompany.js';


function Companystatistics() {
  return (
    <div className='Companystatistics'>
      <h2>Нам доверяют более 16 000 компаний и миллионы учащихся по всему миру</h2>

      <div className='Statistics'>
        {statisticsData.map((item) => (
          <div key={item.id} className={`Statistic-${item.id}`}>
            <div className='Statistica'>
            <strong>{item.value}</strong>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            </div>
          
          </div>
        ))}
      </div>
    </div>
  );
}

export default Companystatistics;
