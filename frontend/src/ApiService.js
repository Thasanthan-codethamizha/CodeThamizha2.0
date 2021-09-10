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
        return fetch(`${BASE_URL}/data/users/create/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
              },
            body:JSON.stringify(body)
        }).then(resp=>resp.json())
    }
    static UpdateUser(token,body,username){
        return fetch(`${BASE_URL}/data/users/${username}/edit/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Token ${token['mytoken']}`
              },
            body:JSON.stringify(body)
        }).then(resp=>resp.json())
    }
    
    static PeopleView(){
        return fetch(`${BASE_URL}/data/users/`,{
            'method':'GET',
            headers:{
                'Content-Type':'application/json',
            }
            }).then(resp=>resp.json())
    }
    static PeopledetailView(username){
        return fetch(`${BASE_URL}/data/users/${username}`,{
            'method':'GET',
            headers:{
                'Content-Type':'application/json',
            }
            }).then(resp=>resp.json())
    }

    static ProfileView(token){
        return fetch(`${BASE_URL}/data/users/profile/`,{
            'method':'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Token ${token['mytoken']}`
            }
            })
            .then(resp=>resp.json())
    }

    static FollowersView(token,username){
        return fetch(`${BASE_URL}/data/users/${username}/followers/`,{
            'method':'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Token ${token['mytoken']}`
            }
            })
            .then(resp=>resp.json())
    }
    static FollowingView(token,username){
        return fetch(`${BASE_URL}/data/users/${username}/following/`,{
            'method':'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Token ${token['mytoken']}`
            }
            })
            .then(resp=>resp.json())
    }
    

    static AllEventsView(){
        return fetch(`${BASE_URL}/data/events/`,{
            'method':'GET',
            headers:{
                'Content-Type':'application/json',
            }
            })
            .then(resp=>resp.json())
    }

    static AllPostsView(){
        return fetch(`${BASE_URL}/data/posts/`,{
            'method':'GET',
            headers:{
                'Content-Type':'application/json',
            }
            })
            .then(resp=>resp.json())
    }

}