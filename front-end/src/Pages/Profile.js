import React, { useState } from "react";
import SmallNavBar from "../Components/SmallNavBar";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [number, setnumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Number:", number);
    console.log("Bio:", bio);
  };
  return (
    <>
      <div className="bg-gray-200 w-screen">
        <div className="absolute left-[820px] m-4">
          <SmallNavBar />
        </div>
        <div className="absolute left-[360px] top-[100px]">
          <h1 className="font-serif text-4xl font-bold">Edit Your Profile</h1>
          <div className="border-t-2 border-lightseagreen-100 mt-8  mb-16 w-[450px] h-[480px] shadow-lg bg-white">
            <form className="max-w-sm mx-auto pt-6" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block mb-2 font-bold text-gray-700"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block mb-2 font-bold text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                  id="email"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 font-bold text-gray-700"
                  htmlFor="number"
                >
                  Cell Number
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                  id="number"
                  type="text"
                  placeholder="Mobile number"
                  value={number}
                  onChange={(e) => setnumber(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block mb-2 font-bold text-gray-700"
                  htmlFor="bio"
                >
                  Description
                </label>
                <textarea
                  className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                  id="bio"
                  placeholder="Write something about yourself"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  className="mt-2 px-4 py-2 font-bold text-white bg-blue rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;