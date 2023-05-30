import "./calPicker.css"
import { useState } from "react"
import S from "../../imgs/icons/search.svg"

function CalPicker(){

    const [value, setValue] = useState<number>(0);
    const [value1, setValue1] = useState<number>(2000);

    const submitDate = () => {//<span id="subBtn" className=" text-xs md:text-base" onClick={submitDate}></span>
        console.log(value)  //&#9993;
    }
    const disabledDates = ['05/18/2023', '5/18/2023'];
    return (
        <div id="calPicker" className="">
            <div className="ml-2 mt-2 md:ml-6 md:mt-4 cursor-pointer">
                <input 
                placeholder="min..."
                className=" text-xs md:text-base w-3/6">
                </input>
            </div>
            <div className="ml-2 mt-2  md:ml-4 md:mt-4 cursor-pointer">
                <input
                placeholder="max..."
                className="text-xs md:text-base w-3/6">
                </input>
            </div>
            <div className="ml-2 mt-2 md:ml-0 md:mt-4">
                <img alt='' id="ser" src={S} className="mr-10"></img>
                
            </div>
        </div>
    )
}
export default CalPicker