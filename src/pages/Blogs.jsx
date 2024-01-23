import { Link } from "react-router-dom";
import useGetData from "../routes/UseGetData";
import Title from "../components/shared/Title";
import Pagination from "../components/shared/Pagination";
import { useState } from "react";
import Loading from "../components/shared/Loading/Loading";

const Blogs = () => {
  const [page, setPage] = useState(0);
  const { data, isLoading } = useGetData("/blogs/all-blogs");
  if (isLoading) return <Loading />;
  return (
    <section className=" bg-[#1F2732] text-white">
      <div className="flex flex-col  justify-center items-center gap-5 lg:justify-between px-5 pb-10 max-w-[1300px] mx-auto w-full">
        <div className="blog_banner hero min-h-[50vh]  bg-cover bg-no-repeat">
          <div className="hero-overlay bg-opacity-60"></div>
          <Title
            heading={"Recent Blogs"}
            subHeading={"All posted blogs are here.."}
          ></Title>
        </div>
        <div className="max-w-[1400px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-5 pt-20">
          {data?.data?.slice(page * 4, page * 4 + 4).map((d) => (
            <>
              <div className="w-full">
                <div
                  className="w-full bg-cover bg-center aspect-[10/5] bg-slate-400"
                  style={{ backgroundImage: `url("${d?.blogImage}")` }}
                ></div>
                {/* <img src={d?.blogImage} alt="" /> */}
                <div className="pt-10">
                  <p className="text-[#D1B06B] pb-1 line-clamp-1">
                    {d?.category} |{" "}
                    {new Date(d?.createdDate).toLocaleString("en-us", {
                      weekday: "long",
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                  <div className="border border-gray-700 mb-5"></div>
                  <h3 className="text-2xl font-bold pb-2 line-clamp-2">
                    {d?.title}
                  </h3>
                  <p>{d?.body.split(" ").slice(0, 20).join(" ")}...</p>
                  <ul>
                    <Link className="text-[#D1B06B] underline">Read More</Link>
                  </ul>
                </div>
              </div>
            </>
          ))}
        </div>
        <Pagination
          page={page}
          setPage={setPage}
          limit={4}
          length={data?.data?.length}
        ></Pagination>
      </div>
    </section>
  );
};

export default Blogs;
