import moment from "moment";

export function DateFormat(date? : string){
    return moment(date).format('d MMM YY, h:mm a')
}