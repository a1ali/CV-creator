import React, { useState } from "react";
import Header from "./Header";

function Form() {
    let [firstName, setFirst] = useState("");
    let [jobs, setJobs] = useState(1);

    return (
        <div className="w-full md:w-1/2 lg:w-1/3 bg-gray-600 border-r-2 border-gray-800 flex flex-col">
            <h1 className="text-4xl font-semibold px-6 pt-6 text-gray-100 mb-3 flex justify-between items-center flex-none h-14">
                <span>CVENETOR</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                </svg>
            </h1>

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
                                maxlength="12"
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

                    {/* <div>
                        <div className="flex flex-col space-y-1">
                            <label
                                htmlFor="position"
                                className="text-sm text-gray-100 font-sans"
                            >
                                Position:
                            </label>
                            <input
                                type="text"
                                id="position"
                                placeholder="Position"
                                className="rounded-md shadow-sm border-gray-900 bg-gray-800 text-gray-100 mt-1"
                                required
                            />
                        </div>

                        <div className="flex flex-col space-y-1 md:flex-row md:space-x-3 md:space-y-0 justify-center">
                            <div className="w-full">
                                <label
                                    htmlFor="company"
                                    className="text-sm text-gray-100"
                                >
                                    Company:
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    placeholder="Company"
                                    className="w-full rounded-md shadow-sm border-gray-900 bg-gray-800 text-gray-100 mt-1"
                                    required
                                />
                            </div>

                            <div className="w-full">
                                <label
                                    htmlFor="city"
                                    className="text-sm text-gray-100"
                                >
                                    City:
                                </label>
                                <input
                                    type="text"
                                    id="City"
                                    placeholder="city"
                                    className="w-full rounded-md shadow-sm border-gray-900 bg-gray-800 text-gray-100 mt-1"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col space-y-1 md:flex-row md:space-x-3 md:space-y-0 justify-center">
                            <div className="w-full">
                                <label
                                    htmlFor="from"
                                    className="text-sm text-gray-100"
                                >
                                    From:
                                </label>
                                <input
                                    type="date"
                                    id="from"
                                    className="w-full rounded-md shadow-sm border-gray-900 bg-gray-800 text-gray-100 mt-1 text-xs"
                                    required
                                />
                            </div>

                            <div className="w-full">
                                <label
                                    htmlFor="To"
                                    className="text-sm text-gray-100"
                                >
                                    To:
                                </label>
                                <input
                                    type="date"
                                    id="to"
                                    className="w-full rounded-md shadow-sm border-gray-900 bg-gray-800 text-gray-300 mt-1 text-xs "
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <button>Add</button>
                            <button>Delete</button>
                        </div>
                    </div> */}
                    <Experience></Experience>
                    <Experience></Experience>
                    <Experience></Experience>
                </section>
            </form>
        </div>
    );
}

const Experience = () => {
    return (
        <div>
            <div className="flex flex-col space-y-1">
                <label
                    htmlFor="position"
                    className="text-sm text-gray-100 font-sans"
                >
                    Position:
                </label>
                <input
                    type="text"
                    id="position"
                    placeholder="Position"
                    className="rounded-md shadow-sm border-gray-900 bg-gray-800 text-gray-100 mt-1"
                    required
                />
            </div>

            <div className="flex flex-col space-y-1 md:flex-row md:space-x-3 md:space-y-0 justify-center">
                <div className="w-full">
                    <label htmlFor="company" className="text-sm text-gray-100">
                        Company:
                    </label>
                    <input
                        type="text"
                        id="company"
                        placeholder="Company"
                        className="w-full rounded-md shadow-sm border-gray-900 bg-gray-800 text-gray-100 mt-1"
                        required
                    />
                </div>

                <div className="w-full">
                    <label htmlFor="city" className="text-sm text-gray-100">
                        City:
                    </label>
                    <input
                        type="text"
                        id="City"
                        placeholder="city"
                        className="w-full rounded-md shadow-sm border-gray-900 bg-gray-800 text-gray-100 mt-1"
                        required
                    />
                </div>
            </div>

            <div className="flex flex-col space-y-1 md:flex-row md:space-x-3 md:space-y-0 justify-center">
                <div className="w-full">
                    <label htmlFor="from" className="text-sm text-gray-100">
                        From:
                    </label>
                    <input
                        type="date"
                        id="from"
                        className="w-full rounded-md shadow-sm border-gray-900 bg-gray-800 text-gray-100 mt-1 text-xs"
                        required
                    />
                </div>

                <div className="w-full">
                    <label htmlFor="To" className="text-sm text-gray-100">
                        To:
                    </label>
                    <input
                        type="date"
                        id="to"
                        className="w-full rounded-md shadow-sm border-gray-900 bg-gray-800 text-gray-300 mt-1 text-xs "
                        required
                    />
                </div>
            </div>
            <div className="flex flex-col">
                <button>Add</button>
                <button>Delete</button>
            </div>
        </div>
    );
};

export default Form;
