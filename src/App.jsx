import { useState } from "react";

function App() {
  const [isOpenNotification, setIsOpenNotification] = useState(false);

  function handleOpenNotification() {
    setIsOpenNotification((prevState) => !prevState);
  }

  return (
    <div className="w-full bg-blue-500 dark:hidden min-h-75">
      <div className="absolute w-full bg-blue-500 dark:hidden min-h-75" />

      {/* sidebar */}
      <aside
        mini="false"
        className="fixed inset-y-0 left-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto transition-all duration-200 ease-in-out -translate-x-full bg-white border-0 shadow-none xl:ml-6 dark:bg-slate-850 z-990 max-w-64 rounded-2xl xl:translate-x-0"
        id="sidenav-main"
      >
        {/* header */}
        <div className="h-20">
          {/* x i */}
          <i
            className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 dark:text-white xl:hidden"
            aria-hidden="true"
            sidenav-close-btn=""
          />
          <a
            className="block px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700 dark:text-white"
            href=" https://demos.creative-tim.com/argon-dashboard-pro-tailwind/pages/dashboards/default.html "
            target="_blank"
          >
            <img
              src="public/images/vite.svg"
              className="inline-block h-full max-w-full transition-all duration-200 ease-in-out max-h-8 dark:hidden"
              alt="main_logo"
            />
            <img
              src="public/images/vite.svg"
              className="hidden h-full max-w-full transition-all duration-200 ease-in-out max-h-8 dark:inline-block"
              alt="main_logo"
            />
            <span className="ml-1 font-semibold transition-all duration-200 ease-in-out">
              TONY DASHBOARD
            </span>
          </a>
        </div>
        {/* //---------hr----------// */}
        <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
        <div
          className="items-center block w-full h-auto grow basis-full"
          id="sidenav-collapse-main"
        >
          {/* primary list  */}
          <ul className="flex flex-col pl-0 mb-0 list-none">
            <li className="mt-0.5 w-full">
              <a
                className="after:ease-in-out after:font-awesome-5-free ease-in-out text-sm leading-default py-2.7 my-0 mx-2 flex items-center whitespace-nowrap rounded-lg bg-blue-500/30 px-4 font-semibold text-slate-700 transition-all after:ml-auto after:inline-block after:rotate-180 after:font-bold dark:after:text-white after:text-slate-800 after:antialiased after:transition-all after:duration-200 dark:text-white dark:opacity-80"
                href="https://github.com/creativetimofficial/ct-argon-dashboard-pro-tailwind/blob/main/CHANGELOG.md"
                target="_blank"
              >
                <div className="stroke-none flex h-8 w-8 items-center justify-center rounded-lg bg-center fill-current p-2.5 text-center text-black">
                  <i className="text-sm leading-normal ni ni-shop text-blue-500" />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                  Dashboard
                </span>
              </a>
            </li>
            <li className="mt-0.5 w-full">
              <a
                className="after:ease-in-out after:font-awesome-5-free ease-in-out text-sm leading-default py-2.7 my-0 mx-2 flex items-center whitespace-nowrap rounded-lg  px-4 font-semibold transition-all after:ml-auto after:inline-block after:rotate-180 after:font-bold dark:after:text-white after:text-slate-800 after:antialiased after:transition-all after:duration-200 dark:text-white dark:opacity-80"
                href="https://github.com/creativetimofficial/ct-argon-dashboard-pro-tailwind/blob/main/CHANGELOG.md"
                target="_blank"
              >
                <div className="stroke-none flex h-8 w-8 items-center justify-center rounded-lg bg-center fill-current p-2.5 text-center">
                  <i className="text-sm leading-normal fa-brands fa-stack-overflow text-slate-700/80" />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease text-slate-500">
                  Tech Stack
                </span>
              </a>
            </li>
            <li className="mt-0.5 w-full">
              <a
                collapse_trigger="primary"
                href="javascript:;"
                className="ease-in-out text-sm leading-default py-2.7 active after:ease-in-out after:font-awesome-5-free my-0 mx-2 flex items-center whitespace-nowrap px-4 font-medium text-slate-500 shadow-none transition-colors after:ml-auto after:inline-block after:font-bold after:text-slate-800/50 after:antialiased after:transition-all after:duration-200 after:content-['\f107'] dark:text-white dark:opacity-80 dark:after:text-white/50 dark:after:text-white"
                aria-controls="applicationsExamples"
                role="button"
                aria-expanded="false"
              >
                <div className="stroke-none flex h-8 w-8 items-center justify-center rounded-lg bg-center fill-current p-2.5 text-center">
                  <i className="text-sm leading-normal ni ni-ui-04 text-cyan-500" />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                  Applications
                </span>
              </a>
              <div
                className="h-auto transition-all duration-200 ease-in-out max-h-0"
                id="applicationsExamples"
              >
                <ul className="flex flex-wrap mb-0 ml-6 list-none transition-all duration-200 ease-in-out">
                  <li className="w-full">
                    <a
                      className="ease-in-out py-2.7 ml-5.4 pl-4 leading-default text-sm relative my-0 mr-2 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors  dark:text-white dark:opacity-60 "
                      href="../../pages/applications/kanban.html"
                    >
                      <span className="w-0 text-center transition-all duration-200 ease-in-out opacity-0 pointer-events-none">
                        {" "}
                        J{" "}
                      </span>
                      <span className="transition-all duration-100 pointer-events-none ease">
                        Jobs
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
        {/* Navbar */}
        <nav
          navbar-main=""
          className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start"
          navbar-scroll="false"
        >
          <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
            <div className="flex items-center">
              <a
                mini-sidenav-burger=""
                href="javascript:;"
                className="hidden p-0 text-sm text-white transition-all ease-nav-brand xl:block"
                aria-expanded="false"
              >
                <div className="w-4.5 overflow-hidden">
                  <i className="ease mb-0.75 relative block h-0.5 translate-x-[5px] rounded-sm bg-white transition-all" />
                  <i className="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all" />
                  <i className="ease relative block h-0.5 translate-x-[5px] rounded-sm bg-white transition-all" />
                </div>
              </a>
            </div>
            <nav className="pl-3">
              <h6 className="mb-0 font-bold text-white capitalize">
                Dashboard
              </h6>
            </nav>
            <div
              className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto"
              id="navbar"
            >
              <div className="flex items-center md:ml-auto md:pr-4">
                <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease">
                  <span className="text-sm ease leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                    <i className="fas fa-search" aria-hidden="true" />
                  </span>
                  <input
                    type="text"
                    className="pl-9 text-sm focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 ease w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:transition-shadow"
                    placeholder="Type here..."
                  />
                </div>
              </div>
              <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
                <li className="flex items-center">
                  <a
                    href="../../pages/authentication/signin/illustration.html"
                    className="block px-0 py-2 text-sm font-semibold text-white transition-all ease-nav-brand"
                  >
                    <i className="fa fa-user sm:mr-1" aria-hidden="true" />
                    <span className="hidden sm:inline">Sign In</span>
                  </a>
                </li>
                <li className="flex items-center pl-4 xl:hidden">
                  <a
                    sidenav-trigger=""
                    className="block p-0 text-sm text-white transition-all ease-nav-brand"
                    href="javascript:;"
                    aria-expanded="false"
                  >
                    <div className="w-4.5 overflow-hidden">
                      <i className="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all" />
                      <i className="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all" />
                      <i className="ease relative block h-0.5 rounded-sm bg-white transition-all" />
                    </div>
                  </a>
                </li>

                {/* notifications */}
                <li className="relative flex items-center  px-4">
                  <p className="hidden transform-dropdown-show" />
                  <a
                    dropdown-trigger=""
                    href="javascript:;"
                    className="block p-0 text-sm text-white transition-all ease-nav-brand"
                    aria-expanded="true"
                    onClick={handleOpenNotification}
                  >
                    <i
                      className="cursor-pointer fa fa-bell"
                      aria-hidden="true"
                    />
                  </a>
                  <ul
                    dropdown-menu=""
                    className={`
                      text-sm transform-dropdown before:font-awesome before:leading-default before:duration-350 before:ease lg:shadow-3xl duration-250 min-w-44 before:sm:right-7 before:text-5.5 dark:bg-slate-850 pointer-events-none absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 transition-all before:absolute before:right-2 before:left-auto before:top-0 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-['\f0d8'] sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer 
                      ${
                        isOpenNotification
                          ? "opacity-100 transform-dropdown-show"
                          : "opacity-0 transform-dropdown-hide"
                      } `}
                  >
                    {/* add show class on dropdown open js */}
                    <li className="relative mb-2">
                      <a
                        className="group ease py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 dark:hover:bg-gray-200/80 lg:transition-colors"
                        href="javascript:;"
                      >
                        <div className="flex py-1">
                          <div className="my-auto">
                            <img
                              src="../../assets/img/team-2.jpg"
                              className="inline-flex items-center justify-center mr-4 text-sm text-white h-9 w-9 max-w-none rounded-xl"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-1 text-sm font-normal leading-normal group-hover:text-slate-700 dark:text-white">
                              <span className="font-semibold">New message</span>{" "}
                              from Laur
                            </h6>
                            <p className="mb-0 text-xs leading-tight text-slate-400 group-hover:text-slate-700 dark:text-white dark:opacity-80">
                              <i
                                className="mr-1 fa fa-clock"
                                aria-hidden="true"
                              />
                              13 minutes ago
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="relative mb-2">
                      <a
                        className="group ease py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700 dark:hover:bg-gray-200/80"
                        href="javascript:;"
                      >
                        <div className="flex py-1">
                          <div className="my-auto">
                            <img
                              src="../../assets/img/small-logos/logo-spotify.svg"
                              className="inline-flex items-center justify-center mr-4 text-sm text-white bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 h-9 w-9 max-w-none rounded-xl"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-1 text-sm font-normal leading-normal group-hover:text-slate-700 dark:text-white">
                              <span className="font-semibold">New album</span>{" "}
                              by Travis Scott
                            </h6>
                            <p className="mb-0 text-xs leading-tight text-slate-400 group-hover:text-slate-700 dark:text-white dark:opacity-80">
                              <i
                                className="mr-1 fa fa-clock"
                                aria-hidden="true"
                              />
                              1 day
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="group ease py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700 dark:hover:bg-gray-200/80"
                        href="javascript:;"
                      >
                        <div className="flex py-1">
                          <div className="inline-flex items-center justify-center my-auto mr-4 text-sm text-white transition-all duration-200 ease-nav-brand bg-gradient-to-tl from-slate-600 to-slate-300 h-9 w-9 rounded-xl">
                            <svg
                              width="12px"
                              height="12px"
                              viewBox="0 0 43 36"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <title>credit-card</title>
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g
                                  transform="translate(-2169.000000, -745.000000)"
                                  fill="#FFFFFF"
                                  fillRule="nonzero"
                                >
                                  <g transform="translate(1716.000000, 291.000000)">
                                    <g transform="translate(453.000000, 454.000000)">
                                      <path
                                        className="color-background"
                                        d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                        opacity="0.593633743"
                                      />
                                      <path
                                        className="color-background"
                                        d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-1 text-sm font-normal leading-normal group-hover:text-slate-700 dark:text-white">
                              Payment successfully completed
                            </h6>
                            <p className="mb-0 text-xs leading-tight text-slate-400 group-hover:text-slate-700 dark:text-white dark:opacity-80">
                              <i
                                className="mr-1 fa fa-clock"
                                aria-hidden="true"
                              />
                              2 days
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="w-full px-6 py-6 mx-auto">
          {/* row 1 */}
          <div className="flex flex-wrap -mx-3">
            {/* card1 */}
            <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
              <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div className="flex-auto p-4">
                  <div className="flex flex-row -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                          Today's Money
                        </p>
                        <h5 className="mb-2 font-bold dark:text-white">
                          $53,000
                        </h5>
                        <p className="mb-0 dark:text-white dark:opacity-60">
                          <span className="text-sm font-bold leading-normal text-emerald-500 pr-1">
                            +55%
                          </span>
                          since yesterday
                        </p>
                      </div>
                    </div>
                    <div className="px-3 text-right basis-1/3">
                      <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-blue-500 to-violet-500">
                        <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* card2 */}
            <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
              <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div className="flex-auto p-4">
                  <div className="flex flex-row -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                          Today's Users
                        </p>
                        <h5 className="mb-2 font-bold dark:text-white">
                          2,300
                        </h5>
                        <p className="mb-0 dark:text-white dark:opacity-60">
                          <span className="text-sm font-bold leading-normal text-emerald-500 pr-1">
                            +3%
                          </span>
                          since last <br /> week
                        </p>
                      </div>
                    </div>
                    <div className="px-3 text-right basis-1/3">
                      <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-red-600 to-orange-600">
                        <i className="ni leading-none ni-world text-lg relative top-3.5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* card3 */}
            <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
              <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div className="flex-auto p-4">
                  <div className="flex flex-row -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                          New Clients
                        </p>
                        <h5 className="mb-2 font-bold dark:text-white">
                          +3,462
                        </h5>
                        <p className="mb-0 dark:text-white dark:opacity-60">
                          <span className="text-sm font-bold leading-normal text-red-600 pr-1">
                            -2%
                          </span>
                          since last quarter
                        </p>
                      </div>
                    </div>
                    <div className="px-3 text-right basis-1/3">
                      <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-emerald-500 to-teal-400">
                        <i className="ni leading-none ni-paper-diploma text-lg relative top-3.5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* card4 */}
            <div className="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4">
              <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div className="flex-auto p-4">
                  <div className="flex flex-row -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                          Sales
                        </p>
                        <h5 className="mb-2 font-bold dark:text-white">
                          $103,430
                        </h5>
                        <p className="mb-0 dark:text-white dark:opacity-60">
                          <span className="text-sm font-bold leading-normal text-emerald-500 pr-1">
                            +5%
                          </span>
                          than last month
                        </p>
                      </div>
                    </div>
                    <div className="px-3 text-right basis-1/3">
                      <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-orange-500 to-yellow-500">
                        <i className="ni leading-none ni-cart text-lg relative top-3.5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* cards row 2 */}
          <div className="flex flex-wrap mt-6 -mx-3">
            <div className="w-full max-w-full px-3 mt-0 lg:flex-none">
              <div className="border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
                  <h6 className="capitalize dark:text-white">overview</h6>
                  <p className="mb-0 text-sm leading-normal dark:text-white dark:opacity-60">
                    <i className="fa fa-arrow-up text-emerald-500" />
                    <span className="font-semibold">4% more</span> in 2021
                  </p>
                </div>
                <div className="flex-auto p-4">
                  <div>
                    <canvas id="chart-line" height={300} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* cards row 3 */}
          <div className="flex flex-wrap mt-6 -mx-3">
            <div className="w-full max-w-full px-3 mb-6 shrink-0 md:flex-0 md:w-6/12 lg:mb-0">
              <div className="relative flex flex-col h-full min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6">
                  <h5 className="mb-0 capitalize dark:text-white">
                    Team members
                  </h5>
                </div>
                <div className="flex-auto p-6 pt-0">
                  <ul className="flex flex-col pl-0 mb-0 rounded-none">
                    <li className="border-black/12.5 rounded-t-inherit relative block border-b border-solid py-2 px-0 text-inherit">
                      <div className="flex flex-wrap items-center -mx-3">
                        <div className="flex items-center w-auto max-w-full px-3 flex-0">
                          <a
                            href="javascript:;"
                            className="inline-flex items-center justify-center w-12 h-12 text-base text-white transition-all duration-200 ease-in-out leading-inherit rounded-xl"
                          >
                            <img
                              className="w-full rounded-xl"
                              src="public/images/team-1.jpg"
                              alt="Image placeholder"
                            />
                          </a>
                        </div>
                        <div className="w-full max-w-full px-3 flex-1-0">
                          <h6 className="mb-0">
                            <a
                              className="dark:text-white/80"
                              href="javascript:;"
                            >
                              John Michael
                            </a>
                          </h6>
                          <span className="py-1.2 px-2 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-emerald-600 bg-emerald-200">
                            Online
                          </span>
                        </div>
                        <div className="w-auto max-w-full px-3 flex-0">
                          <button
                            type="button"
                            className="inline-block font-bold leading-normal text-blue-500 text-center align-middle cursor-pointer select-none border border-solid border-blue-500 rounded-lg bg-transparent transition-all ease-in tracking-tight-rem shadow-none px-4 py-1.5 text-xs hover:opacity-75 hover:-translate-y-px active:hover:opacity-75 active:hover:-translate-y-px active:-translate-y-px active:hover:shadow-none active:hover:bg-transparent active:hover:text-blue-500 active:bg-blue-500 active:shadow-xs active:text-black"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </li>
                    <li className="border-black/12.5 relative block border-b border-t-0 border-solid py-2 px-0 text-inherit">
                      <div className="flex flex-wrap items-center -mx-3">
                        <div className="flex items-center w-auto max-w-full px-3 flex-0">
                          <a
                            href="javascript:;"
                            className="inline-flex items-center justify-center w-12 h-12 text-base text-white transition-all duration-200 ease-in-out leading-inherit rounded-xl"
                          >
                            <img
                              className="w-full rounded-xl"
                              src="public/images/team-1.jpg"
                              alt="Image placeholder"
                            />
                          </a>
                        </div>
                        <div className="w-full max-w-full px-3 flex-1-0">
                          <h6 className="mb-0">
                            <a
                              className="dark:text-white/80"
                              href="javascript:;"
                            >
                              Alex Smith
                            </a>
                          </h6>
                          <span className="py-1.2 px-2 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-orange-600 bg-orange-200">
                            In Meeting
                          </span>
                        </div>
                        <div className="w-auto max-w-full px-3 flex-0">
                          <button
                            type="button"
                            className="inline-block font-bold leading-normal text-blue-500 text-center align-middle cursor-pointer select-none border border-solid border-blue-500 rounded-lg bg-transparent transition-all ease-in tracking-tight-rem shadow-none px-4 py-1.5 text-xs hover:opacity-75 hover:-translate-y-px active:hover:opacity-75 active:hover:-translate-y-px active:-translate-y-px active:hover:shadow-none active:hover:bg-transparent active:hover:text-blue-500 active:bg-blue-500 active:shadow-xs active:text-black"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </li>
                    <li className="border-black/12.5 relative block border-b border-t-0 border-solid py-2 px-0 text-inherit">
                      <div className="flex flex-wrap items-center -mx-3">
                        <div className="flex items-center w-auto max-w-full px-3 flex-0">
                          <a
                            href="javascript:;"
                            className="inline-flex items-center justify-center w-12 h-12 text-base text-white transition-all duration-200 ease-in-out leading-inherit rounded-xl"
                          >
                            <img
                              className="w-full rounded-xl"
                              src="public/images/team-1.jpg"
                              alt="Image placeholder"
                            />
                          </a>
                        </div>
                        <div className="w-full max-w-full px-3 flex-1-0">
                          <h6 className="mb-0">
                            <a
                              className="dark:text-white/80"
                              href="javascript:;"
                            >
                              Samantha Ivy
                            </a>
                          </h6>
                          <span className="py-1.2 px-2 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-red-600 bg-red-200">
                            Offline
                          </span>
                        </div>
                        <div className="w-auto max-w-full px-3 flex-0">
                          <button
                            type="button"
                            className="inline-block font-bold leading-normal text-blue-500 text-center align-middle cursor-pointer select-none border border-solid border-blue-500 rounded-lg bg-transparent transition-all ease-in tracking-tight-rem shadow-none px-4 py-1.5 text-xs hover:opacity-75 hover:-translate-y-px active:hover:opacity-75 active:hover:-translate-y-px active:-translate-y-px active:hover:shadow-none active:hover:bg-transparent active:hover:text-blue-500 active:bg-blue-500 active:shadow-xs active:text-black"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </li>
                    <li className="border-black/12.5 relative block border-b border-t-0 border-solid py-2 px-0 text-inherit">
                      <div className="flex flex-wrap items-center -mx-3">
                        <div className="flex items-center w-auto max-w-full px-3 flex-0">
                          <a
                            href="javascript:;"
                            className="inline-flex items-center justify-center w-12 h-12 text-base text-white transition-all duration-200 ease-in-out leading-inherit rounded-xl"
                          >
                            <img
                              className="w-full rounded-xl"
                              src="public/images/team-1.jpg"
                              alt="Image placeholder"
                            />
                          </a>
                        </div>
                        <div className="w-full max-w-full px-3 flex-1-0">
                          <h6 className="mb-0">
                            <a
                              className="dark:text-white/80"
                              href="javascript:;"
                            >
                              Samantha Ivy
                            </a>
                          </h6>
                          <span className="py-1.2 px-2 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-red-600 bg-red-200">
                            Offline
                          </span>
                        </div>
                        <div className="w-auto max-w-full px-3 flex-0">
                          <button
                            type="button"
                            className="inline-block font-bold leading-normal text-blue-500 text-center align-middle cursor-pointer select-none border border-solid border-blue-500 rounded-lg bg-transparent transition-all ease-in tracking-tight-rem shadow-none px-4 py-1.5 text-xs hover:opacity-75 hover:-translate-y-px active:hover:opacity-75 active:hover:-translate-y-px active:-translate-y-px active:hover:shadow-none active:hover:bg-transparent active:hover:text-blue-500 active:bg-blue-500 active:shadow-xs active:text-black"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </li>
                    <li className="border-black/12.5 relative block border-b border-t-0 border-solid py-2 px-0 text-inherit">
                      <div className="flex flex-wrap items-center -mx-3">
                        <div className="flex items-center w-auto max-w-full px-3 flex-0">
                          <a
                            href="javascript:;"
                            className="inline-flex items-center justify-center w-12 h-12 text-base text-white transition-all duration-200 ease-in-out leading-inherit rounded-xl"
                          >
                            <img
                              className="w-full rounded-xl"
                              src="public/images/team-1.jpg"
                              alt="Image placeholder"
                            />
                          </a>
                        </div>
                        <div className="w-full max-w-full px-3 flex-1-0">
                          <h6 className="mb-0">
                            <a
                              className="dark:text-white/80"
                              href="javascript:;"
                            >
                              Samantha Ivy
                            </a>
                          </h6>
                          <span className="py-1.2 px-2 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-red-600 bg-red-200">
                            Offline
                          </span>
                        </div>
                        <div className="w-auto max-w-full px-3 flex-0">
                          <button
                            type="button"
                            className="inline-block font-bold leading-normal text-blue-500 text-center align-middle cursor-pointer select-none border border-solid border-blue-500 rounded-lg bg-transparent transition-all ease-in tracking-tight-rem shadow-none px-4 py-1.5 text-xs hover:opacity-75 hover:-translate-y-px active:hover:opacity-75 active:hover:-translate-y-px active:-translate-y-px active:hover:shadow-none active:hover:bg-transparent active:hover:text-blue-500 active:bg-blue-500 active:shadow-xs active:text-black"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full max-w-full px-3 mt-6 flex-0 lg:mt-0 md:w-6/12 lg:mb-0 ">
              <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div className="flex-auto">
                  <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6">
                    <h5 className="mb-0 capitalize dark:text-white">
                      To do list
                    </h5>
                  </div>
                  <div className="p-0 overflow-x-auto">
                    <table className="items-center justify-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                      <thead className="align-bottom">
                        <tr>
                          <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                            Title
                          </th>
                          <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                            Author
                          </th>
                          <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="border-t">
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                            <div className="flex px-2">
                              <div className="my-auto">
                                <h6 className="mb-0 text-xs leading-normal dark:text-white">
                                  Spotify
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-xs font-semibold leading-normal dark:text-white dark:opacity-60">
                              Tony Nguyen
                            </p>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                            <i className="bg-cyan-500 rounded-circle mr-1.5 inline-block h-1.5 w-1.5 align-middle" />
                            <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                              working
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                            <div className="flex px-2">
                              <div className="my-auto">
                                <h6 className="mb-0 text-xs leading-normal dark:text-white">
                                  Invision
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-xs font-semibold leading-normal dark:text-white dark:opacity-60">
                              Tony Nguyen
                            </p>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                            <i className="bg-emerald-500 rounded-circle mr-1.5 inline-block h-1.5 w-1.5 align-middle" />
                            <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                              done
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                            <div className="flex px-2">
                              <div className="my-auto">
                                <h6 className="mb-0 text-xs leading-normal dark:text-white">
                                  Jira
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-xs font-semibold leading-normal dark:text-white dark:opacity-60">
                              Tony Nguyen
                            </p>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                            <i className="bg-red-600 rounded-circle mr-1.5 inline-block h-1.5 w-1.5 align-middle" />
                            <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                              canceled
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                            <div className="flex px-2">
                              <div className="my-auto">
                                <h6 className="mb-0 text-xs leading-normal dark:text-white">
                                  Slack
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-xs font-semibold leading-normal dark:text-white dark:opacity-60">
                              Tony Nguyen
                            </p>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                            <i className="bg-red-600 rounded-circle mr-1.5 inline-block h-1.5 w-1.5 align-middle" />
                            <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                              canceled
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                            <div className="flex px-2">
                              <div className="my-auto">
                                <h6 className="mb-0 text-xs leading-normal dark:text-white">
                                  Webdev
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-xs font-semibold leading-normal dark:text-white dark:opacity-60">
                              Tony Nguyen
                            </p>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                            <i className="bg-cyan-500 rounded-circle mr-1.5 inline-block h-1.5 w-1.5 align-middle" />
                            <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                              working
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                            <div className="flex px-2">
                              <div className="my-auto">
                                <h6 className="mb-0 text-xs leading-normal dark:text-white">
                                  Jira
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-xs font-semibold leading-normal dark:text-white dark:opacity-60">
                              Tony Nguyen
                            </p>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                            <i className="bg-red-600 rounded-circle mr-1.5 inline-block h-1.5 w-1.5 align-middle" />
                            <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                              canceled
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                            <div className="flex px-2">
                              <div className="my-auto">
                                <h6 className="mb-0 text-xs leading-normal dark:text-white">
                                  Jira
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-xs font-semibold leading-normal dark:text-white dark:opacity-60">
                              Tony Nguyen
                            </p>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                            <i className="bg-red-600 rounded-circle mr-1.5 inline-block h-1.5 w-1.5 align-middle" />
                            <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                              canceled
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                            <div className="flex px-2">
                              <div className="my-auto">
                                <h6 className="mb-0 text-xs leading-normal dark:text-white">
                                  Adobe XD
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-xs font-semibold leading-normal dark:text-white dark:opacity-60">
                              Tony Nguyen
                            </p>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                            <i className="bg-emerald-500 rounded-circle mr-1.5 inline-block h-1.5 w-1.5 align-middle" />
                            <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                              done
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
