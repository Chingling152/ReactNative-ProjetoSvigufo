export const ApiRequest = (endpoint) =>{
    const baseURL = "http://192.168.15.4:5000/api/v2/"
    return {
        Listar(){
            return fetch(baseURL + endpoint,
                {
                    method:'GET',
                    headers:{
                        'Content-Type':'application/json'
                    }
                }
            )
        },
        Listar(token){
            return fetch(baseURL + endpoint,
                {
                    method:'GET',
                    headers:{
                        'Content-Type':'application/json',
                        "Authorization": "Bearer " + token
                    }
                }
            )
        },
        Cadastrar(corpo){
            return fetch(baseURL + endpoint,
                {
                    method:'POST',
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify(corpo)
                }
            )
        },
        Cadastrar(corpo,token){
            return fetch(baseURL + endpoint,
                {
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                        "Authorization": "Bearer " + token
                    },
                    body: JSON.stringify(corpo)
                }
            )
        },
        Alterar(token){
            return fetch(baseURL + endpoint,
                {
                    method:'PUT',
                    headers:{
                        'Content-Type':'application/json',
                        "Authorization": "Bearer " + token
                    },
                    body: JSON.stringify(corpo)
                }
            )
        }
    }
}