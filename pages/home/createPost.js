import {createPost} from "../../scripts/api.js"
import { createNewPost, homeBody, renderFeed } from "./home.js"
import {renderUser} from "../home/user.js"

export function newPostModal() {
    createNewPost.addEventListener('click', event => {
        event.preventDefault()
        const darkBackground = document.createElement('div')
        const modalBox = document.createElement('div')
        const header = document.createElement('div')
        const closeModal = document.createElement('button')
        const edicao = document.createElement('h5')
        
        const titlediv = document.createElement('div')
        const labelTitle = document.createElement('p')
        const inputTitle = document.createElement('input')
        
        const contentDiv = document.createElement('div')
        const labelContent = document.createElement('p')
        const inputContent = document.createElement('textarea')
        
        const options = document.createElement('div')
        const cancelBtn = document.createElement('button')
        const saveBtn = document.createElement('button')
        
        darkBackground.classList.add("modal-dark-background")
        modalBox.classList.add("create-post-modal")
        header.classList.add("newpost-modal-header")
        closeModal.classList.add("close-modal")
        options.classList.add("new-post-options")
        cancelBtn.classList.add("new-post-btns")
        saveBtn.classList.add("new-post-btns", "submit-new-post")

        inputTitle.classList.add("new-post-title")
        inputContent.classList.add("new-post-content")

        edicao.innerText = "Edição"
        labelTitle.innerText = "Título do post"
        labelContent.innerText = "Conteúdo do post"

        closeModal.innerText = "X"
        cancelBtn.innerText = "Cancelar"
        saveBtn.innerText = "Salvar Alterações"
        
        
        header.append(edicao, closeModal)
        titlediv.append(labelTitle, inputTitle)
        contentDiv.append(labelContent, inputContent)
        options.append(cancelBtn, saveBtn)
        modalBox.append(header, titlediv, contentDiv, options)
        darkBackground.append(modalBox)
        homeBody.append(darkBackground)
             
        

        closeModal.addEventListener('click', (event) => {
            darkBackground.remove()
        } )
        cancelBtn.addEventListener('click', (event)=> {
            darkBackground.remove()
        })

        
        if (inputTitle.value == ''||inputContent.value == '') {
            saveBtn.disabled
        }
        saveBtn.addEventListener('click', async(event) => {
            if (inputTitle.value != ''&& inputContent.value != '') {                
                let dataCatcher = {
                    title: inputTitle.value,
                    content: inputContent.value
                }
                 await createPost(dataCatcher)
                 await renderFeed( await renderUser())
                 darkBackground.remove()
            }
        })
    })
}

