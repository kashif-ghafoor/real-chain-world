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
                  <Dialog.Panel className="relative transform overflow-hidden rounded-md bg-white text-center shadow-xl transition-all h-full w-1/2">
                    <div className="bg-white pb-48 pt-64">
                      <div className="absolute top-[20px] left-[600px]">
                        <button
                          className="bg-transparent text-lightseagreen-100 font-bold text-5xl "
                          onClick={() => onClose(false)}
                        >
                          x
                        </button>
                      </div>
                      <div className="absolute top-[38px] left-[44px]  ">
                        <img
                          className="h-15 w-16"
                          src={require("../assets/logo-signin.png")}
                          alt=""
                        />
                      </div>
                      <div className="absolute top-[120px] bg-white w-10/12 h-[300px] overflow-hidden text-left text-4xl text-lightseagreen-100">
                        <div className="absolute top-[0px] left-[200px] rounded-3xs bg-white box-border w-[260px] h-[407.75px] border-t-[1.5px] border-solid border-lightseagreen-100" />
                        <div className="absolute top-[110px] left-[240px] font-semibold flex items-center w-[260px]">
                          Link Sent Successfully
                        </div>

                        <img
                          className="absolute top-[24px] left-[310px] w-[50px] h-[50px] overflow-hidden"
                          alt=""
                          src="/done.svg"
                        />
                        <div className="absolute text-xxxs top-[155px] left-[215px] text-[11px] text-gray-500 flex items-center w-[235px]">
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
