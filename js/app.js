const successMessage = document.getElementById('succes-message');
const failureMessage = document.getElementById('failure-message');

const emailInput = document.getElementById('email-input');
const passInput = document.getElementById('password-input');
const toast =document.getElementById('toast');

const validatingEmailAndPass = () =>{
    
    successMessage.classList.add('d-none')
    failureMessage.classList.add('d-none')

    const emailValue = emailInput.value;
    const passValue = passInput.value;

    if(!emailValue && !passValue){
        failureMessage.innerText = "Email or Password Can't be empty."
        failureMessage.classList.remove('d-none')
        return
    }

    if(!cheakValidEmail(emailValue) || !cheakValidPass(passValue)){

        return
    }

    
    failureMessage.classList.add('d-none')
    successMessage.classList.remove('d-none')
    

}

const cheakValidEmail = (email) =>{
    const regEx =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!( regEx).test(email)){
        failureMessage.classList.remove('d-none');
        failureMessage.innerText='Invalid email';
        return false;
    }
    return true;

}
const cheakValidPass = (pass) =>{
    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    if(!(regEx).test(pass)){
        failureMessage.classList.remove('d-none');
        failureMessage.innerText='Invalid password';
        return false;
    }
    return true;
}


passInput.addEventListener('focus', ()=>{
    
    toast.classList.add('show')
})

passInput.addEventListener('focusout', ()=>{
    
    toast.classList.remove('show')
})
