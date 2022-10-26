import {deletePost} from "../../scripts/api.js"
import {renderFeed, homeBody} from "./home.js"
import { renderUser } from "./user.js"

export function removePostFunc(postId) {
    const darkBackground = document.createElement('div')
    const modalBox = document.createElement('div')
    
    const header = document.createElement('div')
    const excludeConfirm = document.createElement('p')
    const closeModal = document.createElement('button')
    
    const main = document.createElement('div')
    const title = document.createElement('h5')
    const content = document.createElement('p')
        
    const options = document.createElement('div')
    const abort = document.createElement('button')
    const confirm = document.createElement('button')

    darkBackground.classList.add("modal-dark-background")
    modalBox.classList.add("create-post-modal")
    header.classList.add("newpost-modal-header")
    main.classList.add("modal-main")
    options.classList.add("exclude-post-options")
    closeModal.classList.add("close-modal")
    abort.classList.add("exclude-btns")
    confirm.classList.add("exclude-btns", "confirm-exclusion")

    closeModal.innerText = "X"
    excludeConfirm.innerText = "Confirmação de exclusão"
    title.innerText = "Tem certeza de que deseja excluir este post?"
    content.innerText = "Essa ação não poderá ser desfeita, então pedimos que tenha cautela antes de concluir"
    abort.innerText = "Cancelar"
    confirm.innerText = "Sim, excluir este post"

    header.append(excludeConfirm, closeModal)
    main.append(title, content)
    options.append(abort, confirm)
    modalBox.append(header, main, options)
    darkBackground.append(modalBox)
    homeBody.append(darkBackground)

    confirm.addEventListener('click', async(event)=> {
    event.preventDefault()
    darkBackground.remove()
    await deletePost(postId)
    await renderFeed( await renderUser())
   })
   abort.addEventListener('click', async(event) => {
    event.preventDefault()
    await renderFeed( await renderUser())
    darkBackground.remove()
    })  
    closeModal.addEventListener('click', async(event) => {
       event.preventDefault()
       await renderFeed( await renderUser())
        darkBackground.remove()
    })
}