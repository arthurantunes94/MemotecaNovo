import api from './api.js' //importa o scripts api.js

const ui = {
    async renderizarPensamentos(){
        try {
            const pensamentos = await api.buscarPensamentos() //Criei uma váriavel para guardar todo o response dos pensamentos
 
            //forEach para poder varrer todos os pensamentos do json e chama método que cria o elemento na tela
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

        const iconeEditar = document.createElement('img')
        iconeEditar.src = 'assets/imagens/icone-editar.png'
        iconeEditar.alt = 'Editar'
        btnEditar.appendChild(iconeEditar)
        divIcones.appendChild(btnEditar)

       

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
    }
} 

export default ui //Para possibilitar a importação de outras classes