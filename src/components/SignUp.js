import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

export default function SignUp() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "onChange" });

	const onSubmit = (data) => console.log(data);

	const navigate = useNavigate();

	return (
		<div className="signupContainer">
			<form onSubmit={handleSubmit(onSubmit)} className="auth-form max-w-md">
				<p className="form-line">
					<label>
						<span className="form-label">İsim</span>
						<input
							{...register("name", { required: "İsim bölümü boş olamaz" })}
						/>
						{errors.name && <span>{errors.name.message}</span>}
					</label>
				</p>
				<p className="form-line">
					<label>
						<span className="form-label">Email</span>
						<input
							type="email"
							{...register("email", { required: "Email bölümü boş olamaz" })}
						/>
						{errors.email && <span>{errors.email.message}</span>}
					</label>
				</p>
				<p className="form-line">
					<label>
						<span className="form-label">Şifre</span>
						<input
							type="password"
							{...register("password", {
								required: "Şifre zorunludur!",
								minLength: {
									value: 5,
									message: "Şifre en az 5 karakter olmalıdır",
								},
							})}
						/>
						{errors.password && <span>{errors.password.message}</span>}
					</label>
				</p>
				<p className="form-line">
					<label>
						<span className="form-label">Avatar</span>
						<input {...register("avatar_url")} />
					</label>
				</p>
				<p className="form-line">
					<button>Kayıt ol</button>
				</p>
			</form>

			<h2>ALREADY A MEMBER </h2>
			<button onClick={() => navigate("/login")}>Login in..</button>
		</div>
	);
}
