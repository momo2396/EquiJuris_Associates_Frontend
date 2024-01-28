import Banner from "../components/HomeComponents/Banner";
import Help from "../components/HomeComponents/Help";
import PracticeArea from "../components/HomeComponents/PracticeArea";
import LawyerSection from "../components/HomeComponents/LawyerSection";
import ClientReviewSection from "../components/HomeComponents/ClientReviewSection";
import AppointmentSection from "../components/HomeComponents/AppointmentSection";
import BlogSection from "../components/HomeComponents/BlogSection";
import Blogs from "./Blogs";

const Home = () => {
  return (
    <div>
      <header>
        <Banner />
      </header>
      <main>
        {/* help */}
        <Help />
        {/* practice area: m */}
        <PracticeArea />
        {/* lawyer Section: m */}
        <LawyerSection />
        {/* Client Review Section: m */}
        <ClientReviewSection />
        {/* appointment section */}
        <AppointmentSection />
        {/* blog Section: m */}
        {/* <BlogSection /> */}
        {/*single blog section */}
        {/* <BlogSingleSection /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
