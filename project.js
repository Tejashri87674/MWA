let cloths= document.getElementById("cloths");
let reviews= document.getElementById("reviews");
let blogs= document.getElementById("blogs");
let contacts= document.getElementById("contacts");

cloths.addEventListener("click", function(){
    cloths.style.color="red";
    reviews.style.color="black";
    contacts.style.color="black";
    blogs.style.color="black";
})
reviews.addEventListener("click", function(){
    cloths.style.color="black";
    reviews.style.color="red";
    contacts.style.color="black";
    blogs.style.color="black";
})
contacts.addEventListener("click", function(){
    cloths.style.color="black";
    reviews.style.color="black";
    contacts.style.color="red";
    blogs.style.color="black";
})
blogs.addEventListener("click", function(){
    cloths.style.color="black";
    reviews.style.color="black";
    contacts.style.color="black";
    blogs.style.color="red";
})

let login= document.getElementById("login");
login.addEventListener("click",function(){
  let loginPage=   document.querySelector(".loginPage").style.display="block";
})
 let logged= document.getElementById("logged");
 logged.addEventListener("click",function(){
    let email= document.getElementById("email");
    let pass= document.getElementById("pass");

    if(email.value=="" || pass.value==""){
        alert("please enter email and password");
    }
    else{
        alert("you logged in");
        document.querySelector(".loginPage").style.display="none";
    }
 })
 let submit = document.getElementById("submit");
 submit.addEventListener("click", function(){
    let names= document.getElementById("name");
    let password = document.getElementById("pass");

    console.log(names.value);
    if(names.value == "" || password == ""){
       alert("please enter name and password")
    }
    else{
        alert("Thanks for connecting")
    }
})