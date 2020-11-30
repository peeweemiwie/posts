import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import NotFound from '../NotFound/NotFound';
import axios from 'axios';
import './Blog.css';

class Blog extends Component {
	state = {
		auth: true
	}
	componentDidMount() {
		axios.get('/posts')
			.then(response => {
				console.log('axios blog.js: ', response)
			})
	}
	render() {
		return (
			<>
				<header className="header">
					<nav className="nav">
						<ul className="unordered-list">
							<li className="list-item">
								<NavLink
									className="anchor"
									to={{ pathname: '/recipes/' }}
									activeClassName="blog-active"
									exact>Posts</NavLink>
							</li>
							{this.state.auth ?
								<li className="list-item">
									<NavLink
										className="anchor"
										to={{
											pathname: '/new-post',
											hash: '#new-post',
											search: '?quick-submit=true'
										}}
										activeClassName="blog-active"
										exact>New Post</NavLink>
								</li> : null}
						</ul>
					</nav>
				</header>
				<Switch>
					{this.state.auth ?
						<Route
							path="/new-post"
							exact
							component={NewPost} /> : null}
					<Route
						path="/recipes/"
						component={Posts} />
					{/* 404 page! */}
					<Route component={NotFound} />
					{/* Another way to display 404 error. This does not work with <Redirect from="/" /> */}
					{/* <Route render={() => <h1>Not Found</h1>}> */}
					<Redirect
						from="/"
						to="/recipes" />
				</Switch>
			</>
		);
	}
}

export default Blog;