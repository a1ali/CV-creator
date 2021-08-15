import { useState, useEffect } from "react";

const Education = ({
    id,
    increaseEducation,
    deleteEducation,
    updateEducationArr,
}) => {
    let [university, setUniversity] = useState("");
    let [degree, setDegree] = useState("");
    let [city, setCity] = useState("");
    let [fromDate, setFromDate] = useState("");
    let [toDate, setToDate] = useState("");
    let [major, setMajor] = useState("");
    let [relevantCourses, setRelevantCourses] = useState("");

    let [education, setEducation] = useState({
        id: id,
        university: "",
        degree: "",
        city: "",
        from: "",
        to: "",
        major: "",
        relevantCourses: "",
    });

    const updateEducation = () => {
        let educationCopy = Object.assign({}, education);
        educationCopy.university = university;
        educationCopy.degree = degree;
        educationCopy.city = city;
        educationCopy.from = fromDate;
        educationCopy.to = toDate;
        educationCopy.major = major;
        educationCopy.relevantCourses = relevantCourses;
        setEducation(educationCopy);
    };

    useEffect(() => {
        updateEducation();
    }, [university, degree, city, fromDate, toDate, major, relevantCourses]);

    useEffect(() => {
        updateEducationArr(education);
    }, [education]);

    return (
        <div>
            <div className="flex flex-col space-y-1">
                <label
                    htmlFor="university"
                    className="text-sm text-gray-100 font-sans"
                >
                    University:
                </label>
                <input
                    type="text"
                    id="university"
                    placeholder="University"
                    className="rounded-md shadow-sm border-gray-900 bg-gray-800 text-gray-100 mt-1"
                    value={university}
                    onChange={(e) => {
                        setUniversity(e.target.value);
                    }}
                    required
                />
            </div>

            <div className="flex flex-col space-y-1 md:flex-row md:space-x-3 md:space-y-0 justify-center">
                <div className="w-full">
                    <label htmlFor="degree" className="text-sm text-gray-100">
                        Degree:
                    </label>
                    <input
                        type="text"
                        id="degree"
                        placeholder="Degree"
                        className="w-full rounded-md shadow-sm border-gray-900 bg-gray-800 text-gray-100 mt-1"
                        value={degree}
                        onChange={(e) => {
                            setDegree(e.target.value);
                        }}
                        required
                    />
                </div>

                <div className="w-full">
                    <label htmlFor="major" className="text-sm text-gray-100">
                        Major:
                    </label>
                    <input
                        type="text"
                        id="major"
                        placeholder="Major"
                        className="w-full rounded-md shadow-sm border-gray-900 bg-gray-800 text-gray-100 mt-1"
                        value={major}
                        onChange={(e) => {
                            setMajor(e.target.value);
                        }}
                        required
                    />
                </div>
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
                    }}
                    required
                />
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
                    Relevant courses:
                </label>
                <textarea
                    type="text"
                    id="description"
                    placeholder="Relevant courses"
                    className="rounded-md shadow-sm border-gray-900 bg-gray-800 text-gray-100 mt-1"
                    value={relevantCourses}
                    onChange={(e) => {
                        setRelevantCourses(e.target.value);
                    }}
                    required
                    cols="30"
                    rows="4"
                ></textarea>
            </div>

            <div className="flex flex-col">
                <button
                    className="w-full bg-gray-300 mt-6 h-8 rounded-md text-lg font-semibold flex items-center justify-center space-x-2 hover:bg-gray-100"
                    onClick={() => increaseEducation()}
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
                    className="w-full bg-black mt-4 h-8 text-gray-100 rounded-md text-lg font-semibold flex items-center justify-center space-x-2 hover:bg-gray-900 mb-3"
                    onClick={() => deleteEducation(id)}
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

export default Education;
