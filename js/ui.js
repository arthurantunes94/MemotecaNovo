import api from './api.js' //importa o scripts api.js

const ui = {
    async renderizarPensamentos(){
        const listaPensamentos = document.querySelector('#lista-pensamentos')
        listaPensamentos.innerHTML = '' //Limpa a lista antes de adicionar novos pensamentos
        const pensamentoVazio = document.getElementById('pensamento-vazio')  

        try {
        const pensamentos = await api.buscarPensamentos() //Criei uma váriavel para guardar todo o response dos pensamentos
        if (pensamentos.length === 0){
            pensamentoVazio.style.display = 'flex' //Mostra a mensagem de nenhum pensamento caso o array esteja vazio
            return
        }
        //forEach para poder varrer todos os pensamentos do json e chama método que cria o elemento na tela
        pensamentoVazio.style.display = 'none' //Esconde a mensagem de nenhum pensamento caso o array tenha pensamentos
        pensamentos.forEach(ui.adicionarPensamento)
        } catch (error) {
        alert('Erro ao renderizar o pensamento') //Caso não consiga realizar o que está dentro do try, da esse alert
        } 
    },

    //cria elementos dos pensamentos na tela 
    adicionarPensamento(pensamento){
        const listaPensamentos = document.querySelector('#lista-pensamentos')
        
        const li = document.createElement('li')
        li.setAttribute('data-id', pensamento.id)
        li.classList.add('li-pensamento')

        const imgAspas = document.createElement('img')
        imgAspas.src = 'assets/imagens/aspas-azuis.png'
        imgAspas.alt = 'Aspas azuis'
        imgAspas.classList.add('icone-aspas')

        const divPensamentoConteudo = document.createElement('div')
        divPensamentoConteudo.textContent = pensamento.conteudo
        divPensamentoConteudo.classList.add('pensamento-conteudo')
        
        const divPensamentoAutoria = document.createElement('div')
        divPensamentoAutoria.textContent = pensamento.autoria
        divPensamentoAutoria.classList.add('pensamento-autoria')

        const divIcones = document.createElement('div')
        divIcones.classList.add('icones')

        const btnEditar = document.createElement('button')
        btnEditar.classList.add('botao-editar')
        btnEditar.onclick = () => ui.editarPensamento(pensamento.id)

        const btnExcluir = document.createElement('button')
        btnExcluir.classList.add('botao-excluir')
        btnExcluir.onclick = () => ui.excluirPensamento(pensamento)

        const iconeEditar = document.createElement('img')
        iconeEditar.src = 'assets/imagens/icone-editar.png'
        iconeEditar.alt = 'Editar'
        btnEditar.appendChild(iconeEditar)

        const iconeExcluir = document.createElement('img')
        iconeExcluir.src = 'assets/imagens/icone-excluir.png'
        iconeExcluir.alt = 'Excluir'
        btnExcluir.appendChild(iconeExcluir)
        
        divIcones.appendChild(btnEditar)
        divIcones.appendChild(btnExcluir)

       

        li.appendChild(imgAspas)
        li.appendChild(divPensamentoConteudo)
        li.appendChild(divPensamentoAutoria)
        li.appendChild(divIcones)

        listaPensamentos.appendChild(li)
    },

    limparFormulario(){
        document.getElementById("pensamento-form").reset() //Limpa os dados que estão preenchidos nos formularios
    },

    async editarPensamento(pensamentoId) {
        const pensamento = await api.buscarPensamento(pensamentoId)
        document.getElementById("pensamento-id").value = pensamento.id
        document.getElementById("pensamento-conteudo").value = pensamento.conteudo
        document.getElementById("pensamento-autoria").value = pensamento.autoria
    },

    async excluirPensamento(pensamento) {
        try{
            await api.excluirPensamento(pensamento.id)
            ui.renderizarPensamentos()
        } catch (error) {
            alert('Erro ao excluir pensamento')
        }
    }
} 

export default ui //Para possibilitar a importação de outras classes