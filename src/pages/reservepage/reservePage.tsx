import "./reservePage.css"
import { useLocation } from "react-router";
import { useEffect, useState, useContext } from "react";
import { getHouseReserve, createReservation } from "../../services/reserveService/reserveIndex";
import StripeCard from "../../comps/stripecard/stripeCard";
import ScaleLoader from "react-spinners/ScaleLoader";
  
import { YearCal } from "../../types/calType";
import { calendarType } from "../../types/calType";
import { retNewCalendar } from "../../types/retNwCal";
import Cal from "../../comps/calend/cal";
import { getOneHouse } from "../../services/houseService/houseIndex";
import { findProfileById } from "../../services/profileService/profileIndex";
import { UserContext } from "../../context/currentUserCtx";

import D from "../../imgs/details/shower.svg"
import D1 from "../../imgs/details/bed.svg"
import D2 from "../../imgs/details/user.svg"
import D3 from "../../imgs/details/calendar.svg"
import D4 from "../../imgs/details/maxnights.svg"
import D5 from "../../imgs/icons/money.svg"

function ReservePage(){
    const {currentUser} = useContext(UserContext)

    const location = useLocation();
    const pathId = location.pathname.split('/')[2]
    const [calYear, setCalYear] = useState<calendarType>(YearCal);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false)
    const [num, setNum] = useState(0);
    const [dates, setDates] = useState<number[]>([])

    const [houseImg, setHouseImg] = useState('');
    const [houseImg1, setHouseImg1] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [desc, setDesc] = useState('')
    const [bedrooms, setBedrooms] = useState(0)
    const [bathrooms, setBathrooms] = useState(0)
    const [cost, setCost] = useState(0)
    const [type, setType] = useState('')
    const [maxNights, setMaxNights] = useState(0)
    const [guests, setGuests] = useState(0)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [bio, setBio] = useState('')
    const [profImg, setProfImg] = useState('')

    const getReservationFromNest = async() => {
        //const nwGenYearCal = YearCal
        const nwReservesData:any = [];
        const data = await getHouseReserve(Number(pathId));//
        console.log(data)
        data.forEach((res) => {
            nwReservesData.push(res.reserveDates)
        })  
        var nwCalYear = retNewCalendar(nwReservesData)//nwGenYearCal
        setCalYear(nwCalYear)
        setNum(2)
    }
    const submitDates = (dates:number[]) => {
        if(dates.length > 1){
            console.log("dates can now be uploaded to backend");
            console.log(dates)
            setDates(dates)
            setShow(false)
            //createReservation(dates, currId, houseId);
        }else{
            alert("no days selected");
        }
    }
    const submitToPq = async() => {
        if(currentUser){
            setLoading(true);
            const currId:number = currentUser.id;
            const houseId = Number(pathId);
            createReservation(dates, currId, houseId);
            setLoading(false);
        }else{
            alert('log in to make reservation')
        }
    }

    const showCal = () => {
        setShow(!show)
        getReservationFromNest()
    }

    const getCurrHouse = async() => {
        const data = await getOneHouse(Number(pathId))
        console.log(data)
        const userData = await findProfileById(data.id)
        console.log(userData)
        setHouseImg(data.imgUrl)
        setHouseImg1(data.simgUrl)
        setCity(data.city)
        setState(data.state)
        setDesc(data.desc)
        setBedrooms(data.bedrooms)
        setBathrooms(data.bathrooms)
        setCost(data.cost)
        setType(data.name)
        setGuests(data.guests)
        setMaxNights(data.maxNights)

        setName(userData.name)
        setEmail(userData.email)
        setBio(userData.desc)
        setProfImg(userData.profImg)
    }

    useEffect(() => {
        getCurrHouse()
    }, [pathId]);

    return (
        <div id="resScreen">
            {
                loading ? (
                <ScaleLoader height={165} width={28} margin={8} color={"#ff5314"} id="load2"></ScaleLoader>
                ) : (null)
            }
            <div className="mb-6 -mt-8">               
                <h1 className="font-semibold text-2xl" id="houseDesc">{desc}</h1>
                <p className="mt-2">&#128205; {city}, {state} hosted by: <b>{name}</b></p>
            </div>
            <div id="reserveContainer0">
                    <div id="reserveWrapper0" style={{backgroundImage: `url(${houseImg})`}}></div>  
                    <div id="reserveWrapper1" 
                    style={{backgroundImage: `url(${houseImg1})`}}></div>  
            </div>

            <div id="reserveContainer1" className="">
                <h4 className="font-semibold text-2xl mb-4" id="houseDesc">
                    A {type} in {city} hosted by: {name}</h4>
                <div id="flexContainer">
                <div id="reserveWrapper1">
                    <div id="houseDetWrapper">
                        <div id="detailsCard" className="font-semibold">
                            <img alt='' id="detailsImg" src={D}></img>
                            Bathrooms: {bathrooms}
                        </div>
                        <div id="detailsCard" className="font-semibold">
                            <img alt='' id="detailsImg" src={D1}></img>
                            BedRooms: {bedrooms}
                        </div>
                        <div id="detailsCard" className="font-semibold">
                            <img alt='' id="detailsImg" src={D2}></img>
                            Guests: {guests}
                        </div>
                    </div>
                    <hr className="border-grey mt-4"></hr>

                    <div id="houseDetWrapper1">
                        <div className="px-4" id="housedata">
                            <img alt='' id="detailsImg" src={D1}></img>
                            <div className="ml-4">
                                <h4 className="font-bold">{type} in {city}, {state}</h4>
                                <p>Your own room in a home, plus access to shared spaces</p>
                            </div>
                        </div>

                        <div id="housedata" className="px-4 mt-6">
                            <img alt='' id="detailsImg" src={D3} className="mt-4"></img>
                            <div className="ml-4">
                                <h4 className="font-bold">Free cancellation</h4>
                                <p>until week after reservation</p>
                            </div>
                        </div>

                        <div id="housedata" className="px-4 mt-6">
                            <img alt='' id="detailsImg" src={D4} className="mt-4"></img>
                            <div className="ml-4">
                                <h4 className="font-bold">Max Nights</h4>
                                <p>{maxNights} available for guests</p>
                            </div>
                        </div>

                        <div  className="px-4 mt-6">
                            <img alt='' id="detailsImg" src={D5} className="mt-4"></img>
                            <div className="ml-4">
                                <h4 className="font-bold">Cost</h4>
                                <p>${cost} per night</p>
                            </div>
                        </div>
                    </div>
                    <hr className="border-grey mt-4"></hr>

                    <div id="profileCardWrapper">
                        <div id="profileCard">
                            <div id="profDescCard" className="text-center">
                                <img alt="" id="profDescImg" src={`${profImg}`}></img>
                                <h4 className="mt-4 font-bold">Name:</h4>
                                <h4>{name}</h4>
                            </div>
                            <div id="profDescCard" className="text-center">
                                <h4 className="font-bold mt-16">Email:</h4>
                                <h4>{email}</h4>
                                <h4 className="font-bold">Bio:</h4>
                                <h4>{bio}</h4>
                            </div>
                        </div>
                    </div>  
                </div>

                <div id="calWrapper">
                    <div id="calCard">
                        <div id="cost">
                            <button onClick={showCal} 
                            id="makeResBtn">Make Reservation</button>
                            {
                                show ? (
                            <Cal obj={calYear} submitDates={submitDates} limit={maxNights}></Cal>
                            ) : (null)
                            }
                            <div className="w-full text-center"><p>Set up Dates here</p></div>
                            <div className="clear-both mt-8">
                                <h1 className="text-xl font-light ml-10 float-left">Max Nights:</h1>
                                <h1 className="text-xl font-light mr-10 float-right">{maxNights}</h1>
                            </div>
                            <div className="clear-both mt-8">
                                <h1 className="text-xl font-light ml-10 float-left">night:</h1>
                                {
                                dates.length > 0 ? (
                                    <h1 className="text-xl font-light mr-10 float-right">{dates.length- 1} X {cost}</h1>
                                ) : (
                                    <h1 className="text-xl font-light mr-10 float-right">{dates.length}</h1>
                                )
                                }
                            </div>
                            <div className="clear-both mt-6">
                                <h1 className="text-xl font-light ml-10 float-left">fees:</h1>
                                <h1 className="text-xl font-light mr-10 float-right">${22}</h1>
                            </div>
                            <div className="clear-both mt-6">
                                <h1 className="text-xl font-light ml-10 float-left">Housify service fee:</h1>
                                <h1 className="text-xl font-light mr-10 float-right">${12}</h1>
                            </div>

                            <div className="clear-both mt-8 ">
                                <div className="ml-10 float-left text-xl">
                                    Dates
                                </div>
                                <div className="mr-10 float-right flex text-xl">
                                {
                                    dates
                                        .filter((item) => dates.indexOf(item) !== 0)
                                        .map((item, idx) => {
                                        return (
                                            <div key={idx} className="ml-2">
                                                {dates[0]}/{item}
                                            </div>
                                        )
                                    })
                                }
                                </div>
                            </div>

                            {
                                dates.length > 0 ? (
                                    <div className="mt-12 clear-both relative top-5">
                                        <StripeCard cost={cost} nights={dates.length - 1} reserve={submitToPq}></StripeCard>
                                    </div>
                                ) : (null)
                            }
                        </div>
                    </div>
                </div>  
                </div>   
            </div>
            <div id="reserveContainer2">
                    
            </div>
        </div>
    )
}

export default ReservePage;
