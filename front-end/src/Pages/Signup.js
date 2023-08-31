import { Transition, Dialog } from "@headlessui/react";
import { Fragment, useRef } from "react";
import { Formik, Form, Field } from "formik";

const Signup = ({ open, onClose }) => {
  const cancelButtonRef = useRef(null);
  const initialValues = { email: "", password: "" };

  const handleSubmit = (values, { setSubmitting }) => {
    // Submit logic here
    setSubmitting(false);
  };

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
              <div className="flex justify-center p-4 text-center sm:items-center sm:p-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="transform overflow-hidden rounded-md bg-white shadow-xl h-[860px] w-3/5 ">
                    <div className="flex justify-end pr-10 pt-6">
                      <button
                        className="bg-transparent text-lightseagreen-100 font-bold text-5xl"
                        onClick={() => onClose(false)}
                      >
                        x
                      </button>
                    </div>
                    <div className="pt-2 flex justify-center items-center flex-col">
                      <img
                        className="h-12 w-12"
                        src={require("../assets/logo-signin.png")}
                        alt=""
                      />
                      <h3 className="pt-4 text-lightseagreen-100 text-3xl font-medium">
                        Log in to Real Chain world
                      </h3>
                    </div>

                    <div className="pt-8 flex justify-center">
                      <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                      >
                        {({ isSubmitting }) => (
                          <Form>
                            <div className="text-left">
                              <label
                                htmlFor="email"
                                className="text-lightseagreen-100 text-xs "
                              >
                                Email
                              </label>

                              <Field
                                type="email"
                                id="email"
                                name="email"
                                className="h-[40px] bg-white border-2 border-b-lightseagreen-100 text-gray-900 text-sm block w-60 p-2.5 focus:outline-none"
                                placeholder="xyz@example.com"
                                required
                              />
                            </div>
                            <div className="pt-2 text-left">
                              <label
                                htmlFor="password"
                                className="text-lightseagreen-100 text-xs  "
                              >
                                Password
                              </label>
                              <Field
                                type="password"
                                id="password"
                                name="password"
                                className="h-[40px]  bg-white border-2 border-b-lightseagreen-100 text-gray-900 text-sm block w-60 p-2.5 focus:outline-none"
                                placeholder="•••••••••"
                                required
                              />
                            </div>
                            <div className="pt-2 text-left">
                              <label
                                htmlFor="password"
                                className="text-lightseagreen-100 text-xs  "
                              >
                                Confirm Password
                              </label>
                              <Field
                                type="password"
                                id="confirm password"
                                name="confirm password"
                                className="h-[40px]  bg-white border-2 border-b-lightseagreen-100 text-gray-900 text-sm block w-60 p-2.5 focus:outline-none"
                                placeholder="•••••••••"
                                required
                              />
                            </div>

                            <div className="flex pt-6">
                              <div class="checked:bg-lightseagreen-100">
                                <input
                                  id="default-checkbox"
                                  type="checkbox"
                                  value=""
                                  class="w-4 h-4  bg-lightseagreen-100 border-lightseagreen-100 rounded "
                                />
                              </div>
                              <div className="pl-2">
                                <div
                                  className="text-left leading-4 text-gray-700"
                                  style={{ fontSize: "14px", width: "240px" }}
                                >
                                  {`I certify that I have read, understand and accept Real Chain World’s `}
                                </div>

                                <p
                                  className="m-0 absolute underline text-left text-lightseagreen-100 cursor-pointer"
                                  style={{ fontSize: "14px", width: "240px" }}
                                  id="terms"
                                >{`Terms & Conditions`}</p>
                              </div>
                            </div>

                            <div className="text-center pt-12">
                              <button
                                type="submit"
                                disabled={isSubmitting}
                                className="pt-2  flex justify-center w-[247px] h-10 font-semibold text-white text-3xl cursor-pointer [border:none] bg-lightseagreen-100 "
                              >
                                Sign up
                              </button>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                    <div className="flex justify-center mt-2">
                      <div className="flex items-center">
                        <h3 className="text-gray-500 text-2xl mr-2">
                          Already on Real Chain World?
                        </h3>
                        <button className="text-2xl font-medium text-lightseagreen-100 flex ">
                          Sign Up
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-center mt-8">
                      <img
                        className="w-[250px]"
                        alt=""
                        src={require("../assets/or.PNG")}
                      />
                    </div>

                    <div className="flex justify-center mt-4">
                      <button className="rounded-md pt-2 flex justify-center w-[247px] h-10 font-semibold text-white text-3xl cursor-pointer border-2 border-offwhite">
                        <img
                          className="w-[240px]"
                          alt=""
                          src={require("../assets/google.png")}
                        />
                      </button>
                    </div>
                    <div className="flex justify-center mt-4">
                      <button className="rounded-md p-1 flex justify-center w-[240px] h-10 font-semibold text-white text-3xl cursor-pointer border-2 border-lightseagreen-100">
                        <img
                          className="w-[160px]"
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
