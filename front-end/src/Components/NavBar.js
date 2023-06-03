import { Fragment, useState } from "react";
import { ChevronDownIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import { Popover, Transition } from "@headlessui/react";
import { ChartPieIcon, CursorArrowRaysIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Signin from "../Pages/Signin";

const learn = [
  {
    name: "How to Invest",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "How to Tokenize",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
];
const callsToAction = [{ name: "Watch demo", href: "#", icon: PlayCircleIcon }];

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="bg-white">
        <nav
          className="flex items-center justify-between p-5 pl-8 sm:pl-16 lg:pl-24 pr-8 sm:pr-16 lg:pr-24 text-3xl sm:text-4xl lg:text-3xl"
          aria-label="Global"
        >
          <div className="flex">
            <Link to="/">
              <img
                className="h-15 w-40"
                src={require("../assets/logo.png")}
                alt=""
              />
            </Link>
          </div>

          <Popover.Group className="hidden lg:flex sm:gap-x-6 lg:gap-x-10 text-4xl sm:text-2xl lg:text-3xl">
            <Link to="/marketplace">
              <b className="font-semibold leading-6 text-gray-900">
                Marketplace
              </b>
            </Link>
            <Link to="/tokenization">
              <b className="font-semibold leading-6 text-gray-900">
                Tokenize Your Real Estate
              </b>
            </Link>

            <Link to="/general">
              <b className="font-semibold leading-6 text-gray-900">About</b>
            </Link>

            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x font-semibold leading-6 text-gray-900">
                Learn
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
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
                <Popover.Panel className="absolute -left-6 top-full z-10 mt-3 w-screen max-w-max overflow-hidden rounded-1xl bg-white shadow-lg ring-1 ring-gray-900/5 border-t-4 border-sky-blue">
                  <div className="p-4 divide-y divide-slate-200 divide-sky-blue">
                    {learn.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-4 hover:bg-lightseagreen-200"
                      >
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5  hover:bg-lightseagreen-200">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 "
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-gray-400"
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
          <button
            className="flex ml-4 lg:ml-56 lg:flex rounded-md bg-blue text-white font-bold py-2 px-6 sm:px-4 lg:px-6 rounded text-xs sm:text-sm lg:text-xs font-semibold leading-6 text-white-900"
            onClick={() => setOpen(true)}
          >
            Sign in
          </button>
        </nav>
      </header>
      <Signin open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default NavBar;
