import NavBar from "../Components/NavBar";
import React from "react";
import { useRef } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tokenization = () => {
  const propertydetailRef = useRef(null);
  const personalInfoRef = useRef(null);
  const DocsRef = useRef(null);
  const alertRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  {
    const initialValues = {
      type: "",
      address: "",
      country: "",
      city: "",
      area: "",
      price: "",
      suppliers: "",
      selectedOption: "",
      selectOptions: [],
      lastname: "",
      firstname: "",
      phone: "",
      email: "",
      company: "",
      files: [],
      videos: [],
    };

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
      console.log(values);
      console.log(values.files);
      console.log(values.videos);
      resetForm();

      // Show success toast notification
      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onOpen: () => {
          // Scroll to the alert when it becomes visible
          alertRef.current.scrollIntoView({ behavior: "smooth" });
        },
      });

      setSubmitting(false);
    };

    const validateForm = (values) => {
      const errors = {};
      return errors;
    };

    const FileUpload = ({ field, form }) => {
      const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: ".pdf",
        multiple: true,
        onDrop: (acceptedFiles) => {
          form.setFieldValue(field.name, [
            ...form.values.files,
            ...acceptedFiles,
          ]);
        },
      });

      const removeFile = (index) => {
        const updatedFiles = [...form.values.files];
        updatedFiles.splice(index, 1);
        form.setFieldValue(field.name, updatedFiles);
      };

      return (
        <div className="mt-4">
          <div
            {...getRootProps()}
            className="p-10 bg-whitesmoke border border-gray-300 rounded cursor-pointer focus:outline-lightseagreen-100"
          >
            <input {...getInputProps()} />
            <p>
              <FiUpload className="w-4 h-8 inline-block mr-2 text-lightseagreen-100" />
              Drag and drop PDF files here, or click to select files
            </p>
          </div>
          {form.errors[field.name] && (
            <ErrorMessage
              name={field.name}
              component="div"
              className="text-gray-100"
            />
          )}
          {form.values.files.length > 0 && (
            <div className="mt-2">
              <h4>Selected Files:</h4>
              <ul>
                {form.values.files.map((file, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-lightseagreen-100 text-5xl font-medium">
                      {file.name}
                    </span>
                    <button
                      type="button"
                      className="ml-8 text-red-500 text-5xl"
                      onClick={() => removeFile(index)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    };

    return (
      <>
        <NavBar />
        <div>
          <div className="bg-blue h-[60px]">
            <div className="flex justify-center p-1">
              <button
                className="rounded text-5xl sm:text-2xl md:text-5xl font-semibold w-[12%]  h-[52px] text-blue bg-white"
                onClick={() => {
                  scrollToSection(propertydetailRef);
                }}
              >
                Property Detail
              </button>

              <button
                className="rounded ml-1 border border-lightseagreen-300 text-5xl sm:text-2xl md:text-5xl font-semibold  w-[12%]  h-[52px] text-blue bg-white"
                onClick={() => {
                  scrollToSection(personalInfoRef);
                }}
              >
                Who are you?
              </button>

              <button
                className="rounded ml-1 border border-lightseagreen-300 text-5xl sm:text-2xl md:text-5xl font-semibold  w-[12%]  h-[52px]  text-blue bg-white"
                onClick={() => {
                  scrollToSection(DocsRef);
                }}
              >
                Documents
              </button>
            </div>
          </div>
        </div>
        <ToastContainer className="text-3xl w-[500px]" ref={alertRef} />
        <div className="flex ">
          <div className="bg-offwhite pr-32">
            <div className="ml-40 mt-20 flex flex-col text-blue text-7xl font-semibold">
              <h2 ref={propertydetailRef}>Property Detail</h2>
              <h2 className="mt-96">Property Location</h2>
              <h2 className="absolute top-[1330px]">Price and Currency</h2>
              <h2 className="absolute top-[1800px]">Property Features</h2>
              <h2 className="pt-8 absolute top-[2370px]">
                Personal Information
              </h2>
              <h2 ref={DocsRef} className="absolute mt-2 top-[3110px]">
                Property Documents
              </h2>
            </div>
          </div>

          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validate={validateForm}
          >
            {({ isSubmitting }) => (
              <Form className="mt-20  pl-72 text-5xl">
                {/* Form fields */}
                <div className="text-5xl  ">
                  {/* Type of property */}
                  <label className="font-medium">
                    What type of property is it? *
                  </label>
                  <div className="mt-4 flex flex-col">
                    <label className="bg-bgbutton w-[270px] h-[46px]">
                      <Field
                        className="m-3 mr-6 accent-lightseagreen-100 custom-radio h-5 w-5"
                        type="radio"
                        name="type"
                        value="residential"
                        required
                      />
                      Residential
                    </label>
                    <label className=" mt-2 bg-bgbutton  w-[270px] h-[46px]">
                      <Field
                        className="m-3 mr-6 accent-lightseagreen-100 custom-radio h-5 w-5"
                        type="radio"
                        name="type"
                        value="commercial"
                      />
                      Commercial
                    </label>
                    <label className="mt-2 bg-bgbutton  w-[270px] h-[46px]">
                      <Field
                        className="m-3 mr-6 accent-lightseagreen-100 custom-radio h-5 w-5"
                        type="radio"
                        name="type"
                        value="industrial"
                      />
                      Industrial
                    </label>
                    <label className=" mt-2 bg-bgbutton   w-[270px] h-[46px]">
                      <Field
                        className="m-3 mr-6 accent-lightseagreen-100 custom-radio h-5 w-5"
                        type="radio"
                        name="type"
                        value="vacant land"
                      />
                      Vacant Land
                    </label>
                    <label className=" mt-2 bg-bgbutton   w-[270px] h-[46px]">
                      <Field
                        className="m-3 mr-6 accent-lightseagreen-100 custom-radio h-5 w-5"
                        type="radio"
                        name="type"
                        value="agricultural"
                      />
                      Agricultural
                    </label>
                  </div>
                </div>

                <div className="flex flex-col mt-28">
                  <label className="font-medium ">
                    Please share the location of your Property
                  </label>
                  <label className="font-medium mt-6" htmlFor="address">
                    Full Address *
                  </label>
                  <Field
                    as="textarea"
                    className="bg-whitesmoke p-2 mt-2 w-[500px] border border-gray-600 focus:outline-lightseagreen-100"
                    type="text"
                    name="address"
                    required
                  />
                  <label className="font-medium mt-8" htmlFor="country">
                    Country *
                  </label>
                  <Field
                    className="bg-whitesmoke p-1 mt-2 w-[500px] h-[40px] border border-gray-600 focus:outline-lightseagreen-100"
                    type="text"
                    placeholder="Pakistan"
                    name="country"
                    required
                  />
                  <label className="font-medium mt-8" htmlFor="city">
                    City *
                  </label>
                  <Field
                    className="bg-whitesmoke p-1 mt-2 w-[500px] h-[40px] border border-gray-600 focus:outline-lightseagreen-100"
                    type="text"
                    placeholder="Karachi"
                    name="city"
                    required
                  />
                  <label className="font-medium mt-8" htmlFor="area">
                    Area *
                  </label>
                  <Field
                    className="bg-whitesmoke p-1 mt-2 w-[500px] h-[40px] border border-gray-600 focus:outline-lightseagreen-100"
                    type="text"
                    placeholder="Street-2 Zone 5"
                    name="area"
                    required
                  />
                </div>

                <div ref={personalInfoRef} className="flex flex-col mt-24">
                  <label className="font-medium ">
                    Please Enter the desired price of your Property *
                  </label>
                  <label className="font-medium mt-6" htmlFor="price">
                    Price
                  </label>
                  <Field
                    className="p-1 mt-2 w-[400px] h-[40px] border border-gray-600 focus:outline-lightseagreen-100"
                    type="text"
                    placeholder="100,00,000."
                    name="price"
                    required
                  />

                  <label className="font-medium mt-8" htmlFor="selectedOption">
                    Specify the Currency *
                  </label>
                  <Field
                    className="p-1 bg-whitesmoke bg-lightseagreen-200 w-[300px]"
                    as="select"
                    id="selectedOption"
                    name="selectedOption"
                    required
                  >
                    <option className="bg-offwhite" value="option1">
                      Eth
                    </option>
                    <option className="bg-offwhite" value="option2">
                      USD
                    </option>
                    <option className="bg-offwhite" value="option3">
                      EUR
                    </option>
                  </Field>

                  <label className="font-medium mt-8" htmlFor="price">
                    Enter suppliers
                  </label>
                  <Field
                    className="p-1 mt-2 w-[400px] h-[40px] border border-gray-600 focus:outline-lightseagreen-100"
                    type="number"
                    placeholder=""
                    name="suppliers"
                    required
                  />
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
                        className="mt-4 p-1 bg-bgbutton w-[290px] h-[50px]"
                        role="group"
                        aria-labelledby="checkbox-group"
                      >
                        <label className="pl-2 " htmlFor="swimmingpool">
                          <Field
                            className="accent-lightseagreen-100 mr-4 h-5 w-5"
                            name="selectOptions"
                            type="checkbox"
                            value="swimmingpool"
                          />
                          Swimming Pool
                        </label>
                      </div>
                      <div
                        className="mt-2 p-1 bg-bgbutton w-[290px] h-[50px]"
                        role="group"
                        aria-labelledby="checkbox-group"
                      >
                        <label className="pl-2" htmlFor="garage">
                          <Field
                            className="accent-lightseagreen-100 mr-4 h-5 w-5"
                            name="selectOptions"
                            type="checkbox"
                            value="garage"
                          />
                          Garage
                        </label>
                      </div>
                      <div
                        className="mt-2 p-1 bg-bgbutton w-[290px] h-[50px]"
                        role="group"
                        aria-labelledby="checkbox-group"
                      >
                        <label className="pl-2" htmlFor="garden">
                          <Field
                            className="accent-lightseagreen-100 mr-4 h-5 w-5"
                            name="selectOptions"
                            type="checkbox"
                            value="garden"
                          />
                          Garden or Yard
                        </label>
                      </div>
                      <div
                        className="mt-2 p-1 bg-bgbutton w-[290px] h-[50px]"
                        role="group"
                        aria-labelledby="checkbox-group"
                      >
                        <label className="pl-2" htmlFor="basement">
                          <Field
                            className="accent-lightseagreen-100 mr-4 h-5 w-5"
                            name="selectOptions"
                            type="checkbox"
                            value="basement"
                          />
                          Basement
                        </label>
                      </div>
                      <div
                        className="mt-2 p-1 bg-bgbutton w-[290px] h-[50px]"
                        role="group"
                        aria-labelledby="checkbox-group"
                      >
                        <label className="pl-2" htmlFor="balcony">
                          <Field
                            className="accent-lightseagreen-100 mr-4 h-5 w-5"
                            name="selectOptions"
                            type="checkbox"
                            value="balcony"
                          />
                          Balcony
                        </label>
                      </div>
                      <div
                        className="mt-2 p-1 bg-bgbutton w-[290px] h-[50px]"
                        role="group"
                        aria-labelledby="checkbox-group"
                      >
                        <label className="pl-2" htmlFor="Study or Home Office">
                          <Field
                            className="accent-lightseagreen-100 mr-4 h-5 w-5"
                            name="selectOptions"
                            type="checkbox"
                            value="Study or Home Office"
                          />
                          Home Office
                        </label>
                      </div>
                      <div
                        className="mt-2 p-1 bg-bgbutton w-[290px] h-[50px]"
                        role="group"
                        aria-labelledby="checkbox-group"
                      >
                        <label className="pl-2" htmlFor="gym">
                          <Field
                            className="accent-lightseagreen-100 mr-4 h-5 w-5"
                            name="selectOptions"
                            type="checkbox"
                            value="gym"
                          />
                          Gym
                        </label>
                      </div>
                      <div
                        className="mt-2 p-1 bg-bgbutton w-[290px] h-[50px]"
                        role="group"
                        aria-labelledby="checkbox-group"
                      >
                        <label className="pl-2" htmlFor="other">
                          <Field
                            className="accent-lightseagreen-100 mr-4 h-5 w-5"
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
                <div ref={personalInfoRef} className="mt-24 flex flex-col">
                  <label className="font-medium">Who are you?</label>
                  <div className="flex">
                    <label className="font-medium mt-8" htmlFor="firstname">
                      First Name *
                    </label>
                    <label
                      className="font-medium ml-40 mt-8"
                      htmlFor="lastname"
                    >
                      Last Name *
                    </label>
                  </div>
                  <div className="flex">
                    <Field
                      className="bg-whitesmoke p-1 w-[200px] h-[40px] border border-gray-600 focus:outline-lightseagreen-100"
                      type="text"
                      placeholder="First Name"
                      name="firstname"
                      required
                    />
                    <Field
                      className="bg-whitesmoke p-1 ml-24 w-[200px] h-[40px] border border-gray-600 focus:outline-lightseagreen-100"
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
                    className="bg-whitesmoke p-1 mt-2 w-[500px] h-[40px] border border-gray-600 focus:outline-lightseagreen-100"
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
                    className="bg-whitesmoke p-1 mt-2 w-[500px] h-[40px] border border-gray-600 focus:outline-lightseagreen-100"
                    type="text"
                    placeholder="xyz"
                    name="company"
                    required
                  />

                  <label className="font-medium mt-8" htmlFor="email">
                    Email *
                  </label>
                  <Field
                    className="bg-whitesmoke p-1 mt-2 w-[500px] h-[40px] border border-gray-600 focus:outline-lightseagreen-100"
                    placeholder="example123@com"
                    type="text"
                    name="email"
                    required
                  />
                  <label className="font-medium mt-10 " htmlFor="goal">
                    What’s your goal with tokenizing your asset? (optional)
                  </label>
                  <Field
                    as="textarea"
                    className="bg-whitesmoke mt-2 w-[500px] p-1 border border-gray-600 focus:outline-lightseagreen-100"
                    type="text"
                    name="goal"
                  />
                </div>
                {/* New file upload field */}
                <div className="mt-16">
                  <label className="font-medium">Upload PDF Files</label>
                  <Field
                    className="w-[400px]"
                    name="files"
                    component={FileUpload}
                  />
                </div>

                <div className="mt-12 mb-28">
                  {/* Submit button */}
                  <button
                    type="submit"
                    className="bg-blue text-white rounded px-8 py-2"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </>
    );
  }
};

export default Tokenization;
