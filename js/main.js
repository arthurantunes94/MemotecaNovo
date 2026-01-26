import ui from './ui.js' //importa script ui.js
import api from './api.js'



//Cria evento para quando o DOM carregar
document.addEventListener('DOMContentLoaded', () =>{
    ui.renderizarPensamentos() //Chama o método de renderizar pensamentos da ui.js

    const formularioPensamento = document.getElementById("pensamento-form")
    const btnCancelarPensamento = document.getElementById("botao-cancelar")

    formularioPensamento.addEventListener('submit', inserirNovoPensamento) //Eventto de submit do formulario
    btnCancelarPensamento.addEventListener('click', ui.limparFormulario) //Evento de cancelar dados inserido nos inputs do formulario
})

//Método para inserir um novo pensamento pegando os dados do formulario
async function inserirNovoPensamento(event){
    event.preventDefault() //Tira o comportamento default do submit
    
    const id = document.getElementById("pensamento-id").value //Guarda o valor do id
    const conteudo = document.getElementById("pensamento-conteudo").value //Guarda o valor do conteudo
    const autoria = document.getElementById("pensamento-autoria").value //Guarda o valor da autoria

    try {
        if (id) {
            await api.editarPensamento({id,  conteudo, autoria }) //Edita o pensamento existente
        } else {
            await api.salvarPensamentos({ conteudo, autoria }) //Salva o conteudo e autoria no json, não precisa passar o id pois ele cria um aleatorio. Faz POST
        }
        ui.renderizarPensamentos() //Renderiza os pensamentos após o salvamento dos dados no json
    } catch (error) {
        alert("Erro ao salvar pensamento")
    }
}