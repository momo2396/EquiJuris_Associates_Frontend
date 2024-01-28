import { useEffect, useState } from "react";
import useGetData from "../routes/UseGetData";
import Loading from "../components/shared/Loading/Loading";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetData(`/blogs/single-blog/${id}`);
  console.log(data?.data);
  if (isLoading) return <Loading></Loading>;
  return (
    <section className="bg-[#1F2732] text-white">
      <div className="max-w-[800px] mx-auto px-5 py-10">
        <h1 className="text-4xl font-bold mb-5">{data?.data?.title}</h1>
        <p className="text-[#D1B06B] mb-3">
          {data?.data?.category} |{" "}
          {new Date(data?.data?.createdDate).toLocaleString("en-us", {
            weekday: "long",
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
        <div className="border border-gray-700 mb-5"></div>
        <div
          className="w-full bg-cover bg-center aspect-[16/9] mb-8"
          style={{ backgroundImage: `url("${data?.data?.blogImage}")` }}
        ></div>
        <p className="text-lg leading-relaxed mb-8">{data?.data?.body}</p>
        {/* Add other details you want to display */}
      </div>
    </section>
  );
};

export default SingleBlog;
