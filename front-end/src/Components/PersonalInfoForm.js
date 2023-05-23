import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

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

    // Validate each field
    if (!values.firstname) {
      errors.firstname = "First Name is required";
    }
    if (!values.lastname) {
      errors.lastname = "Last Name is required";
    }
    if (!values.phone) {
      errors.phone = "Phone Number is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.company) {
      errors.company = "Company is required";
    }

    return errors;
  };

  return (
    <div className="flex ml-28 mt-20">
      <div className="flex flex-col text-blue text-4xl font-semibold">
        <h2>Personal Information</h2>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        {({ isSubmitting }) => (
          <Form className="ml-52">
            <div className="flex flex-col">
              <label className="font-medium">Who are you?</label>
              <div className="flex">
                <label className="font-medium mt-8" htmlFor="firstname">
                  First Name *
                </label>
                <label className="font-medium ml-44 mt-8" htmlFor="lastname">
                  Last Name *
                </label>
              </div>
              <div className="flex">
                <Field
                  className="w-[175px] h-[32px] border border-gray-600 focus:outline-none"
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                />
                <Field
                  className="ml-20 w-[175px] h-[32px] border border-gray-600 focus:outline-none"
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                />
              </div>
              <ErrorMessage
                name="firstname"
                component="div"
                className="text-red-500"
              />
              <ErrorMessage
                name="lastname"
                component="div"
                className="text-red-500"
              />

              <label className="font-medium mt-8" htmlFor="phone">
                Phone Number *
              </label>
              <Field
                className="mt-2 w-[300px] h-[32px] border border-gray-600 focus:outline-none"
                type="tel"
                name="phone"
                placeholder="92-1234567890"
                pattern="[0-9]{2}-[0-9]{10}"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500"
              />

              <label className="font-medium mt-8" htmlFor="company">
                Company *
              </label>
              <Field
                className="mt-2 w-[300px] h-[32px] border border-gray-600 focus:outline-none"
                type="text"
                placeholder="xyz"
                name="company"
              />
              <ErrorMessage
                name="company"
                component="div"
                className="text-red-500"
              />

              <label className="font-medium mt-8" htmlFor="email">
                Email *
              </label>
              <Field
                className="mt-2 w-[300px] h-[32px] border border-gray-600 focus:outline-none"
                placeholder="example123@com"
                type="text"
                name="email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="font-medium mt-12">
              <label htmlFor="goal">
                What’s your goal with tokenizing your asset? (optional)
              </label>
              <Field
                as="textarea"
                className="mt-2 w-[400px]  border border-gray-600 focus:outline-none"
                type="text"
                name="goal"
              />
            </div>

            <div className="rounded bg-lightseagreen-100 ml-72 mt-10 mb-14 w-[120px]  h-[40px]">
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
