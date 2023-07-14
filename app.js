const inputs = document.querySelectorAll('.form--input');
const form = document.querySelector('.form');

form.addEventListener('submit', event =>{
    event.preventDefault();
    inputs.forEach(input => {
    const curSpan = input.nextElementSibling;
    const curParent = input.parentElement;
    // console.log(input.name)
    // console.log(!input.value)
    if(!input.value && input.name !== 'email'){
        input.classList.add('error-img');
        curSpan.classList.remove('hidden');
        curParent.style.marginBottom = '7px';
    }
    else if(input.name === 'email' && !validateEmail(input.value)){
        curSpan.classList.remove('hidden');
        curParent.style.marginBottom = '7px';
        curSpan.textContent = 'Email cannot be empty';
        input.classList.add('error-img');
        if(input.value !==''){
            curSpan.textContent = 'Looks like this is not an email';
        }
    }
    else{
        curSpan.classList.add('hidden');
        input.classList.remove('error-img');
        input.parentElement.style.marginBottom = '24px';
    }    
    });
});
        
        
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }