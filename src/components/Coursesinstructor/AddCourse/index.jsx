import React, { useState } from "react";

function AddCourse() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    images: null,
    video: null,
    isProgrammingRelated: "",
    programmingLanguage: "",
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData({ ...formData, images: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData({ ...formData, video: file });
      setVideoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("isProgrammingRelated", formData.isProgrammingRelated);
    data.append("programmingLanguage", formData.programmingLanguage);
    if (formData.images) data.append("images", formData.images);
    if (formData.video) data.append("video", formData.video);

    try {
      const response = await fetch("http://34.93.66.214/api/add-product/", {
        method: "POST",
        body: data,
      });
      if (response.ok) {
        alert("Продукт успешно добавлен!");
        setFormData({ name: "", description: "", price: "", images: null, video: null, isProgrammingRelated: "", programmingLanguage: "" });
        setImagePreview(null);
        setVideoPreview(null);
      } else {
        alert("Ошибка при добавлении продукта.");
      }
    } catch (error) {
      alert("Ошибка при добавлении продукта.");
    }
  };

  return (
    <div>
      <h2>Курс кошуу</h2>
      <form onSubmit={handleSubmit}>
        <label>Имя:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />

        <label>Описание:</label>
        <textarea name="description" value={formData.description} onChange={handleInputChange} required />

        <label>Цена:</label>
        <input type="number" name="price" value={formData.price} onChange={handleInputChange} required />

        <label>Бул продукт программалоого тиешелүүбү?</label>
        <select name="isProgrammingRelated" value={formData.isProgrammingRelated} onChange={handleInputChange} required>
          <option value="">Тандаңыз</option>
          <option value="yes">Разработка</option>
          <option value="no">Бизнес</option>
          <option value="no">ИТ и ПО</option>
        </select>

        {formData.isProgrammingRelated === "yes" && (
          <>
            <label>Кайсы программалоо тили?</label>
            <select name="programmingLanguage" value={formData.programmingLanguage} onChange={handleInputChange} required>
              <option value="">Тандаңыз</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="C#">C#</option>
              <option value="C++">C++</option>
              <option value="Go">Go</option>
            </select>
          </>
        )}

        <label>Сүрөт (обложка):</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {imagePreview && <img src={imagePreview} alt="Image Preview" />}

        <label>Видео кошуу:</label>
        <input type="file" accept="video/*" onChange={handleVideoChange} />
        {videoPreview && <video controls width="100%"><source src={videoPreview} type="video/mp4" /></video>}

        <button type="submit">Загрузить</button>
      </form>
    </div>
  );
}

export default AddCourse;
