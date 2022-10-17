const myHeaders = {
    "Content-Type": "application Json"
}

function usersApi(user) {
    const data = fetch(`https://api.github.com/users/${user}`, {
            method: "GET",
            header: myHeaders
        })
        .then(res => res.json())
        .then(res => {
           window.location.replace("./src/pages/home/home.html")
            return res
        })
    return data
}


function buscarUsuario() {
    const form = document.querySelector(".secao__form")
    const input = document.querySelector(".procuraUsuario")

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        const inputValue = input.value
        const resp = usersApi(inputValue)
        const respJson = JSON.stringify(resp)
        if (!resp.message) {
            localStorage.setItem("banco", respJson)
        }
    })
}
buscarUsuario()


function desabilitarBotao() {
    const inputUsuario = document.getElementById("inputUsuario").value
   
    if (inputUsuario) {
        document.getElementById("btnUsuario").disabled = false;
        return 
    }else{
        document.getElementById("btnUsuario").disabled = true;
    }
}
desabilitarBotao()


function spinner(){
    const btnCarregar = document.getElementById("btnUsuario")
  
    btnCarregar.addEventListener("click", ()=>{
      
        btnCarregar.innerHTML= ""
      
        const imgSpinner = document.createElement("img")
        imgSpinner.src= "./src/assets/spinner.png"
        imgSpinner.alt = "imagem spinner"
        imgSpinner.classList.add("carregando")

        btnCarregar.appendChild(imgSpinner)
    })
}
spinner()



