console.log("start oops class task");
//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
class Movie{
    constructor(title,studio,rating="pg"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    //b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
//rating="pg" defult value assign in constructor
//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
getrating() {
    return "the rating is  " + this.rating;
  }
}
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
class Circle{
    constructor(radius,color){
    this.radius=radius;
    this.color=color;
    }
    get radiusCircle(){
    return this.radius
    }
    set radiusCircle(radius){
     this.radius=radius;
    }
    get colorCircle(){
    return this.color
    }
    set colorCircle(color){
        this.color=color;
    }
    get toString(){
        return `"Circle[radius=${this.radius},color=${this.color}]"`
    }
    get areaCircle(){
        return Math.PI*Math.pow(this.radius,2);
    }
    get circumferenceCircle(){
        return 2*Math.PI*this.radius;
    }
}
let circle_Obj=new Circle(1.0,"red");
console.log(circle_Obj.radiusCircle);
console.log(circle_Obj.colorCircle);
console.log(circle_Obj.toString);
console.log(circle_Obj.areaCircle);
console.log(circle_Obj.circumferenceCircle);
circle_Obj.radiusCircle=3.0;
console.log(circle_Obj.radiusCircle);
circle_Obj.colorCircle="green";
console.log(circle_Obj.colorCircle);
//uber price calculation
class UberPrice{
    constructor(km,price){
        this.km=km;
        this.price=price;

    }set price(n){
        this.price=n;
    }
   get price(){
        return this.km*n;
    }
   
}
let uber1=new UberPrice(10,50);
console.log(uber1.price);

