const baseUrl = "http://localhost:3333/"

export async function createUser(data) {
    const urlCreate = `${baseUrl}users/create`

    let response = await fetch(urlCreate, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
        .then(res => res.json())
        .then(res => {
            return res
        })
        .catch(err => console.error(err))

    return response
}


export async function login(data) {
    const urlCreate = `${baseUrl}login`

    let response = await fetch(urlCreate, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
        .then(res => res.json())
        .then(res => {

            localStorage.setItem("token", JSON.stringify(res.token))
            window.location.assign("./pages/home/home.html")

            return res
        })
        .catch(err => {
            console.error(err)
            const pokemon = {
                tipo: "Error",
                msg: err.message,
            } 
            return pokemon
        })

    return response
}

export async function userProfile() {
    const urlCreate = `${baseUrl}users/profile`
    const token = JSON.parse(localStorage.getItem("token"))

    let response = await fetch(urlCreate, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
        .then(res => res.json())
        .then(res => {

            return res
        })
        .catch(err => console.error(err))

   return response
}
userProfile()
async function updateUser(data) {
    const urlCreate = `${baseUrl}users/profile`
    const token = JSON.parse(localStorage.getItem("token"))

    let response = await fetch(urlCreate, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.error(err))

    return response
}

async function deleteUser() {
    const urlCreate = `${baseUrl}users/profile`
    const token = JSON.parse(localStorage.getItem("token"))

    let response = await fetch(urlCreate, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.error(err))

    return response
}

export async function getPosts() {
    const urlCreate = `${baseUrl}posts`
    const token = JSON.parse(localStorage.getItem("token"))

    let response = await fetch(urlCreate, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.error(err))

    return response
}

export async function createPost(data) {
    const urlCreate = `${baseUrl}posts/create`
    const token = JSON.parse(localStorage.getItem("token"))

    let response = await fetch(urlCreate, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.error(err))

    return response
}

export async function updatePost(data, id) {
    const urlCreate = `${baseUrl}posts/${id}`
    const token = JSON.parse(localStorage.getItem("token"))

    let response = await fetch(urlCreate, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.error(err))

    return response
}

export async function deletePost(id) {
    const urlCreate = `${baseUrl}posts/${id}`
    const token = JSON.parse(localStorage.getItem("token"))

    let response = await fetch(urlCreate, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.error(err))

    return response
}

