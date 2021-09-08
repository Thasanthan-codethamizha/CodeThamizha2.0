import React, { useEffect, useState } from 'react';
import APIService from '../ApiService';
import './blogs.css'
function Blogs() {
  const[blogs, setBlogs] =useState([])
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(()=>{
    APIService.AllPostsView().then(res=>{
      setBlogs(res)
    })  
  },[])
  return (
   <div className="blogs">
     <center>
       <br/>
     <div class="Card">
  <div class="CardInner">
  <div class="container">
    <div class="Icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#657789" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    </div>
    <div class="InputContainer">
       <input
     type="text"
     placeholder="Search..."
     onChange={(e)=>setSearchTerm(e.target.value)}
     />
    </div>
  </div>
 </div>
</div></center>
    
     {blogs.filter((blog)=>{
       if(searchTerm==""){
         return blog
       } else if(blog.title.toLowerCase().includes(searchTerm.toLowerCase())){
         return blog
       }
       else if(blog.content.toLowerCase().includes(searchTerm.toLowerCase())){
        return blog
      }
     }).map(blog=>{
       return(
<div class="blog-item" key={blog.id}>
          <a href="#">
              <div class="icon">
                  <img src={`http://192.168.1.12${blog.blog_image}`} alt="helo"/>
              </div>
              <div class="content">
                  <div class="title">{blog.title} <span class="blog-date">{blog.created_at.slice(0,10)}</span></div>
                  <div class="rounded"></div>

                  <p>
                      {blog.info}...
                  </p>
              </div>

              <div class="item-arrow">
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </div>
          </a>

      </div>
       )
     })}
      
</div>
  );
}

export default Blogs;
