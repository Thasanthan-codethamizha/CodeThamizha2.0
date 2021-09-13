import React, { Component,useEffect,useState } from "react";
import { Link } from "react-router-dom";
import APIService from "../../ApiService";
import './styles/eventcard.css'


function Eventcard({id,teacher,image,points,price,info, title, date, location, description, link}) {
    const [events,setEvents] = useState([]);
    useEffect(() => {
        APIService.AllEventsView()
        .then((res) => {
          setEvents(res);
        })
      },[])
    
    return (
  
        <div class="card">
  <div class="card-header" >
  <Link to={`events/${title}/${id}/`} style={{textDecoration:'none'}}>
    <img src={`https://codethamizha.com${image}`} alt="rover" />
    </Link>
  </div>
  <div class="card-body">
    <span class="tag tag-teal">Points :{points}</span>
    <h3>
    {title}
    </h3>
    <br/>
    <h5 >Date--{date.slice(0,10)}</h5>

    <h5>Time--{date.slice(11,16)}  ({date.slice(19,25)} IST)</h5>
    <br/>

    <p>
      {info}

    </p>
    <div class="user">
      <img src={`https://codethamizha.com${teacher.profile_pic}`} alt="user" />
      <div class="user-info">
        <h5>{teacher.username}</h5>
        <small>{teacher.user_type}</small>
      </div>
    </div>
  </div>
</div>
    )
}

export default Eventcard
