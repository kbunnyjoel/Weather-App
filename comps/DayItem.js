import {DayClass} from './DayClass'
const TransformData = weather_response => {

    if (!weather_response) return [];
    const i = 0;
    const day_time = weather_response.map(each => {
        const day = new Date(each.dt_txt);
        console.log(day.toLocaleString().split("/")[1])
        return {
            day: day.toLocaleDateString().split('T')[0],
            time: day.toLocaleTimeString('en-US', { hour12: true }),
            days: day.toLocaleString().split("/")[1],
            temp: each.main.temp,
            icons: each.weather[i].icon,
            descriptions: each.weather[i].description,
        }

    })

    const DayItemArray = [];


    day_time.map(eachDay => {


        const search = DayItemArray.find(each => {
            return each.getDay() === eachDay.day;
        })

        if (!search) {
            // creat and push item
            // console.log(eachDay.icon.toString())
            const tempDayItem = new DayClass(eachDay.day, eachDay.icons, eachDay.descriptions, eachDay.days);
            tempDayItem.addTemp(eachDay.temp, eachDay.icons, eachDay.descriptions, eachDay.days);
            DayItemArray.push(tempDayItem);

        } else {
            search.addTemp(eachDay.temp, eachDay.icons, eachDay.descriptions, eachDay.days)
        }

    });

    return DayItemArray;
};

export default TransformData();