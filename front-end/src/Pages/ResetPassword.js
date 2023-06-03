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
              <div className="flex  justify-center text-center sm:items-center sm:pt-12">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="transform overflow-hidden rounded-md bg-white  shadow-xl transition-all h-full w-2/5 flex items-center justify-center">
                    <div className="bg-white pb-32 pt-10">
                      <div>
                        <button
                          className="absolute right-[70px] top-[30px] bg-transparent text-lightseagreen-100 font-bold text-5xl "
                          onClick={() => onClose(false)}
                        >
                          x
                        </button>
                      </div>
                      <div className="absolute top-[55px] left-[57px]  ">
                        <img
                          className="h-15 w-12"
                          src={require("../assets/logo-signin.png")}
                          alt=""
                        />
                      </div>
                      <div className="pt-20 flex justify-center">
                        <h3 className="text-lightseagreen-100 text-4xl font-semibold ">
                          Reset Password
                        </h3>
                      </div>

                      <div className="pt-10 text-left ">
                        <label
                          htmlFor="email"
                          className="text-lightseagreen-100 text-xs "
                        >
                          Email
                        </label>

                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="h-[40px] bg-white border-2 border-b-lightseagreen-100 text-gray-900 text-sm block w-60 p-2.5 focus:outline-none"
                          placeholder="xyz@example.com"
                          required
                        />
                      </div>

                      <div className="text-center pt-12">
                        <button
                          type="submit"
                          onClick={() => {
                            setLinksend(true);
                            onClose(false);
                          }}
                          className="pt-2  flex justify-center w-[247px] h-10 font-semibold text-white text-3xl cursor-pointer [border:none] bg-lightseagreen-100 "
                        >
                          Submit
                        </button>
                      </div>
                      <button className="text-gray-700 text-3xl font-medium flex w-[247px] ">
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
