import {createUser} from "/scripts/api.js"

const inputs = document.getElementsByTagName("input")
const form = document.querySelector(".register-form")
const rUser = document.querySelector("#register-user")
const rPasword = document.querySelector("#register-password")
const rEmail = document.querySelector("#register-email")
const rPhoto = document.querySelector("#register-photo")
const rBtn = document.querySelector(".register-btn")


async function registerFunc() {
    form.addEventListener('submit', async (event) => {
        event.preventDefault()
        rBtn.classList.add('spinner-loading')
        rBtn.classList.add('hidden-text')
        
        let infosCatcher = {
            username: rUser.value, 
            email: rEmail.value,
            password: rPasword.value,
            avatar: rPhoto.value,
        }
        console.log(rPhoto.value,rUser.value,rPasword.value,rEmail.value)
        console.log(await createUser(infosCatcher))
    })
}
registerFunc()

function testee(){
    const returnBtns = document.querySelectorAll(".back-to-login-btn")    

    returnBtns.forEach(element =>{
        element.addEventListener('click', (event)=>{
            event.preventDefault()
            window.location.href ="../../Login.html"
        })
    })
}
testee()