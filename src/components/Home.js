import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../context/TokenProvider";
import axios from "axios";
import InputReader from "./InputReader";

export default function Home() {
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

	return <h1>{<InputReader />}</h1>;
}