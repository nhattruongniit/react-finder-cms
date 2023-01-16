import React from 'react'

function ListJob() {
  return (
    <div className="w-full p-6 mx-auto">
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
                    <button
                      type="button"
                      className="inline-block px-8 py-2 m-0 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer tracking-tight-rem bg-gradient-to-tl from-blue-500 to-violet-500 bg-150 bg-x-25 hover:-translate-y-px active:-translate-y-px active:opacity-85"
                    >
                      +&nbsp; New Job
                    </button>
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
                            Product
                          </a>
                        </th>
                        <th data-sortable="" style={{ width: "12.0558%" }}>
                          <a href="#" className="dataTable-sorter">
                            Category
                          </a>
                        </th>
                        <th data-sortable="" style={{ width: "9.32044%" }}>
                          <a href="#" className="dataTable-sorter">
                            Price
                          </a>
                        </th>
                        <th data-sortable="" style={{ width: "12.1571%" }}>
                          <a href="#" className="dataTable-sorter">
                            SKU
                          </a>
                        </th>
                        <th data-sortable="" style={{ width: "10.0296%" }}>
                          <a href="#" className="dataTable-sorter">
                            Quantity
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
                            <div className="block my-auto min-h-6 pl-7">
                              <input
                                className="w-5 h-5 ease -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-blue-500 checked:to-violet-500 after:text-xxs after:font-awesome after:duration-250 after:ease-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                                type="checkbox"
                                id="customCheck1"
                                defaultChecked=""
                              />
                            </div>
                            <img
                              className="ml-4 w-1/10"
                              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/adidas-hoodie.jpg"
                              alt="hoodie"
                            />
                            <h6 className="my-auto ml-4 dark:text-white">
                              BKLGO Full Zip Hoodie
                            </h6>
                          </div>
                        </td>
                        <td className="text-sm leading-normal">Clothing</td>
                        <td className="text-sm leading-normal">$1,321</td>
                        <td className="text-sm leading-normal">243598234</td>
                        <td className="text-sm leading-normal">0</td>
                        <td>
                          <span className="py-1.2 px-2 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-red-700 bg-red-200">
                            Out of Stock
                          </span>
                        </td>
                        <td className="text-sm leading-normal">
                          <a href="javascript:;">
                            <i
                              className="fas fa-eye text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                          <a href="javascript:;" className="mx-4">
                            <i
                              className="fas fa-user-edit text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                          <a href="javascript:;">
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
                            <div className="block my-auto min-h-6 pl-7">
                              <input
                                className="w-5 h-5 ease -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-blue-500 checked:to-violet-500 after:text-xxs after:font-awesome after:duration-250 after:ease-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                                type="checkbox"
                                id="customCheck2"
                                defaultChecked=""
                              />
                            </div>
                            <img
                              className="ml-4 w-1/10"
                              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/macbook-pro.jpg"
                              alt="mac"
                            />
                            <h6 className="my-auto ml-4 dark:text-white">MacBook Pro</h6>
                          </div>
                        </td>
                        <td className="text-sm leading-normal">Electronics</td>
                        <td className="text-sm leading-normal">$1,869</td>
                        <td className="text-sm leading-normal">877712</td>
                        <td className="text-sm leading-normal">0</td>
                        <td>
                          <span className="py-1.2 px-2 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-red-700 bg-red-200">
                            Out of Stock
                          </span>
                        </td>
                        <td className="text-sm leading-normal">
                          <a href="javascript:;">
                            <i
                              className="fas fa-eye text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                          <a href="javascript:;" className="mx-4">
                            <i
                              className="fas fa-user-edit text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                          <a href="javascript:;">
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
                            <div className="block my-auto min-h-6 pl-7">
                              <input
                                className="w-5 h-5 ease -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-blue-500 checked:to-violet-500 after:text-xxs after:font-awesome after:duration-250 after:ease-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                                type="checkbox"
                                id="customCheck3"
                              />
                            </div>
                            <img
                              className="ml-4 w-1/10"
                              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/metro-chair.jpg"
                              alt="metro-chair"
                            />
                            <h6 className="my-auto ml-4 dark:text-white">Metro Bar Stool</h6>
                          </div>
                        </td>
                        <td className="text-sm leading-normal">Furniture</td>
                        <td className="text-sm leading-normal">$99</td>
                        <td className="text-sm leading-normal">0134729</td>
                        <td className="text-sm leading-normal">978</td>
                        <td>
                          <span className="py-1.2 px-2 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-emerald-600 bg-emerald-200">
                            in Stock
                          </span>
                        </td>
                        <td className="text-sm leading-normal">
                          <a href="javascript:;">
                            <i
                              className="fas fa-eye text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                          <a href="javascript:;" className="mx-4">
                            <i
                              className="fas fa-user-edit text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                          <a href="javascript:;">
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
                            <div className="block my-auto min-h-6 pl-7">
                              <input
                                className="w-5 h-5 ease -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-blue-500 checked:to-violet-500 after:text-xxs after:font-awesome after:duration-250 after:ease-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                                type="checkbox"
                                id="customCheck10"
                              />
                            </div>
                            <img
                              className="ml-4 w-1/10"
                              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/alchimia-chair.jpg"
                              alt="alchimia"
                            />
                            <h6 className="my-auto ml-4 dark:text-white">Alchimia Chair</h6>
                          </div>
                        </td>
                        <td className="text-sm leading-normal">Furniture</td>
                        <td className="text-sm leading-normal">$2,999</td>
                        <td className="text-sm leading-normal">113213</td>
                        <td className="text-sm leading-normal">0</td>
                        <td>
                          <span className="py-1.2 px-2 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-red-700 bg-red-200">
                            Out of Stock
                          </span>
                        </td>
                        <td className="text-sm leading-normal">
                          <a href="javascript:;">
                            <i
                              className="fas fa-eye text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                          <a href="javascript:;" className="mx-4">
                            <i
                              className="fas fa-user-edit text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                          <a href="javascript:;">
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
                            <div className="block my-auto min-h-6 pl-7">
                              <input
                                className="w-5 h-5 ease -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-blue-500 checked:to-violet-500 after:text-xxs after:font-awesome after:duration-250 after:ease-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                                type="checkbox"
                                id="customCheck5"
                              />
                            </div>
                            <img
                              className="ml-4 w-1/10"
                              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/fendi-coat.jpg"
                              alt="fendi"
                            />
                            <h6 className="my-auto ml-4 dark:text-white">
                              Fendi Gradient Coat
                            </h6>
                          </div>
                        </td>
                        <td className="text-sm leading-normal">Clothing</td>
                        <td className="text-sm leading-normal">$869</td>
                        <td className="text-sm leading-normal">634729</td>
                        <td className="text-sm leading-normal">725</td>
                        <td>
                          <span className="py-1.2 px-2 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-emerald-600 bg-emerald-200">
                            in Stock
                          </span>
                        </td>
                        <td className="text-sm leading-normal">
                          <a href="javascript:;">
                            <i
                              className="fas fa-eye text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                          <a href="javascript:;" className="mx-4">
                            <i
                              className="fas fa-user-edit text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                          <a href="javascript:;">
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
                            <div className="block my-auto min-h-6 pl-7">
                              <input
                                className="w-5 h-5 ease -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-blue-500 checked:to-violet-500 after:text-xxs after:font-awesome after:duration-250 after:ease-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                                type="checkbox"
                                id="customCheck6"
                              />
                            </div>
                            <img
                              className="ml-4 w-1/10"
                              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/off-white-jacket.jpg"
                              alt="off_white"
                            />
                            <h6 className="my-auto ml-4 dark:text-white">
                              Off White Cotton Bomber
                            </h6>
                          </div>
                        </td>
                        <td className="text-sm leading-normal">Clothing</td>
                        <td className="text-sm leading-normal">$1,869</td>
                        <td className="text-sm leading-normal">634729</td>
                        <td className="text-sm leading-normal">725</td>
                        <td>
                          <span className="py-1.2 px-2 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-emerald-600 bg-emerald-200">
                            in Stock
                          </span>
                        </td>
                        <td className="text-sm leading-normal">
                          <a href="javascript:;">
                            <i
                              className="fas fa-eye text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                          <a href="javascript:;" className="mx-4">
                            <i
                              className="fas fa-user-edit text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                          <a href="javascript:;">
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
                            <div className="block my-auto min-h-6 pl-7">
                              <input
                                className="w-5 h-5 ease -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-blue-500 checked:to-violet-500 after:text-xxs after:font-awesome after:duration-250 after:ease-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                                type="checkbox"
                                id="customCheck7"
                                defaultChecked=""
                              />
                            </div>
                            <img
                              className="ml-4 w-1/10"
                              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/yohji-yamamoto.jpg"
                              alt="yohji"
                            />
                            <h6 className="my-auto ml-4 dark:text-white">
                              Y-3 Yohji Yamamoto
                            </h6>
                          </div>
                        </td>
                        <td className="text-sm leading-normal">Shoes</td>
                        <td className="text-sm leading-normal">$869</td>
                        <td className="text-sm leading-normal">634729</td>
                        <td className="text-sm leading-normal">725</td>
                        <td>
                          <span className="py-1.2 px-2 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-emerald-600 bg-emerald-200">
                            In Stock
                          </span>
                        </td>
                        <td className="text-sm leading-normal">
                          <a href="javascript:;">
                            <i
                              className="fas fa-eye text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                          <a href="javascript:;" className="mx-4">
                            <i
                              className="fas fa-user-edit text-slate-400 dark:text-white/70"
                              aria-hidden="true"
                            />
                          </a>
                          <a href="javascript:;">
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
    </div>

  )
}

export default ListJob