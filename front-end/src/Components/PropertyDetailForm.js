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
    onNext();
  };

  const validateForm = (values) => {
    const errors = {};

    // Validate each field
    if (!values.type) {
      errors.type = "Type is required";
    }
    if (!values.address) {
      errors.address = "Address is required";
    }
    if (!values.country) {
      errors.country = "Country is required";
    }
    if (!values.city) {
      errors.city = "City is required";
    }
    if (!values.area) {
      errors.area = "Area is required";
    }
    if (!values.price) {
      errors.price = "Price is required";
    }
    if (!values.selectedOption) {
      errors.selectedOption = "Currency is required";
    }
    if (values.selectOptions.length === 0) {
      errors.selectOptions = "At least one feature is required";
    }

    return errors;
  };

  return (
    <div className="flex ml-32 mt-20">
      <div className="flex flex-col text-blue text-4xl font-semibold">
        <h2>Property Detail</h2>
        <h2 className="font-medium mt-80">Property Location</h2>
        <h2 className="font-medium  absolute top-[1090px]">
          Price and Currency
        </h2>
        <h2 className="font-medium absolute top-[1370px]">Property Features</h2>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        {({ isSubmitting }) => (
          <Form className="ml-56">
            {/* Form fields */}
            <div className="text-3xl ">
              {/* Type of property */}
              <label className="font-medium">
                What type of property is it?
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
            </div>

            <div className="flex flex-col mt-24">
              <label className="font-medium ">
                Please Enter the desired price of your Property
              </label>
              <label className="font-medium mt-6" htmlFor="price">
                Price
              </label>
              <Field
                className="mt-2 w-[400px]  border border-gray-600 focus:outline-none"
                type="text"
                name="price"
              />

              <label className="font-medium mt-8" htmlFor="selectedOption">
                Specify the Currency
              </label>
              <Field
                className="bg-lightseagreen-200"
                as="select"
                id="selectedOption"
                name="selectedOption"
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
              <FieldArray className="flex ml-32 mt-20" name="selectOptions">
                <div>
                  <label className="font-medium">
                    Which features does the property have?
                  </label>
                  <div
                    className="mt-4"
                    role="group"
                    aria-labelledby="checkbox-group"
                  >
                    <Field
                      className="accent-lightseagreen-100"
                      name="selectOptions"
                      type="checkbox"
                      value="swimmingpool"
                    />
                    <label className="pl-4" htmlFor="swimmingpool">
                      Swimming Pool
                    </label>
                  </div>
                  <div
                    className="mt-4"
                    role="group"
                    aria-labelledby="checkbox-group"
                  >
                    <Field
                      className="accent-lightseagreen-100"
                      name="selectOptions"
                      type="checkbox"
                      value="garage"
                    />
                    <label className="pl-4" htmlFor="garage">
                      Garage
                    </label>
                  </div>
                  <div
                    className="mt-4"
                    role="group"
                    aria-labelledby="checkbox-group"
                  >
                    <Field
                      className="accent-lightseagreen-100"
                      name="selectOptions"
                      type="checkbox"
                      value="garden"
                    />
                    <label className="pl-4" htmlFor="garden">
                      Garden or Yard
                    </label>
                  </div>
                  <div
                    className="mt-4"
                    role="group"
                    aria-labelledby="checkbox-group"
                  >
                    <Field
                      className="accent-lightseagreen-100"
                      name="selectOptions"
                      type="checkbox"
                      value="basement"
                    />
                    <label className="pl-4" htmlFor="basement">
                      Basement
                    </label>
                  </div>
                  <div
                    className="mt-4"
                    role="group"
                    aria-labelledby="checkbox-group"
                  >
                    <Field
                      className="accent-lightseagreen-100"
                      name="selectOptions"
                      type="checkbox"
                      value="balcony"
                    />
                    <label className="pl-4" htmlFor="balcony">
                      Balcony
                    </label>
                  </div>
                  <div
                    className="mt-4"
                    role="group"
                    aria-labelledby="checkbox-group"
                  >
                    <Field
                      className="accent-lightseagreen-100"
                      name="selectOptions"
                      type="checkbox"
                      value="Study or Home Office"
                    />
                    <label className="pl-4" htmlFor="Study or Home Office">
                      Study or Home Office
                    </label>
                  </div>
                  <div
                    className="mt-4"
                    role="group"
                    aria-labelledby="checkbox-group"
                  >
                    <Field
                      className="accent-lightseagreen-100"
                      name="selectOptions"
                      type="checkbox"
                      value="gym"
                    />
                    <label className="pl-4" htmlFor="gym">
                      Gym
                    </label>
                  </div>
                </div>
              </FieldArray>
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

export default PropertyForm;
