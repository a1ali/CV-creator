import MyDocument from "./components/MyDocument";
import ReactPDF, { PDFViewer, usePDF } from "@react-pdf/renderer";
import Form from "./components/Form";
import React, { useState, useEffect } from "react";

function App() {
    let myDocument = <MyDocument />;
    const [instance, update] = usePDF({ myDocument });

    let [cvInfo, setCVInfo] = useState({
        personal: {},
        experience: [],
        education: [],
    });


    const updateCVInfo = (personal, experience, education) => {
        let cvInfoCopy = Object.assign({}, cvInfo);
        cvInfoCopy.personal = personal;
        cvInfoCopy.experience = experience;
        cvInfoCopy.education = education;
        setCVInfo(cvInfoCopy);
        
        //console.log(instance)
    };




    // useEffect(() => {
    //     update();
    // }, [cvInfo]);

    return (
        <div className="flex">
            <Form updateCVInfo={updateCVInfo} updatePDF={update}></Form>
            <div className="hidden md:inline-block flex-auto">
                <PDFViewer className="w-full h-screen">
                    <MyDocument cvInfo={cvInfo}></MyDocument>
                </PDFViewer>
            </div>
        </div>
    );
}

export default App;
