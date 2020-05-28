let max = a => a.reduce((m, x) => m > x ? m : x);
let min = a => a.reduce((m, x) => m < x ? m : x);

class DayClass {
    constructor(day = null, icon = null, description = null, date=null) {
        this.day = day;
        this.icon = icon;
        this.temp = [];
        this.description= description;
        this.date =date;
    }

    addTemp(temperature = null) {
        this.temp.push(temperature)
    }

    getDay() {
        return this.day;
    }

    getMax() {
        return max(this.temp);
    }

    getMin() {
        return min(this.temp);
    }

    getIcon() {
        return this.icon;
    }

    getDescription(){
        return this.description;
    }

    getDate(){
        return this.date;
    }
}
new DayClass();
export default DayClass;