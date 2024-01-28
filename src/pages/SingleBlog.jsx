import React, { useEffect, useState } from "react";
import useGetData from "../routes/UseGetData";
import Loading from "../components/shared/Loading/Loading";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const { data, isLoading } = useGetData(`/blogs/single-blog/${id}`);

  useEffect(() => {
    if (data && data.success) {
      setBlog(data.data);
    }
  }, [data, id]);

  if (isLoading) return <Loading />;
  
  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <section className="bg-[#1F2732] text-white">
      <div className="max-w-[800px] mx-auto px-5 py-10">
        <h1 className="text-4xl font-bold mb-5">{blog.title}</h1>
        <p className="text-[#D1B06B] mb-3">
          {blog.category} |{" "}
          {new Date(blog.createdDate).toLocaleString("en-us", {
            weekday: "long",
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
        <div className="border border-gray-700 mb-5"></div>
        <div className="w-full bg-cover bg-center aspect-[16/9] mb-8" style={{ backgroundImage: `url("${blog.blogImage}")` }}></div>
        <p className="text-lg leading-relaxed mb-8">{blog.body}</p>
        {/* Add other details you want to display */}
      </div>
    </section>
  );
};

export default SingleBlog;
