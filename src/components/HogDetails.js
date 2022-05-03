export default function HogDetails({hog}){
    return (
        <div>
            <div>{hog.specialty} </div>
            <div>{hog.greased ? "Is greased" : "Is not greased"} </div>
            <div>{hog.weight}</div>
            <div>{hog["highest meddal acheived"]}</div>
        </div>
    )
}