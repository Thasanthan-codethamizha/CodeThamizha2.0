import { Button } from '@material-ui/core'
import React,{useEffect, useState} from 'react'
import {useCookies} from 'react-cookie'
import {useHistory} from 'react-router-dom'
import APIService from '../ApiService'
import Loadingscreen from '../pages/Loadingscreen'
import './profile.css'

function Profile() {
    const [token,setToken,removeToken]=useCookies(['mytoken'])
    const [followers,setFollowers]=useState('')
    const [following,setFollowing]=useState('')
    const [user,setUser]=useState('')
    const [posts,setPosts]=useState('')
    const [editstatus,setEditStatus]=useState(false)
    const [Loading,setLoading]=useState(true)
    
    let history =useHistory()


    const logoutBtn=()=>{
        removeToken(['mytoken'])
        history.push('/signin')
    }
    const getUser=()=>{
      
      APIService.ProfileView(token)
      .then(resp=>{
          setUser(resp)
      }
          )
      .catch(error=>console.log(error))
     
    }
    const getFollowers=(username)=>{
      APIService.FollowersView(token,username)
      .then(resp=>setFollowers(resp))
      .catch(error=>console.log(error))
      .finally(()=>setLoading(false))
  
    }
    const getFollowing=(username)=>{
      APIService.FollowingView(token,username)
      .then(resp=>setFollowing(resp))
      .catch(error=>console.log(error))
    }
    const getPosts=()=>{
      APIService.AllPostsView()
      .then(resp=>setPosts(resp))
      .catch(error=>console.log(error))
      
    }
  
    useEffect(()=>{
      if(!token['mytoken']){
        history.push('/signin')
      }
      if (user=="") {
        getUser()
      }
        
        console.log(user)
        getFollowers(String(user.username))
        getFollowing(String(user.username))
        getPosts()
    
    },[token,user])
    return (
        <div className="profile">
            {Loading?<Loadingscreen/>:(<>
            <div class="wrapper">
  <div class="profile-card js-profile-card">
    <div class="profile-card__img">
      <img src={`https://codethamizha.com/images/${user.profile_pic}`} alt="profile card"/>
    </div>

    <div class="profile-card__cnt js-profile-cnt">
      <div class="profile-card__name">{user.full_name}</div>
      <div class="profile-card__txt">{user.user_type} of <strong>Code Thamizha</strong></div>
      <div class="profile-card-loc">
        
      {console.log("followers")}
          {console.log(followers)}
          {console.log("following")}
          {console.log(following)}
        <span class="profile-card-loc__txt">
          {user.username}
        </span>
      </div>
      
      <div class="profile-card-inf">
        <div class="profile-card-inf__item">
          <div class="profile-card-inf__title">{followers.length}</div>
          <div class="profile-card-inf__txt">Followers</div>
        </div>

        <div class="profile-card-inf__item">
          <div class="profile-card-inf__title">{following.length}</div>
          <div class="profile-card-inf__txt">Following</div>
        </div>

        

      </div>

      {editstatus? 
        <center>
        <div class="form">
              <div class="input-container ic1">
                <input id="firstname" class="input" type="text" placeholder=" " />
                <div class="cut"></div>
                <label for="firstname" class="placeholder">First name</label>
              </div>
              <div class="input-container ic2">
                <input id="lastname" class="input" type="text" placeholder=" " />
                <div class="cut"></div>
                <label for="lastname" class="placeholder">Last name</label>
              </div>
              <div class="input-container ic2">
                <input id="email" class="input" type="text" placeholder=" " />
                <div class="cut cut-short"></div>
                <label for="email" class="placeholder">Email</label>
              </div>
              <button type="text" class="submit">submit</button>
            </div></center>
    : null
      }


      

      <div class="profile-card-ctr">
        <button class="profile-card__button button--blue js-message-btn" onClick={()=>{setEditStatus(!editstatus)}}>Edit</button>
      </div>
      <Button style={{borderRadius:"10px"}} onClick={logoutBtn} className="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Logout">
                        Logout
            </Button>
    </div>
    </div>
</div>
</>)}
</div>
    )
}

export default Profile
