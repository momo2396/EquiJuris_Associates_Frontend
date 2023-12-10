import { Link } from "react-router-dom";
import useGetData from "../routes/UseGetData";

const Blogs = () => {
  const { data, isLoading } = useGetData("blogs/all-blogs");
  if (isLoading)
    return (
      <progress className="max-w-[1300px] mx-auto progress w-56"></progress>
    );
  return (
    <section className="bg-[#1F2732] py-20 text-white">
      {data?.data?.map((d) => (
        <>
          <div className="max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row justify-center items-center gap-5 w-full">
            <img className="md:w-1/2" src={d?.blogImage} alt="" />
            <div className="md:w-1/2">
              <p className="text-[#D1B06B] pb-1">
                {d?.category} |{" "}
                {new Date(d?.createdDate).toLocaleString("en-us", {
                  weekday: "long",
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <div className="border border-gray-700 mb-5"></div>
              <h3 className="text-2xl font-bold pb-2">{d?.title}</h3>
              <p>{d?.body}</p>
              <ul>
                <Link className="text-[#D1B06B] underline">Read More</Link>
              </ul>
            </div>
          </div>
        </>
      ))}
    </section>
  );
};

export default Blogs;
