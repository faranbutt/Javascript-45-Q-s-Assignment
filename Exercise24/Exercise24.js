var str1="My name is Faran Taimoor Butt";
var str2="My name is Faran Taimoor Butt";
console.log("If str1==str2!I predict True");
console.log(str1==str2);
console.log("If str1<str2! I predict False");
console.log(str1<str2);
var num1=23;
var num2=44;
console.log("If num1<num2! I predict True");
console.log(num1<num2);
console.log("If num1>num2! I predict False");
console.log(num1>num2);
console.log("If num1=num2! I predict False");
console.log(num1==num2);
console.log("If num1<=num2! I predict True");
console.log(num1<=num2);
console.log("If num>=num2! I predict False");
console.log(num1>=num2);
var num3 =24;
var num4=900;
console.log("If num1<num2 and num3<num4! I predict True");
console.log(num1<num2 && num3<num4);
console.log("If num1>num2 and num3<num4! I predict False");
console.log(num1>num2 && num3<num4);
console.log("If num<num2 or num3>num4! I predict True");
console.log(num1<num2 || num3>num4);
console.log("If num>num2 and num3>num4! I predict False");
console.log(num1>num2 && num3>num4);
//Test wheather an item is an array
var array=["Faran","Taimoor","Butt"];
var notInList=false;
for (var i=0;i<array.length;i++){
    if(array[i]=="Butt"){
        notInList==true;
        console.log("The item"+" "+array[i]+" "+"is in the list");
        break;
    }
}
if(!notInList){
    console.log("The item"+" "+array[i]+" "+"is not in the list");
}
//Test wheather an item is not in an array
for (var i=0;i<array.length;i++){
    if(array[i]=="Qasim"){
        notInList==true;
        console.log("The item"+" "+array[i]+" "+"is in the list");
        break;
    }
}
if(!notInList){
    console.log("The item Qasim is not in the list");
}