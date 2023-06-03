import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";

const PropertyForm = ({ onNext }) => {
  const initialValues = {
    type: "",
    address: "",
    country: "",
    city: "",
    area: "",
    price: "",
    selectedOption: "",
    selectOptions: [],
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values); // You can perform further actions with the form values here
    setSubmitting(false);
    onNext(); // Call the onNext function when the form is submitted
  };

  const validateForm = (values) => {
    const errors = {};

    return errors;
  };

  return (
    <div className="flex ml-40 mt-20">
      <div className="flex flex-col text-blue text-4xl font-semibold">
        <h2>Property Detail</h2>
        <h2 className="font-medium mt-80">Property Location</h2>
        <h2 className="font-medium absolute top-[1100px]">
          Price and Currency
        </h2>
        <h2 className="font-medium absolute top-[1395px]">Property Features</h2>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        {({ isSubmitting }) => (
          <Form className="pl-96">
            {/* Form fields */}
            <div className="text-3xl ">
              {/* Type of property */}
              <label className="font-medium">
                What type of property is it? *
              </label>
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
                    value="vacant land"
                  />
                  Vacant Land
                </label>
                <label className=" mt-2 bg-bgbutton w-[200px] h-[40px]">
                  <Field
                    className="m-3 mr-4 accent-lightseagreen-100"
                    type="radio"
                    name="type"
                    value="agricultural"
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
                Full Address *
              </label>
              <Field
                as="textarea"
                className="p-1 mt-2 w-[400px] border border-gray-600 focus:outline-lightseagreen-100"
                type="text"
                name="address"
                required
              />
              <label className="font-medium mt-8" htmlFor="country">
                Country *
              </label>
              <Field
                className="p-1 mt-2 w-[400px] h-[32px] border border-gray-600 focus:outline-lightseagreen-100"
                type="text"
                placeholder="Pakistan"
                name="country"
                required
              />
              <label className="font-medium mt-8" htmlFor="city">
                City *
              </label>
              <Field
                className="p-1 mt-2 w-[400px] h-[32px] border border-gray-600 focus:outline-lightseagreen-100"
                type="text"
                placeholder="Karachi"
                name="city"
                required
              />
              <label className="font-medium mt-8" htmlFor="area">
                Area *
              </label>
              <Field
                className="p-1 mt-2 w-[400px] h-[32px] border border-gray-600 focus:outline-lightseagreen-100"
                type="text"
                placeholder="Street-2 Zone 5"
                name="area"
                required
              />
            </div>

            <div className="flex flex-col mt-24">
              <label className="font-medium ">
                Please Enter the desired price of your Property *
              </label>
              <label className="font-medium mt-6" htmlFor="price">
                Price
              </label>
              <Field
                className="p-1 mt-2 w-[300px] h-[35px] border border-gray-600 focus:outline-lightseagreen-100"
                type="text"
                placeholder="100,00,000."
                name="price"
                required
              />

              <label className="font-medium mt-8" htmlFor="selectedOption">
                Specify the Currency *
              </label>
              <Field
                className="bg-lightseagreen-200 w-[300px]"
                as="select"
                id="selectedOption"
                name="selectedOption"
                required
              >
                <option className="bg-offwhite" value="option1">
                  PKR
                </option>
                <option className="bg-offwhite" value="option2">
                  USD
                </option>
                <option className="bg-offwhite" value="option3">
                  EUR
                </option>
              </Field>
            </div>

            <div className="flex mt-24">
              <FieldArray
                className="flex ml-32 mt-20"
                name="selectOptions"
                required
              >
                <div>
                  <label className="font-medium">
                    Which features does the property have? *
                  </label>
                  <div
                    className="mt-4 p-1 bg-bgbutton w-[200px] h-[40px]"
                    role="group"
                    aria-labelledby="checkbox-group"
                  >
                    <label className="pl-2 " htmlFor="swimmingpool">
                      <Field
                        className="accent-lightseagreen-100 mr-4"
                        name="selectOptions"
                        type="checkbox"
                        value="swimmingpool"
                      />
                      Swimming Pool
                    </label>
                  </div>
                  <div
                    className="mt-2 p-1 bg-bgbutton w-[200px] h-[40px]"
                    role="group"
                    aria-labelledby="checkbox-group"
                  >
                    <label className="pl-2" htmlFor="garage">
                      <Field
                        className="accent-lightseagreen-100 mr-4"
                        name="selectOptions"
                        type="checkbox"
                        value="garage"
                      />
                      Garage
                    </label>
                  </div>
                  <div
                    className="mt-2 p-1 bg-bgbutton w-[200px] h-[40px]"
                    role="group"
                    aria-labelledby="checkbox-group"
                  >
                    <label className="pl-2" htmlFor="garden">
                      <Field
                        className="accent-lightseagreen-100 mr-4"
                        name="selectOptions"
                        type="checkbox"
                        value="garden"
                      />
                      Garden or Yard
                    </label>
                  </div>
                  <div
                    className="mt-2 p-1 bg-bgbutton w-[200px] h-[40px]"
                    role="group"
                    aria-labelledby="checkbox-group"
                  >
                    <label className="pl-2" htmlFor="basement">
                      <Field
                        className="accent-lightseagreen-100  mr-4"
                        name="selectOptions"
                        type="checkbox"
                        value="basement"
                      />
                      Basement
                    </label>
                  </div>
                  <div
                    className="mt-2 p-1 bg-bgbutton w-[200px] h-[40px]"
                    role="group"
                    aria-labelledby="checkbox-group"
                  >
                    <label className="pl-2" htmlFor="balcony">
                      <Field
                        className="accent-lightseagreen-100  mr-4"
                        name="selectOptions"
                        type="checkbox"
                        value="balcony"
                      />
                      Balcony
                    </label>
                  </div>
                  <div
                    className="mt-2 p-1 bg-bgbutton w-[200px] h-[40px]"
                    role="group"
                    aria-labelledby="checkbox-group"
                  >
                    <label className="pl-2" htmlFor="Study or Home Office">
                      <Field
                        className="accent-lightseagreen-100 mr-4"
                        name="selectOptions"
                        type="checkbox"
                        value="Study or Home Office"
                      />
                      Home Office
                    </label>
                  </div>
                  <div
                    className="mt-2 p-1 bg-bgbutton w-[200px] h-[40px]"
                    role="group"
                    aria-labelledby="checkbox-group"
                  >
                    <label className="pl-2" htmlFor="gym">
                      <Field
                        className="accent-lightseagreen-100 mr-4"
                        name="selectOptions"
                        type="checkbox"
                        value="gym"
                      />
                      Gym
                    </label>
                  </div>
                  <div
                    className="mt-2 p-1 bg-bgbutton w-[200px] h-[40px]"
                    role="group"
                    aria-labelledby="checkbox-group"
                  >
                    <label className="pl-2" htmlFor="other">
                      <Field
                        className="accent-lightseagreen-100 mr-4"
                        name="selectOptions"
                        type="checkbox"
                        value="other"
                      />
                      Other
                    </label>
                  </div>
                </div>
              </FieldArray>
            </div>

            <div className="rounded bg-lightseagreen-100 mt-14 mx-auto mb-2 ml-72 w-20% h-10 flex items-center justify-center">
              <button
                className="text-white p-2 pl-2 text-3xl font-medium"
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

export default PropertyForm;
