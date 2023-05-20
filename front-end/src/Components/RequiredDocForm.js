import React from "react";
import { Formik, Form } from "formik";

const RequiredDocForm = () => {
  const initialValues = {
    type: "",
    address: "",
  };

  const handleSubmit = (values) => {
    console.log(values); // You can perform further actions with the form values here
  };

  return (
    <div className="flex ml-32 mt-20">
      <div className="flex flex-col text-blue text-4xl font-semibold">
        <h2>Required Documents</h2>
      </div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="ml-56">
          <div className="rounded bg-lightseagreen-100 ml-72 mt-10 w-[120px]  h-[40px]">
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

export default RequiredDocForm;
