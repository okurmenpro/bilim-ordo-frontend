import React from 'react';
import "./Companystatistics.css";



function Companystatistics() {
  const statisticsData = [
    {
      id: 1,
      value: "200+",
      title: "Создание веб-сайтов",
      description: "Мы создали веб-сайты, которые отвечают современным требованиям и эстетике.",
    },
    {
      id: 2,
      value: "97%",
      title: "Удовлетворенность клиентов",
      description: "Наши проекты понравились клиентам благодаря высокому качеству исполнения и вниманию.",
    },
    {
      id: 3,
      value: "34+",
      title: "Члены команды",
      description: "Мы объединяем таланты из разных областей, чтобы обеспечить высокий уровень услуг для наших клиентов.",
    },
    {
      id: 4,
      value: "100+",
      title: "Удивительные клиенты",
      description: "Их доверие и сотрудничество помогают нам расти и достигать новых высот.",
    },
  ];
  return (
    <div className='Companystatistics'>
      <h1>Нам доверяют более 16 000 компаний и миллионы учащихся по всему миру</h1>

      <div className='Statistics'>
        {statisticsData.map((item) => (
          <div key={item.id} className={`Statistic-${item.id}`}>
            <div className='Statistica'>
            <h2>{item.value}</h2>
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
