import {userProfile} from "../../scripts/api.js"
import {profilePlace} from "./home.js"

export async function renderUser() {
    let user = await userProfile()
    let username = user.username
    const userPhoto = document.createElement('img')
    userPhoto.classList.add('logged-user-photo')
    userPhoto.src = user.avatar
    profilePlace.append(userPhoto)
    return username
}
