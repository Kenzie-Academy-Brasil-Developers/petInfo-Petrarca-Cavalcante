import {getPosts} from "../../scripts/api.js"
import {renderUser} from "../home/user.js"
import {newPostModal} from "./createPost.js"
import {removePostFunc} from "./deletePost.js"
import {editPost} from "./editPost.js"
import {openThePost} from "./openPost.js"


const profileImg =document.querySelector(".user-picture") 
const feed = document.querySelector(".posts-feed")
export const profilePlace = document.querySelector(".user-picture")
export const createNewPost = document.querySelector(".create-post")
export const homeBody = document.querySelector("body")


export async function renderFeed(user) {
    feed.innerText = ""
    let posts =  await getPosts()
    posts.forEach(element => {   
        const postBox = document.createElement('li')
        const header = document.createElement('div')

        const details = document.createElement('div')
        const userBox = document.createElement('div')
        const imgFig = document.createElement('figure')
        const userImg = document.createElement('img')
        const username = document.createElement('h4')
    
        const postDate = document.createElement('p')

        const editBtns = document.createElement('div')
        const editBtn = document.createElement('button')
        const excludeBtn = document.createElement('button')
        
        const contentBox = document.createElement('div')
        const postTitle = document.createElement('h3')
        const postContent = document.createElement('p')
        const openPost = document.createElement('button')

        postBox.classList.add('post-card')
        header.classList.add('post-header')
        details.classList.add('user-and-date')
        userBox.classList.add('user-box')
        contentBox.classList.add('post-content')

        editBtns.classList.add("edit-buttons")

        imgFig.classList.add('avatar-figure')

        userImg.src = element.avatar || "/src/noprofile.jpg"
        username.innerText = element.user.username

        

        const option = {
            year: 'numeric',
            month: ('long' || 'short' || 'numeric'),
            weekday: ('long' || 'short'),
            day: 'numeric'
        }
        const locale = 'pt-br'
        const formatDate = new Date().toLocaleDateString( locale, option)
       
        postDate.innerText = formatDate[0].toUpperCase() + formatDate.slice(1)

        editBtn.innerText = "Editar"
        excludeBtn.innerText = "Excluir"

        postTitle.innerText = element.title
        

        postContent.innerText = element.content
        openPost.innerText = "Acessar publicação"

        
        header.append(details,editBtns)
        details.append(userBox, postDate)
        imgFig.append(userImg)
        userBox.append(imgFig, username)
        editBtns.append(editBtn, excludeBtn)
        contentBox.append(postTitle, postContent, openPost)
        postBox.append(header, contentBox)
        
        feed.append(postBox)

        if (element.user.username != user) {
            editBtns.remove()
        }

        editBtn.addEventListener('click', async(event) => {
            event.preventDefault()
            await editPost(element.id, element.title, element.content)
            await renderFeed(await renderUser())
        })

        excludeBtn.addEventListener('click',async(event) => {
           event.preventDefault()
            await removePostFunc(element.id)
            await renderFeed(await renderUser())
        })

        openPost.addEventListener('click', async (event)=> {
            event.preventDefault()
            await openThePost(element)
        })
    })
    
}
await renderFeed( await renderUser())
await newPostModal()

