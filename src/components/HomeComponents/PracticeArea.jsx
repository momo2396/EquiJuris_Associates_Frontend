import { BsBagDash } from "react-icons/bs";
import useGetData from "../../routes/UseGetData";
import { Link } from "react-router-dom";
import OutlineButton from "../shared/OutlineButton/OutlineButton";

const PracticeArea = () => {
  const { data, isLoading } = useGetData("/practiceAreas");
  if (isLoading)
    return (
      <progress className="max-w-[1300px] mx-auto progress w-56"></progress>
    );
  return (
    <section id="knowMore" className="text-white bg-[#161D27] py-10">
      <div className="flex flex-col  justify-center items-center gap-5 lg:justify-between px-5 py-10 max-w-[1300px] mx-auto w-full">
        <h3 className="font-titleFont text-4xl font-bold">
          Explore Our Practice Areas
        </h3>
        <p className="font-titleFont text-lg flex text-center justify-end w-1/2">
          At EquiJuris Associates, we offer a wide range of legal services to
          meet your needs. From business law and family matters to estate
          planning and more, our experienced team is here to provide
          personalized solutions and dedicated representation. Explore our
          practice areas and let us assist you in achieving your legal goals.
          Contact us for a consultation today.
        </p>
      </div>
      <div className="px-5 max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.data?.slice(0, 3).map((p) => (
            <div
              className="card bg-[#1F2732] shadow-xl border-2 border-[#D1B06B] rounded-md"
              key={p?._id}
            >
              <div className="card-body">
                <div className="flex gap-5 justify-start items-center">
                  <BsBagDash className="text-4xl font-bold text-[#D1B06B]" />{" "}
                  <h2 className="card-title">{p?.type}</h2>
                </div>
                <div className="border border-gray-700 my-5"></div>
                <p>{p?.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-10">
          <Link to="/practiceAreas">
            <OutlineButton>See More</OutlineButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PracticeArea;
