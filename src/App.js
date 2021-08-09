import MyDocument from "./components/MyDocument";
import ReactPDF, { PDFViewer, usePDF } from "@react-pdf/renderer";
import Form from "./components/Form";


function App() {
    let myDocument = <MyDocument />;
    const [instance, update] = usePDF({ myDocument });
    console.log(instance);

    return (
        <div className="flex">
            <Form></Form>
            <div className="hidden md:inline-block flex-auto">
                <PDFViewer className="w-full h-screen">
                    <MyDocument></MyDocument>
                </PDFViewer>
            </div>
        </div>
    );
}

export default App;
