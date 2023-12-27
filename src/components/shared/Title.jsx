import Icon1 from "../../assets/customicon/icon1";

const Title = ({ heading, subHeading }) => {
  return (
    <div className="text-white text-center font-titleFont">
      <p className="text-4xl font-bold py-3">{heading}</p>
      {/* <div className="border border-[#D1B06B]"></div> */}
      <div className="flex justify-center items-center">
        <Icon1></Icon1>
      </div>
      <p className=" text-base font-semibold pt-3 text-center">{subHeading}</p>
    </div>
  );
};

export default Title;
