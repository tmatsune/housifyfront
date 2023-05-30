import "./housesPage.css";
import { getHouses, getHousesCateg, findUsersHouses} from "../../services/houseService/houseIndex";
import { useEffect, useState } from "react";
import HouseCard from "../../comps/housecard/houseCard";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import CalPicker1 from "../../comps/calpicker/calPicker1";

import C from "../../imgs/categ/cabin.svg"
import C1 from "../../imgs/categ/house.svg"
import C2 from "../../imgs/categ/house1.svg"
import C3 from "../../imgs/categ/spaceship.svg"
import C4 from "../../imgs/categ/living-room.svg"
import C5 from "../../imgs/categ/beach.svg"
import C6 from "../../imgs/categ/camping.svg"
import { testHouses } from "../../testdata/testData";

const cImgs = [C4, C1, C2, C3, C, C, C5, C6];
export const catefories = ['Room', 'Condo', 'Cabin', 'OMG!', 'House', 'Small', 'Beach', 'Camping']
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

function HousesPage() {
    const location = useLocation();
    const pathId = location.pathname.split('/')[2]

    const [houses, setHouses] = useState([])
    const [loading, setLoading] = useState(false)
    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(2000)

    const getHousesFilter = async() => {
        setLoading(true)
        const path = pathId.toLocaleLowerCase()
        var st = path
        const houses = await getHousesCateg(st, min, max)
        setHouses(houses)
        setLoading(false)
    }

    useEffect(() => {
        getHousesFilter();
    },[pathId, max])

    const changeMax = (num: number) => {
        setMax(num)
    }

    return (
        <div id="roomsMain">
            <div id="roomContainer0">
                {
                    catefories.map((item, idx) => {
                        return ( 
                            <div key={idx} id="categDiv" >
                                <Link to={`/houses/${item}`}><img alt='' id='cImg' src={cImgs[idx]}></img></Link>
                                <Link to={`/houses/${item}`} className="font-light text-sm md:text-base">
                                    {item}
                                </Link>
                                { 
                                    item === pathId ? (<hr className="border-2 border-black"></hr>) : (null)
                                }
                            </div>
                        )
                    })
                }
            </div>
            <CalPicker1 changeMax={changeMax}></CalPicker1>
            <div id="roomContainer1">
                {
                    loading ? (<p>...loading</p>) : (
                    houses.map((item, idx) => {
                        return (
                            <HouseCard key={idx} obj={item}></HouseCard>
                        )
                    })
                    )
                }

            </div>
        </div>
    )
}   
export default HousesPage;
/*
        <div id="roomWrapper0">
            <h2>Filter</h2>
            <input placeholder="location"></input>
            <input placeholder="cost"></input>
        </div>
*/