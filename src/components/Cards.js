import Card from "./Card";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { TokenContext } from "../context/TokenProvider";
export default function Cards() {
	const { token } = useContext(TokenContext);
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get("https://wit-courses-api2.onrender.com/entries", {
				headers: {
					Authorization: token,
				},
			})
			.then((response) => setData(...data, response.data))
			.catch((error) => console.log(error));
	}, []);
	console.log(data);

	const renderedCards = data.map((tweet) => {
		return <Card key={tweet.id} tweets={tweet} />;
	});

	return <div className="cards">{renderedCards}</div>;
}
