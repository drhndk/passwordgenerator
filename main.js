const btnCopy = document.querySelector('.fa-copy')
const span = document.querySelector('span')
const btn = document.querySelector('button')
const input = document.querySelector('.input')
const alertGenerate = document.querySelector('.alert-generate')

btnCopy.addEventListener('mouseover', () => {
    span.innerHTML = 'copied?'

    if(input.value == ""){
        span.classList.remove('copy-active');
        alertGenerate.style.display = 'none';
    }else span.classList.add('copy-active');

})
btnCopy.addEventListener('mouseout', () => {
    span.classList.remove('copy-active');
})

btnCopy.addEventListener('click', () => {
    setTimeout(() => {
        if(input.value) {
            alertGenerate.style.display = 'flex'
        }
    }, 1000);
    span.innerHTML = '👌'        
    alertGenerate.classList.add('active')    
    setTimeout(() => {
        alertGenerate.classList.remove('active') 
    }, 1000);
    copyPassword()
})

btn.addEventListener('click',() => {
    createPassword()
})

function createPassword() {
    const chark = "0123456789abcdefghijklmnopqrstuvwxyz[]!$%^&*()?ABCDEFGHIJKLMNOPQRSTU";
    const passwordNum = 14;
    let password = "";
    for (let i = 0; i < passwordNum;i++) {
        password += chark[randomNum()]
        // const randomNum = Math.floor(Math.random()*chark.length);
        // password += chark.substring(randomNum,randomNum + 1);
        // console.log(passwordNum,password);
    }
    function randomNum() {
        return Math.floor(Math.random()*chark.length);
    }
    input.value = password
    alertGenerate.innerHTML = password + ' copied'    
}

 function copyPassword() {
    input.select()
    input.setSelectionRange(0,9999)
    navigator.clipboard.writeText(input.value)
 }

