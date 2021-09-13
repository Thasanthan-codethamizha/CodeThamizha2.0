import React, { useEffect } from 'react'
import APIService from '../ApiService'
import './blog.css'
import Loadingscreen from './Loadingscreen'
function Singleblog(props) {
    const [post, setPost] = React.useState({})
    const [loading, setLoading] = React.useState(true)
    useEffect(() => {
        APIService.PostView(props.match.params.id)
        .then(res => {
            console.log(post)
            setPost(res)
           
        })
        .catch(err => {
            setLoading(true)
            console.log(err)
        })
        .finally(() => {
            setLoading(false)
        })
    },[props.match.params.id])
    return (
        <div className="singlepost">
            {loading ? <Loadingscreen/> :(
                <>
           
  <div class="card-header">
     
    <img src={`https://codethamizha.com${post.blog_image}`} alt="rover" />
    
  </div>
  <div class="card-body">
    <span class="tag tag-teal">Topic :{post.topic.topic}</span>
    <h2>
    {post.title}
    </h2>
    <br/>
    <h5>{post.created_at.slice(0,10)}</h5>

    <br/>

    <p>
      {post.content}

    </p>
    <div class="user">
      <img src={`https://codethamizha.com${post.user.profile_pic}`} alt="user" />
      <div class="user-info">
        <h5>{post.user.username}</h5>
        <small>{post.user.user_type}</small>
      </div>
    </div>
</div>
                </>
            )}
        </div>
    )
}

export default Singleblog
