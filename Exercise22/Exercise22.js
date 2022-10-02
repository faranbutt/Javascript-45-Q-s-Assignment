var array=["Faran","Taimoor","Butt"];
console.log("Now i will make an intentional error by making a deleting a index without value");
const element = array.splice(5, 1);
console.log(element);