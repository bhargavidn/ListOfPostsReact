import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostItem from './PostItem';


class PostList extends Component {
  constructor(props){
    super(props);
    this.state={listOfPosts:[],selectedPost:null}
  }

  renderPostList(){
    return this.state.listOfPosts.map((post)=>{
      return(
        <PostListItem postItem={post} key={post.id} onPostSelect={() => this.setState({selectedPost:post})}/>
      )
    })
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(data=>{

      this.setState({listOfPosts:data});
    })
    .catch(err=>{console.log("Error",err)});

  }
  render() {
    return (
      <div className="container ">
      <h3> List of Posts </h3>
        <ul className="list-group custom-scroll">
          {this.renderPostList()}
        </ul>
        <PostItem post={this.state.selectedPost}/>
      </div>
    );
  }
}
const PostListItem =({postItem,onPostSelect})=>{

  console.log(postItem)
    return (
      <li className="list-group-item"
        onClick={()=>onPostSelect(postItem)}>
        {postItem.title}
      </li>
    );

}

export default PostList;
