'use strict'
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

//message
const message = function (input) {
    var errorMessage = input.id.replace(/-p/, ' P');
    return errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
  }
//Error msg
const showError=function(input,message)
{
    const parent=input.parentElement;
    parent.className="form-control error";
    const small=parent.querySelector("small");
    small.innerText=message;
}
//success messsage
const success=function(input){
const parent=input.parentElement;
parent.className='form-control success'
}
//checklength
const checkLength=function (input,min,max)
{
    console.log("Entered checkLength function")
    if(input.value.length<min)
    {
        showError(input,`The ${message(input)} should be more than ${min} characters`);      
    }
    else if (input.value.length>max)
    {
        showError(input,`The ${message(input)} should be less than ${max} characters`);
       
    }
    else{
        success(input);
    }
}
//validateEmail
const isValidEmail = function (input) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(input).toLowerCase());
  };
//check email
const checkEmail = function (input) {
    if (input.value != "")
    {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (re.test(String(input.value).toLowerCase().trim())) {
      success(input);
    } else {
      showError(input, 'Email is not valid');
    }
    }
  };
//match password
const matchPassword=function(input1,input2)
{
if (input1.value === input2.value)
    {
        success(input1);
        success(input2)
    }
else if(input1.value != "" && input2.value != "")
    {
        showError(input2,"Passwords didn't match")
        
    }
}

form.addEventListener("submit",(e)=>{
e.preventDefault();
checkLength(username,3,10);
isValidEmail(email)
checkEmail(email);
checkLength(password,5,12);
matchPassword(password,confirmPassword);

})