import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        backgroundColor: "#E4E4E4",
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
});

// Create Document Component
const MyDocument = ({ cvInfo }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                {/* {cvInfo && <Text>{cvInfo.personal.firstName}</Text>} */}
                {cvInfo.personal.firstName ? (
                    <Text>{cvInfo.personal.firstName}</Text>
                ) : (
                    <Text>First Name</Text>
                )}
            </View>
            <View style={styles.section}>
                <Text>Section #2 dfdfdfdfd</Text>
            </View>
        </Page>
    </Document>
);

export default MyDocument;
