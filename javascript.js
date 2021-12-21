
//Get the top scroll button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// form validation

let fnameNode=document.getElementById("fname");
let emailNode=document.getElementById("email");
let border1="3px solid red";
let border2="3px solid green";
let tdNode1=document.getElementById("error1");
let tdNode2=document.getElementById("error2");


function validate1(){
    tdNode1.textContent="";
    let fname=fnameNode.value;
    let regExp=new RegExp("^[A-Za-z]*$"); 
    console.log(regExp.test(fname));
    if(fname==''){
        tdNode1.textContent="this field is required";
        fnameNode.style.border=border1;
        return false;
    }
    else if(regExp.test(fname)==false){
        tdNode1.textContent="Name should have only alphabets and no space in between";
        fnameNode.style.border=border1;
        return false;
    }
    else{
        fnameNode.style.border=border2;
        return true;
    }
}

function validate2(){
    tdNode2.textContent="";
    let emailId=emailNode.value;
    let ss=emailId.substring(emailId.indexOf('@')+1);
    console.log(ss);
    // vina123@s
    if(emailId==''){
        tdNode2.textContent="this field is required";
        emailNode.style.border=border1;
        return false;
    }
    else if(!emailId.includes('@') || ss==''){
        tdNode2.textContent="Please put valid email id";
        emailNode.style.border=border1;
        return false;
    }
    else{
        emailNode.style.border=border2;
        return true;
    }
}

function validateForm(){
    let st1=validate1(); 
    let st2=validate2();
    return st1 && st2;
}
// form validation


// Coloring contact paragraph with jquery

$(document).ready(function(){
    $('#contact p').css('color','rgb(252, 164, 0)');
});

// Coloring contact paragraph with jquery