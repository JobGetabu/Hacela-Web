var db = firebase.firestore();
/**Sign Up */

function signupdetails(){

var firstnamedetail = document.getElementById("firstnameinput").value;
var lastnamedetail = document.getElementById("lastnameinput").value;
var usernamedetail = document.getElementById("usernameinput").value;
var emaildetail = document.getElementById("emailinput").value;
var passworddetail = document.getElementById("passwordinput").value;

    db.collection("signup").doc("details").set({
        firstname: "firstnamedetail",
        lastname: "lastnamedetail",
        username: "usernamedetail",
        email: "emaildetail",
        password: "passworddetail"
    })
    .then(function() {
        console.log("Successful signup!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    
}