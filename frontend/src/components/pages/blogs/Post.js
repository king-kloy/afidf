import React, { Component } from 'react';
import BlogList from './BlogList'


class Post extends Component { 
    render(){
        const { posts } = this.props;
        return (
            <div className="container">
                <div className="row">
                <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Recent posts
                </h2>
                </div>
                <div className="row">
                    <div className="col-md -12">
                    <BlogList posts={posts} />
                    </div>
                </div>    
            </div>
        );  
    } 
}

export default Post;