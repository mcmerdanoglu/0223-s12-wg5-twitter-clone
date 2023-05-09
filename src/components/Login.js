import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	function handleChange(event) {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	}

	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();

		axios
			.post("https://wit-courses-api2.onrender.com/login", formData)
			.then((res) => {
				if (res.status === 200) {
					localStorage.setItem("token", res.data.token);
					console.log(res.data.token);
					navigate("home");
				}
			})
			.catch((error) => console.log(error.response));
	}

	return (
		<>
			<h2>Giriş Yap</h2>
			<form onSubmit={handleSubmit} className="auth-form max-w-md">
				<p className="form-line">
					{" "}
					<label>
						Kullanıcı adı
						<input
							onChange={handleChange}
							name="email"
							value={formData.email}
							type="text"
						/>
					</label>
				</p>
				<p className="form-line">
					<label>
						Şifre
						<input
							onChange={handleChange}
							name="password"
							value={formData.password}
							type="password"
						/>
					</label>
				</p>

				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					hello
				</button>
			</form>
		</>
	);
}
