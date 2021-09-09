import { Button } from '@material-ui/core'
import React,{useEffect, useState} from 'react'
import {useCookies} from 'react-cookie'
import {useHistory} from 'react-router-dom'
import APIService from '../ApiService'
import { useParams } from "react-router-dom";

import './profile.css'

function Userprofile(props) {
    const [token,setToken,removeToken]=useCookies(['mytoken'])
    const [followers,setFollowers]=useState('')
    const [following,setFollowing]=useState('')
    const [user,setUser]=useState('')
    const [followingstatus,setFollowingstatus]=useState()
    const [username,setUsername]=useState(false)
    const [currentuserfollowing,setCurrentuserfollowing]=useState([])
    const [currentuser,setCurrentuser]=useState([])
    const getFollowers=(username)=>{
      APIService.FollowersView(token,username)
      .then(resp=>setFollowers(resp))
      .catch(error=>console.log(error))
  
    }
    const getFollowing=(username)=>{
      APIService.FollowingView(token,username)
      .then(resp=>setFollowing(resp))
      .catch(error=>console.log(error))
    }
    useEffect(()=>{

      setFollowingstatus(false)
      APIService.ProfileView(token)
      .then(resp=>{setCurrentuser(resp) } )
      .catch(error=>console.log(error))

      APIService.FollowingView(token)
      .then(resp=>setCurrentuserfollowing(resp.data))
      .catch(error=>console.log(error))
      
      console.log("currentuserfollowing")
      console.log(currentuser)
      console.log(currentuserfollowing)
    },[])
  
    useEffect(()=>{
      setFollowingstatus(false)
      setUsername(props.match.params.username)
      
      
      APIService.PeopledetailView(username)
      .then(res => {
        console.log(res)
        setUser(res)
      })
      .catch(error => console.log(error))
      getFollowers(user)
      getFollowers(username)
      getFollowing(username)


    },[username])
    return (
        <div className="profile">
            <div class="wrapper">
  <div class="profile-card js-profile-card">
    <div class="profile-card__img">
      <img src={`http://192.168.1.12${user.profile_pic}`} alt="profile card"/>
    </div>

    <div class="profile-card__cnt js-profile-cnt">
      <div class="profile-card__name">{user.full_name}</div>
      <div class="profile-card__txt">{user.user_type} of <strong>Code Thamizha</strong></div>
      <div class="profile-card-loc">
        <span class="profile-card-loc__txt">
          {user.username}
        </span>
      </div>
      {!followingstatus?
      <Button onClick={()=>setFollowingstatus(!followingstatus)} style={{borderRadius:"10px",backgroundColor:"#2468dd",width:"30%",color:"white"}}  className="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Logout">Follow</Button>:null}

      <div class="profile-card-inf">
        <div class="profile-card-inf__item">
          <div class="profile-card-inf__title">{followers.length}</div>
          <div class="profile-card-inf__txt">Followers</div>
        </div>

        <div class="profile-card-inf__item">
          <div class="profile-card-inf__title">{following.length}</div>
          <div class="profile-card-inf__txt">Following</div>
        </div>
<br/>


      </div>
      
    </div>
    </div>
</div>
</div>
    )
}

export default Userprofile
