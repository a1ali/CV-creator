import { useState, useEffect } from "react";

const Experience = ({ id, handleAdd, deleteJob, updateJobs }) => {
    let [position, setPosition] = useState("");
    let [company, setCompany] = useState("");
    let [city, setCity] = useState("");
    let [fromDate, setFromDate] = useState("");
    let [toDate, setToDate] = useState("");
    let [jobDescribe, setJobDescribe] = useState("");

    let [experience, setExperience] = useState({
        id: id,
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
        jobDescribe: "",
    });

    const updateExperience = () => {
        let experienceCopy = Object.assign({}, experience);
        experienceCopy.position = position;
        experienceCopy.company = company;
        experienceCopy.city = city;
        experienceCopy.from = fromDate;
        experienceCopy.to = toDate;
        experienceCopy.jobDescribe = jobDescribe;
        setExperience(experienceCopy);
    };

    useEffect(() => {
        updateExperience();
    }, [position, company, city, fromDate, toDate, jobDescribe]);

    useEffect(() => {
        updateJobs(experience);
    }, [experience]);

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
                    value={position}
                    onChange={(e) => {
                        setPosition(e.target.value);
                        // updateExperience();
                        // updateJobs(experience);
                    }}
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
                        value={company}
                        onChange={(e) => {
                            setCompany(e.target.value);
                            // updateExperience();
                            // updateJobs(experience);
                        }}
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
                        value={city}
                        onChange={(e) => {
                            setCity(e.target.value);
                            // updateExperience();
                            // updateJobs(experience);
                        }}
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
                        value={fromDate}
                        onChange={(e) => {
                            setFromDate(e.target.value);
                            // updateExperience();
                            // updateJobs(experience);
                        }}
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
                        value={toDate}
                        onChange={(e) => {
                            setToDate(e.target.value);
                            // updateExperience();
                            // updateJobs(experience);
                        }}
                        required
                    />
                </div>
            </div>

            <div className="flex flex-col mt-1">
                <label
                    htmlFor="description"
                    className="text-sm text-gray-100 font-sans"
                >
                    Job description:
                </label>
                <textarea
                    type="text"
                    id="description"
                    placeholder="Description"
                    className="rounded-md shadow-sm border-gray-900 bg-gray-800 text-gray-100 mt-1"
                    value={jobDescribe}
                    onChange={(e) => {
                        setJobDescribe(e.target.value);
                        // updatePersonalObj()
                        // updatePersonalInfo(personalObj)
                    }}
                    required
                    cols="30"
                    rows="4"
                ></textarea>
            </div>

            <div className="flex flex-col">
                <button
                    className="w-full bg-gray-300 mt-6 h-8 rounded-md text-lg font-semibold flex items-center justify-center space-x-2 hover:bg-gray-100"
                    onClick={() => handleAdd()}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                    <span>Add</span>
                </button>
                <button
                    className="w-full bg-black mt-4 h-8 text-gray-100 rounded-md text-lg font-semibold flex items-center justify-center  mb-3 space-x-2 hover:bg-gray-900"
                    onClick={() => deleteJob(id)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                    </svg>
                    <span>Delete</span>
                </button>
            </div>
        </div>
    );
};

export default Experience;
