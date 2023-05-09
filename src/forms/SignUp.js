import { useForm } from "react-hook-form";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => console.log(data);

  return (
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
  );
}
