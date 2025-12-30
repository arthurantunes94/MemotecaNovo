import ui from './ui.js' //importa script ui.js
import api from './api.js'



//Cria evento para quando o DOM carregar
document.addEventListener('DOMContentLoaded', () =>{
    ui.renderizarPensamentos() //Chama o método de renderizar pensamentos da ui.js

    const formularioPensamento = document.getElementById("pensamento-form")
    const btnCancelarPensamento = document.getElementById("botao-cancelar")

    formularioPensamento.addEventListener('submit', inserirNovoPensamento)
    btnCancelarPensamento.addEventListener('click', ui.limparFormulario)
})

async function inserirNovoPensamento(event){
    event.preventDefault()
    
    const id = document.getElementById("pensamento-id").value
    const conteudo = document.getElementById("pensamento-conteudo").value
    const autoria = document.getElementById("pensamento-autoria").value

    try {
        await api.salvarPensamentos({ conteudo, autoria })
        ui.renderizarPensamentos()
    } catch (error) {
        alert("Erro ao salvar pensamento")
    }
}