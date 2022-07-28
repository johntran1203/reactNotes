import  Axios from "axios";
import { useEffect, useState } from "react";

 
const Cat = () => {
    // fetch('https://catfact.ninja/fact')
    // .then((res) => res.json())
    // .then((data) => {
    //     console.log(data)
    // })
    const [catFact, setCatFat] = useState("")

    const fetchCatFact = () => {
        Axios.get('https://catfact.ninja/fact').then((res) => {
            setCatFat(res.data.fact)
        })
    }
    useEffect(() => {
       fetchCatFact()

    }, [])
    return ( <div>
        <h2>CAT</h2>
        <button onClick={fetchCatFact}>Generate Cat Fact</button>
        <p>{catFact}</p>
    </div> );
}
 
export default Cat;