import { Transition, Dialog } from "@headlessui/react";
import { Fragment, useRef } from "react";
import { Formik, Form, Field } from "formik";

const Signup = ({ open, onClose }) => {
  const cancelButtonRef = useRef(null);
  const initialValues = { email: "", password: "" };

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Email is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

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
                  <Dialog.Panel className="transform overflow-hidden rounded-md bg-white  shadow-xl transition-all h-full w-3/5 flex items-center justify-center">
                    <div className="bg-white pb-96 pt-96">
                      <div>
                        <button
                          className="absolute right-[70px] top-[30px] bg-transparent text-lightseagreen-100 font-bold text-5xl "
                          onClick={() => onClose(false)}
                        >
                          x
                        </button>
                      </div>
                      <div className="absolute top-[70px] left-1/2 transform -translate-x-1/2 flex text-center justify-center">
                        <img
                          className="h-12 w-12"
                          src={require("../assets/logo-signin.png")}
                          alt=""
                        />
                      </div>
                      <div className="absolute top-[120px] transform -translate-x-1/2  text-center justify-center">
                        <h3 className="text-lightseagreen-100 text-3xl font-medium ">
                          Register with Real Chain World
                        </h3>
                      </div>
                      <div className="absolute top-[200px]  transform -translate-x-1/2 flex flex-col  justify-center">
                        <Formik
                          initialValues={initialValues}
                          validate={validate}
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
                              <div className="text-left">
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
                              <div className="text-left">
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
                        <div className="absolute top-[345px] flex ">
                          <h3 className=" text-gray-500 text-2xl ">
                            Already on Real Chain?
                          </h3>
                          <button className="pl-2 text-2xl font-medium text-lightseagreen-100 flex items-center w-[110px]">
                            Sign in
                          </button>
                        </div>
                        <img
                          className="absolute top-[390px] w-[250px]"
                          alt=""
                          src={require("../assets/or.PNG")}
                        />

                        <button className="rounded-md pt-2 absolute top-[440px] flex justify-center w-[247px] h-10 font-semibold text-white text-3xl cursor-pointer border-2 border-offwhite">
                          <img
                            className="w-[240px]"
                            alt=""
                            src={require("../assets/google.png")}
                          />
                        </button>
                        <button className="rounded-md p-1 absolute top-[490px] flex justify-center w-[247px] h-10 font-semibold text-white text-3xl cursor-pointer border-2 border-lightseagreen-100 ">
                          <img
                            className="w-[160px] "
                            alt=""
                            src={require("../assets/metamask@2x.png")}
                          />
                        </button>
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

export default Signup;
