// import axios from "axios";
// import { useContext, useState } from "react";
// import { TokenContext } from "../context/TokenProvider";
// import { useHistory } from "react-router-dom";

// export default function Login() {
// 	const history = useHistory();

// 	const { setLoggedIn } = useContext(TokenContext);
// 	const [formData, setFormData] = useState({
// 		username: "",
// 		password: "",
// 	});

// 	function handleChange(event) {
// 		setFormData({
// 			...formData,
// 			[event.target.name]: event.target.value,
// 		});
// 	}

// 	function handleSubmit(event) {
// 		event.preventDefault();
// 		console.log("handle is triggered");
// 		axios
// 			.post(
// 				"https://wit-courses-api2.onrender.com/login",
// 				{
// 					username: formData.username,
// 					password: formData.password,
// 				},
// 				{
// 					headers: {
// 						"Content-Type": "application/json",
// 					},
// 				}
// 			)
// 			.then((response) => {
// 				console.log("response.data", response.data); // check the full response data
// 				console.log("TOKEENN", response.data.token);
// 				const token = response.data.token;
// 				if (!token) {
// 					console.log("Token value is undefined or empty.");
// 					return;
// 				}
// 				localStorage.setItem("token", token);
// 				console.log("token", token);
// 				history.push("/");
// 				setLoggedIn(true);
// 			})
// 			.catch((error) => console.log(error));
// 	}

// 	return (
// 		<form onSubmit={handleSubmit} className="auth-form max-w-md">
// 			<p className="form-line">
// 				<label>
// 					<span className="form-label">Email</span>
// 					<input
// 						type="email"
// 						name="username"
// 						value={formData.username}
// 						onChange={handleChange}
// 					/>
// 				</label>
// 			</p>
// 			<p className="form-line">
// 				<label>
// 					<span className="form-label">Şifre</span>
// 					<input
// 						type="password"
// 						name="password"
// 						value={formData.password}
// 						onChange={handleChange}
// 					/>
// 				</label>
// 			</p>

// 			<p className="form-line">
// 				<button>Giris</button>
// 			</p>
// 		</form>
// 	);
// }
