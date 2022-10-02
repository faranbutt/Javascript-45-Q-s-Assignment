var guestToInvite=["Taimoor","Arham","Ashfaq","Waqas"];
for (var i = 0; i<guestToInvite.length; i++){
    console.log("Hello!"+" "+guestToInvite[i]+" "+"I would like to invite you for our annual brunch");
}
guestToInvite[2]="Sarmad";
for (var i = 0; i<guestToInvite.length; i++){
    console.log("Hello!"+" "+guestToInvite[i]+" "+"I would like to invite you for our annual brunch");
}
console.log("Hey Fellows! I have found a bigger dinner table");
guestToInvite.unshift("Hashim");
guestToInvite.splice(3,0,"Murtaza");
guestToInvite.push("Omais");
for (var i = 0; i<guestToInvite.length; i++){
    console.log("Hello!"+" "+guestToInvite[i]+" "+"I would like to invite you for our annual brunch");
}