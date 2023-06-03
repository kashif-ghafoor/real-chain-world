import React from "react";
import { Formik, Form, Field } from "formik";

const PersonalInfoForm = ({ onNext }) => {
  const initialValues = {
    lastname: "",
    firstname: "",
    phone: "",
    email: "",
    company: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values); // You can perform further actions with the form values here
    setSubmitting(false);
    onNext();
  };

  const validateForm = (values) => {
    const errors = {};

    return errors;
  };

  return (
    <div className="flex ml-40 mt-20">
      <div className="flex flex-col text-blue text-4xl font-semibold">
        <h2>Personal Information</h2>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        {({ isSubmitting }) => (
          <Form className="pl-96">
            <div className="flex flex-col">
              <label className="font-medium">Who are you?</label>
              <div className="flex">
                <label className="font-medium mt-8" htmlFor="firstname">
                  First Name *
                </label>
                <label className="font-medium ml-40 mt-8" htmlFor="lastname">
                  Last Name *
                </label>
              </div>
              <div className="flex">
                <Field
                  className="p-1 w-[175px] h-[32px] border border-gray-600 focus:outline-lightseagreen-100"
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                  required
                />
                <Field
                  className="p-1 ml-20 w-[175px] h-[32px] border border-gray-600 focus:outline-lightseagreen-100"
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  required
                />
              </div>

              <label className="font-medium mt-8" htmlFor="phone">
                Phone Number *
              </label>
              <Field
                className="p-1 mt-2 w-[300px] h-[32px] border border-gray-600 focus:outline-lightseagreen-100"
                type="tel"
                name="phone"
                placeholder="92-1234567890"
                pattern="[0-9]{2}-[0-9]{10}"
                required
              />

              <label className="font-medium mt-8" htmlFor="company">
                Company *
              </label>
              <Field
                className="p-1 mt-2 w-[300px] h-[32px] border border-gray-600 focus:outline-lightseagreen-100"
                type="text"
                placeholder="xyz"
                name="company"
                required
              />

              <label className="font-medium mt-8" htmlFor="email">
                Email *
              </label>
              <Field
                className="p-1 mt-2 w-[300px] h-[32px] border border-gray-600 focus:outline-lightseagreen-100"
                placeholder="example123@com"
                type="text"
                name="email"
                required
              />
            </div>

            <div className="mt-12">
              <label className="font-medium " htmlFor="goal">
                What’s your goal with tokenizing your asset? (optional)
              </label>
              <Field
                as="textarea"
                className="mt-2 w-[400px] p-1 border border-gray-600 focus:outline-lightseagreen-100"
                type="text"
                name="goal"
              />
            </div>

            <div className="rounded bg-lightseagreen-100 ml-72 mt-10 mb-4 w-[120px]  h-[40px]">
              <button
                className="text-white p-2 pl-10 text-3xl font-medium"
                type="submit"
                disabled={isSubmitting}
              >
                Done
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInfoForm;
