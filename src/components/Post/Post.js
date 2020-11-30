import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post card" onClick={props.clicked}>
        <h3 className="Section-title">{props.title}</h3>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

export default post;