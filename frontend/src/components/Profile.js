import { Button } from '@material-ui/core'
import React,{useEffect} from 'react'
import {useCookies} from 'react-cookie'
import {useHistory} from 'react-router-dom'

function Profile() {
    const [token,setToken,removeToken]=useCookies(['mytoken'])
    let history =useHistory()


    const logoutBtn=()=>{
        removeToken(['mytoken'])
        history.push('/signin')
    }
    useEffect(()=>{
        if(!token['mytoken']){
            history.push('/signin')
        }
    },[token])
    return (
        <div>
            <Button style={{borderRadius:"10px"}} onClick={logoutBtn} className="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Logout">
                        Logout
            </Button>
        </div>
    )
}

export default Profile
