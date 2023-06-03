import { Transition, Dialog } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import Signup from "./Signup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ResetPassword from "./ResetPassword";

const Signin = ({ open, onClose }) => {
  const cancelButtonRef = useRef(null);
  const [openn, setOpenn] = useState(false);
  const [reset, setReset] = useState(false);

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
                  <Dialog.Panel className="transform overflow-hidden rounded-md bg-white text-center shadow-xl transition-all h-full w-3/5 flex items-center justify-center">
                    <div className="bg-white pb-72 pt-96">
                      <div>
                        <button
                          className="absolute right-[70px] top-[30px] bg-transparent text-lightseagreen-100 font-bold text-5xl "
                          onClick={() => onClose(false)}
                        >
                          x
                        </button>
                      </div>
                      <div className="absolute top-[80px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex text-center justify-center">
                        <img
                          className="h-12 w-12"
                          src={require("../assets/logo-signin.png")}
                          alt=""
                        />
                      </div>

                      <div className="text-center w-[200px]">
                        <h3 className="absolute top-[120px] text-lightseagreen-100 text-3xl font-medium ">
                          Log in to Real Chain world
                        </h3>
                      </div>

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
                                className="absolute top-[180px] text-lightseagreen-100 text-xs "
                              >
                                Email
                              </label>

                              <Field
                                type="email"
                                id="email"
                                name="email"
                                className="absolute top-[200px] h-[40px] bg-white border-2 border-b-lightseagreen-100 text-gray-900 text-sm block w-60 p-2.5 focus:outline-none"
                                placeholder="xyz@example.com"
                                required
                              />
                            </div>
                            <div className="text-left">
                              <label
                                htmlFor="password"
                                className="absolute top-[255px] text-lightseagreen-100 text-xs  "
                              >
                                Password
                              </label>
                              <Field
                                type="password"
                                id="password"
                                name="password"
                                className="absolute top-[275px] h-[40px]  bg-white border-2 border-b-lightseagreen-100 text-gray-900 text-sm block w-60 p-2.5 focus:outline-none"
                                placeholder="•••••••••"
                                required
                              />

                              <button
                                type="button"
                                className="absolute top-[315px] text-gray-700 text-xs font-medium flex w-[247px]"
                                onClick={() => {
                                  setReset(true);
                                  onClose(false);
                                }}
                              >
                                Forget Password?
                              </button>
                            </div>
                            <div className="text-center">
                              <button
                                type="submit"
                                disabled={isSubmitting}
                                className="pt-2 absolute top-[365px] flex justify-center w-[247px] h-10 font-semibold text-white text-3xl cursor-pointer [border:none] bg-lightseagreen-100 "
                              >
                                Login
                              </button>
                            </div>
                          </Form>
                        )}
                      </Formik>
                      <div className="absolute top-[405px] flex ">
                        <h3 className=" text-gray-500 text-2xl ">
                          New to Real Chain World?
                        </h3>
                        <button
                          className="pl-2 text-2xl font-medium text-lightseagreen-100 flex items-center w-[110px]"
                          onClick={() => {
                            setOpenn(true);
                            onClose(false);
                          }}
                        >
                          Sign Up
                        </button>
                      </div>
                      <img
                        className="absolute top-[445px] w-[250px]"
                        alt=""
                        src={require("../assets/or.PNG")}
                      />

                      <button className="rounded-md pt-2 absolute top-[480px] flex justify-center w-[247px] h-10 font-semibold text-white text-3xl cursor-pointer border-2 border-offwhite">
                        <img
                          className="w-[240px]"
                          alt=""
                          src={require("../assets/google.png")}
                        />
                      </button>
                      <button className="rounded-md p-1 absolute top-[540px] flex justify-center w-[240px] h-10 font-semibold text-white text-3xl cursor-pointer border-2 border-lightseagreen-100 ">
                        <img
                          className="w-[160px] "
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
      <Signup open={openn} onClose={() => setOpenn(false)} />
      <ResetPassword open={reset} onClose={() => setReset(false)} />
    </>
  );
};

export default Signin;
