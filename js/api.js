const URL_BASE = 'http://localhost:3000' //Constante para armazenar o endereço base da API

const api = {
    async buscarPensamentos(){
        try {
            const response = await fetch(`${URL_BASE}/pensamentos`) //variavel com a resposta da API, onde é necessário passar o endereço 
            return await response.json() //Retorno da API
        } catch (error){
            alert('Erro ao buscar pensamentos') //Caso de erro, retorna alerta  
            throw error
        }
    },

    async salvarPensamentos(pensamento){
        try {
            const response = await fetch(`${URL_BASE}/pensamentos`, {
               method: "POST",
               headers: {
                "Content-Type": "application/json"
               },
               body: JSON.stringify(pensamento)
            }) //variavel que seta que o método é referente a um POST
            return await response.json() //Retorno da API
        } catch (error){
            alert('Erro ao salvar pensamentos') //Caso de erro, retorna alerta  
            throw error
        }
    },

    async buscarPensamento(id){
        try {
            const response = await fetch(`${URL_BASE}/pensamentos/${id}`) //variavel com a resposta da API, onde é necessário passar o endereço 
            return await response.json() //Retorno da API
        } catch (error){
            alert('Erro ao buscar pensamento') //Caso de erro, retorna alerta  
            throw error
        }
    },

    async editarPensamento(pensamento){
        try {
            const response = await fetch(`${URL_BASE}/pensamentos/${pensamento.id}`, {
               method: "PUT",
               headers: {
                "Content-Type": "application/json"
               },
               body: JSON.stringify(pensamento)
            }) //variavel que seta que o método é referente a um PUT
            return await response.json() //Retorno da API
        } catch (error){
            alert('Erro ao editar pensamento') //Caso de erro, retorna alerta  
            throw error
        }
    },

    async excluirPensamento(id){
        try {
            const response = await fetch(`${URL_BASE}/pensamentos/${id}`, {
               method: "DELETE",
            }) //variavel que seta que o método é referente a um DELETE
        } catch (error){
            alert('Erro ao excluir pensamento') //Caso de erro, retorna alerta  
            throw error
        }
    }
}

export default api //Para possibilitar a importação por outras classes