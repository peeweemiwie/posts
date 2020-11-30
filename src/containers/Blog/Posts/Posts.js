import React, { Component } from 'react'
import axios from 'axios'
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import { Route } from 'react-router-dom';

export class Posts extends Component {
  state = {
    posts: [],
    error: false
  }

  componentDidMount() {
    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return { ...post, author: 'Miwa' }
        })
        this.setState({ posts: updatedPosts })
      })
      .catch(error => {
        // console.log('axios error: ', error)
        this.setState({ error: true })
      });
  }

  postSelectedHandler = id => {
    this.props.history.push({ pathname: '/recipes/' + id })
    // or
    // this.props.history.push('/' + id)
  }
  render() {
    let posts = <p style={{ color: 'white' }}>Something went wrong...</p>
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // <Link to={'/' + post.id} key={post.id} exact>
          <Post
            key={post.id}
            author={post.author}
            title={post.title}
            clicked={() => this.postSelectedHandler(post.id)} />
          // </Link>)
        )
      })
    }

    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route
          path={this.props.match.url + '/:id'}
          exact
          component={FullPost} />
      </div>
    )
  }
}

export default Posts
