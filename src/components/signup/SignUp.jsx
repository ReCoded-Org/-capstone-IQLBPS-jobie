import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

function SignUp() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const { t } = useTranslation();
  return (
    <div className=" my-52">
      <h1 className="font-inter font-black text-2xl mb-6">{t("sign-up")}</h1>
      <div className="w-full max-w-sm mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              className="shadow border-2 border-black rounded-md w-full py-2 px-3 text-dark-gray leading-tight focus:outline-1 focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username                                                                    &#xF007;"
              {...register("name", { required: true })}
            />
            <error className="text-primary font-inter">
              {errors.name?.type === "required" && "Please Enter your Name"}
            </error>
          </div>
          <div className="mb-4">
            <input
              className="shadow border-2 border-black rounded-md w-full py-2 px-3 text-dark-gray leading-tight focus:outline-1 focus:shadow-outline"
              id="email"
              type="email"
              placeholder="John@example.com                                                    &#xF007;"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              })}
            />
            <error className="text-primary font-inter">
              {errors.email?.type === "required" && "Please Enter an Email"}
              {errors.email?.type === "pattern" &&
                "Entered email is in wrong format"}
            </error>
          </div>
          <div className="mb-4 font-inter">
            <input
              className="shadow border-2 border-black rounded-md w-full py-2 px-3 text-dark-gray leading-tight focus:outline-1 focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password                                                                     &#xF023;"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 20,
              })}
            />
            <error className="text-primary font-inter">
              {errors.password?.type === "required" &&
                "Please Enter a Password"}
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
              {t('sign-up-button')}
            </button>
          </div>
          <div className="mb-4">
            <p className="text-dark-gray">
              {t('already-have-account')}{" "}
              <span className="font-semibold">{t('sign-up-login-button')}</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
