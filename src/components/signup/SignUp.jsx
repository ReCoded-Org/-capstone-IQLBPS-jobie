/* eslint-disable no-alert */
/* eslint-disable no-console */
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "../../firebase";

import { signup } from "../../features/user/userSlice";

function SignUp() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    const { email, name, password } = data;
    console.log(data);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          fullname: name,
        })
          .then(
            dispatch(
              signup({
                email,
                name,
                password,
              })
            )
          )
          .then(navigate("/"))
          .catch((error) => {
            console.log("user not updated", error);
          });
      })
      .catch((err) => {
        alert(err);
      });
  };

  //  form validation
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // on submiting the form console.log the data

  return (
    <div className=" my-52">
      <h1 className="font-inter text-center font-black text-2xl mb-6">
        Sign Up
      </h1>
      <div className="w-full max-w-sm mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            {/* username input  */}
            <input
              className="shadow border-2 border-black rounded-md w-full py-2 px-3 text-dark-gray leading-tight focus:outline-1 focus:shadow-outline"
              type="text"
              placeholder="Username                                                                    &#xF007;"
              {...register("name", { required: true })}
            />
            {/* username input validation error */}
            <error className="text-primary font-inter">
              {errors.name?.type === "required" && "Please Enter your Name"}
            </error>
          </div>
          <div className="mb-4">
            {/* email input  */}
            <input
              className="shadow border-2 border-black rounded-md w-full py-2 px-3 text-dark-gray leading-tight focus:outline-1 focus:shadow-outline"
              type="email"
              placeholder="John@example.com                                                    &#xF007;"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              })}
            />
            {/* email input validation error */}

            <error className="text-primary font-inter">
              {errors.email?.type === "required" && "Please Enter an Email"}
              {errors.email?.type === "pattern" &&
                "Entered email is in wrong format"}
            </error>
          </div>
          <div className="mb-4 font-inter">
            {/* password input  */}

            <input
              className="shadow border-2 border-black rounded-md w-full py-2 px-3 text-dark-gray leading-tight focus:outline-1 focus:shadow-outline"
              type="password"
              placeholder="Password                                                                     &#xF023;"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 20,
              })}
            />
            {/* password input validation error */}

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
            {/* sign up button  */}
            <button
              type="submit"
              className="w-full bg-accent font-inter text-white rounded-md py-1 hover:bg-red-500"
            >
              Sign Up
            </button>
          </div>
          <div className="mb-4">
            <p className="text-dark-gray">
              Already Have an Account?{" "}
              <Link to="/login">
                {" "}
                <span className="font-semibold cursor-pointer">Log in</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
