import "./houseCard.css"
import BOOK from "../../imgs/categ/book2.png"
import { Link } from "react-router-dom";

type HouseType = {
    obj: {
        id: number;
        name: string;
        city: string;
        cost: number;
        imgUrl: string;
        profileId: number;
    };
}
function HouseCard({obj}:HouseType){
    const { id, name, city, cost, imgUrl, profileId } = obj;

    return (
        <div id="houseCardMain">
            <div id="houseImgDiv" style={{backgroundImage: `url(${imgUrl})`}}>
                <Link to={`/reserve/${id}`}><img alt='' id='book' src={BOOK}></img></Link>
            </div>
            <div id="houseDescDiv">
                <div id='houseDiv1'>
                    <h4 className="font-semibold">{name}</h4>
                    <p className="font-light">{city}</p>
                </div>
                <div id='houseDiv2'>
                    <p className="font-light"><b className="font-semibold">${cost}</b>: night</p>
                </div>
            </div>
        </div>
    )
}
export default HouseCard;