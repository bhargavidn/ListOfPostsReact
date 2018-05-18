import React from 'react';

 const PostItem=({post})=>{
   console.log("inside postdetails ",post);
   if(!post){
     return <div>Select Post</div>;
   }
  return(
    <div className="container">
      <h2>{post.title}</h2>
      <h3>{post.body}</h3>
    </div>
  )
}
export default PostItem;
