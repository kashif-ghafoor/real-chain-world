import { Transition, Dialog } from "@headlessui/react";
import { Fragment, useRef } from "react";

const ResetPasswordLink = ({ open, onClose }) => {
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
              <div className="flex  justify-center p-4 text-center sm:items-center  sm:pt-12">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="transform overflow-hidden rounded-md bg-white shadow-xl h-[500px] w-2/5 ">
                    <div className="flex justify-end pr-10 pt-6">
                      <button
                        className="bg-transparent text-lightseagreen-100 font-bold text-5xl"
                        onClick={() => onClose(false)}
                      >
                        x
                      </button>
                    </div>
                    <div className="absolute top-[38px] left-[44px]  ">
                      <img
                        className="h-15 w-12"
                        src={require("../assets/logo-signin.png")}
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center">
                      <div className="flex justify-center absolute top-[150px] bg-white w-[85%] h-[300px] overflow-hidden text-4xl text-lightseagreen-100">
                        <div className=" rounded-3xs bg-white w-[55%] h-[407px] border-t-[1.5px] border-solid border-lightseagreen-100" />
                        <img
                          className="absolute top-[24px] w-[15%] h-[15%] overflow-hidden"
                          alt=""
                          src="/done.svg"
                        />
                        <p className="text-3xl absolute top-[110px] font-semibold flex items-center w-[45%] ">
                          Link Sent Successfully
                        </p>

                        <div className="absolute top-[155px] text-[12px] text-gray-500 flex items-center w-[50%] ">
                          Your password has not been changed since more than 90
                          days. We sent you an email with a reset link. Please
                          click on it to reset your password.
                        </div>
                      </div>
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

export default ResetPasswordLink;
