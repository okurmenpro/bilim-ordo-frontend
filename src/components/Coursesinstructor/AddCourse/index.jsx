import React, { useState } from "react";

function AddCourse() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    videos: null,
    images: null, 
  });

  const [videoPreview, setVideoPreview] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (videoPreview) {
        URL.revokeObjectURL(videoPreview);
      }
      setFormData({ ...formData, videos: file });
      setVideoPreview(URL.createObjectURL(file));
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
      setFormData({ ...formData, images: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", parseFloat(formData.price));
    console.log('FormData:', data);

    if (formData.videos) {
      data.append("video", formData.videos);
    }

    if (formData.images) {
      data.append("coverImage", formData.images); 
    }

    console.log("FormData:", data);

    try {
      const response = await fetch("http://35.223.148.229/api/add-product/", {
        method: "POST",
        body: data,
      });

      const result = await response.json(); 
      console.log("Server Response:", result);

      if (response.ok) {
        alert("Продукт успешно добавлен!");
        setFormData({
          name: "",
          description: "",
          price: "",
          videos: null,
          images: null,
        });
        setVideoPreview(null);
        setImagePreview(null);
      } else {
        alert(`Ошибка: ${result.message || "Продукт кошулган жок."}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Ошибка при добавлении продукта.");
    }
  };

  return (
    <div>
      <h2>Курс кошуу</h2>
      <form onSubmit={handleSubmit}>
        <label>Имя:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label>Описание:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />

        <label>Цена:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          required
        />

        <label>Видео кошуу:</label>
        <input type="file" accept="video/*" onChange={handleVideoChange} />
        {videoPreview && (
          <video controls width="100%">
            <source src={videoPreview} type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
        )}

        <label>Обложка для видео (сүрөт):</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {imagePreview && <img src={imagePreview} alt="Image Preview" width="100%" />}

        <button type="submit">Загрузить</button>
      </form>
    </div>
  );
}

export default AddCourse;