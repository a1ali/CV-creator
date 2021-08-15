import React, { useState, useEffect } from "react";
import Header from "./Header";
import Experience from "./Experience";
import Footer from "./Footer";
import { v4 as uuidv4 } from "uuid";
import Education from "./Education";
import Personal from "./Personal";
import { PDFDownloadLink, pdf } from "@react-pdf/renderer";

function Form({ updateCVInfo, downloadPDF }) {
    let [show, setShow] = useState(false);

    let [personal, setPersonal] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        description: "",
    });

    let [jobs, setJobs] = useState([
        {
            id: uuidv4(),
            position: "",
            company: "",
            city: "",
            from: "",
            to: "",
            jobDescribe: "",
        },
    ]);

    let [educations, setEducations] = useState([
        {
            id: uuidv4(),
            university: "",
            degree: "",
            city: "",
            from: "",
            to: "",
            major: "",
            relevantCourses: "",
        },
    ]);

    const updatePersonalInfo = (obj) => {
        let personalCopy = Object.assign({}, personal);
        personalCopy = obj;
        setPersonal(personalCopy);
    };

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
                job.jobDescribe = obj.jobDescribe;
            }
        });
        if (!jobsExist) {
            jobsCopy.push(obj);
        }
        setJobs(jobsCopy);
    };

    const increaseEducation = () => {
        let neweducations = educations.slice();
        neweducations.push({ id: uuidv4() });
        setEducations(neweducations);
    };

    const deleteEducation = (id) => {
        let newEdu = educations.filter((edu) => edu.id !== id);
        setEducations(newEdu);
    };

    const updateEducation = (obj) => {
        let newEducations = educations.slice();
        let eduExist = false;
        newEducations.forEach((edu) => {
            if (edu.id === obj.id) {
                eduExist = true;
                edu.university = obj.university;
                edu.degree = obj.degree;
                edu.city = obj.city;
                edu.from = obj.from;
                edu.to = obj.to;
                edu.major = obj.major;
                edu.relevantCourses = obj.relevantCourses;
            }
        });
        if (!eduExist) {
            newEducations.push(obj);
        }
        setEducations(newEducations);
    };

    useEffect(() => {
        updateCVInfo(personal, jobs, educations);
    }, [personal, educations, jobs]);

    useEffect(() => {
        let complete = true;
        for (let key in personal) {
            if (personal[key] === "") {
                complete = false;
            }
        }

        jobs.forEach((job) => {
            for (let key in job) {
                if (job[key] === "") {
                    complete = false;
                }
            }
        });

        educations.forEach((job) => {
            for (let key in job) {
                if (job[key] === "") {
                    complete = false;
                }
            }
        });

        if (complete) {
            setShow(true);
        }
    });

    return (
        <div className="w-full md:w-1/2 lg:w-1/3 bg-gray-600 border-r-2 border-gray-800 flex flex-col">
            <Header></Header>
            <form
                className="flex flex-col w-full  p-6 pt-16 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-gray-500 scrollbar-track-gray-400"
                style={{ maxHeight: `calc(100vh - 70px)` }}
            >
                <section className="mb-4">
                    <Personal
                        updatePersonalInfo={updatePersonalInfo}
                    ></Personal>
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

                <section className="border-t border-gray-400">
                    <h1 className="text-lg font-semibold text-gray-100 mb-2 mt-4">
                        Education
                    </h1>
                    {educations.map((edu) => (
                        <Education
                            id={edu.id}
                            increaseEducation={increaseEducation}
                            deleteEducation={deleteEducation}
                            updateEducationArr={updateEducation}
                        ></Education>
                    ))}
                </section>

                {/* <button
                    onClick={(e) => {
                        e.preventDefault();
                        downloadPDF();
                    }}
                >
                    Update PDF
                </button> */}
                {/* <PDFDownloadLink document={downloadPDF} fileName="somename.pdf">
                    {({ blob, url, loading, error }) =>
                        loading ? "Loading document..." : "Download now!"
                    }
                </PDFDownloadLink> */}
                {/* {show ? (
                    <PDFDownloadLink
                        document={downloadPDF}
                        fileName="somename.pdf"
                        style={{
                            textDecoration: "none",
                            padding: "10px",
                            color: "#4a4a4a",
                            backgroundColor: "#f2f2f2",
                            border: "1px solid #4a4a4a",
                        }}
                    >
                        {({ blob, url, loading, error }) =>
                            loading ? "Loading document..." : "Download now!"
                        }
                    </PDFDownloadLink>
                ) : (
                    <span>false</span>
                )} */}
                {/* {show? console.log(pdf(downloadPDF).toBlob()):<span>false</span>} */}
                <Footer />
            </form>
        </div>
    );
}

export default Form;
