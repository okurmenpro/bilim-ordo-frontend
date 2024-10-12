import "./TeacherSection.css";
import teach from "../../assets/images/teach.png";
import teach1 from "../../assets/images/teach1.png";
import teach2 from "../../assets/images/teach2.png";
import teach3 from "../../assets/images/teach3.png";

export default function TeachSection() {
  return (
    <>
      <div className="container">
        <div className="teachSection">
          <div className="teachSectionImg">
            <div className="section1">
              <img src={teach} alt="" className="teacherImg" />
              <img src={teach1} alt="" className="teacherImg1" />
            </div>
            <div className="section2">
              <img src={teach3} alt="" className="teacherImg2" />
              <img src={teach2} alt="" className="teacherImg3" />
            </div>
          </div>
          <div className="teacher">
            <h2 className="teachSectionTitle">Станьте переподователем</h2>
            <p className="teachSectionContent">
              Преподаватели со всего мира обучают миллионы студентов на Udemy,
              создавая доступные и разнообразные курсы по самым разным темам.
              Благодаря такому глобальному подходу учащиеся могут изучать новые
              навыки в удобном для себя темпе и из любого места.
            </p>
            <button className="teachSectionBtn">
              Начните преподовать сегодня
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
