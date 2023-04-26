import React from "react";
import BlogPost from "./BlogPost.jsx";

function BlogPosts2() {
  return (
    <>
      <div className="py-10 text-center">
        <div className="px-4 xl:max-w-7xl xl:mx-auto">
          <h1 className="font-black tracking-normal text-3xl dark:text-slate-100 sm:text-4xl sm:text-slate-900">
            Popular Cities
          </h1>
          <p className="mt-3 text-lg dark:text-gray-300 sm:max-w-lg sm:mx-auto">
            Travel across the world, with Shiloh Travel & Tours
          </p>
          <div className="grid grid-cols-2 gap-2 mt-7 sm:px-16 lg:grid-cols-8 lg:grid-rows-2 lg:gap-3">
            <div className="col-span-2 lg:col-span-4 lg:row-span-2 cursor-pointer">
              <div className="relative">
                <img
                  className="w-full bg-blue-50"
                  src="https://picsum.photos/502"
                />
                <div class="absolute inset-0 z-10 bg-opacity-50 bg-gray-900"></div>
                <div class="absolute inset-0 z-20 flex items-center justify-end pb-10">
                  <div class="container mx-auto px-4 mt-auto">
                    <div class="flex justify-between items-center">
                      <h2 class="text-2xl sm:text-2xl md:text-2xl font-bold text-white leading-tight mb-4">
                        Kerala Tour Packages
                      </h2>
                      <div>
                        <p className="text-xl sm:text-xl md:text-xl font-bold text-white leading-tight mb-4">
                          12 Packages
                        </p>
                        <p className="text-xl sm:text-xl md:text-xl font-bold text-white leading-tight mb-4">
                          Starting from 18000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 relative cursor-pointer">
              <img
                className="w-full bg-blue-50"
                src="https://picsum.photos/300"
              />
              <div class="absolute inset-0 z-10 bg-opacity-50 bg-gray-900"></div>
              <div class="absolute inset-0 z-20 flex items-end justify-end pb-1">
                <div class="container mx-auto px-4 mt-auto">
                  <div class="flex flex-col justify-end items-center">
                    <h2 class="text-xl sm:text-xl md:text-xl font-bold text-white leading-tight mb-1">
                      Kerala Tour Packages
                    </h2>
                    <p className="text-xl sm:text-xl md:text-xl font-bold text-white leading-tight mb-1">
                      12 Packages
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 relative cursor-pointer">
              <img
                className="w-full bg-blue-50"
                src="https://picsum.photos/303"
              />
              <div class="absolute inset-0 z-10 bg-opacity-50 bg-gray-900"></div>
              <div class="absolute inset-0 z-20 flex items-end justify-end pb-1">
                <div class="container mx-auto px-4 mt-auto">
                  <div class="flex flex-col justify-end items-center">
                    <h2 class="text-xl sm:text-xl md:text-xl font-bold text-white leading-tight mb-1">
                      Kerala Tour Packages
                    </h2>
                    <p className="text-xl sm:text-xl md:text-xl font-bold text-white leading-tight mb-1">
                      12 Packages
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 lg:block lg:col-span-4 relative cursor-pointer">
              <img
                className="w-full bg-blue-50"
                src="https://picsum.photos/602/296"
              />
              <div class="absolute inset-0 z-10 bg-opacity-50 bg-gray-900"></div>
              <div class="absolute inset-0 z-20 flex items-end justify-end pb-1">
                <div class="container mx-auto px-4 mt-auto">
                  <div class="flex flex-col justify-end items-center">
                    <h2 class="text-xl sm:text-xl md:text-xl font-bold text-white leading-tight mb-1">
                      Kerala Tour Packages
                    </h2>
                    <p className="text-xl sm:text-xl md:text-xl font-bold text-white leading-tight mb-1">
                      12 Packages
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPosts2;
