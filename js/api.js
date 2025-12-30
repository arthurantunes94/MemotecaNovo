const api = {
    async buscarPensamentos(){
        try {
            const response = await fetch('http://localhost:3000/pensamentos') //variavel com a resposta da API, onde é necessário passar o endereço 
            return await response.json() //Retorno da API
        } catch (error){
            alert('Erro ao buscar pensamentos') //Caso de erro, retorna alerta  
            throw error
        }
    }
}

export default api //Para possibilitar a importação por outras classes