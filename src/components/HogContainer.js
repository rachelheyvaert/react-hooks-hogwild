import HogTile from "./HogTile"
import {useState} from "react"

export default function HogContainer({hogs}) {

    const [myHogs, setMyHogs] = useState(hogs)
    const [filterByGreased, setFilterByGreased] = useState(false)
    const [sortByName, setSortByName] = useState(false)

    function handleSort(e){
        setSortByName(!sortByName)
    }
    
    function handleFilter(e){
        setFilterByGreased(!filterByGreased)
    }
let hogsFiltered = myHogs.filter(hog => {
    return hog.greased === filterByGreased})
    console.log(hogsFiltered)
let sortedByName 
if(sortByName == true){
   sortedByName = hogsFiltered.sort((a,b)=> a.name.localeCompare(b.name))
} else {
    sortedByName = hogsFiltered
}
console.log(sortedByName)
    return (
        <div>
            <div> Only greased: <input onClick={handleFilter} type="checkbox" id="filter"></input></div>
            <div>Sort by name: <input onClick={handleSort} type="checkbox" id="sort"></input></div>
            {sortedByName.map(hog => <HogTile key={hog.name} hog={hog}/>)}
        </div>
       
    )
}