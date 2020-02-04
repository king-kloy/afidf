import React, { useState } from 'react'
import { useStore } from 'easy-peasy'
import BlogSummary from './BlogSummary'
import { Link } from 'react-router-dom'

const BlogList = () => {
    const posts = Array.from(useStore(state => state.posts));
    return ( 
        <div className="BlogList-section">
                    {  posts.map((post)=> ( 
                    <Link to= {'/post/' + post.id} key={post.id}>
                        <BlogSummary post={post} key={post.id}/>
                    </Link>
                ))}
        </div>
    )
}

export default BlogList;