const myHeaders = {
    "Content-Type": "application Json"
}

const ul = document.querySelector(".cards")
const header = document.querySelector(".header__usuarios")
const local = JSON.parse(localStorage.getItem("banco"))

async function reposUsuario() {

    const data = await fetch(`${local.repos_url}`, {
            method: "GET",
            header: myHeaders
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            return res
        })

    renderRepositorios(data)

    return data
}
reposUsuario()


function renderUsuario(array) {

    const divinfos = document.createElement("div")
    const imgUsuario = document.createElement("img")
    const h3Nome = document.createElement("h3")
    const pBio = document.createElement("p")
    const divBtns = document.createElement("div")
    const btnEmail = document.createElement("button")
    const btnTroca = document.createElement("button")


    divinfos.classList.add("infos__usuarios")
    imgUsuario.src = array.avatar_url

    h3Nome.innerText = array.name
    pBio.innerText = array.bio

    divBtns.classList.add("btns__usuarios")

    btnEmail.id = "btnEmail"
    btnTroca.id = "voltar"
    btnEmail.innerText = "Email"
    btnTroca.innerText = " trocar de usuario"

    divinfos.append(imgUsuario, h3Nome, pBio)
    divBtns.append(btnEmail, btnTroca)

    header.append(divinfos, divBtns)

}
renderUsuario(local)


function renderRepositorios(user) {
    user.forEach((element) => {
        const liRepositorio = document.createElement("li")
        const h3Titulo = document.createElement("h3")
        const pDescricao = document.createElement("p")
        const divBtns = document.createElement("div")
        const btnRepo = document.createElement("button")
        const ancora = document.createElement("a")
        const btnDemo = document.createElement("button")

        liRepositorio.classList.add("lista__cards")
        liRepositorio.id = element.id

        h3Titulo.innerText = element.name

        pDescricao.innerText = element.description

        divBtns.classList.add("btns__cards")

        btnRepo.id = "btnRepositorio"
        ancora.innerText = "Repositorio"
        btnDemo.innerText = "Demo"
        ancora.href = element.owner.html_url

        btnRepo.appendChild(ancora)
        divBtns.append(btnRepo, btnDemo)



        liRepositorio.append(h3Titulo, pDescricao, divBtns)
        ul.append(liRepositorio)

        return liRepositorio

    });

}

function trocarUsuario() {
    const btnTroca = document.getElementById("voltar")
    btnTroca.addEventListener("click", () => {
        window.location.replace("../../../index.html")
        localStorage.remove()
    })
}
trocarUsuario()