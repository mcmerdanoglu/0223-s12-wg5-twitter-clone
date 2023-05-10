import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../context/TokenProvider";
import axios from "axios";
import InputReader from "./InputReader";
import Cards from "./Cards";
export default function Home() {
	const { token } = useContext(TokenContext);
	console.log("tioken", token);
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

	return <div>
		<h1>{<InputReader />}</h1>
		<h1>{<Cards />}</h1>
		</div>;
}
