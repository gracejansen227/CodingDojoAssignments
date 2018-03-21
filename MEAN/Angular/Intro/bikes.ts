class Bike {
    price: number;
    max_speed: number;
    miles: number;

    constructor(price, max_speed, miles) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = miles;
        this.miles = 0;
        }
   displayInfo = () => {
       console.log(this.price, this.max_speed, this.miles)
       return this;
    }
    ride = () => {
        this.miles = this.miles + 10;
        console.log(this.miles);
        console.log("Riding", this.miles)
        return this;
    }
    reverse = () => {
        this.miles = this.miles - 10;
        console.log("Reversing ",this.miles)
        return this;
   }
}
const newBike1 = new Bike(500,250,100);

newBike1.displayInfo();

newBike1.ride();

newBike1.reverse().ride();

newBike1.displayInfo();
