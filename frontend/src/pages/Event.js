import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import APIService from '../ApiService';
import './event.css';
import Loadingscreen from './Loadingscreen';
function Event(props) {
    const [event, setEvent] = React.useState([]);
    const [Loading, setLoading] = React.useState(true);

    useEffect(() => {
        APIService.EventView(props.match.params.id)
            .then(res => {
                setEvent(res);
                
            }
            )
            .catch(err => {
                console.log(err);
            })
            .finally(()=>{
                setLoading(false)
              })
    },[props.match.params.id]);
    return (
        <div className="singlepost" >
            <center>
            {Loading ? <Loadingscreen/> :(
                <>  
                    <div className="event_head">
                        <h1><span>Code Thamizha</span> Presents</h1>
                    </div>
                    <div className="event_info">
                            <h1>{event.Title} </h1>
                            <h2>For{event.price>0?<span>{event.price.slice(0,-3)}LKR</span>:<span style={{color:'red',fontSize:40}}>Free</span> }</h2>
                            <p>{event.Description}</p>
                            {event.end_date ? (
                            <h2>({event.start_date.slice(0,10)}) {event.start_date.slice(11,16)}-IST<span style={{color:"blue"}}>from </span>({event.end_date.slice(0,10)}) {event.end_date.slice(11,16)}-IST</h2>
                            ):<h2>{event.event_date.slice(0,10)}{event.event_date.slice(11,16)}-IST<br/></h2>} 
                             <a href={`${event.EventLink}`} style={{textDecoration:'none',color: 'inherit'}}>{event.event_location==="GoogleMeet" ?(
                    <div class="Community-div-platform-wa" style={{backgroundColor:'#25d366'}}>
                        <img src="https://www.codethamizha.com/images/whatsapp.svg" class="Community-whatsapp-logo" alt="whatsapp icon"/>
                        <div class="Community-handlesText">
                            <span class="Community-handle-heading">Join</span>
                            <span class="Community-handle-platform">Whatsapp</span>
                        </div>
                    </div>
                    ):event.event_location==="Discord" ?(
                        <div class="Community-div-platform-wa" style={{backgroundColor:'#7289da'}}>
                            <img src="https://www.codethamizha.com/images/discord.svg" class="Community-whatsapp-logo" alt="whatsapp icon"/>
                            <div class="Community-handlesText">
                                <span class="Community-handle-heading">Join</span>
                                <span class="Community-handle-platform">Discord</span>
                            </div>
                        </div>
                        ):event.event_location==="Youtube" ?(
                            <div class="Community-div-platform-wa" style={{backgroundColor:'#da7272'}}>
                                <img src="https://www.codethamizha.com/images/youtube.svg" class="Community-whatsapp-logo" alt="whatsapp icon"/>
                                <div class="Community-handlesText">
                                    <span class="Community-handle-heading">Watch On</span>
                                    <span class="Community-handle-platform">YouTube</span>
                                </div>
                            </div>
                            ):(
                                <button class="glow-on-hover" type="button">JOIN EVENT!</button>

                            )}</a>
                    </div>
                   
                    
                   <div className="image" style={{border: '0px solid #000000', boxShadow: `0px 10px 34px 3px ${event.icon_color}`,WebkitBoxShadow:`0px 10px 34px 3px ${event.icon_color}`,MozBoxShadow:`0px 10px 34px 3px ${event.icon_color}`}}>
                        <img src={`https://www.codethamizha.com${event.event_poster}`} alt=""/>
                   </div>
                   
                </>
            )}
            
            </center>
        </div>
    )
}

export default Event;
