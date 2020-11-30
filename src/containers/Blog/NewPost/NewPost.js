import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './NewPost.css';

class NewPost extends Component {
	state = {
		title: '',
		content: '',
		author: 'Miwa',
		auth: true // if authorized
		// submitted: false,
	}
	componentDidMount() {
		if (!this.state.auth) {
			this.props.history.replace('/posts')
		}
	}
	postDataHandler = () => {
		const data = {
			title: this.state.title,
			body: this.state.content,
			author: this.state.author
		}
		axios.post('/posts', data)
			.then(response => {
				this.props.history.push('/recipes');
				// this.setState({ submitted: true })
			})
	}

	render() {
		// let redirect = null;
		// if (this.state.submitted) {
		// 	redirect = <Redirect to="/recipes" />;
		// }
		return (
			<div className="NewPost card">
				{/* {redirect} */}
				<h3 >Add a Post</h3>
				<label>Title
					<input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
				</label>

				<label>Content
				<textarea rows="4" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
				</label>
				<label>Author
				<select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
						<option value="Miwa">Miwa</option>
						<option value="Jassi">Jassi</option>
					</select>
				</label>
				<button
					onClick={this.postDataHandler}>Add Post</button>
			</div>
		);
	}
}

export default NewPost;