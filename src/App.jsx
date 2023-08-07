import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import lawyerImage from "../src/assets/other_images/lawyer.jfif";
import blog1 from "../src/assets/other_images/Lawyer-writing.jpg";
import blog2 from "../src/assets/other_images/legal-advice.jfif";
import "./App.css";
import { BsBagDash } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { ImQuotesLeft } from "react-icons/im";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <header>
        <div className="navbar bg-black bg-opacity-20 backdrop-blur-lg fixed top-0 w-full text-white z-50">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="relative menu menu-sm dropdown-content mt-3 p-2 shadow bg-black backdrop-blur-lg z-50 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">
              EquiJuris Associates
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Item 1</a>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2 bg-black backdrop-blur-lg">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
        <div className="hero min-h-[80vh] my_banner bg-cover bg-no-repeat">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content m-20">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </header>
      <main>
        {/* rating */}

        <section className="py-20">
          <h3 className="pb-10 text-3xl font-medium text-center max-w-[753px]mx-auto">
            If you're in trouble<br></br> we can help.
          </h3>
          <p className="text-center max-w-[753px] mx-auto">
            There are of Lorem Ipsum available, but the majority have su
            alteration in some form, by injected humour, oir which don't look
            even slightly believable.
          </p>
          <div className="max-w-[1200px] mx-auto px-5 pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
            <div className="bg-gray-100 border py-3 px-5 flex items-center gap-3">
              <div className="border-2 border-[#D1B06B] rounded-full p-3">
                <AiFillHeart className="text-[#D1B06B]" />
                <h4>1234</h4>
              </div>
              <div>
                <h2 className="text-lg font-bold">Trusted Clients</h2>
                <p className="text-sm text-[#909090]">
                  There are of Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="bg-gray-100 border py-3 px-5 flex items-center gap-3">
              <div className="border-2 border-[#D1B06B] rounded-full p-3">
                <AiFillStar className="text-[#D1B06B]" />
                <h4>98%</h4>
              </div>
              <div>
                <h2 className="text-lg font-bold">Successful Cases</h2>
                <p className="text-sm text-[#909090]">
                  There are of Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="bg-gray-100 border py-3 px-5 flex items-center gap-3">
              <div className="border-2 border-[#D1B06B] rounded-full p-3">
                <AiFillHeart className="text-[#D1B06B]" />
                <h4>200+</h4>
              </div>
              <div>
                <h2 className="text-lg font-bold">Criminal Defense Case</h2>
                <p className="text-sm text-[#909090]">
                  There are of Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* practice area: m */}
        <section className="text-white bg-[#161D27] py-10">
          <div className="flex justify-between px-5 py-10 max-w-[1300px] mx-auto w-full">
            <h3 className="">Explore Our Practice Areas</h3>
            <p className="flex justify-end w-1/2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have su alteration in some form, by injected
              humour, oir randomised workds which don't look even slightly
              believable.
            </p>
          </div>
          <div className="px-5 max-w-[1300px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="card bg-[#1F2732] shadow-xl border-2 border-[#D1B06B] rounded-md">
                <div className="card-body">
                  <h2 className="card-title">Business Law</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but majority going to use a passage.
                  </p>
                  <div className="border border-gray-700 mt-5"></div>
                  <div className="flex justify-between items-center card-actions mt-10">
                    <BsBagDash className="text-4xl font-bold text-[#D1B06B]" />
                    <button className="btn btn-primary bg-[#161D27] border-[#161D27] hover:bg-[#D1B06B] hover:text-black">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-[#1F2732] shadow-xl border-2 border-[#D1B06B] rounded-md">
                <div className="card-body">
                  <h2 className="card-title">Business Law</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but majority going to use a passage.
                  </p>
                  <div className="border border-gray-700 mt-5"></div>
                  <div className="flex justify-between items-center card-actions mt-10">
                    <BsBagDash className="text-4xl font-bold text-[#D1B06B]" />
                    <button className="btn btn-primary bg-[#161D27] border-[#161D27] hover:bg-[#D1B06B] hover:text-black">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-[#1F2732] shadow-xl border-2 border-[#D1B06B] rounded-md">
                <div className="card-body">
                  <h2 className="card-title">Business Law</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but majority going to use a passage.
                  </p>
                  <div className="border border-gray-700 mt-5"></div>
                  <div className="flex justify-between items-center card-actions mt-10">
                    <BsBagDash className="text-4xl font-bold text-[#D1B06B]" />
                    <button className="btn btn-primary bg-[#161D27] border-[#161D27] hover:bg-[#D1B06B] hover:text-black">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-[#1F2732] shadow-xl border-2 border-[#D1B06B] rounded-md">
                <div className="card-body">
                  <h2 className="card-title">Business Law</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but majority going to use a passage.
                  </p>
                  <div className="border border-gray-700 mt-5"></div>
                  <div className="flex justify-between items-center card-actions mt-10">
                    <BsBagDash className="text-4xl font-bold text-[#D1B06B]" />
                    <button className="btn btn-primary bg-[#161D27] border-[#161D27] hover:bg-[#D1B06B] hover:text-black">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-[#1F2732] shadow-xl border-2 border-[#D1B06B] rounded-md">
                <div className="card-body">
                  <h2 className="card-title">Business Law</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but majority going to use a passage.
                  </p>
                  <div className="border border-gray-700 mt-5"></div>
                  <div className="flex justify-between items-center card-actions mt-10">
                    <BsBagDash className="text-4xl font-bold text-[#D1B06B]" />
                    <button className="btn btn-primary bg-[#161D27] border-[#161D27] hover:bg-[#D1B06B] hover:text-black">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-[#1F2732] shadow-xl border-2 border-[#D1B06B] rounded-md">
                <div className="card-body">
                  <h2 className="card-title">Business Law</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but majority going to use a passage.
                  </p>
                  <div className="border border-gray-700 mt-5"></div>
                  <div className="flex justify-between items-center card-actions mt-10">
                    <BsBagDash className="text-4xl font-bold text-[#D1B06B]" />
                    <button className="btn btn-primary bg-[#161D27] border-[#161D27] hover:bg-[#D1B06B] hover:text-black">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-[#1F2732] shadow-xl border-2 border-[#D1B06B] rounded-md">
                <div className="card-body">
                  <h2 className="card-title">Business Law</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but majority going to use a passage.
                  </p>
                  <div className="border border-gray-700 mt-5"></div>
                  <div className="flex justify-between items-center card-actions mt-10">
                    <BsBagDash className="text-4xl font-bold text-[#D1B06B]" />
                    <button className="btn btn-primary bg-[#161D27] border-[#161D27] hover:bg-[#D1B06B] hover:text-black">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-[#1F2732] shadow-xl border-2 border-[#D1B06B] rounded-md">
                <div className="card-body">
                  <h2 className="card-title">Business Law</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but majority going to use a passage.
                  </p>
                  <div className="border border-gray-700 mt-5"></div>
                  <div className="flex justify-between items-center card-actions mt-10">
                    <BsBagDash className="text-4xl font-bold text-[#D1B06B]" />
                    <button className="btn btn-primary bg-[#161D27] border-[#161D27] hover:bg-[#D1B06B] hover:text-black">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-[#1F2732] shadow-xl border-2 border-[#D1B06B] rounded-md">
                <div className="card-body">
                  <h2 className="card-title">Business Law</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but majority going to use a passage.
                  </p>
                  <div className="border border-gray-700 mt-5"></div>
                  <div className="flex justify-between items-center card-actions mt-10">
                    <BsBagDash className="text-4xl font-bold text-[#D1B06B]" />
                    <button className="btn btn-primary bg-[#161D27] border-[#161D27] hover:bg-[#D1B06B] hover:text-black">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* lawyer card: m */}
        <section className="bg-white py-20">
          <h1 className="text-[#161D27] text-center text-3xl font-medium pb-10">
            Our Experienced Attorney Are Ready <br></br>To answer any questions
          </h1>
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-20">
            <div>
              <div className="relative bg-base-100 shadow-xl pb-3">
                <img src={lawyerImage} alt="lawyer" />
              </div>
              <div className="p-3 -ml-3 -mt-16 relative z-10 flex justify-center bg-base-100 rounded-lg shadow-xl w-[200px]">
                <div>
                  <div className="flex justify-between">
                    <button className="btn bg-transparent border-none">
                      <BsFacebook className="text-3xl" />
                    </button>
                    <button className="btn bg-transparent border-none">
                      <AiOutlineTwitter className="text-3xl" />
                    </button>
                    <button className="btn bg-transparent border-none">
                      <BsInstagram className="text-3xl" />
                    </button>
                  </div>
                  <div className="border border-[#D1B06B] my-3 w-[180px]"></div>
                  <h1 className="text-center pb-3">Thomas Daniyel</h1>
                  <p className="text-[#D1B06B] text-center">Civil Attorney</p>
                </div>
              </div>
            </div>
            <div>
              <div className="relative bg-base-100 shadow-xl pb-3">
                <img src={lawyerImage} alt="lawyer" />
              </div>
              <div className="p-3 -ml-3 -mt-16 relative z-10 flex justify-center bg-base-100 rounded-lg shadow-xl w-[200px]">
                <div>
                  <div className="flex justify-between">
                    <button className="btn bg-transparent border-none">
                      <BsFacebook className="text-3xl" />
                    </button>
                    <button className="btn bg-transparent border-none">
                      <AiOutlineTwitter className="text-3xl" />
                    </button>
                    <button className="btn bg-transparent border-none">
                      <BsInstagram className="text-3xl" />
                    </button>
                  </div>
                  <div className="border border-[#D1B06B] my-3 w-[180px]"></div>
                  <h1 className="text-center pb-3">Thomas Daniyel</h1>
                  <p className="text-[#D1B06B] text-center">Civil Attorney</p>
                </div>
              </div>
            </div>
            <div>
              <div className="relative bg-base-100 shadow-xl pb-3">
                <img src={lawyerImage} alt="lawyer" />
              </div>
              <div className="p-3 -ml-3 -mt-16 relative z-10 flex justify-center bg-base-100 rounded-lg shadow-xl w-[200px]">
                <div>
                  <div className="flex justify-between">
                    <button className="btn bg-transparent border-none">
                      <BsFacebook className="text-3xl" />
                    </button>
                    <button className="btn bg-transparent border-none">
                      <AiOutlineTwitter className="text-3xl" />
                    </button>
                    <button className="btn bg-transparent border-none">
                      <BsInstagram className="text-3xl" />
                    </button>
                  </div>
                  <div className="border border-[#D1B06B] my-3 w-[180px]"></div>
                  <h1 className="text-center pb-3">Thomas Daniyel</h1>
                  <p className="text-[#D1B06B] text-center">Civil Attorney</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#1F2732] text-white py-20">
          <h1 className="text-center text-3xl font-medium pb-10">
            Top Client Opinions & Reviews
          </h1>
          <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-[#2E3947] rounded-bl-2xl p-10">
              <ImQuotesLeft className="text-[#D1B06B] text-3xl" />
              <p className="py-5 text-[#D7D7D7]">
                There are of Lorem Ipsum available, but the majority have su
                alteration in some form, by injected oir which don't look even
                slightly believable.
              </p>
              <h3 className="text-lg font-bold">Natasha</h3>
              <p className="text-[#D7D7D7] text-sm">Business Man</p>
            </div>
            <div className="bg-[#2E3947] rounded-bl-2xl p-10">
              <ImQuotesLeft className="text-[#D1B06B] text-3xl" />
              <p className="py-5 text-[#D7D7D7]">
                There are of Lorem Ipsum available, but the majority have su
                alteration in some form, by injected oir which don't look even
                slightly believable.
              </p>
              <h3 className="text-lg font-bold">Natasha</h3>
              <p className="text-[#D7D7D7] text-sm">Business Man</p>
            </div>
            <div className="bg-[#2E3947] rounded-bl-2xl p-10">
              <ImQuotesLeft className="text-[#D1B06B] text-3xl" />
              <p className="py-5 text-[#D7D7D7]">
                There are of Lorem Ipsum available, but the majority have su
                alteration in some form, by injected oir which don't look even
                slightly believable.
              </p>
              <h3 className="text-lg font-bold">Natasha</h3>
              <p className="text-[#D7D7D7] text-sm">Business Man</p>
            </div>
          </div>
        </section>
        {/* appointment section */}
        <section>
          <div className="flex justify-center items-center mx-auto appointment_background py-20">
            <div className="container w-full m-auto my-4 px-4 lg:px-20">
              <div className="w-full p-8 my-4 md:px-12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-[#141516]">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                  <input
                    className="w-full bg-[#141516] text-white mt-2 p-3 border-b-[1px] placeholder-gray-400 border-slate-400 focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Full Name*"
                  />
                  <input
                    className="w-full bg-[#141516] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email Address*"
                  />
                  <input
                    className="w-full bg-[#141516] text-white mt-2 p-3 border-b-[1px] placeholder-gray-400 border-slate-400 focus:outline-none focus:shadow-outline "
                    type="text"
                    placeholder="Phone Number*"
                  />
                  <input
                    className="w-full bg-[#141516] text-white mt-2 p-3 border-b-[1px] placeholder-gray-400 border-slate-400 focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Subject*"
                  />
                </div>
                <div className="my-4">
                  <textarea
                    placeholder="Your Message*"
                    className="w-full h-32 bg-[#141516] placeholder-gray-400 text-white mt-2 p-3 border-b-[1px] border-slate-400 focus:outline-none focus:shadow-outline"
                  ></textarea>
                </div>
                <div className="mt-10  flex items-center justify-center">
                  <button
                    className="btn capitalize text-sm font-bold tracking-wide bg-white text-black p-3 rounded-lg 
                    hover:bg-[#D1B06B] hover:border-[#D1B06B]         focus:outline-none focus:shadow-outline"
                  >
                    Get An Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* blog card: m */}
        <section className="bg-[#1F2732] py-20 text-white">
          <h1 className="text-4xl text-center pb-5">Recent Blogs</h1>
          <div className="max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row justify-center items-center gap-5 w-full">
            <img className="md:w-1/2" src={blog1} alt="" />
            <div className="md:w-1/2">
              <p className="text-[#D1B06B] pb-1">
                Criminal Law, Kidnapping | Sunday, July 24, 2022
              </p>
              <div className="border border-gray-700 mb-5"></div>
              <h3 className="text-2xl font-bold pb-2">
                An Independent Examination Of Charity Accounts
              </h3>
              <p>
                There are of Lorem Ipsum available, but the majority have su
                alteration in some form, by injected oir which don't look even
                slightly believable.
              </p>
              <ul>
                <li>
                  <a className="text-[#D1B06B] underline" href="">
                    Read More
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-[1200px] mx-auto my-20 border border-gray-700"></div>
          <div className=" max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="max-w-[1200px] mx-auto px-5">
              <img src={blog2} alt="" />
              <div className="pt-10">
                <p className="text-[#D1B06B] pb-1">
                  Legal Advice | Sunday, July 24, 2022
                </p>
                <div className="border border-gray-700 mb-5"></div>
                <h3 className="text-2xl font-bold pb-2">
                  Prevent A Further Breach of The Peace In The States
                </h3>
                <p>
                  There are of Lorem Ipsum available, but the majority have su
                  alteration in some form, by injected oir which don't look even
                  slightly believable.
                </p>
                <ul>
                  <li>
                    <a className="text-[#D1B06B] underline" href="">
                      Read More
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="max-w-[1200px] mx-auto px-5">
              <img src={blog2} alt="" />
              <div className="pt-10">
                <p className="text-[#D1B06B] pb-1">
                  Legal Advice | Sunday, July 24, 2022
                </p>
                <div className="border border-gray-700 mb-5"></div>
                <h3 className="text-2xl font-bold pb-2">
                  Prevent A Further Breach of The Peace In The States
                </h3>
                <p>
                  There are of Lorem Ipsum available, but the majority have su
                  alteration in some form, by injected oir which don't look even
                  slightly believable.
                </p>
                <ul>
                  <li>
                    <a className="text-[#D1B06B] underline" href="">
                      Read More
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="max-w-[1200px] mx-auto px-5">
              <img src={blog2} alt="" />
              <div className="pt-10">
                <p className="text-[#D1B06B] pb-1">
                  Legal Advice | Sunday, July 24, 2022
                </p>
                <div className="border border-gray-700 mb-5"></div>
                <h3 className="text-2xl font-bold pb-2">
                  Prevent A Further Breach of The Peace In The States
                </h3>
                <p>
                  There are of Lorem Ipsum available, but the majority have su
                  alteration in some form, by injected oir which don't look even
                  slightly believable.
                </p>
                <ul>
                  <li>
                    <a className="text-[#D1B06B] underline" href="">
                      Read More
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="max-w-[1200px] mx-auto px-5">
              <img src={blog2} alt="" />
              <div className="pt-10">
                <p className="text-[#D1B06B] pb-1">
                  Legal Advice | Sunday, July 24, 2022
                </p>
                <div className="border border-gray-700 mb-5"></div>
                <h3 className="text-2xl font-bold pb-2">
                  Prevent A Further Breach of The Peace In The States
                </h3>
                <p>
                  There are of Lorem Ipsum available, but the majority have su
                  alteration in some form, by injected oir which don't look even
                  slightly believable.
                </p>
                <ul>
                  <li>
                    <a className="text-[#D1B06B] underline" href="">
                      Read More
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="max-w-[1200px] mx-auto px-5">
              <img src={blog2} alt="" />
              <div className="pt-10">
                <p className="text-[#D1B06B] pb-1">
                  Legal Advice | Sunday, July 24, 2022
                </p>
                <div className="border border-gray-700 mb-5"></div>
                <h3 className="text-2xl font-bold pb-2">
                  Prevent A Further Breach of The Peace In The States
                </h3>
                <p>
                  There are of Lorem Ipsum available, but the majority have su
                  alteration in some form, by injected oir which don't look even
                  slightly believable.
                </p>
                <ul>
                  <li>
                    <a className="text-[#D1B06B] underline" href="">
                      Read More
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer footer-center p-10 bg-[#1F2732] text-white opacity-90">
        <div>
          <h2 className="text-3xl font-bold">EquiJuris Associates</h2>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-6">
          <a className="link link-hover hover:no-underline">Home</a>
          <a className="link link-hover hover:no-underline">About</a>
          <a className="link link-hover hover:no-underline">Contact</a>
          <a className="link link-hover hover:no-underline">Blog</a>
          <a className="link link-hover hover:no-underline">Lawyers</a>
          <a className="link link-hover hover:no-underline">Practice Areas</a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <p>
            Copyright © 2023 - All right reserved by EquiJuris Associates
            Limited
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;