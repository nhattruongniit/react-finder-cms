import React from "react";

function DetailJob() {
  return (
    <div className="flex flex-wrap -mx-3">
      <div className="w-full max-w-full px-3 flex-0">
        <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-6">
            <h5 className="mb-6 dark:text-white">Job Details</h5>
            <div className="flex flex-wrap">
              <div className="w-full max-w-full px-3 mx-auto shrink-0 lg:flex-0">
                <h3 className="mt-6 dark:text-white lg:mt-0">
                  Senior Software Engineer (Python)
                </h3>
                <h6 className="mt-4 mb-0 dark:text-white text-slate-500">
                  Tech / Ho Chi Minh City, Vietnam
                </h6>
              </div>
            </div>
            <div className="mt-12">
              <h5 className="ml-4  dark:text-white">Description</h5>
              <ul className="pl-8 mt-5 mb-4 list-disc">
                <li>
                  The most beautiful curves of this swivel stool adds an elegant
                  touch to any environment
                </li>
                <li>Memory swivel seat returns to original seat position</li>
                <li>
                  Comfortable integrated layered chair seat cushion design
                </li>
                <li>Fully assembled! No assembly required</li>
              </ul>
            </div>
            <div className="flex flex-wrap mt-12 -mx-3">
              <div className="w-full max-w-full px-3 flex-0">
                <h5 className="ml-4 dark:text-white">APPLIED</h5>
                <div className="w-full mb-4 overflow-x-auto align-top border-gray-200 text-slate-500">
                  <table className="items-center justify-center w-full mb-0 align-top border-collapse border-gray-200 text-slate-500 dark:text-white/80">
                    <thead className="align-bottom">
                      <tr>
                        <th className="px-6 py-3 font-bold uppercase align-middle border-b border-gray-200 border-solid text-xxs text-slate-400 opacity-70 whitespace-nowrap tracking-none">
                          Name
                        </th>
                        <th className="px-6 py-3 pl-2 font-bold uppercase align-middle border-b border-gray-200 border-solid text-xxs text-slate-400 opacity-70 whitespace-nowrap tracking-none">
                          Applied Date
                        </th>
                        <th className="px-6 py-3 font-bold text-center uppercase align-middle border-b border-gray-200 border-solid text-xxs text-slate-400 opacity-70 whitespace-nowrap tracking-none">
                          Status
                        </th>
                        <th className="px-6 py-3 font-bold text-center uppercase align-middle border-b border-gray-200 border-solid text-xxs text-slate-400 opacity-70 whitespace-nowrap tracking-none">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="align-top">
                      <tr>
                        <td className="p-2 align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <div className="flex px-2 py-1">
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-0 text-sm leading-normal dark:text-white">
                                Tony Nguyen
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <p className="mb-0 text-sm leading-normal text-slate-400">
                            20-Dev-2023
                          </p>
                        </td>
                        <td className="p-2 text-sm leading-normal align-middle border-b border-solid whitespace-nowrap border-inherit text-center">
                          <span class="py-1.2 px-2 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-emerald-600 bg-emerald-200">
                            Passed
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <a href="javascript:void(0);">
                            <i
                              className="fas fa-eye text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <div className="flex px-2 py-1">
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-0 text-sm leading-normal dark:text-white">
                                Tony Nguyen
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <p className="mb-0 text-sm leading-normal text-slate-400">
                            20-Dev-2023
                          </p>
                        </td>
                        <td className="p-2 text-sm leading-normal align-middle border-b border-solid whitespace-nowrap border-inherit text-center">
                          <span class="py-1.2 px-2 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-red-700 bg-red-200">
                            Rejected
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <a href="javascript:void(0);">
                            <i
                              className="fas fa-eye text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <div className="flex px-2 py-1">
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-0 text-sm leading-normal dark:text-white">
                                Tony Nguyen
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <p className="mb-0 text-sm leading-normal text-slate-400">
                            20-Dev-2023
                          </p>
                        </td>
                        <td className="p-2 text-sm leading-normal align-middle border-b border-solid whitespace-nowrap border-inherit text-center">
                          <span class="py-1.2 px-2 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white bg-yellow-400">
                            In process
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <a href="javascript:void(0);">
                            <i
                              className="fas fa-eye text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
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
    </div>
  );
}

export default DetailJob;
