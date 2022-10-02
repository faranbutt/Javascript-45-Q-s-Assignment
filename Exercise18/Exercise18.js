var countriesToVisit=["Norway","Australia","South Africa","Antartica","Canada","Japan"];
const result1 =[...countriesToVisit];
console.log("Alphabetic Order:\n"+" "+result1.sort());
console.log("Orignal Array:\n"+" "+countriesToVisit);
console.log("Reverse Order:\n"+" "+result1.reverse());
console.log("Orignal Array:\n"+countriesToVisit);
countriesToVisit.reverse();
console.log("Original array Reversed:\n"+" "+countriesToVisit);
countriesToVisit.reverse();
console.log("Again Reveresed:\n"+" "+countriesToVisit);
countriesToVisit.sort();
console.log("Orignal Array Sorted:\n"+countriesToVisit);
countriesToVisit.sort((a, b) => {
    if (a > b)
        return -1;
    if (a < b)
        return 1;
    return 0;
});

console.log("Sorted Array in Reverse Order:\n"+countriesToVisit);
