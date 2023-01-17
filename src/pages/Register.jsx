import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="pb-0 pt-0 h-full min-h-screen items-start p-0 relative overflow-hidden flex bg-cover bg-center bg-[url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-basic.jpg')]">
      <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover opacity-60 bg-gradient-to-tl from-zinc-800 to-zinc-700" />
      <div className="container">
        <div className="flex flex-wrap justify-center mt-48 -mx-3 lg:mt-48 md:mt-56">
          <div className="w-full max-w-full px-6 mx-auto shrink-0 md:flex-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
            <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-xl lg:pb-4 dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="text-center border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6">
                <h5>Sign up</h5>
              </div>

              <div className="flex-auto p-6 text-center">
                <form role="form text-left">
                  <div className="mb-4">
                    <input
                      type="text"
                      className="text-sm placeholder:text-gray-500 focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                      placeholder="Name"
                      aria-label="Name"
                      aria-describedby="email-addon"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      className="text-sm placeholder:text-gray-500 focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                      placeholder="Email"
                      aria-label="Email"
                      aria-describedby="email-addon"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      className="text-sm placeholder:text-gray-500 focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="password-addon"
                    />
                  </div>
                  <div className="min-h-6 pl-7 mb-0.5 block">
                    <input
                      id="terms"
                      className="w-5 h-5 ease -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-blue-500 checked:to-violet-500 after:text-xxs after:font-awesome after:duration-250 after:ease-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-200 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                      type="checkbox"
                      defaultValue=""
                      defaultChecked=""
                    />
                    <label
                      className="mb-2 text-sm font-normal text-left cursor-pointer select-none -ml-30 text-slate-700"
                      htmlFor="terms"
                    >
                      {" "}
                      I agree the{" "}
                      <a
                        href="javascript:;"
                        className="font-bold text-slate-700"
                      >
                        Terms and Conditions
                      </a>{" "}
                    </label>
                  </div>
                  <div className="text-center">
                    <button
                      type="button"
                      className="inline-block w-full px-5 py-2.5 mt-6 mb-2 text-sm font-bold text-center text-white align-middle transition-all ease-in bg-transparent border-0 rounded-lg shadow-md cursor-pointer active:opacity-85 hover:-translate-y-px hover:shadow-xs leading-normal tracking-tight-rem bg-150 bg-x-25 bg-gradient-to-tl from-zinc-800 to-zinc-700 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
                    >
                      Sign up
                    </button>
                  </div>
                  <p className="mt-4 mb-0 text-sm leading-normal">
                    Already have an account?{" "}
                    <Link to="/sign-in" className="font-bold text-slate-700">
                      Sign in
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
