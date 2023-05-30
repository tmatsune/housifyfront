import "./calPicker.css"
import { useState } from "react"
import S from "../../imgs/icons/search.svg"

type GetNum = {
    changeMax: (num: number) => void
}
function CalPicker1({changeMax}:GetNum){
    const [min, setMin] = useState<number>(0);
    const [max, setMax] = useState<number>(1000);

    const submit = () => {
        changeMax(max)
    }

    return (
        <div id="calPicker1" className="">
            <div className="ml-2 mt-4 md:ml-6 md:mt-4 cursor-pointer" id='third1'>
                <p className="text-sm">{max}</p>
            </div>
            <div className="ml-3 mt-4  md:ml-2 md:mt-4 cursor-pointer" id='third2'>
                <input type="range" min={min} max={1000} value={max} 
                onChange={e=>setMax(Number(e.target.value))} className="slider" id="myRange"/>
            </div>
            <div className="ml-2 mt-4 md:ml-2 md:mt-5" id='third3'>
                <img alt='' id="ser" src={S} className="mr-10" onClick={submit}></img>
            </div>
        </div>
    )
}
export default CalPicker1