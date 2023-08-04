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
function App() {
  const [count, setCount] = useState(0);
  // console.log(lawyerImage);
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
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
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
              <div className="p-3 -ml-3 -mt-16 relative z-50 flex justify-center bg-base-100 rounded-lg shadow-xl w-[200px]">
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
              <div className="p-3 -ml-3 -mt-16 relative z-50 flex justify-center bg-base-100 rounded-lg shadow-xl w-[200px]">
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
              <div className="p-3 -ml-3 -mt-16 relative z-50 flex justify-center bg-base-100 rounded-lg shadow-xl w-[200px]">
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
      <footer></footer>
    </>
  );
}

export default App;
