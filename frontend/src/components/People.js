import React, { useState,useEffect } from 'react'
import APIService from '../ApiService'

function People() {
    const [users,setUsers]=useState("")
    useEffect(()=>{
        APIService.PeopleView()
        .then(resp=>setUsers(resp.data))
        .catch(error=>console.log(error))
        console.log(users)
    },[])
    return (
        <div>
           
        </div>
    )
}

export default People
