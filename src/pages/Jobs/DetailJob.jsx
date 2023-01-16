import React from 'react'

function DetailJob() {
  return (
    <div className="flex flex-wrap -mx-3">
      <div className="w-full max-w-full px-3 flex-0">
        <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-6">
            <h5 className="mb-6 dark:text-white">Job Details</h5>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full max-w-full px-3 text-center shrink-0 lg:flex-0 lg:w-6/12 xl:w-5/12">
                <img
                  className="w-full mx-auto rounded-xl shadow-3xl"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb.jpg"
                  alt="chair"
                />
                <div
                  photo-swipe-gallery=""
                  className="flex pt-2 mt-6"
                  itemScope=""
                  itemType="http://schema.org/ImageGallery"
                >
                  <figure
                    className="px-2 mb-4"
                    itemProp="associatedMedia"
                    itemScope=""
                    itemType="http://schema.org/ImageObject"
                  >
                    <a
                      href="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-1.jpg"
                      itemProp="contentUrl"
                      data-size="500x600"
                    >
                      <img
                        className="w-full shadow-sm min-h-25 max-h-25 rounded-xl"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-1.jpg"
                        alt="Image description"
                      />
                    </a>
                  </figure>
                  <figure
                    className="px-2 mb-4"
                    itemProp="associatedMedia"
                    itemScope=""
                    itemType="http://schema.org/ImageObject"
                  >
                    <a
                      href="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-2.jpg"
                      itemProp="contentUrl"
                      data-size="500x600"
                    >
                      <img
                        className="w-full shadow-sm min-h-25 max-h-25 rounded-xl"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-2.jpg"
                        itemProp="thumbnail"
                        alt="Image description"
                      />
                    </a>
                  </figure>
                  <figure
                    className="px-2 mb-4"
                    itemProp="associatedMedia"
                    itemScope=""
                    itemType="http://schema.org/ImageObject"
                  >
                    <a
                      href="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-3.jpg"
                      itemProp="contentUrl"
                      data-size="500x600"
                    >
                      <img
                        className="w-full shadow-sm min-h-25 max-h-25 rounded-xl"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-3.jpg"
                        itemProp="thumbnail"
                        alt="Image description"
                      />
                    </a>
                  </figure>
                  <figure
                    className="px-2 mb-4"
                    itemProp="associatedMedia"
                    itemScope=""
                    itemType="http://schema.org/ImageObject"
                  >
                    <a
                      href="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-4.jpg"
                      itemProp="contentUrl"
                      data-size="500x600"
                    >
                      <img
                        className="w-full shadow-sm min-h-25 max-h-25 rounded-xl"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-4.jpg"
                        itemProp="thumbnail"
                        alt="Image description"
                      />
                    </a>
                  </figure>
                  <figure
                    className="pl-2 mb-4"
                    itemProp="associatedMedia"
                    itemScope=""
                    itemType="http://schema.org/ImageObject"
                  >
                    <a
                      href="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-5.jpg"
                      itemProp="contentUrl"
                      data-size="500x600"
                    >
                      <img
                        className="w-full shadow-sm min-h-25 max-h-25 rounded-xl"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-5.jpg"
                        itemProp="thumbnail"
                        alt="Image description"
                      />
                    </a>
                  </figure>
                </div>
                {/* Root element of PhotoSwipe. Must have class pswp. */}
                <div
                  className="pswp"
                  tabIndex={-1}
                  role="dialog"
                  aria-hidden="true"
                >
                  {/* Background of PhotoSwipe. It's a separate element, as animating opacity is faster than rgba(). */}
                  <div className="pswp__bg" />
                  {/* Slides wrapper with overflow:hidden. */}
                  <div className="pswp__scroll-wrap">
                    {/* Container that holds slides. PhotoSwipe keeps only 3 slides in DOM to save memory. */}
                    {/* don't modify these 3 pswp__item elements, data is added later on. */}
                    <div className="pswp__container">
                      <div className="pswp__item" />
                      <div className="pswp__item" />
                      <div className="pswp__item" />
                    </div>
                    {/* Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. */}
                    <div className="pswp__ui pswp__ui--hidden">
                      <div className="pswp__top-bar">
                        {/*  Controls are self-explanatory. Order can be changed. */}
                        <div className="pswp__counter" />
                        <button className="inline-block px-8 py-2 mb-4 text-xs font-bold text-center text-black uppercase align-middle transition-all ease-in bg-white border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs leading-pro tracking-tight-rem pswp__button pswp__button--close">
                          Close (Esc)
                        </button>
                        <button className="inline-block px-8 py-2 mb-4 text-xs font-bold text-center text-black uppercase align-middle transition-all ease-in bg-white border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs leading-pro tracking-tight-rem pswp__button pswp__button--fs">
                          Fullscreen
                        </button>
                        <button className="inline-block px-8 py-2 mb-4 text-xs font-bold text-center text-black uppercase align-middle transition-all ease-in bg-white border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs leading-pro tracking-tight-rem pswp__button pswp__button--arrow--left">
                          Prev
                        </button>
                        <button className="inline-block px-8 py-2 mb-4 text-xs font-bold text-center text-black uppercase align-middle transition-all ease-in bg-white border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs leading-pro tracking-tight-rem pswp__button pswp__button--arrow--right">
                          Next
                        </button>
                        {/* Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR */}
                        {/* element will get class pswp__preloader--active when preloader is running */}
                        <div className="pswp__preloader">
                          <div className="pswp__preloader__icn">
                            <div className="pswp__preloader__cut">
                              <div className="pswp__preloader__donut" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                        <div className="pswp__share-tooltip" />
                      </div>
                      <div className="pswp__caption">
                        <div className="pswp__caption__center" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-full px-3 mx-auto shrink-0 lg:flex-0 lg:w-5/12">
                <h3 className="mt-6 dark:text-white lg:mt-0">Apple Bundle </h3>
                <div className="float-left border-0">
                  <i className="fas fa-star" aria-hidden="true" />
                  <i className="fas fa-star" aria-hidden="true" />
                  <i className="fas fa-star" aria-hidden="true" />
                  <i className="fas fa-star" aria-hidden="true" />
                  <i className="fas fa-star-half-alt" aria-hidden="true" />
                </div>
                <br />
                <h6 className="mt-4 mb-0 dark:text-white">Price</h6>
                <h5 className="dark:text-white">$1,419</h5>
                <span className="py-1.6 px-2.6 text-xs leading-none rounded-1.8 inline-block whitespace-nowrap bg-emerald-200 text-center align-baseline font-bold uppercase text-emerald-600">
                  In Stock
                </span>
                <br />
                <label className="inline-block mt-6 mb-2 ml-1 text-xs font-bold leading-default text-slate-700 dark:text-white/80">
                  Description
                </label>
                <ul className="pl-8 mt-0 mb-4 list-disc">
                  <li>
                    The most beautiful curves of this swivel stool adds an elegant
                    touch to any environment
                  </li>
                  <li>Memory swivel seat returns to original seat position</li>
                  <li>Comfortable integrated layered chair seat cushion design</li>
                  <li>Fully assembled! No assembly required</li>
                </ul>
                <div className="flex flex-wrap mt-6 -mx-3">
                  <div className="w-full max-w-full px-3 mt-2 shrink-0 lg:mt-0 lg:flex-0 lg:w-5/12">
                    <label
                      className="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80"
                      htmlFor="material"
                    >
                      Frame Material
                    </label>
                    <select choice="" name="material" choices-select="">
                      <option value="Choice 1" selected="">
                        Wood
                      </option>
                      <option value="Choice 2">Steel</option>
                      <option value="Choice 3">Aluminium</option>
                      <option value="Choice 4">Carbon</option>
                    </select>
                  </div>
                  <div className="w-full max-w-full px-3 mt-2 shrink-0 lg:mt-0 lg:flex-0 lg:w-5/12">
                    <label
                      className="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80"
                      htmlFor="color"
                    >
                      Color
                    </label>
                    <select choice="" name="color" choices-select="">
                      <option value="Choice 1" selected="">
                        White
                      </option>
                      <option value="Choice 2">Gray</option>
                      <option value="Choice 3">Black</option>
                      <option value="Choice 4">Blue</option>
                      <option value="Choice 5">Red</option>
                      <option value="Choice 6">Pink</option>
                    </select>
                  </div>
                  <div className="w-full max-w-full px-3 shrink-0 lg:flex-0 lg:w-2/12">
                    <label
                      className="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80"
                      htmlFor="quantity"
                    >
                      Quantity
                    </label>
                    <select name="quantity" choices-select="">
                      <option value="Choice 1" selected="">
                        1
                      </option>
                      <option value="Choice 2">2</option>
                      <option value="Choice 3">3</option>
                      <option value="Choice 4">4</option>
                      <option value="Choice 5">5</option>
                      <option value="Choice 6">6</option>
                      <option value="Choice 7">7</option>
                      <option value="Choice 8">8</option>
                      <option value="Choice 9">9</option>
                      <option value="Choice 10">10</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-wrap mt-6 -mx-3">
                  <div className="w-full max-w-full px-3 shrink-0 lg:flex-0 lg:w-5/12">
                    <button
                      type="button"
                      className="inline-block w-full px-5 py-2.5 mb-0 text-sm font-bold text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer lg:mt-auto hover:-translate-y-px active:opacity-85 hover:shadow-xs bg-blue-500 leading-normal tracking-tight-rem bg-150 bg-x-25"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 -mx-3">
              <div className="w-full max-w-full px-3 flex-0">
                <h5 className="ml-4 dark:text-white">Other Products</h5>
                <div className="w-full mb-4 overflow-x-auto align-top border-gray-200 text-slate-500">
                  <table className="items-center justify-center w-full mb-0 align-top border-collapse border-gray-200 text-slate-500 dark:text-white/80">
                    <thead className="align-bottom">
                      <tr>
                        <th className="px-6 py-3 font-bold uppercase align-middle border-b border-gray-200 border-solid text-xxs text-slate-400 opacity-70 whitespace-nowrap tracking-none">
                          Product
                        </th>
                        <th className="px-6 py-3 pl-2 font-bold uppercase align-middle border-b border-gray-200 border-solid text-xxs text-slate-400 opacity-70 whitespace-nowrap tracking-none">
                          Price
                        </th>
                        <th className="px-6 py-3 pl-2 font-bold uppercase align-middle border-b border-gray-200 border-solid text-xxs text-slate-400 opacity-70 whitespace-nowrap tracking-none">
                          Review
                        </th>
                        <th className="px-6 py-3 font-bold text-center uppercase align-middle border-b border-gray-200 border-solid text-xxs text-slate-400 opacity-70 whitespace-nowrap tracking-none">
                          Availability
                        </th>
                        <th className="px-6 py-3 font-bold text-center uppercase align-middle border-b border-gray-200 border-solid text-xxs text-slate-400 opacity-70 whitespace-nowrap tracking-none">
                          ID
                        </th>
                      </tr>
                    </thead>
                    <tbody className="align-top">
                      <tr>
                        <td className="p-2 align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <div className="flex px-2 py-1">
                            <div>
                              <img
                                className="inline-flex items-center justify-center w-12 h-12 mr-4 text-base text-white transition-all duration-200 ease-in-out rounded-xl"
                                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-1.jpg"
                                alt="product image"
                              />
                            </div>
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-0 text-sm leading-normal dark:text-white">
                                Christopher Knight Home
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <p className="mb-0 text-sm leading-normal text-slate-400">
                            $89.53
                          </p>
                        </td>
                        <td className="p-2 align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <div className="float-left border-0 lg:-ml-6">
                            <i className="fas fa-star" aria-hidden="true" />
                            <i className="fas fa-star" aria-hidden="true" />
                            <i className="fas fa-star" aria-hidden="true" />
                            <i className="fas fa-star" aria-hidden="true" />
                            <i
                              className="fas fa-star-half-alt"
                              aria-hidden="true"
                            />
                          </div>
                        </td>
                        <td className="p-2 text-sm leading-normal align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <div className="h-0.75 w-30 text-xs flex overflow-visible rounded-lg bg-gray-200 mx-auto">
                            <div className="transition-width w-4/5 duration-600 ease rounded-1 -ml-px flex h-0.75 flex-col justify-center overflow-hidden whitespace-nowrap bg-gradient-to-tl from-emerald-500 to-teal-400 text-center text-white" />
                          </div>
                        </td>
                        <td className="p-2 text-center align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <span className="text-sm leading-normal text-slate-400">
                            230019
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <div className="flex px-2 py-1">
                            <div>
                              <img
                                className="inline-flex items-center justify-center w-12 h-12 mr-4 text-base text-white transition-all duration-200 ease-in-out rounded-xl"
                                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-2.jpg"
                                alt="product image"
                              />
                            </div>
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-0 text-sm leading-normal dark:text-white">
                                Bar Height Swivel Barstool
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <p className="mb-0 text-sm leading-normal text-slate-400">
                            $99.99
                          </p>
                        </td>
                        <td className="p-2 align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <div className="float-left border-0 lg:-ml-6">
                            <i className="fas fa-star" aria-hidden="true" />
                            <i className="fas fa-star" aria-hidden="true" />
                            <i className="fas fa-star" aria-hidden="true" />
                            <i className="fas fa-star" aria-hidden="true" />
                            <i className="fas fa-star" aria-hidden="true" />
                          </div>
                        </td>
                        <td className="p-2 text-sm leading-normal align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <div className="h-0.75 w-30 text-xs flex overflow-visible rounded-lg bg-gray-200 mx-auto">
                            <div className="transition-width w-9/10 duration-600 ease rounded-1 -ml-px flex h-0.75 flex-col justify-center overflow-hidden whitespace-nowrap bg-gradient-to-tl from-emerald-500 to-teal-400 text-center text-white" />
                          </div>
                        </td>
                        <td className="p-2 text-center align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <span className="text-sm leading-normal text-slate-400">
                            87120
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <div className="flex px-2 py-1">
                            <div>
                              <img
                                className="inline-flex items-center justify-center w-12 h-12 mr-4 text-base text-white transition-all duration-200 ease-in-out rounded-xl"
                                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-3.jpg"
                                alt="product image"
                              />
                            </div>
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-0 text-sm leading-normal dark:text-white">
                                Signature Design by Ashley
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <p className="mb-0 text-sm leading-normal text-slate-400">
                            $129.00
                          </p>
                        </td>
                        <td className="p-2 align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <div className="float-left border-0 lg:-ml-6">
                            <i className="fas fa-star" aria-hidden="true" />
                            <i className="fas fa-star" aria-hidden="true" />
                            <i className="fas fa-star" aria-hidden="true" />
                            <i className="fas fa-star" aria-hidden="true" />
                            <i
                              className="fas fa-star-half-alt"
                              aria-hidden="true"
                            />
                          </div>
                        </td>
                        <td className="p-2 text-sm leading-normal align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <div className="h-0.75 w-30 text-xs flex overflow-visible rounded-lg bg-gray-200 mx-auto">
                            <div className="transition-width w-3/5 duration-600 ease rounded-1 -ml-px flex h-0.75 flex-col justify-center overflow-hidden whitespace-nowrap bg-gradient-to-tl from-orange-500 to-yellow-500 text-center text-white" />
                          </div>
                        </td>
                        <td className="p-2 text-center align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <span className="text-sm leading-normal text-slate-400">
                            412301
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <div className="flex px-2 py-1">
                            <div>
                              <img
                                className="inline-flex items-center justify-center w-12 h-12 mr-4 text-base text-white transition-all duration-200 ease-in-out rounded-xl"
                                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-4.jpg"
                                alt="product image"
                              />
                            </div>
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-0 text-sm leading-normal dark:text-white">
                                Modern Square
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <p className="mb-0 text-sm leading-normal text-slate-400">
                            $59.99
                          </p>
                        </td>
                        <td className="p-2 align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <div className="float-left border-0 lg:-ml-6">
                            <i className="fas fa-star" aria-hidden="true" />
                            <i className="fas fa-star" aria-hidden="true" />
                            <i className="fas fa-star" aria-hidden="true" />
                            <i className="fas fa-star" aria-hidden="true" />
                            <i
                              className="fas fa-star-half-alt"
                              aria-hidden="true"
                            />
                          </div>
                        </td>
                        <td className="p-2 text-sm leading-normal align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <div className="h-0.75 w-30 text-xs flex overflow-visible rounded-lg bg-gray-200 mx-auto">
                            <div className="transition-width w-2/5 duration-600 ease rounded-1 -ml-px flex h-0.75 flex-col justify-center overflow-hidden whitespace-nowrap bg-gradient-to-tl from-orange-500 to-yellow-500 text-center text-white" />
                          </div>
                        </td>
                        <td className="p-2 text-center align-middle border-b border-solid whitespace-nowrap border-inherit">
                          <span className="text-sm leading-normal text-slate-400">
                            001992
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
    </div>
  )
}

export default DetailJob