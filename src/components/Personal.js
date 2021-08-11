import React, { useState } from "react";

function Personal() {
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [address, setAddress] = useState("");
    let [city, setCity] = useState("");
    let [zip, setZip] = useState("");
    let [describe, setDescribe] = useState("");
    let [state, setState] = useState("");

    // to do
    //  implement state handling and updating to parent component
    return (
        <div>
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
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
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
                    <label htmlFor="email" className="text-sm text-gray-100">
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
                    <label htmlFor="phone" className="text-sm text-gray-100">
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
                    <label htmlFor="state" className="text-sm text-gray-100">
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
                    <label htmlFor="zip" className="text-sm text-gray-100">
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
        </div>
    );
}

export default Personal;
