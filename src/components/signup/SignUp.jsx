import React from 'react';

function SignUp() {
  return (
    <div className=" my-52">
      <h1 className="font-inter font-black text-2xl mb-6">Sign Up</h1>
      <div className="w-full max-w-sm mx-auto">
        <form>
          <div className="mb-4">
            <input
              className="shadow border-2 border-black rounded-md w-full py-2 px-3 text-dark-gray leading-tight focus:outline-1 focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username                                                                    &#xF007;"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow border-2 border-black rounded-md w-full py-2 px-3 text-dark-gray leading-tight focus:outline-1 focus:shadow-outline"
              id="email"
              type="email"
              placeholder="John@example.com                                                    &#xF007;"
            />
          </div>
          <div className="mb-4 font-inter">
            <input
              className="shadow border-2 border-black rounded-md w-full py-2 px-3 text-dark-gray leading-tight focus:outline-1 focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password                                                                     &#xF023;"
            />
          </div>
          <div className="mb-4">
            <button
              type="button"
              className="w-full bg-accent font-inter text-white rounded-md py-1 hover:bg-red-500"
            >
              Sign Up
            </button>
          </div>
          <div className="mb-4">
            <p className="text-dark-gray">
              Already Have an Account?{' '}
              <span className="font-semibold">Log in</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
