var current_users=["Faran Taimoor Butt","Hammad Butt","Wasi Butt","Zain Butt","Bilal Butt","Shayan Butt","Amin Butt"];
var new_users=["Shayan Butt","Amin Butt","Amad Butt","Qavi Butt","Zahaib Butt"];
for(var i =0;i<new_users.length;i++){
    for (var j=0;j<current_users.length;j++){
        if (new_users[i]==current_users[j]){
            console.log(new_users[i]+" "+"has been used.Please enter a new username");
        }
        else{
            console.log("UserName is Available!")
        }
    }
}
