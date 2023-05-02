import { Transition, Dialog } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import ResetPasswordLink from "./ResetPasswordLink";

const ResetPassword = ({ open, onClose }) => {
  const [linksend, setLinksend] = useState(false);
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
                    <div className="bg-white pb-96 pt-96">
                      <div className="absolute top-[20px] left-[730px]">
                        <button
                          className="bg-transparent text-lightseagreen-100 font-bold text-5xl "
                          onClick={() => onClose(false)}
                        >
                          x
                        </button>
                      </div>
                      <h3 className="absolute top-[100px] left-[280px] text-11xl tracking-[-0.02em]  font-bold text-lightseagreen-100 ">
                        Reset Password
                      </h3>
                      <div className="absolute top-[170px] left-[355px]  ">
                        <img
                          className="h-15 w-16"
                          src={require("../assets/logo-signin.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <label
                          for="email"
                          className="absolute top-[270px] left-[270px] text-lightseagreen-100 text-xs"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="absolute top-[290px] left-[270px] bg-white border-2 border-b-lightseagreen-100 text-gray-900 text-sm block w-60 p-2.5 "
                          placeholder="xyz@example.com"
                          required
                        />
                      </div>

                      <button
                        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[370px] left-[270px] w-240px] h-10"
                        onClick={() => {
                          setLinksend(true);
                          onClose(false);
                        }}
                      >
                        <div className="absolute top-[0px] left-[0px] rounded-lg bg-lightseagreen-100 w-[240px] h-10" />
                        <div className="absolute top-[4px] left-[85px] text-4xl font-medium  text-white text-left flex items-center w-[86px]">
                          Submit
                        </div>
                      </button>
                      <button
                        className="absolute top-[410px] left-[410px] 
                          text-gray-700 text-xxs font-medium flex w-[247px]"
                      >
                        Back to Login
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <ResetPasswordLink open={linksend} onClose={() => setLinksend(false)} />
    </>
  );
};

export default ResetPassword;
