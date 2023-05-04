import { Transition, Dialog } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import Signup from "./Signup";
import ResetPassword from "./ResetPassword";

const Signin = ({ open, onClose }) => {
  const cancelButtonRef = useRef(null);
  const [openn, setOpenn] = useState(false);
  const [reset, setReset] = useState(false);

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
                    <div className="bg-white pb-72 pt-96">
                      <div className="absolute top-[20px] left-[730px]">
                        <button
                          className="bg-transparent text-lightseagreen-100 font-bold text-5xl "
                          onClick={() => onClose(false)}
                        >
                          x
                        </button>
                      </div>
                      <h3 className="absolute top-[80px] left-[350px] text-9xl tracking-[-0.02em] font-medium text-lightseagreen-100 ">
                        Sign in
                      </h3>
                      <div className="absolute top-[58px] left-[60px]  ">
                        <img
                          className="h-15 w-16"
                          src={require("../assets/logo-signin.png")}
                          alt=""
                        />
                      </div>

                      <div>
                        <label
                          for="email"
                          className="absolute top-[200px] left-[270px] text-lightseagreen-100 text-xs"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="absolute top-[220px] left-[270px] bg-white border-2 border-b-lightseagreen-100 text-gray-900 text-sm block w-60 p-2.5 focus:outline-none focus:border-none"
                          placeholder="xyz@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="password"
                          className="absolute top-[280px] left-[270px] text-lightseagreen-100 text-xs"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          className="absolute top-[300px] left-[270px] bg-white border-2 border-b-lightseagreen-100 text-gray-900 text-sm block w-60 p-2.5 focus:outline-none focus:border-none"
                          placeholder="•••••••••"
                          required
                        />
                      </div>
                      <button
                        className="absolute top-[350px] left-[385px] 
                          text-gray-700 text-xs font-medium flex w-[247px]"
                        onClick={() => {
                          setReset(true);
                          onClose(false);
                        }}
                      >
                        Forget Password?
                      </button>
                      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[400px] left-[270px] w-240px] h-10">
                        <div className="absolute top-[0px] left-[0px] rounded-lg bg-lightseagreen-100 w-[240px] h-10" />
                        <div className="absolute top-[4px] left-[95px] text-4xl font-medium  text-white text-left flex items-center w-[86px]">
                          Login
                        </div>
                      </button>
                      <p className="absolute top-[460px] left-[330px] font-medium text-gray-700 flex items-center w-[214px]">
                        Or Sign in using
                      </p>
                      <img
                        className="absolute top-[490px] left-[365px] w-[25px] h-[25px] object-cover cursor-pointer"
                        alt=""
                        src={require("../assets/metamask@2x.png")}
                      />
                      <img
                        className="absolute top-[490px] left-[400px] w-[30px] h-[25px] object-cover cursor-pointer"
                        alt=""
                        src={require("../assets/google@2x.png")}
                      />
                      <p className="absolute top-[550px] left-[270px] font-medium flex items-center w-[334px]">
                        Are you new to Real Chain World?
                      </p>
                      <button
                        className="absolute top-[580px] left-[360px] font-medium text-lightseagreen-100 flex items-center w-[110px]"
                        onClick={() => {
                          setOpenn(true);
                          onClose(false);
                        }}
                      >
                        Sign Up
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <Signup open={openn} onClose={() => setOpenn(false)} />
      <ResetPassword open={reset} onClose={() => setReset(false)} />
    </>
  );
};

export default Signin;
