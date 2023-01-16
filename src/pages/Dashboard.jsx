import React from 'react';

import SimpleBarChart from '../components/Chart/SimpleBarChart';


function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap -mx-3">
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
                      since <br /> yesterday
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
                      since last <br /> quarter
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
                      than last <br /> month
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
              <h6 className="capitalize dark:text-white">Operators</h6>
              <p className="mb-0 text-sm leading-normal dark:text-white dark:opacity-60">
                <i className="fa fa-arrow-up text-emerald-500" />
                <span className="font-semibold">4% more</span> in 2021
              </p>
            </div>
            <div className="flex-auto p-4">
              <div>
                <SimpleBarChart />
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
                        href="javascript:void(0);"
                        className="inline-flex items-center justify-center w-12 h-12 text-base text-white transition-all duration-200 ease-in-out leading-inherit rounded-xl"
                      >
                        <img
                          className="w-full rounded-xl"
                          src="images/team-1.jpg"
                          alt="Image placeholder"
                        />
                      </a>
                    </div>
                    <div className="w-full max-w-full px-3 flex-1-0">
                      <h6 className="mb-0">
                        <a
                          className="dark:text-white/80"
                          href="javascript:void(0);"
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
                        href="javascript:void(0);"
                        className="inline-flex items-center justify-center w-12 h-12 text-base text-white transition-all duration-200 ease-in-out leading-inherit rounded-xl"
                      >
                        <img
                          className="w-full rounded-xl"
                          src="images/team-1.jpg"
                          alt="Image placeholder"
                        />
                      </a>
                    </div>
                    <div className="w-full max-w-full px-3 flex-1-0">
                      <h6 className="mb-0">
                        <a
                          className="dark:text-white/80"
                          href="javascript:void(0);"
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
                        href="javascript:void(0);"
                        className="inline-flex items-center justify-center w-12 h-12 text-base text-white transition-all duration-200 ease-in-out leading-inherit rounded-xl"
                      >
                        <img
                          className="w-full rounded-xl"
                          src="images/team-1.jpg"
                          alt="Image placeholder"
                        />
                      </a>
                    </div>
                    <div className="w-full max-w-full px-3 flex-1-0">
                      <h6 className="mb-0">
                        <a
                          className="dark:text-white/80"
                          href="javascript:void(0);"
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
                        href="javascript:void(0);"
                        className="inline-flex items-center justify-center w-12 h-12 text-base text-white transition-all duration-200 ease-in-out leading-inherit rounded-xl"
                      >
                        <img
                          className="w-full rounded-xl"
                          src="images/team-1.jpg"
                          alt="Image placeholder"
                        />
                      </a>
                    </div>
                    <div className="w-full max-w-full px-3 flex-1-0">
                      <h6 className="mb-0">
                        <a
                          className="dark:text-white/80"
                          href="javascript:void(0);"
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
                        href="javascript:void(0);"
                        className="inline-flex items-center justify-center w-12 h-12 text-base text-white transition-all duration-200 ease-in-out leading-inherit rounded-xl"
                      >
                        <img
                          className="w-full rounded-xl"
                          src="images/team-1.jpg"
                          alt="Image placeholder"
                        />
                      </a>
                    </div>
                    <div className="w-full max-w-full px-3 flex-1-0">
                      <h6 className="mb-0">
                        <a
                          className="dark:text-white/80"
                          href="javascript:void(0);"
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
    </>
  )
}

export default Dashboard