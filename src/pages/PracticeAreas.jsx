import { BsBagDash } from "react-icons/bs";
import useGetData from "../routes/UseGetData";
import Title from "../components/shared/Title";

const PracticeAreas = () => {
  const { data, isLoading } = useGetData("/practiceAreas");
  console.log(data);
  if (isLoading)
    return (
      <progress className="max-w-[1300px] mx-auto progress w-56"></progress>
    );
  return (
    <section className="text-white bg-[#161D27] py-10">
      <div className="blog_banner hero min-h-[50vh]  bg-cover bg-no-repeat">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="max-w-[1000px] mx-auto px-10">
          <Title
            heading={"Our Practice Areas"}
            subHeading={
              "At EquiJuris Associates, we offer a wide range of legal services to meet your needs. From business law and family matters to estate  planning and more, our experienced team is here to provide personalized solutions and dedicated representation. Explore our practice areas and let us assist you in achieving your legal goals. Contact us for a consultation today."
            }
          ></Title>
        </div>
      </div>
      {/* <div className="flex flex-col  justify-center items-center gap-5 lg:justify-between px-5 py-10 max-w-[1300px] mx-auto w-full">
        <h3 className="text-3xl font-bold"></h3>
        <p className="flex text-center justify-end w-1/2">
          
        </p>
      </div> */}
      <div className="py-20 px-5 max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.data?.map((p) => (
            <>
              <div className="card bg-[#1F2732] shadow-xl border-2 border-[#D1B06B] rounded-md">
                <div className="card-body">
                  <div className="flex gap-5 justify-start items-center">
                    <BsBagDash className="text-4xl font-bold text-[#D1B06B]" />{" "}
                    <h2 className="card-title">{p?.type}</h2>
                  </div>
                  <div className="border border-gray-700 my-5"></div>
                  <p>{p?.description}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
