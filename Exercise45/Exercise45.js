function carManufacture(manufacturer,model,color,city_number){
    car={
        Manufacturer:manufacturer,
        Model:model,
        Color:color,
        City:city_number
    }
    return car;
}
var car=carManufacture("Honda","Civic","Black","Rawalpindi");
console.log(car);
var car=carManufacture("Toyota","Corolla","White","Karachi");
console.log(car);
var car=carManufacture("Kia","Sportage","Grey","Lahore");
console.log(car);