import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const PersonalInfoForm = () => {
  const initialValues = {
    lastname: "",
    firstname: "",
    phone: "",
    email: "",
    company: "",
  };

  const handleSubmit = (values) => {
    console.log(values); // You can perform further actions with the form values here
  };

  return (
    <div className="flex ml-32 mt-20">
      <div className="flex flex-col text-blue text-4xl font-semibold">
        <h2>Perosnal Information</h2>
      </div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="ml-56">
          <div className="flex flex-col ">
            <label className="font-medium ">Who are you?</label>
            <div className="flex">
              <label className="font-medium mt-8" htmlFor="firstname">
                First Name
              </label>
              <label className="font-medium ml-44 mt-8" htmlFor="lastname">
                Last Name
              </label>
            </div>
            <div className="flex">
              <Field
                className="w-[175px] h-[32px] border border-gray-600 focus:outline-none"
                type="text"
                name="firstname"
              />
              <Field
                className="ml-20 w-[175px] h-[32px] border border-gray-600 focus:outline-none"
                type="text"
                name="lastname"
              />
            </div>
            <label className="font-medium mt-8" htmlFor="phone">
              Phone Number
            </label>
            <Field
              className="mt-2 w-[300px] h-[32px] border border-gray-600 focus:outline-none"
              type="tel"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
            <label className="font-medium mt-8" htmlFor="company">
              Company
            </label>
            <Field
              className="mt-2 w-[300px] h-[32px] border border-gray-600 focus:outline-none"
              type="text"
              name="company"
            />
            <label className="font-medium mt-8" htmlFor="email">
              Email
            </label>
            <Field
              className="mt-2 w-[300px] h-[32px] border border-gray-600 focus:outline-none"
              type="text"
              name="email"
            />
          </div>

          <div className="rounded bg-lightseagreen-100 ml-72 mt-10 mb-14 w-[120px]  h-[40px]">
            <button
              className="text-white p-2 pl-10 text-3xl font-medium"
              type="submit"
            >
              Done
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default PersonalInfoForm;
