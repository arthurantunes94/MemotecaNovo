import api from './api.js' //importa o scripts api.js

const ui = {
    async renderizarPensamentos(){
        const listaPensamentos = document.querySelector('#lista-pensamentos') //guarda elemento de listaPensamentos

        try {
            const pensamentos = await api.buscarPensamentos() //Criei uma váriavel para guardar todo o response dos pensamentos
 
            //forEach para poder varrer todos os pensamentos do json
            pensamentos.forEach(pensamento => { 
                //Criar elementos para cada pensamento com a formatação ja realizada devido as classes que estão colocadas no innerHTML
                listaPensamentos.innerHTML += `
                    <li class="li-pensamento" data-id="${pensamento.id}">
                    <img src="assets/imagens/aspas-azuis.png" alt="Aspas azuis" class="icone-aspas">
                    <div class="pensamento-conteudo">${pensamento.conteudo}</div>
                    <div class="pensamento-autoria">${pensamento.autoria}</div>
                    </li>
                `    
            });

        } catch (error) {
            alert('Erro ao renderizar o pensamento') //Caso não consiga realizar o que está dentro do try, da esse alert
        }
    }
}

export default ui //Para possibilitar a importação de outras classes