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
                      <h3 className="absolute top-[120px] left-[290px] text-lightseagreen-100 text-3xl font-medium ">
                        Log in to Real Chain world
                      </h3>
                      <div className="absolute top-[58px] left-[360px]  ">
                        <img
                          className="h-12 w-12"
                          src={require("../assets/logo-signin.png")}
                          alt=""
                        />
                      </div>

                      <Formik
                        initialValues={initialValues}
                        validate={validate}
                        onSubmit={handleSubmit}
                      >
                        {({ isSubmitting }) => (
                          <Form>
                            <div>
                              <label
                                htmlFor="email"
                                className="absolute top-[180px] left-[270px] text-lightseagreen-100 text-xs"
                              >
                                Email
                              </label>
                              <Field
                                type="email"
                                id="email"
                                name="email"
                                className="absolute top-[200px] left-[270px] h-[40px] bg-white border-2 border-b-lightseagreen-100 text-gray-900 text-sm block w-60 p-2.5 focus:outline-none"
                                placeholder="xyz@example.com"
                                required
                              />
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="text-red-500 text-xs absolute top-[210px] left-[530px]"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="password"
                                className="absolute top-[255px] left-[270px] text-lightseagreen-100 text-xs"
                              >
                                Password
                              </label>
                              <Field
                                type="password"
                                id="password"
                                name="password"
                                className="absolute top-[275px] left-[270px] h-[40px]  bg-white border-2 border-b-lightseagreen-100 text-gray-900 text-sm block w-60 p-2.5 focus:outline-none"
                                placeholder="•••••••••"
                                required
                              />
                              <ErrorMessage
                                name="password"
                                component="div"
                                className="text-red-500 text-xs  absolute top-[285px] left-[520px] h-[40px]"
                              />
                              <button
                                type="button"
                                className="absolute top-[315px] left-[385px] 
              text-gray-700 text-xs font-medium flex w-[247px]"
                                onClick={() => {
                                  setReset(true);
                                  onClose(false);
                                }}
                              >
                                Forget Password?
                              </button>
                            </div>
                            <button
                              ype="submit"
                              disabled={isSubmitting}
                              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[360px] left-[270px] w-240px] h-10"
                            >
                              <div className="absolute top-[0px] left-[0px] rounded bg-lightseagreen-100 w-[240px] h-10" />
                              <div className="absolute top-[4px] left-[95px] text-4xl font-medium  text-white text-left flex items-center w-[86px]">
                                Login
                              </div>
                            </button>
                          </Form>
                        )}
                      </Formik>
                      <img
                        className="absolute top-[445px] left-[260px] w-[250px]"
                        alt=""
                        src={require("../assets/or.PNG")}
                      />

                      <button className="cursor-pointer rounded-md  border-2 border-lightseagreen-300 absolute top-[495px] left-[265px] w-[240px] h-10">
                        <img
                          className="w-[240px]"
                          alt=""
                          src={require("../assets/google.png")}
                        />
                      </button>
                      <button className="cursor-pointer rounded-md  border-2 border-lightseagreen-200 absolute top-[545px] left-[265px] w-[240px] h-10">
                        <img
                          className="pl-8 w-[220px]"
                          alt=""
                          src={require("../assets/metamask@2x.png")}
                        />
                      </button>

                      <h3 className="absolute top-[405px] left-[275px] text-gray-500 text-2xl ">
                        New to Real Chain World?
                      </h3>

                      <button
                        className="absolute top-[405px] left-[430px] text-2xl font-medium text-lightseagreen-100 flex items-center w-[110px]"
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
