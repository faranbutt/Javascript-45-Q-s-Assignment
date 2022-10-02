function make_great(magicians){
    for(var i=0;i<magicians.length;i++){
        magicians[i]="Great"+" "+magicians[i]
    }
    return magicians;
}
var magicians=["Harry Houdini","Criss Angel","David Blaine"];
var magic=make_great(magicians);
console.log(magic);