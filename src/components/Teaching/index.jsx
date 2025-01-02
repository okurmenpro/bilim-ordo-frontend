import React, { useState } from "react";
import "./Teach.scss";
import Teachingimg from "../../assets/images/teaching.png";
import SignUpModal from "../SignUpModal";
import ImageOne from "../../assets/images/teaching1.png";
import ImageTwo from "../../assets/images/teaching2.png";
import ImageThree from "../../assets/images/teaching3.png";

function Teaching() {
  const [showModal, setShowModal] = useState(false);
  const [activeComponent, setActiveComponent] = useState(1);

  const handleStartClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Биринчи компонент
  const ComponentOne = () => (
    <div className="component-container">
      <div className="component-text first">
        Положитесь на свой интерес и знания. Выберите подходящую тему с помощью
        инструмента аналитики торговой площадки. Ваш стиль преподавания — то,
        что вы в него вкладываете, — зависит только от вас. <br /> <strong>Нужна помощь?</strong> <br />Мы
        предоставляем множество ресурсов для создания вашего первого курса.
        Наши страницы с панелью преподавателя и учебным планом курса помогут
        вам организовать процесс.
      </div>
      <img src={ImageOne} alt="Step 1" className="component-image" />
    </div>
  );

  // Экинчи компонент
  const ComponentTwo = () => (
    <div className="component-container">
      <div className="component-text second">
        Используйте простые устройства ― смартфон или цифровую зеркальную
        камеру, а также хороший микрофон ― этого достаточно. Если вы не любите
        быть в кадре, просто ведите запись экрана. В обоих случаях
        рекомендуемая длина видео для платных курсов составляет от двух часов.
        <br /> <strong>Нужна помощь?</strong> <br /> Наша команда поддержки всегда готова вам помочь и
        предоставить отзыв о вашем тестовом видео.
      </div>
      <img src={ImageTwo} alt="Step 2" className="component-image" />
    </div>
  );

  // Үчүнчү компонент
  const ComponentThree = () => (
    <div className="component-container">
      <div className="component-text third">
        Получите свои первые оценки и отзывы, поделившись курсом в социальных
        сетях и в своей профессиональной среде. Ваш курс будет также опубликован
        на нашей торговой площадке, где за каждую регистрацию на платный курс
        вы будете получать оплату. <br /> <strong>Нужна помощь?</strong> <br /> Наш инструмент для создания
        купонов позволит вам предлагать студентам поощрения за регистрацию, а
        участие в наших глобальных акциях поможет привлечь ещё больше студентов.
        Ещё больше возможностей будет доступно для курсов, выбранных для
        подписки Udemy Business.
      </div>
      <img src={ImageThree} alt="Step 3" className="component-image" />
    </div>
  );

  // Компонентти көрсөтүү функциясы
  const renderComponent = () => {
    switch (activeComponent) {
      case 1:
        return <ComponentOne />;
      case 2:
        return <ComponentTwo />;
      case 3:
        return <ComponentThree />;
      default:
        return null;
    }
  };

  return (
    <div className="teaching">
      <img src={Teachingimg} alt="Teaching" />
      <div className="infoteaching container">
        <h1 className="teachingh1">Учите у нас</h1>
        <strong className="tstong">
          Станьте преподавателем и меняйте жизни к лучшему — включая свою
        </strong>
        <button className="tbtn" onClick={handleStartClick}>
          Начните действовать
        </button>
      </div>

      {showModal && <SignUpModal onClose={handleCloseModal} />}
      <div className="infoteaching2">
        <h1 className="help-teaching">С чего начать?</h1>
        <div className="button-container">
          <strong
            onClick={() => setActiveComponent(1)}
            className="btn-first"
          >
            Создайте учёбный план
          </strong>
          <strong
            onClick={() => setActiveComponent(2)}
            className="btn-second"
          >
            Запишите видео
          </strong>
          <strong
            onClick={() => setActiveComponent(3)}
            className="btn-third"
          >
            Запустите свой курс
          </strong>
        </div>
        {renderComponent()}
      </div>
    </div>
  );
}

export default Teaching;
