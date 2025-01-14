import React, { useState } from "react";
import "./Coursesinstructor.scss";
import { FaChevronLeft } from "react-icons/fa";

function Coursesinstructor() {
  const [videoPreview, setVideoPreview] = useState(null);

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideoPreview(videoURL);
    }
  };

  const handleVideoRemove = () => {
    setVideoPreview(null);
  };
  return (
    <div>
      <div className="chapter-container container">
        <div className="chapter-1">
          <div className="chapter-iconh2">
            <FaChevronLeft />
            <h2>Chapter 1 - The Solid State</h2>
          </div>
          <div className="chapter-1-button">
            <button className="Delete-red">Delete</button>
            <button className="Nove-to-Draft-white">Nove to Draft</button>
            <button className="add-course-blue">Add Course</button>
          </div>
        </div>
        <div className="chapter-2">
          <div className="form-container">
            <h1>Форма добавления</h1>
            <form>
              <label htmlFor="name">Имя:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Введите имя"
                required
              />

              <label htmlFor="description">Описание:</label>
              <textarea
                id="description"
                name="description"
                rows="4"
                placeholder="Введите описание"
                required
              ></textarea>

              <label htmlFor="price">Цена:</label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder="Введите цену"
                required
              />

              <label htmlFor="video">Видео:</label>
              <input
                type="file"
                id="video"
                name="video"
                accept="video/*"
                onChange={handleVideoChange}
              />

              {videoPreview && (
                <div className="video-preview">
                  <video controls src={videoPreview} />
                  <button
                    type="button"
                    onClick={handleVideoRemove}
                    className="remove-video"
                  >
                    Удалить видео
                  </button>
                </div>
              )}

              <button type="submit">Загрузить</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coursesinstructor;
