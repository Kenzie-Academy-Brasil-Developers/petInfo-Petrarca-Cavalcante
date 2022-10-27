import { createUser } from "/scripts/api.js"
import {errorPlace} from "./cadastro.js"

export async function errorDisplay(param){
    errorPlace.innerText = ""
    const text = document.createElement("p")
    text.innerText = "Algum dado já foi usado"
    errorPlace.append(text)
}

// window.location.replace("../../Login.html")