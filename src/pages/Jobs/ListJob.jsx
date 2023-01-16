import React from 'react'
import { Link } from 'react-router-dom'

function ListJob() {
  return (
    <>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 flex-0">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 pb-0">
              <div className="lg:flex">
                <div>
                  <h5 className="mb-0 dark:text-white">All Jobs</h5>
                </div>
                <div className="my-auto mt-6 ml-auto lg:mt-0">
                  <div className="my-auto ml-auto">
                    <Link to="/job/new">
                      <button
                        type="button"
                        className="inline-block px-8 py-2 m-0 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer tracking-tight-rem bg-gradient-to-tl from-blue-500 to-violet-500 bg-150 bg-x-25 hover:-translate-y-px active:-translate-y-px active:opacity-85"
                      >
                        +&nbsp; New Job
                      </button>
                    </Link>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-auto p-6 px-0 pb-0">
              <div className="overflow-x-auto table-responsive">
              <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                <div className="dataTable-top">
                  <div className="dataTable-dropdown">
                    <label>
                      <select className="dataTable-selector">
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                        <option value={25}>25</option>
                      </select>{" "}
                      entries per page
                    </label>
                  </div>
                  <div className="dataTable-search">
                    <input
                      className="dataTable-input focus:shadow-primary-outline dark:text-white/80 ease focus:outline-none focus:transition-shadow"
                      placeholder="Search..."
                      type="text"
                    />
                  </div>
                </div>
                <div className="dataTable-container">
                  <table
                    className="table mb-4 dataTable-table"
                    datatable=""
                    id="products-list"
                  >
                    <thead className="thead-light">
                      <tr>
                        <th data-sortable="" style={{ width: "30.798%" }}>
                          <a href="#" className="dataTable-sorter">
                            Job Title
                          </a>
                        </th>
                        <th data-sortable="" style={{ width: "12.0558%" }}>
                          <a href="#" className="dataTable-sorter">
                            Company
                          </a>
                        </th>
                        <th data-sortable="" style={{ width: "9.32044%" }}>
                          <a href="#" className="dataTable-sorter">
                            Employer Type
                          </a>
                        </th>
                        <th data-sortable="" style={{ width: "12.1571%" }}>
                          <a href="#" className="dataTable-sorter">
                            Applied
                          </a>
                        </th>
                        <th data-sortable="" style={{ width: "10.0296%" }}>
                          <a href="#" className="dataTable-sorter">
                            End Date
                          </a>
                        </th>
                        <th data-sortable="" style={{ width: "14.082%" }}>
                          <a href="#" className="dataTable-sorter">
                            Status
                          </a>
                        </th>
                        <th data-sortable="" style={{ width: "8.71258%" }}>
                          <a href="#" className="dataTable-sorter">
                            Action
                          </a>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="flex">
                            <h6 className="my-auto ml-4 dark:text-white">
                              Senior Software Engineer (Python)
                            </h6>
                          </div>
                        </td>
                        <td className="text-sm leading-normal">Athena TechHub</td>
                        <td className="text-sm leading-normal">Full time</td>
                        <td className="text-sm leading-normal">23</td>
                        <td className="text-sm leading-normal">10-Jan-2023</td>
                        <td>
                          <span className="py-1.2 px-2 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-emerald-600 bg-emerald-200">
                            Posted
                          </span>
                        </td>
                        <td className="text-sm leading-normal">
                          <Link to="/job/22">
                            <i
                              className="fas fa-eye text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </Link>
                          <a href="javascript:void(0);" className="mx-4">
                            <i
                              className="fas fa-user-edit text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                          <a href="javascript:void(0);">
                            <i
                              className="fas fa-trash text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="flex">
                            <h6 className="my-auto ml-4 dark:text-white">Senior Front-End Developer</h6>
                          </div>
                        </td>
                        <td className="text-sm leading-normal">Amanotes</td>
                        <td className="text-sm leading-normal">Full time</td>
                        <td className="text-sm leading-normal">5</td>
                        <td className="text-sm leading-normal">20-Feb-2023</td>
                        <td>
                          <span className="py-1.2 px-2 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-red-700 bg-red-200">
                            Expired
                          </span>
                        </td>
                        <td className="text-sm leading-normal">
                          <Link to="/job/22">
                            <i
                              className="fas fa-eye text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </Link>
                          <a href="javascript:void(0);" className="mx-4">
                            <i
                              className="fas fa-user-edit text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                          <a href="javascript:void(0);">
                            <i
                              className="fas fa-trash text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="flex">
                            <h6 className="my-auto ml-4 dark:text-white">Security Architect</h6>
                          </div>
                        </td>
                        <td className="text-sm leading-normal">GFT Technologies Vietnam</td>
                        <td className="text-sm leading-normal">Part time</td>
                        <td className="text-sm leading-normal">20</td>
                        <td className="text-sm leading-normal">02-June-2023</td>
                        <td>
                          <span className="py-1.2 px-2 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white bg-yellow-400">
                            Pending
                          </span>
                        </td>
                        <td className="text-sm leading-normal">
                          <Link to="/job/22">
                            <i
                              className="fas fa-eye text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </Link>
                          <a href="javascript:void(0);" className="mx-4">
                            <i
                              className="fas fa-user-edit text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                          <a href="javascript:void(0);">
                            <i
                              className="fas fa-trash text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="flex">
                            <h6 className="my-auto ml-4 dark:text-white">
                              Senior Software Engineer (Python)
                            </h6>
                          </div>
                        </td>
                        <td className="text-sm leading-normal">Athena TechHub</td>
                        <td className="text-sm leading-normal">Full time</td>
                        <td className="text-sm leading-normal">23</td>
                        <td className="text-sm leading-normal">10-Jan-2023</td>
                        <td>
                          <span className="py-1.2 px-2 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-emerald-600 bg-emerald-200">
                            Posted
                          </span>
                        </td>
                        <td className="text-sm leading-normal">
                          <Link to="/job/22">
                            <i
                              className="fas fa-eye text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </Link>
                          <a href="javascript:void(0);" className="mx-4">
                            <i
                              className="fas fa-user-edit text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                          <a href="javascript:void(0);">
                            <i
                              className="fas fa-trash text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="flex">
                            <h6 className="my-auto ml-4 dark:text-white">Senior Front-End Developer</h6>
                          </div>
                        </td>
                        <td className="text-sm leading-normal">Amanotes</td>
                        <td className="text-sm leading-normal">Full time</td>
                        <td className="text-sm leading-normal">5</td>
                        <td className="text-sm leading-normal">20-Feb-2023</td>
                        <td>
                          <span className="py-1.2 px-2 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-red-700 bg-red-200">
                            Expired
                          </span>
                        </td>
                        <td className="text-sm leading-normal">
                          <Link to="/job/22">
                            <i
                              className="fas fa-eye text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </Link>
                          <a href="javascript:void(0);" className="mx-4">
                            <i
                              className="fas fa-user-edit text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                          <a href="javascript:void(0);">
                            <i
                              className="fas fa-trash text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="flex">
                            <h6 className="my-auto ml-4 dark:text-white">Security Architect</h6>
                          </div>
                        </td>
                        <td className="text-sm leading-normal">GFT Technologies Vietnam</td>
                        <td className="text-sm leading-normal">Part time</td>
                        <td className="text-sm leading-normal">20</td>
                        <td className="text-sm leading-normal">02-June-2023</td>
                        <td>
                          <span className="py-1.2 px-2 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white bg-yellow-400">
                            Pending
                          </span>
                        </td>
                        <td className="text-sm leading-normal">
                          <Link to="/job/22">
                            <i
                              className="fas fa-eye text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </Link>
                          <a href="javascript:void(0);" className="mx-4">
                            <i
                              className="fas fa-user-edit text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                          <a href="javascript:void(0);">
                            <i
                              className="fas fa-trash text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="flex">
                            <h6 className="my-auto ml-4 dark:text-white">
                              Senior Software Engineer (Python)
                            </h6>
                          </div>
                        </td>
                        <td className="text-sm leading-normal">Athena TechHub</td>
                        <td className="text-sm leading-normal">Full time</td>
                        <td className="text-sm leading-normal">23</td>
                        <td className="text-sm leading-normal">10-Jan-2023</td>
                        <td>
                          <span className="py-1.2 px-2 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-emerald-600 bg-emerald-200">
                            Posted
                          </span>
                        </td>
                        <td className="text-sm leading-normal">
                          <Link to="/job/22">
                            <i
                              className="fas fa-eye text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </Link>
                          <a href="javascript:void(0);" className="mx-4">
                            <i
                              className="fas fa-user-edit text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                          <a href="javascript:void(0);">
                            <i
                              className="fas fa-trash text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="flex">
                            <h6 className="my-auto ml-4 dark:text-white">Senior Front-End Developer</h6>
                          </div>
                        </td>
                        <td className="text-sm leading-normal">Amanotes</td>
                        <td className="text-sm leading-normal">Full time</td>
                        <td className="text-sm leading-normal">5</td>
                        <td className="text-sm leading-normal">20-Feb-2023</td>
                        <td>
                          <span className="py-1.2 px-2 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-red-700 bg-red-200">
                            Expired
                          </span>
                        </td>
                        <td className="text-sm leading-normal">
                          <Link to="/job/22">
                            <i
                              className="fas fa-eye text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </Link>
                          <a href="javascript:void(0);" className="mx-4">
                            <i
                              className="fas fa-user-edit text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                          <a href="javascript:void(0);">
                            <i
                              className="fas fa-trash text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="flex">
                            <h6 className="my-auto ml-4 dark:text-white">Security Architect</h6>
                          </div>
                        </td>
                        <td className="text-sm leading-normal">GFT Technologies Vietnam</td>
                        <td className="text-sm leading-normal">Part time</td>
                        <td className="text-sm leading-normal">20</td>
                        <td className="text-sm leading-normal">02-June-2023</td>
                        <td>
                          <span className="py-1.2 px-2 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white bg-yellow-400">
                            Pending
                          </span>
                        </td>
                        <td className="text-sm leading-normal">
                          <Link to="/job/22">
                            <i
                              className="fas fa-eye text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </Link>
                          <a href="javascript:void(0);" className="mx-4">
                            <i
                              className="fas fa-user-edit text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                          <a href="javascript:void(0);">
                            <i
                              className="fas fa-trash text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="flex">
                            <h6 className="my-auto ml-4 dark:text-white">Security Architect</h6>
                          </div>
                        </td>
                        <td className="text-sm leading-normal">GFT Technologies Vietnam</td>
                        <td className="text-sm leading-normal">Part time</td>
                        <td className="text-sm leading-normal">20</td>
                        <td className="text-sm leading-normal">02-June-2023</td>
                        <td>
                          <span className="py-1.2 px-2 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white bg-yellow-400">
                            Pending
                          </span>
                        </td>
                        <td className="text-sm leading-normal">
                          <Link to="/job/22">
                            <i
                              className="fas fa-eye text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </Link>
                          <a href="javascript:void(0);" className="mx-4">
                            <i
                              className="fas fa-user-edit text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                          <a href="javascript:void(0);">
                            <i
                              className="fas fa-trash text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="dataTable-bottom">
                  <div className="dataTable-info">Showing 1 to 7 of 15 entries</div>
                  <nav className="dataTable-pagination">
                    <ul className="dataTable-pagination-list">
                      <li className="pager">
                        <a href="#" data-page={1}>
                          ‹
                        </a>
                      </li>
                      <li className="active">
                        <a href="#" data-page={1}>
                          1
                        </a>
                      </li>
                      <li className="">
                        <a href="#" data-page={2}>
                          2
                        </a>
                      </li>
                      <li className="">
                        <a href="#" data-page={3}>
                          3
                        </a>
                      </li>
                      <li className="pager">
                        <a href="#" data-page={2}>
                          ›
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default ListJob