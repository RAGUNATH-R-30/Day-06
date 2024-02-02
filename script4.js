class Ubercalculator{
    constructor(name,distance){
        this.name = name
        this.distance = distance
    }
    getfare(){
        let fare = this.distance*18
        return fare;
    }
}

let someone = new Ubercalculator("Adam",15)
console.log(`${someone.getfare()} Rupees`)