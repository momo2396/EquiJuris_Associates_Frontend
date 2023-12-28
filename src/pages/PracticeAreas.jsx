import { GoLaw } from "react-icons/go";
import useGetData from "../routes/UseGetData";
import Title from "../components/shared/Title";
import Loading from "../components/shared/Loading/Loading";

const PracticeAreas = () => {
  const { data, isLoading } = useGetData("/practiceAreas");
  console.log(data);
  if (isLoading) return <Loading />;
  return (
    <section className="text-white bg-[#161D27]">
      <div className="flex flex-col  justify-center items-center gap-5 lg:justify-between px-5 pb-10 max-w-[1300px] mx-auto w-full">
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

        <div className="py-20 px-5 max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data?.data?.map((p) => (
              <>
                <div className="card bg-[#1F2732] shadow-xl border-2 border-[#D1B06B] rounded-md">
                  <div className="card-body">
                    <div className="flex gap-5 justify-start items-center">
                      <GoLaw className="text-4xl font-bold text-[#D1B06B]" />{" "}
                      <h2 className="font-bold font-titleFont text-2xl">
                        {p?.type}
                      </h2>
                    </div>
                    <div className="border border-gray-700 my-2"></div>
                    <p className="text-gray-400">{p?.description}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
