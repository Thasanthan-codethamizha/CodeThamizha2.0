import React, { useEffect } from 'react'
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
        <div>
            {Loading ?   <Loadingscreen/> :
            (
            <h1>{event.Title}</h1>
            )
}
        </div>
    )
}

export default Event;
