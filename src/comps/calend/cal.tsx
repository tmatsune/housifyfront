
import "./cal.css"
import { useEffect, useState } from "react"
import { GetMonth } from "../../types/getmonth"
import { GetMonthNum } from "../../types/getmonth"

type Year = {
    obj: {
        jan: number[],
        feb: number[],
        mar: number[],
        apl: number[],
        may: number[],
        jun: number[],
        jul: number[],
        aug: number[],
        sep: number[],
        oct: number[],
        nov: number[],
        dec: number[],
    }
    submitDates: (dates: number[]) => void
    limit: number
}
function Cal({obj, submitDates, limit}:Year){
    var currentdate = new Date();
    const currMonthNum = currentdate.getMonth() + 1;
    var monthName = GetMonth(currMonthNum)

    const [currMonth, setCurrMonth] = useState<string>(monthName);
    const [numMonth, setNumMonth] = useState(currMonthNum);
    const [reservedDates, setReservedDates] = useState<number[]>([]);

    const changeMonth = (mon:string) => {
        var num = GetMonthNum(mon)
        setNumMonth(num)
        setCurrMonth(mon) //when month is changed set reserved dates to []
    }

    const submit = () => {
        if(reservedDates.length > limit + 1){
            alert('night limit reached, remove to continue')
        }else if(reservationDates.length === 1){
            alert('no nights selected, add to continue')
        }else{
            submitDates(reservedDates)    
        }
    }

    const reservationDates = (date: number[], type:string) => {
        var nwReservedDates = reservedDates;
        if(nwReservedDates.length === 0){
            nwReservedDates.push(date[0]);
            nwReservedDates.push(date[1]);
        }
        else if(nwReservedDates.length > 0 && date[0] !== nwReservedDates[0]){
            while(nwReservedDates.length > 0){
                nwReservedDates.pop()
            }
            nwReservedDates[0] = date[0]
            nwReservedDates.push(date[1])
        }
        else if(type === 'add'){
            nwReservedDates.push(date[1])
        }else if(type === 'remove'){
            nwReservedDates.splice(nwReservedDates.slice(1,nwReservedDates.length).indexOf(date[1])+1, 1);
        }
        console.log(nwReservedDates);
        setReservedDates(nwReservedDates)
    }

    return (     // 
        <div id="calMain">
            <div id="selectMonth" >
            {
                Object.keys(obj).map((item, idx) => {
                    return (
                        <div key={idx} 
                        style={{color: currMonth === item ? 'black' : "black", fontWeight: currMonth === item ? 800 : 400}}
                        id="monthNum" onClick={() => changeMonth(item)}>
                            {item}
                        </div>
                    )
                })
            }
            </div>
            <hr></hr>
            <Month lis={obj[currMonth as keyof typeof obj]} 
                monthNum={numMonth} 
                testDates={reservationDates}></Month>
            <button onClick={submit} id="resBtn">checkout</button>
        </div>
    )
}
type MonthLis = {
    lis: number[]
    monthNum: number
    testDates: (date: number[], type: string) => void
}

function Month({lis, monthNum, testDates}:MonthLis ) {

    const changeDate1 = (num:number) => {
        var addLis = [monthNum, num]
        testDates(addLis, 'add')
    }
    const removeDate1 = (remNum:number) => {
        var remLis = [monthNum, remNum]
        testDates(remLis, 'remove')
    }

    return (
        <div id="monthLis">
            {//lis
            lis.map((item, idx) => {
                return (
                    <Node res={item} key={idx} 
                    date={idx+1}
                    addDate={changeDate1}
                    remDate={removeDate1}></Node>
                )          
            })
            }
        </div>
    )
}
type Reserved = {
    res: number
    date: number
    addDate: (num: number) => void
    remDate: (remNum: number) => void
}
function Node({res, addDate, remDate, date}:Reserved){
    const [num, setNum] = useState<number>(res)

    const reserveDate = () => {
        if( num === 0 ){
            setNum(1);
            addDate(date)
        }else if(num === 1 && res !== 1){
            setNum(0)
            remDate(date)
        }
    }

    useEffect(() => {
        var item = res
        setNum(item)
    }, [res, addDate])

    return (//date
        <div id="day" 
        style={{color: num === 1 ? 'white' : 'black', 
                backgroundColor: num === 1 ? `black` : 'white',}} 
        onClick={reserveDate}>
            {date}
        </div>
    )
}
export default Cal;