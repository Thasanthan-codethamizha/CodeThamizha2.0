import React, { useEffect, useState } from 'react'
import APIService from '../ApiService'
import './peoples.css'
import {useCookies} from 'react-cookie'


function Peoples() {
    const [peoples, setPeoples] = useState([])
    const [token,setToken,removeToken]=useCookies(['mytoken'])
    const [searchTerm, setSearchTerm] = useState('');
    const [user, setUser] = useState('');
    const [username, setUsername] = useState('');
    const [following, setFollowing] = useState([]);

    useEffect(() => {
        APIService.PeopleView().then(res => {
            setPeoples(res)
        })
        APIService.ProfileView(token).then(res => {
            setUser(res)
            setUsername(res.username)
        })
        APIService.FollowingView(token,username).then(res => {
            setFollowing(res)
        })
    }, [username])
    return (
        <div> 
             <center>
       <br/>
     <div class="Card">
  <div class="CardInner">
  <div class="container">
    <div class="Icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#657789" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    </div>
    <div class="InputContainer">
       <input
     type="text"
     placeholder="Search..."
     onChange={(e)=>setSearchTerm(e.target.value)}
     />
    </div>
  </div>
 </div>
</div></center>
            <center>
        <div className="peoples">
           
            {peoples.filter((p)=>{
       if(searchTerm==""){
         return p
       } else if(p.username.toLowerCase().includes(searchTerm.toLowerCase())){
         return p
       }
       else if(p.full_name.toLowerCase().includes(searchTerm.toLowerCase())){
        return p
      }
     }).map(people => {
                return(
                    <div class="profile-card">
                            <img src={`http://192.168.1.12${people.profile_pic}`} alt="image1" class="profile-icon" />
                            <div class="profile-name">{people.full_name}</div>
                            <div class="profile-position">{people.user_type}</div>
                            <a href="#" class="button">View</a>
                                    
                            
                           
                    </div>
                )
            })}
             
        </div>
        </center>
        </div>
    )
}

export default Peoples
