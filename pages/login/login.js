import {login} from "/scripts/api.js"
 
const createAccBtn = document.querySelector(".create-account-btn")
const loginForm = document.querySelector(".login-form")
const lEmail = document.querySelector("#email-login")
const lPassword = document.querySelector("#password-login")
const lBtn = document.querySelector(".login-btn")

function goRegister (){
    createAccBtn.addEventListener('click', (event)=> {
        event.preventDefault()
        window.location.assign('./pages/cadastro/cadastro.html')
    })
}
goRegister()

async function loginFunc() {
    lBtn.addEventListener('click', async (event) => {
        event.preventDefault()
        
        
        if(lEmail.value != ''|| lPassword.value != ''){
            lBtn.classList.add('spinner-load')
            lBtn.classList.add('hidden-text')
            let infosCatcher = {
                email: lEmail.value,
                password: lPassword.value,
            }
            const test = await login(infosCatcher)
        }
        

    })
}
loginFunc()

function modalGen(message, type) {
    const errorBox = document.querySelector('.error-advice')
    errorBox.innerText = ""
    const modalBox = document.createElement('div')
    const title = document.createElement("h6")
    const msg = document.createElement("p")


        title.innerText = "Error" 
        msg.innerText = message
    console.log(title,msg)
        modalBox.append(title, msg)
        errorBox.append(modalBox)
}