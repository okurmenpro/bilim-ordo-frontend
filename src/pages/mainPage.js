import Test from "../components/Test"
import { useEffect, useState } from "react"
import Header from "../components/Header"
import { Button } from "bootstrap"


const MainPage = () => {
    const [number, setNumber] = useState(0)

    const handleCount = () => {
        setNumber(number + 1)
    }

    useEffect(() => {
        console.log('ok')
    }, number)

    return(
        <>
        
        {/* <Header/> */}
        <Test text={'helllo world'} />
        {number}
        <button onClick={handleCount}>Count</button>
        <br/>
        {/* <Button type="button" class="btn btn-primary" onClick={handleCount}>count</Button> */}
        <button type="button" class="btn btn-outline-primary" onClick={handleCount}>Primary</button>

        
        
        </>
    )
}
let myConst = '10'
export {MainPage, myConst}