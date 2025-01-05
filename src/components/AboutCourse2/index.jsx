import React from 'react'
import "./AboutCourse.css"
import { BsExclamationOctagonFill } from "react-icons/bs";
import { FaExclamationTriangle } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { TbLetterBSmall } from "react-icons/tb";
import { TbLetterISmall } from "react-icons/tb";
import { MdFormatListNumbered } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
function AboutCourse() {
    const CourseTitle = [
        {
            name: 'Название курса',
            description: 'Ваш заголовок должен быть привлекающим внимание, информативным и оптимизированным для поиска.'
        },
        {
            name: 'Дополнительно о курсе',
            description: 'Используйте 1 или 2 связанных ключевых слова и упомяните 3–4 наиболее важных темы, которые вы рассмотрели в ходе курса.'
        }
    ]

    const selectLanguage = [
        {
            first: 'ENG',
            second: 'RUS',
            third: 'KGZ'
        },
        {
            first: '--Select level--',
            second: '--Select level--',
            third: '--Select level--'
        },
        {
            first: 'Development',
            second: 'Development',
            third: 'Development'
        },
        {
            first: '--Select Subcategory--',
            second: '--Select Subcategory--',
            third: '--Select Subcategory--'
        },
    ]
    return (
        <div>
            <div className='registration__course container'>
                <h2>Целевая страница курса</h2>
                <div className='gray__line'></div>
                <p className='registration__course__description'>Ваша целевая страница курса имеет решающее значение для вашего успеха на Udemy. Если она сделана правильно, она также может помочь вам получить видимость в поисковых системах, таких как Google. Завершая этот раздел, подумайте о создании убедительной целевой страницы курса, которая продемонстрирует, почему кто-то захочет записаться на ваш курс. Узнайте больше о создании целевой страницы курса и стандартах названия курса.
                </p>
                {CourseTitle.map(x => (
                    <div>
                        <h3 className='input__name'>{x.name}</h3>
                        <input className='aboutCourseInput' type="text" name="" id="" />
                        <p className='description'>{x.description}</p>
                    </div>
                ))}

                <div>
                    <h3 className='input__name'>Описание курса</h3>
                    <div className='description__container'>
                        <div className='registration__course__icon'>
                            <p><TbLetterBSmall /></p>
                            <p><TbLetterISmall /></p>
                            <p className='number__menu'><MdFormatListNumbered /></p>
                            <p><IoIosMenu /></p>
                        </div>


                        <input className='description__course__input' type="text" placeholder='Введите описание вашего курса' />
                    </div>
                    <p className='description'>Описание должно содержать не менее 200 слов</p>
                </div>
                <div>
                    <h3 className='input__name'>Основная информация</h3>
                    <div className='select__language'>
                        {selectLanguage.map(x => (
                            <select className='language'>
                                <option value="">{x.first}</option>
                                <option value="">{x.second}</option>
                                <option value="">{x.third}</option>
                            </select>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className='input__name'>Что в первую очередь преподается на вашем курсе?</h3>
                    <input className='aboutCourseInput' type="text" />
                </div>
                <div>
                    <h3 className='input__name'>Фото для курса</h3>
                    <div className='registration__image'>
                        <img className='CourseImage' src="https://thumbs.dreamstime.com/b/add-image-icon-vector-add-image-icon-vector-filled-flat-sign-solid-pictogram-isolated-white-picture-plus-symbol-logo-103911077.jpg" alt="" />
                        <div className='CourseText'>
                            <p>Загрузите изображение вашего курса здесь. Оно должно соответствовать нашим стандартам качества изображения курса, чтобы быть принятым. Важные правила: 750x422 пикселей; .jpg, .jpeg, gif или png. Текст на изображении не должен быть.</p>
                            <div className='AddFile'>
                                <input className='AddFileInput' type="text" />
                                <button className='AddFileBtn'>Загрузить файл</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className='input__name'>Профиль инструктора</h3>
                    <div className='registration__course__warning'>
                        <p className='WarningExclamation'><BsExclamationOctagonFill /></p>
                        <div>
                            <strong>Все видимые преподаватели этого курса должны заполнить свой профиль, прежде чем курс может быть опубликован</strong>
                            <p className='minWord'>Сюда входит имя, изображение и краткое описание вашей биографии (минимум 50 слов).</p>
                        </div>
                    </div>
                </div>
                <div className='official__account'>
                    <p className='account__examplamation'><FaExclamationTriangle /></p>
                    <p className='account__profile'><MdAccountCircle /></p>
                    <p className='account__name'>user__name</p>
                </div>
                <div className='notification'>
                    <h3 className='input__name'>Незаполнено</h3>
                    <p className='notification__warning'>Биография вашего инструктора должна содержать не менее 50 слов</p>
                    <p className='required__image'>Требуется изображение вашего инструктора</p>
                    <p className='update'>Обновите свой профиль</p>
                </div>
            </div>
        </div>
    )
}

export default AboutCourse
