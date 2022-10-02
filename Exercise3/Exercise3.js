var name="fAraN TaImOor BUtT";
var Upper=name.toUpperCase();
var Lower=name.toLowerCase();
var title=titlecase(name);
function titlecase(name){
    var str=name.toLowerCase();
    str=str.split(" ");
    for (var i=0;i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    str=str.join(" ");
    return str;
}
console.log("Upper case: "+" "+Upper);
console.log("Lower case: "+" "+Lower);
console.log("Title case: "+" "+title);
