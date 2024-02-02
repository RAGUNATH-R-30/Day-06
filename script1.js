//1a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
class Movie{
    constructor(title,studio,rating){
        this.title = title
        this.studio = studio
        this.rating = rating
    }

}
var obj1 = new Movie("mov","stud","Pg")
console.log(obj1)

//1b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
class Movie{
    constructor(title,studio,rating="PG"){
        this.title = title
        this.studio = studio
        this.rating = rating
    }

}
var obj2 = new Movie("mov","stud")
console.log(obj2)

//1c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
class Movie{
    constructor(title,studio,rating="PG"){
        this.title = title
        this.studio = studio
        this.rating = rating
    }
    getPG(arr){
        var temp_arr =[]
        for(var i of arr){
            if(i.rating =="PG"){
                temp_arr.push(i)
            }
        }
        return temp_arr;
    }

}
//1d)Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13"
var CasinoRoyale = new Movie("Casino Royale","Eon Productions","PG13")
