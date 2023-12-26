import React from "react";
import Icon1 from "../../assets/customicon/icon1";
import { FiPhoneIncoming } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { ImOffice } from "react-icons/im";
const ContactUS = () => {
  return (
    <section className="">
      <div className="text-white bg-[#161D27] py-10">
        <div className="flex flex-col  justify-center items-center gap-5 lg:justify-between px-5 py-10 max-w-[1300px] mx-auto w-full">
          <h1 className="font-titleFont text-6xl font-bold">Conact Us</h1>
          <Icon1 className="text-10xl font-bold text-[#D1B06B]" />
        </div>
      </div>
      <div className="bg-[#161D27] py-10">
        <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
          <div class="flex grid-cols-3 gap-3">
            <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
              <div class="flex items-start">
                <div class="shrink-0">
                  <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                    <FiPhoneIncoming className="text-3xl font-bold text-[#D1B06B]" />
                  </div>
                </div>
                <div class="ml-6 grow">
                  <p class="mb-2 font-bold text-white">Call Us On</p>
                  <p class="text-neutral-500 dark:text-neutral-200">
                    +880 1322233344
                  </p>
                </div>
              </div>
            </div>
            <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
              <div class="flex items-start">
                <div class="shrink-0">
                  <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                    <MdEmail className="text-3xl font-bold text-[#D1B06B]" />
                  </div>
                </div>
                <div class="ml-6 grow">
                  <p class="mb-2 font-bold text-white">Email Us</p>
                  <p class="text-neutral-500 dark:text-neutral-200">
                    equijurisassociates@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
              <div class="align-start flex">
                <div class="shrink-0">
                  <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                    <ImOffice className="text-3xl font-bold text-[#D1B06B]" />
                  </div>
                </div>
                <div class="ml-6 grow">
                  <p class="mb-2 font-bold text-white">Main Office:</p>
                  <p class="text-neutral-500 dark:text-neutral-200">
                    Jobra, Hathazari-4331, Chittagong.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col  justify-center items-center gap-5 lg:justify-between px-5 py-10 max-w-[1300px] mx-auto w-full">
        <h1 className="font-titleFont text-4xl font-bold">FAQ</h1>
        <Icon1 className="text-10xl font-bold text-[#D1B06B]" />
      </div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
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
                In addition to ending your marriage, a divorce addresses all issues within the marriage, including property, finances, and child-related issues. This is the most common way to deal with marital issues, as Florida does not recognize legal separation.
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
