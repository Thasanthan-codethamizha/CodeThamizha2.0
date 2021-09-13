import { Button } from '@material-ui/core'
import React,{useEffect, useState} from 'react'
import {useCookies} from 'react-cookie'
import {useHistory} from 'react-router-dom'
import APIService from '../ApiService'
import { useParams } from "react-router-dom";

import './profile.css'
import Loadingscreen from '../pages/Loadingscreen'

function Userprofile(props) {
    const [token,setToken,removeToken]=useCookies(['mytoken'])
    const [followers,setFollowers]=useState([])
    const [followings,setFollowings]=useState([])
    const [user,setUser]=useState('')
    const [followingstatus,setFollowingstatus]=useState(false)
    const [username,setUsername]=useState(false)
    const [currentuserfollowing,setCurrentuserfollowing]=useState([])
    const [currentuser,setCurrentuser]=useState([])
    const [Loading,setLoading]=useState(true)
    const getFollowers=(username)=>{
      APIService.FollowersView(token,username)
      .then(resp=>{
        setFollowers(resp)
        console.log(resp)
      })
      .catch(error=>console.log(error))

      
  
    }
    const getFollowing=(username)=>{
      APIService.FollowingView(token,username)
      .then(resp=>setFollowings(resp))
      .catch(error=>console.log(error))
      .finally(()=>{
        setLoading(false)
      })
    }

    const followUser=()=>{
      

    
    }


    useEffect(()=>{

      APIService.ProfileView(token)
      .then(resp=>{setCurrentuser(resp) } )
      .catch(error=>console.log(error))

    },[])
  
    useEffect(()=>{
      setUsername(props.match.params.username)
      
      
      APIService.PeopledetailView(username)
      .then(res => {
        setUser(res)
      })
      .catch(error => console.log(error))
      

      getFollowers(username)
      getFollowing(username)


    },[username])
    return (
        <div className="profile">
          {Loading? <Loadingscreen/>:(<>
            <div class="wrapper">
  <div class="profile-card js-profile-card">
    <div class="profile-card__img">
      <img src={`http://127.0.0.1:8000${user.profile_pic}`} alt="profile card"/>
    </div>

    <div class="profile-card__cnt js-profile-cnt">
      <div class="profile-card__name">{user.full_name}</div>
      <div class="profile-card__txt">{user.user_type} of <strong>Code Thamizha</strong></div>
      <div class="profile-card-loc">
        <span class="profile-card-loc__txt">
          {user.username}
        </span>
      </div>
            
      {
        followers.length>0 ? (
          <>
          {

              followers.map(item=>{
                console.log(item.follower)
                console.log(currentuser.id)
                if(item.follower===currentuser.id){
                  console.log("you following him")
                  return(
                    <Button style={{borderRadius:"10px",backgroundColor:"red",width:"30%",color:"white"}}  className="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Logout">UnFollow</Button>
                  )
                }
                else{
                  console.log("you not following him")
                  return(
                    <Button style={{borderRadius:"10px",backgroundColor:"#2468dd",width:"30%",color:"white"}}  className="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Logout">Follow</Button>
                  )
                }

              })

              }
          </>
        ):
        (
          <>
          {console.log("you nots following him")}
                  
          <Button style={{borderRadius:"10px",backgroundColor:"#2468dd",width:"30%",color:"white"}}  className="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Logout">Follow</Button>
          </>
        )
      }

      

      <div class="profile-card-inf">
        <div class="profile-card-inf__item">
          <div class="profile-card-inf__title">{followers.length}</div>
          <div class="profile-card-inf__txt">Followers</div>
        </div>

        <div class="profile-card-inf__item">
          <div class="profile-card-inf__title">{followings.length}</div>
          <div class="profile-card-inf__txt">Following</div>
        </div>
<br/>


      </div>
      
    </div>
    </div>
</div>

</>)}
</div>
    )
}

export default Userprofile
