import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const BlogDetails = (props) => {
    const { post, auth } = props;
    if (!auth.uid) return <Redirect to='/signin' />
    if(post){
        return(
            <div className="Details">
                <div className="container">
                    <div className="col-md-8">
                        <div className="card card-default">
                            <div className="card-heading">
                                <h5 className="card-title">{post.title}</h5>
                            </div>
                        <div className="card-body">
                            <p>{post.content}</p>
                            <div className="text-grey">
                                <div>Posted by {post.authorFirstName} {post.authorLastName}</div>
                                <p className="text-grey">{moment(post.createdAt.toDate()).calender()}</p>
                            </div>
                       </div>
                    </div>
                </div>
              </div>
            </div>
        )
    }
    else{
        return (
            <div className="container text-center">
                <p> Loading post....</p>
            </div>
        )
    }
   
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state);
    const id = ownProps.match.params.id;
    const posts = state.firestore.data.posts;
    const post = posts ? posts[id] : null
    return {
      post: post,
      auth: state.firebase.auth
    }
  }

  export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
      collection: 'posts'
    }])
  )(BlogDetails) 