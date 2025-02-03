import React, { useState } from "react";
import "./Coursesinstructor.scss";

function Coursesinstructor() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    images: null, 
  });
  const [imagePreview, setImagePreview] = useState(null); 

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

  const handleImageRemove = () => {
    setFormData({ ...formData, images: null });
    setImagePreview(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const data = new FormData(); // FormData объектинин түзүлүшү
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    if (formData.images) {
      data.append("images", formData.images); // Сүрөт файлды кошуу
    }
  
    try {
      const response = await fetch("http://34.93.66.214/api/add-product/", {
        method: "POST",
        body: data,
      });
  
      if (response.ok) {
        alert("Продукт успешно добавлен!");
        setFormData({ name: "", description: "", price: "", images: null });
        setImagePreview(null);
      } else {
        const errorData = await response.json();
        console.error("Error details:", errorData);
        alert("Ошибка при добавлении продукта.");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Ошибка при добавлении продукта.");
    }
  };
  

  return (
    <div>
      <div className="chapter-container container">
        <div className="chapter-2">
          <div className="form-container">
            <h1>Форма добавления</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Имя:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Введите имя"
                required
              />

              <label htmlFor="description">Описание:</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                placeholder="Введите описание"
                required
              ></textarea>

              <label htmlFor="price">Цена:</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Введите цену"
                required
              />

              <label htmlFor="image">Сүрөт:</label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />

              {imagePreview && (
                <div className="image-preview">
                  <img src={imagePreview} alt="Image Preview" />
                  <button
                    type="button"
                    onClick={handleImageRemove}
                    className="remove-image"
                  >
                    Удалить изображение
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