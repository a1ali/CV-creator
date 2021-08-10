import React, { useState } from "react";
import Header from "./Header";
import Experience from "./Experience";
import Footer from "./Footer";
import { v4 as uuidv4 } from "uuid";

function Form() {
    let [firstName, setFirst] = useState("");
    let [jobs, setJobs] = useState([
        { id: uuidv4(), position: "", company: "", city: "", from: "", to: "" },
    ]);
    // let [experience, setExperience] = useState({});

    const increaseJobs = () => {
        let newJobs = jobs.slice();
        newJobs.push({ id: uuidv4() });
        setJobs(newJobs);
    };

    const deleteJobs = (id) => {
        let newJobs = jobs.filter((job) => job.id !== id);
        setJobs(newJobs);
    };

    const updateJobs = (obj) => {
        let jobsCopy = jobs.slice();
        let jobsExist = false;
        jobsCopy.forEach((job) => {
            if (job.id === obj.id) {
                jobsExist = true;
                job.position = obj.position;
                job.company = obj.company;
                job.city = obj.city;
                job.from = obj.from;
                job.to = obj.to;
                //create a reference free copy of the object
            }
        });
        if (!jobsExist) {
            jobsCopy.push(obj);
        }
        setJobs(jobsCopy);
    };

    return (
        <div className="w-full md:w-1/2 lg:w-1/3 bg-gray-600 border-r-2 border-gray-800 flex flex-col">
            <Header></Header>
            <form
                className="flex flex-col w-full  p-6 pt-16 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-gray-500 scrollbar-track-gray-400"
                style={{ maxHeight: `calc(100vh - 70px)` }}
            >
                <section className="mb-4">
                    <h1 className="text-lg font-semibold text-gray-100 mb-2">
                        Personal Information
                    </h1>
                    <div className="flex flex-col md:flex-row space-y-1 md:space-x-3 md:space-y-0 w-full justify-center  ">
                        <div className="w-full">
                            <label
                                htmlFor="firstName"
                                className="text-sm text-gray-100"
                            >
                                First name:
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                placeholder="First name"
                                className="w-full rounded-md shadow-sm border-gray-900 bg-gray-800 text-gray-100 mt-1 justify-center"
                                required
                            />
                        </div>

                        <div className="w-full">
                            <label
                                htmlFor="lastName"
                                className="text-sm text-gray-100 font-sans"
                            >
                                Last name:
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Last name"
                                className="w-full rounded-md shadow-sm border-gray-900 bg-gray-800 text-gray-100 mt-1"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-1 md:flex-row md:space-x-3 md:space-y-0 justify-center">
                        <div className="w-full">
                            <label
                                htmlFor="email"
                                className="text-sm text-gray-100"
                            >
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="w-full rounded-md shadow-sm border-gray-900 bg-gray-800 text-gray-100 mt-1"
                                required
                            />
                        </div>

                        <div className="w-full">
                            <label
                                htmlFor="phone"
                                className="text-sm text-gray-100"
                            >
                                Phone number:
                            </label>
                            <input
                                type="tel"
                                id="email"
                                placeholder="xxx-xxx-xxxx"
                                className="w-full rounded-md shadow-sm border-gray-900 bg-gray-800 text-gray-100 mt-1"
                                required
                                maxLength="12"
                                pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label
                            htmlFor="address"
                            className="text-sm text-gray-100 font-sans"
                        >
                            Address:
                        </label>
                        <input
                            type="text"
                            id="address"
                            placeholder="Address"
                            className="rounded-md shadow-sm border-gray-900 bg-gray-800 text-gray-100 mt-1"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="city"
                            className="text-sm text-gray-100 font-sans"
                        >
                            City:
                        </label>
                        <input
                            type="text"
                            id="city"
                            placeholder="City"
                            className="rounded-md shadow-sm border-gray-900 bg-gray-800 text-gray-100 mt-1"
                            required
                        />
                    </div>

                    <div className="flex flex-col space-y-1 md:flex-row md:space-x-3 md:space-y-0 justify-center">
                        <div className="w-full">
                            <label
                                htmlFor="state"
                                className="text-sm text-gray-100"
                            >
                                State:
                            </label>
                            <input
                                type="text"
                                id="state"
                                placeholder="State"
                                className="w-full rounded-md shadow-sm border-gray-900 bg-gray-800 text-gray-100 mt-1"
                                required
                            />
                        </div>

                        <div className="w-full">
                            <label
                                htmlFor="zip"
                                className="text-sm text-gray-100"
                            >
                                Zip Code:
                            </label>
                            <input
                                type="text"
                                id="zip"
                                placeholder="zip code"
                                className="w-full rounded-md shadow-sm border-gray-900 bg-gray-800 text-gray-100 mt-1"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col mt-1">
                        <label
                            htmlFor="description"
                            className="text-sm text-gray-100 font-sans"
                        >
                            Describe your self:
                        </label>
                        <textarea
                            type="text"
                            id="description"
                            placeholder="Description"
                            className="rounded-md shadow-sm border-gray-900 bg-gray-800 text-gray-100 mt-1"
                            required
                            cols="30"
                            rows="4"
                        ></textarea>
                    </div>
                </section>

                <section className="border-t border-gray-400">
                    <h1 className="text-lg font-semibold text-gray-100 mb-2 mt-4">
                        Work Experience
                    </h1>

                    {jobs.map((job) => (
                        <Experience
                            id={job.id}
                            handleAdd={increaseJobs}
                            deleteJob={deleteJobs}
                            updateJobs={updateJobs}
                        ></Experience>
                    ))}
                </section>

                {/* <section>
                    {jobs.map(job => (
                        <div>

                            <div>{job.id}</div>
                            <div>{job.position}</div>
                            <div>{job.company}</div>
                            <div>{job.from}</div>
                        </div>

                    ))}
                </section> */}
                <Footer />
            </form>
        </div>
    );
}

export default Form;
