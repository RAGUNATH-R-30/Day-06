class Circle{
    constructor(radius,colour){
        this.radius = radius
        this.colour = colour
    }
    getradius(){
        return this.radius;
    }
    getcolour(){
        return this.colour;
    }
    getarea(){
        let area = (Math.PI*this.radius*this.radius).toFixed(2)
        return area
    }
    getcircumference(){
        let cirumference = (2*Math.PI*this.radius).toFixed(2)
        return cirumference
    }
}
var c1 = new Circle(4,"red")
console.log(`Radius:${c1.getradius()}`)
console.log(`Colour:${c1.getcolour()}`)
console.log(`Area:${c1.getarea()}`)
console.log(`Cirumference:${c1.getcircumference()}`)
