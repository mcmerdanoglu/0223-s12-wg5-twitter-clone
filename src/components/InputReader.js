import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../context/TokenProvider";

export default function InputReader() {
	const { token } = useContext(TokenContext);

	const [newTweet, setNewTweet] = useState({
		body: "",
	});

	function handleChange(event) {
		setNewTweet({
			...newTweet,
			[event.target.name]: event.target.value,
		});
	}
	function handleSubmit(event) {
		console.log("hey man", token);
		event.preventDefault();
		const config = {
			method: "post",
			url: "https://wit-courses-api2.onrender.com/pub/entries",
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
			data: newTweet,
		};
		axios(config)
			.then((response) => {
				console.log("response", response);
			})
			.catch((error) => console.log(error));
	}

	return (
		<div className="inputreader">
			<h2>What is happining....</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Tweet
					<input
						onChange={handleChange}
						name="body"
						value={newTweet.body}
						type="text"
					/>
				</label>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					type="submit"
				>
					SUBMIT
				</button>
			</form>
		</div>
	);
}
