console.log("start oops class task");
//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    //b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
    getrating() {
        return "the rating is  " + this.rating;
      }
}
//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
const CasinoRoyale = new Movie( "Casino Royal", "Eon Productions", "PG13");
console.log(CasinoRoyale);

//write a person class to hold all the details:
class person{
    constructor(FirstName,LastName,Age,Degree,Work){
        this.FirstName=FirstName;
        this.LastName=LastName;
        this.Age=Age;
        this.Degree=Degree;
        this.Work=Work
    }
}
const person1=new person("archana","anandhan",25,"B.E","non IT");
console.log(person1);
const person2=new person("arun","anandhan",23,"B.Sc","non IT");
console.log(person2);

//class-circle.md
var Circle=function(){
    function Circle(redius,color){
        this.redius=1.0;
        this.color="red";
        if (typeof (redius) !== "undefined") {
            this.radius = redius;
        }
        if (typeof (color) !== "undefined") {
            this.color = color;
        }
    }
    Circle.prototype.getRedius=function(){
       console.log( this.redius=redius);
    }
    Circle.getColor=function(){
        console.log( this.color=color);
    }
    Circle.setRedius=function(redius){
        this.redius=redius;

    }
    Circle.setColor=function(color){
        this.color=color;

    }
    Circle.toString=function(){
        console.log( "redius:"+this.redius +"color"+this.color);
    }
    Circle.getArea=function(){
        console.log(2*(Math.PI)*this.redius);
    }
    Circle.getCircumference=function(){
        console.log(2*this.redius);
    }
    return

}
var ans=new Circle(1.0,"red");
console.log(ans);
