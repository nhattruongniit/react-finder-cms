import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleSignIn() {
    navigate("/");
  }

  return (
    <div className="pb-0 pt-0 h-full min-h-screen items-start p-0 relative overflow-hidden flex bg-cover bg-center bg-[url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-basic.jpg')]">
      <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover opacity-60 bg-gradient-to-tl from-zinc-800 to-zinc-700" />
      <div className="container">
        <div className="flex flex-wrap justify-center mt-48 -mx-3 lg:mt-48 md:mt-56">
          <div className="w-full max-w-full px-6 mx-auto shrink-0 md:flex-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
            <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="text-center border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6">
                <h5 className="mt-2 mb-4">Sign in</h5>
              </div>
              <div className="flex-auto p-12 pt-0 pb-6 text-center">
                <form role="form text-left">
                  <div className="mb-4">
                    <input
                      type="email"
                      className="text-sm focus:shadow-primary-outline dark:bg-slate-850 placeholder:text-gray-500 dark:placeholder:text-white/80 dark:text-white/80 leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                      placeholder="Email"
                      aria-label="Email"
                      aria-describedby="email-addon"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      className="text-sm focus:shadow-primary-outline dark:bg-slate-850 placeholder:text-gray-500 dark:placeholder:text-white/80 dark:text-white/80 leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="password-addon"
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="button"
                      className="inline-block w-full px-5 py-2.5 mt-6 mb-2 text-sm font-bold text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer active:-translate-y-px active:hover:text-white active:text-black hover:-translate-y-px hover:shadow-xs leading-normal tracking-tight-rem bg-150 bg-x-25 bg-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                      onClick={handleSignIn}
                    >
                      Sign in
                    </button>
                  </div>
                  <div className="relative w-full max-w-full px-3 mb-2 text-center shrink-0">
                    <p className="inline mb-2 px-4 text-slate-400 bg-white z-2 text-sm leading-normal font-semibold before:bg-gradient-to-r before:from-transparent before:via-neutral-500/40 before:to-neutral-500/40 before:right-2 before:-ml-1/2 before:content-[''] before:inline-block before:w-3/10 before:h-px before:relative before:align-middle after:left-2 after:-mr-1/2 after:bg-gradient-to-r after:from-neutral-500/40 after:via-neutral-500/40 after:to-transparent after:content-[''] after:inline-block after:w-3/10 after:h-px after:relative after:align-middle">
                      or
                    </p>
                  </div>
                  <div className="text-center">
                    <Link
                      to="/sign-up"
                      className="inline-block w-full px-5 py-2.5 mt-2 mb-6 text-sm font-bold text-center text-white align-middle transition-all ease-in bg-transparent border-0 rounded-lg shadow-md cursor-pointer active:-translate-y-px hover:-translate-y-px hover:shadow-xs leading-normal tracking-tight-rem bg-150 bg-x-25 bg-gradient-to-tl from-zinc-800 to-zinc-700 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
                    >
                      Sign up
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
