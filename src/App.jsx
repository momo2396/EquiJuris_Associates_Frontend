import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Test from "./Test";
import { BsBagDash } from "react-icons/bs";
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
      </main>
      <footer></footer>
      <Test />
    </>
  );
}

export default App;
