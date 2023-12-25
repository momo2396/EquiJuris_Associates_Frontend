import OutlineButton from "../shared/OutlineButton/OutlineButton";

const Banner = () => {
  return (
    <div className="hero min-h-[80vh] my_banner bg-cover bg-no-repeat">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content ">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-titleFont font-bold">
            Welcome to EquiJuris Associates
          </h1>
          <p className="mb-5 font-titleFont font-semibold text-lg">
            We stand for justice and champion your rights. With our experienced
            team of attorneys, your legal matters are in capable hands. Trust us
            to advocate for your best interests every step of the way.
          </p>
          <a href="#knowMore">
            <OutlineButton>Know More</OutlineButton>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Banner;
