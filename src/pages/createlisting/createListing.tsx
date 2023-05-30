import "./createListing.css"
import { useState, useContext } from "react";
import { catefories } from "../housespage/housesPage";
import { UserContext } from "../../context/currentUserCtx";
import { createHouse } from "../../services/houseService/houseIndex";
import { useNavigate } from "react-router";
import ScaleLoader from "react-spinners/ScaleLoader";

import { getImage, uploadImage } from "../../utils/firebase";

const opt = [1, 2, 3, 4, 5, 6, 7, 8];

function CreateListing() {
    const {currentUser} = useContext(UserContext)
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const [name, setName] = useState<string>('house');
    const [city, setCity] = useState<string>('');
    const [state, setState] = useState('');
    const [cost, setCost] = useState<number>(0);
    const [imgUrl, setImgUrl] = useState(null);
    const [simgUrl, setsImgUrl] = useState(null);
    const [bedrooms, setBedRooms] = useState<number>(1);
    const [bathrooms, setBathrooms] = useState<number>(1)
    const [desc, setDesc] = useState<string>('');
    const [guests, setGuests] = useState<number>(1);
    const [maxNights, setMaxNights] = useState<number>(1);

    const uploadImageHandler = (e:any) => {
        setImgUrl(e.target.files[0])       
    }
    const uploadImageHandler1 = (e:any) => {
        setsImgUrl(e.target.files[0])       
    }
    const upImgFirebase = async () => {
        if(currentUser && imgUrl !== null && simgUrl !== null){

        }else{
            alert("only one or no images were uploaded, upload to to continue")
        }
        setImgUrl(null)
        setsImgUrl(null)
    }
    const createNwListing = async() => {
        if(currentUser  && imgUrl !== null && simgUrl !== null){
            setLoading(true);
            await uploadImage(currentUser.email, imgUrl);
            var sendImg = await getImage(currentUser.email, imgUrl);
            await uploadImage(currentUser.email, simgUrl);
            var sendImg1 = await getImage(currentUser.email, simgUrl);
              
            const nwHouse = {
                name: name,
                city: city,
                state: state,
                cost: cost,
                imgUrl: sendImg,
                simgUrl: sendImg1,
                profileId: currentUser.id,
                bedrooms: bedrooms,
                bathrooms: bathrooms,
                desc: desc,
                guests: guests,
                maxNights: maxNights,
            }
            const data = await createHouse(nwHouse)
            console.log(data)
            setLoading(false)
            if(data){
                navigate('/')
            }
        }else{
            alert("only one or no images were uploaded, upload to to continue")
        }
        setImgUrl(null)
        setsImgUrl(null)
    }
    const check = () => {
        console.log(currentUser)
    }

    return (
        <div id="createScreen">
            <button onClick={check}>check</button>
            <div id="formWrapper">
                <h1 className="font-bold text-2xl">Create Listing</h1>
                <div id="form">
                    <div id="submitField" className="mt-4">
                <hr ></hr>
                        <div id="sel" className="mt-2">
                            <p className="mb-3"> Type of home</p>
                            <div style={{display: 'flex'}} id="dropvalue"><p>{name}  &#x25BC;</p></div>
                        </div>
                        
                        <div id="sel">
                            <div id="selC">
                            {
                                catefories.map((item, idx) => {
                                    return (
                                    <p key={idx} onClick={() => setName(item.toLocaleLowerCase())}>{item}</p>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
                    

                    <h1 className="font-semibold">Location</h1>
                    <div id="submitField" className="mt-4">
                        <hr></hr>
                        <div className="mb-3">
                            <label >What city is your home located in</label>
                        </div>
                        <input maxLength={16} placeholder="city" required value={city}
                            onChange={e => setCity(e.target.value)}></input>
                    </div>
                    <div id="submitField" className="mt-4">
                        <div className="mb-3">
                            <label >What state is your home located in</label>
                        </div>
                        <input maxLength={16} placeholder="state" required value={state}
                            onChange={e => setState(e.target.value)}></input>
                    </div>


                    <h1 className="font-semibold">Details</h1>
                    <div id="submitField" className="mt-4">
                    <hr></hr>
                        <div className="mb-3">
                            <label>Brief description of your home</label>
                        </div>
                        <input maxLength={100} placeholder="description" required value={desc}
                            onChange={e => setDesc(e.target.value)}></input>
                    </div>
                    <div id="submitField" className="mt-4">
                        <div className="mb-3">
                            <label>Cost per night in USD</label>
                        </div>
                        <input placeholder="cost" required value={cost}
                            onChange={e => setCost(Number(e.target.value))}></input>
                    </div>


                    <h1 className="font-semibold">House Arrangements</h1>
                    <div id="submitField" className="mt-4">
                    <hr></hr>
                        <div id="sel">
                            <p className="mb-3">How many bedrooms are accessable to guests</p>
                            <div style={{display: 'flex'}} id="dropvalue1"><p>{bedrooms}  &#x25BC;</p></div>
                        </div>
                        <div id="sel">
                            <div id="selC">
                            {
                                opt.map((item, idx) => {
                                    return (
                                    <p key={idx} onClick={() => setBedRooms(item)}>{item}</p>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>

                    <div id="submitField" className="mt-4">
                        <div id="sel">
                            <p className="mb-3">How many bathrooms are accessable to guests</p>
                            <div style={{display: 'flex'}} id="dropvalue1"><p>{bathrooms}  &#x25BC;</p></div>
                        </div>
                        <div id="sel">
                            <div id="selC">
                            {
                                opt.map((item, idx) => {
                                    return (
                                    <p key={idx} onClick={() => setBathrooms(item)}>{item}</p>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>

                    <div id="submitField" className="mt-4">
                        <div>
                            <div id="sel">
                                <p className="mb-3">What is the maximum amount of guests allowed</p>
                                <div style={{display: 'flex'}} id="dropvalue1"><p>{guests}  &#x25BC;</p></div>
                            </div>
                            <div id="sel">
                                <div id="selC">
                                {
                                    opt.map((item, idx) => {
                                        return (
                                        <p key={idx} onClick={() => setGuests(item)}>{item}</p>
                                        )
                                    })
                                }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="submitField" className="mt-4">
                        <div id="sel">
                            <p className="mb-3">What is maximum aomunt of nights guest can stay</p>
                            <div style={{display: 'flex'}} id="dropvalue1"><p>{maxNights}  &#x25BC;</p></div>
                        </div>
                        <div id="sel">
                            <div id="selC">
                            {
                                opt.map((item, idx) => {
                                    return (
                                    <p key={idx} onClick={() => setMaxNights(item)}>{item}</p>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
                <h1 className="font-semibold">Visuals</h1>
                <div id="submitField" className="mt-4">
                    <hr></hr>
                        <div className="mb-3">
                            <label>Upload Images</label>
                        </div>
                        <input type="file" onChange={uploadImageHandler} ></input>
                        <input type="file" onChange={uploadImageHandler1} ></input>
                </div>
                
                </div>  
                
            </div>
            <button onClick={createNwListing} id="createLis">create listing</button>
            {
                loading ? (
                <ScaleLoader height={165} width={28} margin={8} color={"#ff5314"} id="load1"></ScaleLoader>
                ) : (null)
            }
        </div>
    )
}
export default CreateListing;

/*
                <div>
                    <h1>Visuals</h1>
                    <div id="submitField">
                    <hr></hr>
                        <div>
                            <label>Upload Images</label>
                        </div>
                        <input type="file" onChange={uploadImageHandler} ></input>
                        <input type="file" onChange={uploadImageHandler1} ></input>
                    </div>
                    <button onClick={upImgFirebase}>create listing</button>
                </div>
*/