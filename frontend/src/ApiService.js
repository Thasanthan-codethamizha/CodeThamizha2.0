const BASE_URL="http://127.0.0.1:8000"

export default class APIService {
    static LoginUser(body){
        return fetch(`${BASE_URL}/auth/`,{

            method:'POST',
            headers:{
                'Content-Type':'application/json',
              },
            body:JSON.stringify(body)
        }).then(resp=>resp.json())
    }

    static RegisterUser(body){
        return fetch(`${BASE_URL}/api/users/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
              },
            body:JSON.stringify(body)
        }).then(resp=>resp.json())
    }
    
    

}