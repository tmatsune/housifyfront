import "./displayCard.css"
import H from "../../imgs/h.jpeg"
import { useNavigate } from "react-router"

type imgString = {
    obj:{
        loc:string;
        house: string;
        desc: string;
    }
}
function DisplayCard({obj}:imgString){
    const navigate = useNavigate();

    const goSearch = (categ:string) => {
        const loc = categ.toLocaleLowerCase()
        navigate(`/houses/${loc}`)
    }

    const {loc, house, desc} = obj
    return(
        <div id="dispCard">
            <div style={{backgroundImage:`url(${loc})`}} id="dispImg"></div>
            <div id="dispCont">
                <h2 className="text-2xl md:text-2xl font-extrabold">{house}</h2>
                <p className="text-1xl md:text-1xl font-light">{desc}</p>
                <button className="" id="subBtn1" onClick={() => goSearch(house)}>Book Date</button>
            </div>
        </div>
    )
}
export default DisplayCard