export const GetMonth = (numMonth:number):string => {
    switch (numMonth) {
        case 1:
            return "jan"
        case 2:
            return "feb"
        case 3:
            return "mar"
        case 4:
            return "apl"
        case 5:
            return "may"
        case 6:
            return "jun"
        case 7:
            return "jul"
        case 8:
            return "aug"
        case 9:
            return "sep"
        case 10:
            return "oct"
        case 11:
            return "nov"
        case 12:
            return "dcm"
        default:
            return "none"
    }
}
export const GetMonthNum = (monthName:string):number => {
    switch (monthName) {
        case "jan":
            return 1
        case "feb":
            return 2
        case "mar":
            return 3
        case "apl":
            return 4
        case "may":
            return 5
        case "jun":
            return 6
        case "jul":
            return 7
        case "aug":
            return 8
        case "sep":
            return 9
        case "oct":
            return 10
        case "nov":
            return 11
        case "dev":
            return 12
        default:
            return 12
    }
}