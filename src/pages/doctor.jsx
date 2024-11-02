import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../fconfig/firebase";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
function Doctor() {
  const drInfo = collection(db, "doctors");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    specialization: "",
    email: "",
    startTime: "",
    endTime: "",
    availability: false,
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };
  useEffect(() => {
    async function getFormData() {
      const data = await getDocs(drInfo);
      setFormData(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    }
    getFormData();
  }, [drInfo]);

  const handleSubmit = async (id) => {
    const docData = doc(db, "doctors", id);
    const updatedData =
      (docData,
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        specialization: formData.specialization,
        email: formData.email,
        startTime: formData.startTime,
        endTime: formData.endTime,
        availability: formData.availability,
      });

    // Example: title: titleStore (replace with specific doctor fields)

    // Update doctor document in Firestore
    await updateDoc(drInfo, updatedData);

    setFormData({
      firstName: "",
      lastName: "",
      specialization: "",

      email: "",
      startTime: "",
      endTime: "",
      availability: false,
    });
    alert("Doctor added successfully!");
  };
  return (
    <>
      <div class="flex items-center justify-center h-screen  ">
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl mb-7">Doctor Login Form</h1>
          <div class="grid gap-6 mb-6 md:grid-cols-2 ">
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                for="last_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last name
              </label>
              <input
                type="text"
                id="speialization"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                for="last_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Specialization
              </label>
              <input
                type="text"
                id="specialization"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                for="phone"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="0300-0000000"
                pattern="[0-9]{4}-[0-9]{7}"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                for="starting time"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Starting Time
              </label>
              <input
                type="time"
                id="starting time"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                for="ending time"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Ending Time
              </label>
              <input
                type="time"
                id="ending time"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <span className="block text-sm font-semibold mb-4">
                Doctor's Availability
              </span>
              <label
                for="doctor availiability"
                class=" mb-2 mr-3 text-sm font-medium text-gray-900 dark:text-white"
              >
                Yes
              </label>
              <input
                id="availability"
                type="checkbox"
                value=""
                class="w-4 h-4 mr-5 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                onChange={handleChange}
              />
              <label
                for="doctor availiability"
                class="  text-sm font-medium mr-3 text-gray-900 dark:text-white"
              >
                No
              </label>
              <input
                id="availability"
                type="checkbox"
                value=""
                class="w-4 h-4 mr-5 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                onChange={handleChange}
              />
            </div>

            <div class="flex items-start mt-6">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 block focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the{" "}
                <Link
                  to="#"
                  class="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </Link>
                .
              </label>
            </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm block w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Doctor;
