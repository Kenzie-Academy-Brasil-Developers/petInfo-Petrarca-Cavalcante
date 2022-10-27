import {homeBody} from "./home.js"

export async function openThePost(post) {
    const darkBackground = document.createElement('div')
    const modalBox = document.createElement('div')
    
    const header = document.createElement('div')
    const userDiv = document.createElement('div')
    const closeModal = document.createElement('button')
    
    const userFigure = document.createElement('figure')
    const userPicture = document.createElement('img')
    const user = document.createElement('h4')
    const separator = document.createElement('span')
    const date = document.createElement('p')

    const main = document.createElement('div')
    const titlediv = document.createElement('div')
    const title = document.createElement('h3')
    
    const contentDiv = document.createElement('div')
    const content = document.createElement('p')
    
    darkBackground.classList.add("modal-dark-background")
    modalBox.classList.add("create-post-modal")
    header.classList.add("newpost-modal-header")
    userDiv.classList.add("open-post-modal")
    closeModal.classList.add("close-modal")
    main.classList.add("open-post-main")
    userFigure.classList.add("open-post-user-fig")

    closeModal.innerText = "X"

    userPicture.src = post.user.avatar
    user.innerText = post.user.username
    separator.innerText = "|"
    date.innerText = post.createdAt

    title.innerText = post.title
    content.innerText = post.content


    userFigure.append(userPicture)
    titlediv.append(title)
    contentDiv.append(content)
    userDiv.append(userFigure, user, separator, date)
    header.append(userDiv, closeModal)
    main.append(titlediv, contentDiv)
    modalBox.append(header, main)
    darkBackground.append(modalBox)
    homeBody.append(darkBackground)

    closeModal.addEventListener('click', (event)=> {
        event.preventDefault()
        darkBackground.remove()
    })
}