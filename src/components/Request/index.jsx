import "./Request.scss"

const Request = () => {
    return (
        <div className="leave-request">
            <h4>Оставить заявку</h4>
            <div className="inf">
                <input type="text" placeholder='Имя' />
                <input type="text" placeholder='Фамилия' />
                <input type="text" placeholder='Gmail' />
                <input type="text" placeholder='Номер телефона' />
                <button>Оставить заявку</button>
            </div>
        </div>
    )
}

export default Request