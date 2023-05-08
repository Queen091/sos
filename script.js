// console.log("Hello world");
// alert("Hello World");
// var btn =document.getElementById("btn");

// btn.addEventlistener('click',(e)=> {
//     e.preventdefault();

//    var one=parseInt(document.getElementById("one").value);
//    var one=parseInt(document.getElementById("two").value);
//    var sum= one - two;
//    console.log(sum);
// })   
//   fuction sum(){

//   }
//    TextMetrics.addEventlistener('click',()=>{
//     var hr=parseInt(document.getElementById("time").value);
//     if (hr>=5 && hr<12){
//         alert ('good morning');
//     }
//     else if(hr>=12 && hr<17){
//         alert ('good afternoon');
//     }
//     else
//     alert('good evening');

//     )}
// var MyDiv=document.getElementById("root");

// var myButton=document.createElement("p");
// p.innerHTML="nicole"

// MyDiv.append(p);
// var btn=document.getElementById("btn")

const btn=document.getElementById('btn');
var email=document.getElementById('email');
var password=document.getElementById('password');

btn.getElementById('click',(e) =>{
    e.preventDefault();
    var email_value=document.getElementById("one").value;
    var pass_value=document.getElementById("two").value;
    var email_length=email_value.length;
    var pass_length= pass_value.length;
    if(email_length<6 && pass_length<8){
        email.classlist.add("active");
        password.classlist.add("active");
    }
    
})
//  var one =document.getElementById("one");
//  var label=document.getElementById("label");
//  var msg=document.getElementById("msg");
//  function validateEmail(){
//   msg.innerHTML="Please enter a valid email";
//   return false;
//  }
//   msg.innerHTML="";
//   return true;
// }








