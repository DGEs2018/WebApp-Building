import React, { Component } from 'react';
import './App.css';

const list = [
	{
		title: 'React',
		url: 'https://reactjs.org',
		author: 'Jordan Walke',
		num_comments: 3,
		points: 4,
		objectID: 0
	},
	{
		title: 'Redux',
		url: 'https://redux.js.org/',
		author: 'Dan Abramov, Andrew Clark',
		num_comments: 2,
		points: 5,
		objectID: 1
	},
	{
		title: 'Context',
		url: 'https://redux.js.org/',
		author: 'Whoever',
		num_comments: 2,
		points: 3,
		objectID: 2
	},
	{
		title: 'Layouts',
		url: 'https://redux.js.org/',
		author: 'Someone else',
		num_comments: 2,
		points: 4,
		objectID: 3
	},
	{
		title: 'Layouts',
		url: 'https://redux.js.org/',
		author: 'Someone else',
		num_comments: 2,
		points: 4,
		objectID: 4
	}
];

function App() {
	const helloReact = 'Welcome to React fundamentals!';
	return (
		<div className="App">
			{/* <h2>{helloReact}</h2> */}
			{list.map(function(item) {
				<div key={item.objectID}>
					<span>
						<a href={item.url}>{item.title}</a>
					</span>
					<span>{item.author}</span>
					<span>{item.num_comments}</span>
					<span>{item.points}</span>
				</div>;
			})}
		</div>
	);
}

export default App;
