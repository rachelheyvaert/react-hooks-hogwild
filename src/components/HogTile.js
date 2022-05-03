import { useState } from "react"
import HogDetails from "./HogDetails"

export default function HogTile({hog}){
    const [visibleDetails, setVisibleDetails] = useState(false)
function handleClick(){
    setVisibleDetails(!visibleDetails)
}
    return (
        <div>
        <h1> {hog.name} </h1>
        <img onClick={handleClick} height='200' width='200' src={hog.image}></img>
       { visibleDetails ?  <HogDetails hog={hog} /> : "" }
        </div>
    )
}