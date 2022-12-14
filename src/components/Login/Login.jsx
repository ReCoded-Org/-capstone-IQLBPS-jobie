/* eslint-disable no-console */
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Trans, useTranslation } from "react-i18next";
import { auth, google, signInWithPopup } from "../../firebase";

function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const login = async (provider) => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className=" my-52">
      <h1 className="font-inter text-center font-black text-2xl mb-6">
        {t("login")}
      </h1>
      <div className="w-full max-w-sm mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              className="shadow border-2 border-black rounded-md w-full py-2 px-3 text-dark-gray leading-tight focus:outline-1 focus:shadow-outline"
              id="email"
              type="email"
              placeholder="John@example.com                                                   &#xF007;"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              })}
            />
            <error className="text-primary font-inter">
              {errors.email?.type === "required" && "Please enter an email"}
              {errors.email?.type === "pattern" &&
                "Entered email is in wrong format"}
            </error>
          </div>
          <div className="mb-4 font-inter">
            <input
              className="shadow border-2 border-black rounded-md w-full py-2 px-3 text-dark-gray leading-tight focus:outline-1 focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password&#xF023;"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 20,
              })}
            />

            <error className="text-primary font-inter">
              {errors.password?.type === "required" &&
                "Please enter a password"}
              {errors.password?.type === "minLength" &&
                "Entered password is less than 8 characters"}
              {errors.password?.type === "maxLength" &&
                "Entered password is more than 20 characters"}
            </error>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-accent font-inter text-white rounded-md py-1 hover:bg-red-500"
            >
              {t("login")}
            </button>
          </div>
          <div className="mb-4">
            <p className="text-dark-gray">
              Don&apos;t Have an Account?{" "}
              <Link to="/sign-up">
                {" "}
                <span className="font-semibold">Sign up</span>{" "}
              </Link>
            </p>
          </div>
          <div>
            <button
              type="button"
              onClick={() => login(google)}
              className=" text-black border-t-2 border-l-2 border-r-4 border-b-4 border-black py-0.5 px-8 rounded-lg bg-white hover:shadow-md"
            >
              <FontAwesomeIcon
                icon={faGoogle}
                className="pr-3 text-2xl font-bold"
              />
              <Trans i18nKey="login-with">Log in with Google</Trans>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
