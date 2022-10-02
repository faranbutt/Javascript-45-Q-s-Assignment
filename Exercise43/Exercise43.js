function make_great(magicians){
    var greatMagicaians=[];
    for(var i=0;i<magicians.length;i++){
        greatMagicaians[i]="Great"+" "+magicians[i]
    }
    return greatMagicaians;
}
var magicians=["Harry Houdini","Criss Angel","David Blaine"];
var magic=make_great(magicians);
console.log("Great Magicians:\n"+magic);
console.log("Unchnged Magicians:\n"+magicians);