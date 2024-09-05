import React, { useState } from 'react'
import axios from 'axios'

function Posts() {
    const[posts, setPosts] = useState([])
    const[error, setError] = useState('')

    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            setPosts({posts: response.data})
        })
        .catch(error => {
            console.log(error)
            // this.setState({errorMsg: 'Error Occures while retreiving a data'})

        })

    const postElements = <div>{ 
        posts.length ? posts.map(post => <div key={post.id}>{post.title}</div>) : null}
        </div>
    
  return (
    <div>
      <h1>Post Lists Using Functional Component</h1>
      {postElements}
    </div>
  )
}

export default Posts
