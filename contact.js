var nameError = document.getElementById('name-error'); 
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error'); 
var projectError = document.getElementById('project-error'); 
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');


function validateName(){
 var name = document.getElementById('contact-name').value;


if (name.length == 0){
    nameError.innerHTML = 'Name is required';
    return false;
}
if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'write full name ';
    return false;  
}
nameError.innerHTML = 'ok ';
return true;
}
function validatePhone(){
    var phone = document.getElementById('contact-phone');

    if (phone.length == 0){
         phoneError.innerHTML =' phone no is required';
         return  false;
    }
    
    if (phone.length !== 10){
        phoneError.innerHTML = 'please put 10 digit';
        return  false;
    }
    
    if (!phone.value.match(/^0-9{10}$/)){
        phoneError.innerHTML ='only digits please';
        return  false;
    }
 phoneError.innerHTML="ok"
 return true;
}
function validateEmail(){
    var email = document.getElementById('contact-email');
    
     if (email.length == 0){
 emailError.innerHTML = 'email is required'
   return false; 
     }
  if (!email.value.match( /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/)){
      emailError.innerHTML = 'email is invalid'
      return false;
  }  
  emailError.innerHTML='ok'
  return true;
}

function validateProject() {
    var project = document.getElementById('contact-project');
    
    if (project.length == 0){
        projectError.innerHTMLL = 'project name  is required'
   return false;
    }
    projectError.innerHTML = 'ok'
    return true;
}
function validateMessage(){
    var message  = document.getElementById('contact-message');

      if (message.length <= 30) {
          messageError.innerHTML = message.length + ' more characters are required';
           return false;
      }
      emailError.innerHTML = 'ok';
      return true;
}
function validateForm(){
    if (!validateName() || !validatePhone() || !validateEmail() || !validateProject() || validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'please fix error to continue';
        setTimeout(function () { submitError.style.display = 'none'; }, 3000);
        return false
    }
    submitError.innerHTML = 'true';
    return true;
}