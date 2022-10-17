const myHeaders = {
    "Content-Type": "application Json"
}


function trocarUsuario() {
    const btnTrocaUsuario = document.getElementById("voltar")
    btnTrocaUsuario.addEventListener("click", () => {
        window.location.replace("../../../index.html")
        localStorage.remove()
    })
}
trocarUsuario()