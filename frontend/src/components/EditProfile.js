import React, { useState } from 'react'
import APIService from '../ApiService'

function EditProfile(props) {
    const [user, setUser] = useState(props.user)
    const [token, setToken] = useState(props.token)

    const updateUser =()=>{
        APIService.UpdateUser(token,user)
        .then(resp=>console.log(resp))
        .catch(err=>console.log(err))
    }
    return (
        <div>
            
        </div>
    )
}

export default EditProfile
