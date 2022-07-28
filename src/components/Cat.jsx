import  Axios from "axios";
import { useEffect, useState } from "react";

 
const Cat = () => {
    // fetch('https://catfact.ninja/fact')
    // .then((res) => res.json())
    // .then((data) => {
    //     console.log(data)
    // })
    const [catFact, setCatFat] = useState("")
    const [name, setName] = useState('')
    const [age, setAge] = useState(null)

    const fetchCatFact = () => {
        Axios.get('https://catfact.ninja/fact').then((res) => {
            setCatFat(res.data.fact)
        })
    }
    useEffect(() => {
       fetchCatFact()

    }, [])
    const fetchData = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
            setAge(res.data)
        })
    }

    return ( <div>
        <h2>CAT</h2>
        <button onClick={fetchCatFact}>Generate Cat Fact</button>
        <p>{catFact}</p>
        <hr />
        <input placeholder="EX. tony"  onChange={(e)=>{setName(e.target.value)}}/>
        <button onClick={fetchData}>Predict AGE</button>
        <h2>Predicted name: {age?.name}</h2>
        <h2>Predicted AGE: {age?.age}</h2>
        <h2>Predicted count: {age?.count}</h2>
    </div> );
}

export default Cat;