import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
	state = {
		loadedPost: null,
		error: false
	}
	componentDidMount() {
		console.log(this.props);
		this.loadDate();
	}
	componentDidUpdate() {
		this.loadDate();
	}
	loadDate() {
		if (this.props.match.params.id) {
			if (!this.state.loadedPost ||
				(this.state.loadedPost &&
					// loadedPost.id is number whereas props.match.param.id is a string. Therefore add + in order to convert string to number. Otherwise use != instead
					(this.state.loadedPost.id !== +this.props.match.params.id))) {
				axios.get('/posts/' + this.props.match.params.id)
					.then(response => {
						this.setState({ loadedPost: response.data })
					})
			}
		}
	}

	deletePostHandler = () => {
		axios.delete('/posts/' + this.props.match.params.id)
			.then(response => console.log(response))
	}
	render() {
		let post = <p className="card">Please select a Post!</p>;
		if (this.props.match.params.id) {
			post = <p className="card">Loading...</p>
		}
		if (this.state.loadedPost) {
			post = (
				<div
					className="FullPost card"
				>
					<h1>{this.state.loadedPost.title}</h1>
					<p>{this.state.loadedPost.body}</p>
					<div className="Edit">
						<button
							className="Delete"
							onClick={this.deletePostHandler}>Delete</button>
					</div>
				</div>
			);
		}
		return post;
	}
}

export default FullPost;