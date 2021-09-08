import React,{useEffect, useState} from "react"
const config={
    api_key:"AIzaSyDel0HhfbwVg8hNA5MYAjStyIgB78otaSY",
    channel_id:"UCmc1GRcWKWuxqhA5gZArasw",
}

const YoutubeCounter=()=>{
    const [subscribers,setSubscribers]=useState(0)
    const apicall=`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=%24%7BAIzaSyDel0HhfbwVg8hNA5MYAjStyIgB78otaSY%7D&key=%24%7BUCmc1GRcWKWuxqhA5gZArasw`
    useEffect(()=>{
    fetch(apicall)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.items[0].statistics.subscriberCount)
        })
    },[])
    
    return (
    <h1>helo</h1>
    )
    
}

export default YoutubeCounter;