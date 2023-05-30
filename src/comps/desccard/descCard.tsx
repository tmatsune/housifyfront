import "./descCard.css";

type DescData = {
    obj:{
        loc:string;
        house: string;
        desc: string;
    }
}
function DescCard( {obj}:DescData ){//style={{backgroundImage:`url(${loc})`}}
    const {loc, house, desc} = obj
    return(
        <div id="descCard">
            <div id="descCardImg" >
                <img alt='' id="descImg" src={loc}></img>
            </div>
            <div id="descCardDesc">
                <h2 className="text-2xl md:text-2xl font-extrabold">{house}</h2>
                <p className="text-1xl md:text-1xl font-light">{desc}</p>
            </div>
        </div>
    )
}
export default DescCard