

const Header = () => {
     
    const navigationBar = [
        'main',
        'about',
        'answer',
    ]

    return(
        navigationBar.map((item) => {
        return  <a href={item}>{item}</a>
})  )

}

export default Header