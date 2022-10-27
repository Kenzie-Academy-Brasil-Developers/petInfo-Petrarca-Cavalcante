import { createUser } from "/scripts/api.js"
import {errorDisplay} from "./errorAdvice.js"

export const errorPlace = document.querySelector('.error-advice')
const inputs = document.getElementsByTagName("input")
const form = document.querySelector(".register-form")
const rUser = document.querySelector("#register-user")
const rPasword = document.querySelector("#register-password")
const rEmail = document.querySelector("#register-email")
const rPhoto = document.querySelector("#register-photo")
const rBtn = document.querySelector(".register-btn")



async function registerFunc() {
    if (rUser.value == "" || rPasword.value == "" || rEmail.value == "" || rPhoto.value == "") {
        rBtn.disabled
    }

    rBtn.addEventListener('click', async (event) => {
        event.preventDefault()
        rBtn.classList.add('spinner-loading')
        rBtn.classList.add('hidden-text')

        if (rUser.value != "" || rPasword.value != "" || rEmail.value != "" || rPhoto.value != ""){
        let infosCatcher = {
            username: rUser.value,
            email: rEmail.value,
            password: rPasword.value,
            avatar: rPhoto.value,
        }
        let result = await createUser(infosCatcher)
        console.log(result)
        
      
        }
    })

}
registerFunc()

function testee() {
    const returnBtns = document.querySelectorAll(".back-to-login-btn")

    returnBtns.forEach(element => {
        element.addEventListener('click', (event) => {
            event.preventDefault()
            window.location.replace = "../../index.html"
        })
    })
}
testee()