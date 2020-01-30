import React from 'react'
import BlogSummary from './BlogSummary'
import { Link } from 'react-router-dom'

const BlogList = ({posts}) => {
    return (
        <div className="BlogList-section">
            { posts && posts.map(post => {
                return(
                    <Link to= {'/post/' + post.id} key={post.id}>
                        <BlogSummary post={post}/>
                    </Link>
                )
            })}
        </div>
    )
}

export default BlogList;