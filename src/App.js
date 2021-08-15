import MyDocument from "./components/MyDocument";
import ReactPDF, {
    PDFViewer,
    usePDF,
    PDFDownloadLink,
} from "@react-pdf/renderer";
import Form from "./components/Form";
import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";

function App() {
    let myDocument = <MyDocument />;
    const [instance, update] = usePDF({ myDocument });

    let [cvInfo, setCVInfo] = useState({
        personal: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            description: "",
        },
        experience: [
            {
                id: uuidv4(),
                position: "",
                company: "",
                city: "",
                from: "",
                to: "",
                jobDescribe: "",
            },
        ],
        education: [
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
        ],
    });

    const updateCVInfo = (personal, experience, education) => {
        let cvInfoCopy = Object.assign({}, cvInfo);
        cvInfoCopy.personal = personal;
        cvInfoCopy.experience = experience;
        cvInfoCopy.education = education;
        setCVInfo(cvInfoCopy);
    };

    const downloadPDF = () => {
        ReactPDF.render(<MyDocument />, `example.pdf`);
    };

    return (
        <div className="flex">
            <Form
                updateCVInfo={updateCVInfo}
                downloadPDF={<MyDocument></MyDocument>}
            ></Form>
            <div className="hidden md:inline-block flex-auto">
                <PDFViewer className="w-full h-screen">
                    <MyDocument cvInfo={cvInfo}></MyDocument>
                </PDFViewer>
            </div>
        </div>
    );
}

export default App;
