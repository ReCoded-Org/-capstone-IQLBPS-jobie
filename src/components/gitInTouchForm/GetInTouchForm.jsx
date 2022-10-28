import React from 'react';

export default function () {
  return (
    <div>
      {' '}
      <div className="flex justify-around     ">
        <div className=" flex flex-col justify-evenly">
          <div className="div-1 m-8">
            <h2 className="text-4xl text-slate-600 subpixel-antialiased font-semibold">
              Get in touch
            </h2>
          </div>
          <div className="flex justify-around">
            <div className="flex flex-col">
              <div className="flex justify-evenly gap-3">
                <label
                  htmlFor="Firstname"
                  className="text-left text-xl font-semibold"
                >
                  {' '}
                  first name <br />
                  <input type="text" className="border-2 border-solid p-1.5" />
                </label>

                <label
                  htmlFor="Lastname"
                  className="text-left text-xl font-semibold"
                >
                  {' '}
                  Last name <br />{' '}
                  <input type="text" className="border-2 border-solid p-1.5" />
                </label>
              </div>
              <div className=" flex-col text-left">
                <label
                  htmlFor="Lastname"
                  className="text-left text-xl font-semibold"
                >
                  {' '}
                  Email <br />{' '}
                  <input type="text" className="border-2 border-solid p-1.5" />
                </label>
                <br />{' '}
                <label
                  htmlFor="Lastname"
                  className="text-left text-xl font-semibold"
                >
                  <br /> Messege <br />{' '}
                  <textarea
                    name=""
                    className="border-2 border-solid"
                    id=""
                    cols="30"
                    rows="3"
                  >
                    {' '}
                  </textarea>
                </label>
                <br />{' '}
                <button
                  type="button"
                  className="bg-accent  text-white font-bold py-3 px-7 rounded-full"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="div-2 mt-10 ">
            <h1 className="text-4xl subpixel-antialiased text-slate-600 font-semibold mb-10">
              Contact Us
            </h1>
            <br />
            <div className=" flex-col text-2xl text-center   gap-10">
              <div className="flex flex-row justify-center  gap-3 mb-7">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <p>As Sulaimaniyah ,Iraq </p>{' '}
              </div>
              <div className="flex flex-row justify-center gap-3 mb-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <p> +964 750 113 0495 </p>{' '}
              </div>
              <div className="flex flex-row justify-center gap-3 mb-7">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
                <p> jobie.contact@.com </p>{' '}
              </div>
              <div className="flex flex-row justify-center gap-3 mb-7 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>9:00 - 17:00</p>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
