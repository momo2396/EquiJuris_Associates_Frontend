const Title = ({ heading, subHeading }) => {
  return (
    <div className="text-white text-center">
      <p className="text-4xl font-thin py-3">{heading}</p>
      <div className="border border-[#D1B06B]"></div>
      <p className=" text-base font-thin pt-3 text-center">{subHeading}</p>
    </div>
  );
};

export default Title;
