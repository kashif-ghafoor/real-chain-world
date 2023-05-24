import { Transition, Dialog } from "@headlessui/react";
import { Fragment, useRef } from "react";

const Signup = ({ open, onClose }) => {
  const cancelButtonRef = useRef(null);

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative"
          initialFocus={cancelButtonRef}
          onClose={onClose}
        >
          <div className="flex items-center justify-center min-h-screen">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-md bg-white text-center shadow-xl transition-all h-full w-3/5">
                    <div className="bg-white pb-80 pt-96">
                      <div className="absolute top-[20px] left-[730px]">
                        <button
                          className="bg-transparent text-lightseagreen-100 font-bold text-5xl "
                          onClick={() => onClose(false)}
                        >
                          x
                        </button>
                      </div>
                      <h3 className="absolute top-[120px] left-[275px] text-lightseagreen-100 text-3xl font-medium ">
                        Register with Real Chain World
                      </h3>
                      <div className="absolute top-[58px] left-[360px]  ">
                        <img
                          className="h-12 w-12"
                          src={require("../assets/logo-signin.png")}
                          alt=""
                        />
                      </div>

                      <div>
                        <label
                          for="email"
                          className="absolute top-[170px] left-[270px] text-lightseagreen-100 text-xs"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="absolute top-[190px] h-[40px] left-[270px] bg-white border-2 border-b-lightseagreen-100 text-gray-900 text-sm block w-60 p-2.5 focus:outline-none focus:border-none"
                          placeholder="xyz@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="password"
                          className="absolute top-[240px] left-[270px] text-lightseagreen-100 text-xs"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          className="absolute top-[260px] h-[40px] left-[270px] bg-white border-2 border-b-lightseagreen-100 text-gray-900 text-sm block w-60 p-2.5 focus:outline-none focus:border-none"
                          placeholder="•••••••••"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="password"
                          className="absolute top-[310px] left-[270px] text-lightseagreen-100 text-xs"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          className="absolute top-[330px] left-[270px] h-[40px] bg-white border-2 border-b-lightseagreen-100 text-gray-900 text-sm block w-60 p-2.5 focus:outline-none focus:border-none"
                          placeholder="•••••••••"
                          required
                        />
                      </div>
                      <div class="absolute top-[395px] left-[269px] checked:bg-lightseagreen-100">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4  bg-lightseagreen-100 border-lightseagreen-100 rounded "
                        />
                      </div>

                      <div
                        className="absolute text-left top-[395px] left-[295px] leading-4 text-gray-700"
                        style={{ fontSize: "14px", width: "240px" }}
                      >
                        {`I certify that I have read, understand and accept Real Chain World’s `}
                      </div>

                      <p
                        className="m-0 absolute underline text-left top-[425px] left-[295px] text-lightseagreen-100 cursor-pointer"
                        style={{ fontSize: "14px", width: "240px" }}
                        id="terms"
                      >{`Terms & Conditions`}</p>
                      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[455px] left-[270px] w-240px] h-10">
                        <div className="absolute top-[0px] left-[0px] rounded-lg bg-lightseagreen-100 w-[240px] h-10" />
                        <div className="absolute top-[4px] left-[80px] text-4xl font-medium  text-white text-left flex items-center w-[86px]">
                          Sign up
                        </div>
                      </button>
                      <img
                        className="absolute top-[530px] left-[260px] w-[250px]"
                        alt=""
                        src={require("../assets/or.PNG")}
                      />

                      <h3 className="absolute top-[495px] left-[275px] text-gray-500 text-2xl ">
                        Already have an account?
                      </h3>

                      <button className="absolute top-[495px] left-[390px] text-2xl font-medium text-lightseagreen-100 items-center w-[110px]">
                        Login
                      </button>

                      <button className="cursor-pointer rounded-md  border-2 border-lightseagreen-300 absolute top-[560px] left-[265px] w-[240px] h-10">
                        <img
                          className="w-[240px]"
                          alt=""
                          src={require("../assets/google.png")}
                        />
                      </button>
                      <button className="cursor-pointer rounded-md  border-2 border-lightseagreen-200 absolute top-[605px] left-[265px] w-[240px] h-10">
                        <img
                          className="pl-8 w-[220px]"
                          alt=""
                          src={require("../assets/metamask@2x.png")}
                        />
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Signup;
