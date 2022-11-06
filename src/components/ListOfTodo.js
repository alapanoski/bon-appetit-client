import React, { useEffect } from 'react';
import axios from 'axios';
export default function ListOfTodo({ token }) {
	useEffect(() => {
		if (token) {
			fetchData(token);
		}
	}, [token]);

	const fetchData = async (token) => {
		const res = await axios.get('http://localhost:5000/api/todos', {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		});
		console.log(res.data);
	};

	const Logout = ()=>{
		
		window.localStorage.setItem('auth', 'false')


	}

	return (
		<div>
			<button type='submit' onClick={Logout}>Logout</button>
			<h1>List of todo</h1>
		</div>
	);
}
