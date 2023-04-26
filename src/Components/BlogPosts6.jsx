import React from "react";
import BlogPost from "./BlogPost.jsx";

function BlogPosts6() {
  return (
    <>
      <div className="py-10">
        <div className="container mx-auto px-4">
          <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
            <h1 className="text-black text-3xl text-center font-bold dark:text-white sm:text-4xl">
            Tour Packages
            </h1>
            <p className="text-center text-lg mt-2">
            Best Deals Guaranteed. Great Itineraries. Customised Itineraries. 24*7 On-Trip Assistance.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 p-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:max-w-7xl xl:mx-auto">
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </div>
      </div>
    </>
  );
}

export default BlogPosts6;
