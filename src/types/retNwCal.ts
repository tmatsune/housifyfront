import { calendarType } from "./calType"
import { YearCal, reset } from "./calType";

export const retNewCalendar = (selectedDates: number[][]):calendarType => {
    const nwCalYear = YearCal;
    reset(nwCalYear)
    selectedDates.forEach(item => {
        if(item[0] === 1){
                for(let i = 1; i < item.length; i++){
                        nwCalYear.jan[item[i]-1] = 1
                }
        }  
        if(item[0] === 2){
                for(let i = 1; i < item.length; i++){
                        nwCalYear.feb[item[i]-1] = 1
                }
        }
        if(item[0] === 3){
                for(let i = 1; i < item.length; i++){
                        nwCalYear.mar[item[i]-1] = 1
                }
        }
        if(item[0] === 4){
                for(let i = 1; i < item.length; i++){
                        nwCalYear.apl[item[i]-1] = 1
                }
        }
        if(item[0] === 5){
                for(let i = 1; i < item.length; i++){
                        nwCalYear.may[item[i]-1] = 1
                }
        }
        if(item[0] === 6){
                for(let i = 1; i < item.length; i++){
                        nwCalYear.jun[item[i]-1] = 1
                }
        }
        if(item[0] === 7){
                for(let i = 1; i < item.length; i++){
                        nwCalYear.jul[item[i]-1] = 1
                }
        }
        if(item[0] === 8){
                for(let i = 1; i < item.length; i++){
                        nwCalYear.aug[item[i]-1] = 1
                }
        }
        if(item[0] === 9){
                for(let i = 1; i < item.length; i++){
                        nwCalYear.sep[item[i]-1] = 1
                }
        }
        if(item[0] === 10){
                for(let i = 1; i < item.length; i++){
                        nwCalYear.oct[item[i]-1] = 1
                }
        }
        if(item[0] === 11){
                for(let i = 1; i < item.length; i++){
                        nwCalYear.nov[item[i]-1] = 1
                }
        }
        if(item[0] === 12){
                for(let i = 1; i < item.length; i++){
                        nwCalYear.dec[item[i]-1] = 1
                }
        }
    })
    return nwCalYear;
}