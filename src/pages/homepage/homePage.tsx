import "./homePage.css"
import H from '../../imgs/rooms/r.jpeg'
import H1 from '../../imgs/rooms/r1.jpeg'
import H2 from '../../imgs/rooms/r2.jpeg'
import H3 from "../../imgs/rooms/r3.jpeg"

import I from "../../imgs/icons/search.svg"
import I1 from "../../imgs/icons/map.svg"
import I2 from "../../imgs/icons/arrow.svg"

import CalPicker from "../../comps/calpicker/calPicker"
import DisplayCard from "../../comps/displaycard/displayCard"
import DescCard from "../../comps/desccard/descCard"

import { useNavigate } from "react-router"


const disct = [{loc:H, house:"Condo", desc:"Condos located in los angeles"}, 
    {loc:H1, house:"Beach", desc:"Beach Houses located in Miami"}, 
    {loc:H2, house:"House", desc:"houses located in florida"}
]

const disct1 = [{loc:I, house:"Search", desc:"Look up places you want to go"}, 
    {loc:I1, house:"Book a date", desc:"Book the days yo uplan to stay"}, 
    {loc:I2, house:"Go to Location", desc:"after booking go to location"}
]

//lg md sm
function HomePage(){
    //const selectedDates = [[5, 12, 13], [5, 22, 23, 24, 25], [4, 3, 4], [5, 4], [4, 8, 9, 10, 11]]
    const navigate = useNavigate()

    const goLogin = () => {
        navigate("/login")
    }
    
    return(
        <div className="homeScreen">
            <div id="homeContainer0" className="h-4/5 w-full border-solid" 
                style={{backgroundImage:`url(${"https://rare-gallery.com/uploads/posts/957778-artwork-night-house-sky-mountains-digital-art.jpg"})`}}>
                <div id="descWrapper">
                    <h1 className=" text-4xl md:text-7xl font-bold text-white py-50">Start Exploring</h1>
                    <p className=" text-1xl md:text-2xl font-medium text-white py-50">
                        The number one website for booking
                    </p>
                    <button id="startBtn" onClick={goLogin}>Get Started</button>
                </div>
                {
                    //<CalPicker></CalPicker>
                }
            </div>
            <div id="homeContainer1">
                {   
                    disct1.map((item, idx) => {
                        return(
                            <DescCard key={idx} obj={item}></DescCard>
                        )
                    })
                }
            </div>
            <div id="homeContainerDoub">
                <div id="deals">
                    <h2 className="text-3xl md:text-5xl font-bold text-white py-10">
                        Find the best location
                    </h2>
                    <p className="text-1xl md:text-2xl font-light text-white py-0">
                        We offer the best locations best options to make
                        <br></br> your vaction the best possible
                    </p>
                </div>
                <div id="dealsImg" style={{backgroundImage:`url(${H3})`}}>
                </div>
            </div>
            <h1 className="text-3xl md:text:3xl font-extrabold ml-10 mt-10">
                Top Deals
            </h1>
            <div id="homeContainer2">
                {
                    disct.map((item, idx) => {
                        return(
                            <DisplayCard obj={item} key={idx}></DisplayCard>
                        )
                    })
                }
            </div>
            <div id="homeContainer3" className="">
                <div id="homeWrapper3" 
                    style={{backgroundImage:`url(${"https://lp-cms-production.imgix.net/image_browser/Haus%203D%20Printed%20House.jpg"})`}}>
                    <h1 className="text-4xl md:text-4xl font-bold text-white mt-10 md:mt-20 ml-6">
                        Get out and <br></br>Strech your Imagination
                    </h1>
                    <p className="text-1xl md:text-2xl text-white ml-8">Plan your getaway</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage;