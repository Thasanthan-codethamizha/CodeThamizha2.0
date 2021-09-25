import { Button } from '@material-ui/core'
import React,{useEffect, useState} from 'react'
import {useCookies} from 'react-cookie'
import {useHistory} from 'react-router-dom'
import APIService from '../ApiService'
import Loadingscreen from '../pages/Loadingscreen'
import './profile.css'
import swal from 'sweetalert';



function Profile() {
    const [token,setToken,removeToken]=useCookies(['mytoken'])
    const [followers,setFollowers]=useState('')
    const [following,setFollowing]=useState('')
    const [data,setData]=useState('')
    const [user,setUser]=useState('')
    const [editstatus,setEditStatus]=useState(false)
    const [Loading,setLoading]=useState(true)

    const [full_name,setFull_name]=useState('')
    const [email,setEmail]=useState('')
    const [bio_note,setBio_note]=useState('')
    const [phone_number,setPhone_number]=useState('')

    
    let history =useHistory()
    
    const updateUser=()=>{
        data['bio_note']=bio_note
        data['full_name']=full_name
        data['email']=email
        data['phone_number']=phone_number
        delete data["profile_pic"];
        delete data["password"];
        console.log("Upadted")
        APIService.UpdateUser(token,data,data.username)
        .then(res=>{
          swal({
            title: "Profile Updated!",
            text: "Profile Updated Sucessfully!",
            icon: "success",
            button: "done!",
          }).then((value) => {
            setEditStatus(false)
          });
            
        })
        .catch(err=>{ 
          swal ( "Oops" ,  "Something went wrong!" ,  "error" ).then((value) => {
          setEditStatus(false)
        });
          
        })
    }

    const logoutBtn=()=>{
      swal ({
        title: "Logout",
        text: "Do you want to logout?",
        icon: "warning",
        button: "yes",
      }).then((value) => {
        removeToken(['mytoken'])
        history.push('/signin')
      });
       
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
  
    useEffect(()=>{
      if(!token['mytoken']){
        history.push('/signin')
      }
      if (user=="") {
        getUser()
      }
        
        console.log(user)
        APIService.PeopledetailView(String(user.username))
        .then(res => {
          setData(res)
          setFull_name(res.full_name)
          setEmail(res.email)
          setBio_note(res.bio_note)
          setPhone_number(res.phone_number)
        })
        .catch(error => console.log(error))
        getFollowers(String(user.username))
        getFollowing(String(user.username))
        
    
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
      <div class="profile-card__name">{data.full_name}</div>
      <div class="profile-card__txt">{data.user_type} of <strong>Code Thamizha</strong></div>
      <div class="profile-card-loc">
        
        <span class="profile-card-loc__txt">
          {data.username}
        </span>
      </div>
      <div class="profile-card-loc" >
        
        <span class="profile-card-loc__txt" style={{fontSize:15,marginTop:10,fontWeight:300}}>
          {data.bio_note}
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
                <input id="firstname" class="input" type="text" placeholder=" "  value={full_name} onChange={(e)=>setFull_name(e.target.value)}/>
                <div class="cut"></div>
                <label for="firstname" class="placeholder">Full name</label>
              </div>
              <div class="input-container ic2">
                <input id="phone_number" class="input" type="tel" placeholder="" value={phone_number} onChange={(e)=>setPhone_number(e.target.value)}/>
                <div class="cut"></div>
                <label for="phone_number" class="placeholder">Phone Number</label>
              </div>
              <div class="input-container ic2">
                <input id="email" class="input" type="text" placeholder=" " value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <div class="cut cut-short"></div>
                <label for="email" class="placeholder">Email</label>
              </div>
              <div class="input-container ic1">
                <input id="bio_note" class="input" type="text" placeholder=" "  value={bio_note} onChange={(e)=>setBio_note(e.target.value)}/>
                <div class="cut"></div>
                <label for="bio_note" class="placeholder">Bio</label>
              </div>
              
              <button type="text" class="submit" onClick={()=>updateUser()}>Update</button>
             
            </div></center>
    :( <div class="profile-card-ctr">
    <button class="profile-card__button button--blue js-message-btn" onClick={()=>{setEditStatus(!editstatus)}}>Edit</button>
    
  </div>)
      }


      
      

      <br/><br/>
      <Button style={{borderRadius:"10px"}} onClick={()=>logoutBtn()} className="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Logout">
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
