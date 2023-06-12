import { Fragment, useState } from "react";
import { ChevronDownIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import { Popover, Transition } from "@headlessui/react";
import { ChartPieIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Signin from "../Pages/Signin";
import { FaGripVertical, FaUser } from "react-icons/fa";

const learn = [
  {
    name: "How to Invest",
    href: "/learn/howtoinvest",
  },
  {
    name: "How to Tokenize",
    href: "/learn/howtotokenize",
  },
];
const callsToAction = [{ name: "Watch demo", href: "#", icon: PlayCircleIcon }];

// New button data
const customButton = [
  {
    name: "Profile",
    href: "/general",
    icon: FaUser,
  },
];

const PropertyAssessment = [
  {
    name: "Assessment Companies",
    href: "/assessmentcompanies",
    icon: ChartPieIcon,
  },
];

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="mt-6 bg-white">
        <nav
          className="flex items-center justify-between p-5 pl-8 sm:pl-16 lg:pl-24 pr-8 sm:pr-16 lg:pr-20 text-1xl sm:text-4xl lg:text-7xl"
          aria-label="Global"
        >
          <div className="flex ml-4">
            <Link to="/">
              <img
                className="h-20 w-70"
                src={require("../assets/logo.png")}
                alt=""
              />
            </Link>
          </div>

          <Popover.Group className="hidden lg:flex sm:gap-x-3 lg:gap-x-8 text-1xl sm:text-3xl lg:text-1xl">
            <Link to="/marketplace">
              <b className="font-semibold leading-6 text-gray-900 hover:border-b-4 border-lightseagreen-100">
                Marketplace
              </b>
            </Link>
            <Link to="/tokenization">
              <b className="font-semibold leading-6 text-gray-900 hover:border-b-4 border-lightseagreen-100">
                Tokenize Your Real Estate
              </b>
            </Link>
            {/* property assessment */}
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-2 font-semibold leading-6 text-gray-900 ">
                <span className="hover:border-b-4 border-lightseagreen-100">
                  Property Assessment
                </span>

                <ChevronDownIcon
                  className="mt-1 h-6 w-5 flex-none text-lightseagreen-100 font-bold"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute top-full right-0 -left-20 z-10 mt-8 w-[400px] overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5 border-t-4 border-sky-blue">
                  <div className="ml-1 p-2 divide-y  divide-sky-blue">
                    {PropertyAssessment.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex justify-center items-center gap-x-6 rounded-lg p-6 text-sm leading-4 hover:bg-lightseagreen-200"
                      >
                        <div className="flex-auto">
                          <Link
                            to={item.href}
                            className="block font-semibold text-blue"
                          >
                            <div className="flex gap-5">
                              <item.icon className="-mt-3 w-10 h-10" />
                              {item.name}
                            </div>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <Link to="/about">
              <b className="font-semibold leading-6 text-gray-900 hover:border-b-4 border-lightseagreen-100">
                About
              </b>
            </Link>

            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-2 font-semibold leading-6 text-gray-900 ">
                <span className="hover:border-b-4 border-lightseagreen-100">
                  Learn
                </span>
                <ChevronDownIcon
                  className="mt-1 h-6 w-5 flex-none text-lightseagreen-100 font-bold"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute top-full -left-40 z-10 mt-8 w-[320px] overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5 border-t-4 border-sky-blue">
                  <div className="ml-1 p-6 divide-y  divide-sky-blue">
                    {learn.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-6 text-sm leading-4 hover:bg-lightseagreen-200"
                      >
                        <div className="flex-auto">
                          <Link
                            to={item.href}
                            className="block font-semibold text-blue"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2  hover:bg-lightseagreen-200">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center w-[350px] gap-x-3 p-3 text-sm font-medium leading-6 text-blue "
                      >
                        <item.icon
                          className="ml-4 h-12 w-10 flex-none text-blue"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </Popover.Group>

          {/* Updated Sign in button */}
          <div className="flex mr-4">
            <button
              className="ml-4 lg:ml-0 lg:flex rounded-md bg-blue text-white font-bold py-5 px-6 sm:px-4 lg:px-10 rounded text-3xl sm:text-3xl lg:text-5xl font-semibold leading-6 text-white-900"
              onClick={() => setOpen(true)}
            >
              Sign in
            </button>
            {/* general, Profile and dashboard */}
            <Popover className="relative">
              <Popover.Button className="ml-6 mt-5 flex items-center gap-x-2 font-semibold leading-6 text-gray-900">
                <FaGripVertical className=" text-lightseagreen-100 " />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute top-full right-1 -left-40 z-10 mt-3 w-[250px] overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5 border-t-4 border-sky-blue">
                  <div className="ml-1 p-2 divide-y  divide-sky-blue">
                    {customButton.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex justify-center items-center gap-x-6 rounded-lg p-6 text-sm leading-4 hover:bg-lightseagreen-200"
                      >
                        <div className="flex-auto">
                          <Link
                            to={item.href}
                            className="block font-semibold text-blue"
                          >
                            <div className="flex gap-5">
                              <item.icon />
                              {item.name}
                            </div>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Action for the custom button */}
                </Popover.Panel>
              </Transition>
            </Popover>
          </div>
        </nav>
      </header>
      <Signin open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default NavBar;
