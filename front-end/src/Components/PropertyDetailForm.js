import React from "react";
import { Formik, Form, Field } from "formik";

const PropertyForm = () => {
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
        <h2>Property Detail</h2>
        <h2 className="font-medium mt-80">Property Location</h2>
      </div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="ml-56">
          <div className="text-3xl ">
            <label className="font-medium">What type of property is it?</label>
            <div className="mt-4 flex flex-col">
              <label className="bg-bgbutton w-[200px] h-[40px]">
                <Field
                  className="m-3 mr-4 accent-lightseagreen-100"
                  type="radio"
                  name="type"
                  value="residential"
                  required
                />
                Residential
              </label>
              <label className=" mt-2 bg-bgbutton w-[200px] h-[40px]">
                <Field
                  className="m-3 mr-4 accent-lightseagreen-100"
                  type="radio"
                  name="type"
                  value="commercial"
                />
                Commercial
              </label>
              <label className="mt-2 bg-bgbutton w-[200px] h-[40px]">
                <Field
                  className="m-3 mr-4 accent-lightseagreen-100"
                  type="radio"
                  name="type"
                  value="industrial"
                />
                Industrial
              </label>
              <label className=" mt-2 bg-bgbutton w-[200px] h-[40px]">
                <Field
                  className="m-3 mr-4 accent-lightseagreen-100"
                  type="radio"
                  name="type"
                  value="commercial"
                />
                Vacant Land
              </label>
              <label className=" mt-2 bg-bgbutton w-[200px] h-[40px]">
                <Field
                  className="m-3 mr-4 accent-lightseagreen-100"
                  type="radio"
                  name="type"
                  value="commercial"
                />
                Agricultural
              </label>
            </div>
          </div>
          <div className="flex flex-col mt-20">
            <label className="font-medium ">
              Please share the location of your Property
            </label>
            <label className="font-medium mt-6" htmlFor="address">
              Full Address
            </label>
            <Field
              as="textarea"
              className="mt-2 w-[400px]  border border-gray-600 focus:outline-none"
              type="text"
              name="address"
            />
            <label className="font-medium mt-8" htmlFor="country">
              Country
            </label>
            <Field
              className="mt-2 w-[400px] h-[32px] border border-gray-600 focus:outline-none"
              type="text"
              name="country"
            />
            <label className="font-medium mt-8" htmlFor="city">
              City
            </label>
            <Field
              className="mt-2 w-[400px] h-[32px] border border-gray-600 focus:outline-none"
              type="text"
              name="city"
            />
            <label className="font-medium mt-8" htmlFor="area">
              Area
            </label>
            <Field
              className="mt-2 w-[400px] h-[32px] border border-gray-600 focus:outline-none"
              type="text"
              name="area"
            />

            <label className="font-medium mt-10" htmlFor="goal">
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
            >
              Done
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default PropertyForm;
