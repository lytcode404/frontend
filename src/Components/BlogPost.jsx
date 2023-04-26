import React from "react";

function BlogPost() {
  return (
    <>
      <div>
        <div className="relative">
          <img
            className="w-full rounded-global h-[500px] bg-gray-100 pt-5 xl:object-top xl:object-contain"
            src="https://picsum.photos/310"
          />
          <div className="absolute right-3 left-3 bottom-3">
            <div className="left-3 bottom-3 right-3 bg-white p-4 mt-3 rounded-global dark:bg-black">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold text-black mb-4 mt-2 dark:text-white 2xl:text-2xl">
                  Kerala
                </h1>
                <p className=" font-semibold text-gray-600 mb-4 mt-2 dark:text-white 2xl:text-2xl">7 Days</p>
              </div>
              <a className="flex items-center gap-x-1.5" href="#">
                Book Now
                <span>
                  <div>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 256 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                    </svg>
                  </div>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPost;
