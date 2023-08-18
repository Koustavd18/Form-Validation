let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let emptyfieldMessage = document.querySelectorAll(".empty-field");
let showPasswordBtn = document.querySelector(".btn");
let fnFlag, lnFlag, eFlag, pwdFlag;
let firstName, lastName, email, password;
let fnTarget, lnTarget, emailTarget, pwdTarget;
let field;

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

fnFlag = false;
lnFlag = false;
eFlag = false;
pwdFlag = false;

for(let errorMessage of errorMessages) {
    errorMessage.classList.add("d-none")
}

for(let element of emptyfieldMessage) {
    element.classList.add("d-none")
}

formData.addEventListener("keyup", (event) => {
    event.preventDefault();
    field = event.target.dataset.key;
    switch(field){
        case "firstName":
            firstName = event.target.value;
            fnTarget = event.target;
            break;
        case "lastName" :
            lastName = event.target.value;
            lnTarget = event.target;
            break;
        case "email":
            email = event.target.value;
            emailTarget = event.target;
            break;
        case "password":
            password = event.target.value;
            pwdTarget = event.target;;
            break; 
        default:
            firstName = lastName = email = password = "";
            break;
    }
    
});

submitButton.addEventListener("click", (event) =>{
    event.preventDefault();
    console.log(firstName, lastName, email, password); 
    if (firstName){
        emptyfieldMessage[0].classList.add("d-none");
        fnTarget.classList.remove("error");
        if(!nameRegex.test(firstName)){
            errorMessages[0].classList.remove("d-none");
            fnTarget.classList.add("error");
            fnFlag = false;
            
        }else{
            errorMessages[0].classList.add("d-none");
            fnTarget.classList.remove("error");
            fnFlag = true;
            
        }
    }else{
        emptyfieldMessage[0].classList.remove("d-none");
        fnTarget.classList.add("error")
    }

    if (lastName){
        emptyfieldMessage[1].classList.add("d-none");
        lnTarget.classList.remove("error");
        if(!nameRegex.test(lastName)){
            errorMessages[1].classList.remove("d-none");
            lnTarget.classList.add("error");
            lnFlag = false;
            
        }else{
            errorMessages[1].classList.add("d-none");
            lnTarget.classList.remove("error");
            lnFlag = true;
            
        }
    }else{
        emptyfieldMessage[1].classList.remove("d-none");
        lnTarget.classList.add("error");
    }

    if(email){
        emailTarget.classList.remove("error");
        emptyfieldMessage[2].classList.add("d-none");
        if(!emailRegex.test(email)){
            errorMessages[2].classList.remove("d-none");
            emailTarget.classList.add("error");
            eFlag = false;
            
        }else{
            errorMessages[2].classList.add("d-none");
            emailTarget.classList.remove("error");
            eFlag = true;
           
        }
    }else{
        emptyfieldMessage[2].classList.remove("d-none");
        emailTarget.classList.add("error");
    }

    if(password){
        pwdTarget.classList.remove("error");
        emptyfieldMessage[3].classList.add("d-none");
        if(!passwordRegex.test(password)){
            errorMessages[3].classList.remove("d-none");
            pwdTarget.classList.add("error");
            pwdFlag = false;
        }else{
            errorMessages[3].classList.add("d-none");
            pwdTarget.classList.remove("error");
            pwdFlag = true;
        }
    }else{
        emptyfieldMessage[3].classList.remove("d-none");
        pwdTarget.classList.add("error");
    }
    if(fnFlag && lnFlag && eFlag && pwdFlag) {
    fnTarget.value = lnTarget.value = emailTarget.value =pwdTarget.value = "";
    window.location.href = "./success.html";
    }
});

showPasswordBtn.addEventListener("click", (event) => {
    event.preventDefault();
   if(pwdTarget.getAttribute("type") === "text"){
        pwdTarget.setAttribute("type", "password");
    } else{
        pwdTarget.setAttribute("type", "text");
        
    }
});