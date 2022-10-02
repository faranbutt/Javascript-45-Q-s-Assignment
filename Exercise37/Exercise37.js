function make_shirt(shirtSize,message){
    if (shirtSize=="XL size" || shirtSize=="L size"){
        console.log("I love Javascript and"+" "+shirtSize);
    }
    else{
        console.log(message+shirtSize);
    }
}
var shirtSize="XL size";
var message="I need this shirt in ";
make_shirt(shirtSize,message);
var shirtSize="S size";
var message="I need this shirt in ";
make_shirt(shirtSize,message);
