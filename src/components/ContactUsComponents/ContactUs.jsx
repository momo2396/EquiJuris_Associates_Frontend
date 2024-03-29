import Icon1 from "../../assets/customicon/icon1";
import { FiPhoneIncoming } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { ImOffice } from "react-icons/im";
import Title from "../shared/Title";
const ContactUS = () => {
  return (
    <section className="text-white bg-[#161D27]">
      <div className="flex flex-col justify-center items-center gap-5 lg:justify-between px-5 pb-10 max-w-[1300px] mx-auto w-full">
        <div className="blog_banner hero min-h-[50vh] bg-cover bg-no-repeat">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="max-w-[1000px] mx-auto px-5 lg:px-10">
            <Title
              heading={"Contact Us"}
              subHeading={
                "Our seasoned team of attorneys is dedicated to providing clear communication, collaborative partnerships, and innovative legal solutions. We believe in accessibility, community engagement, and the power of diversity."
              }
            ></Title>
          </div>
        </div>
        <div className="py-5"></div>
        <div className="">
          <div className="w-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
              <div className="mb-8">
                <div className="flex items-center">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 text-primary">
                      <FiPhoneIncoming className="text-5xl font-bold text-[#D1B06B]" />
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold text-white">Call Us On</p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      +880 1322233344
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <div className="flex items-center">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 text-primary">
                      <MdEmail className="text-6xl font-bold text-[#D1B06B]" />
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold text-white">Email Us</p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      equijurisassociates@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <div className="align-start flex items-center">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100  text-primary">
                      <ImOffice className="text-5xl font-bold text-[#D1B06B]" />
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className=" mb-2 font-bold text-white">Main Office:</p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      Jobra, Hathazari-4331, Chittagong.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 lg:justify-between px-5 py-10 max-w-[1300px] mx-auto w-full">
        <h1 className="font-titleFont text-4xl font-bold">FAQ</h1>
        <Icon1 className="text-10xl font-bold text-[#D1B06B]" />
      </div>
      <section className="text-gray-400 pb-10 text-lg">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What types of cases does your law firm handle?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  At EquiJuris Associates Law Firm we handle claims at all
                  levels of litigation. Our areas of practice include Business
                  Law, Employment and Labor Law, Intellectual
                  Property/Technology Transactions, and Litigation another
                  attorney may perform certain duties within the case itself.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Do I need an attorney to start a business?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  There are certain matters that are fairly straightforward or
                  not unduly difficult to learn and, therefore, do not require
                  the services of an attorney, like writing a business plan,
                  researching and picking a name for your business or reserving
                  a domain.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                How can I avoid being sued if a claim is made against me?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  No one can stop a lawsuit from being filed. However, if there
                  is a legitimate dispute that arises and a claim made against
                  you, consult a lawyer behind-the-scenes work is being
                  completed so that on the day your matter is ready, nothing
                  will be overlooked.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What is the difference between divorce and legal separtation?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  In addition to ending your marriage, a divorce addresses all
                  issues within the marriage, including property, finances, and
                  child-related issues. This is the most common way to deal with
                  marital issues, as Florida does not recognize legal
                  separation.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Why should I have a lawyer representing me during divorce?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  While many individuals proceed through the divorce process,
                  having the help of an attorney with family law experience can
                  go a long way toward protecting your interests. Florida’s
                  family laws have developed over many decades and are
                  complicated.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </section>
  );
};
export default ContactUS;
