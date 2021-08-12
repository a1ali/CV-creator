import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
    },
    header: {
        padding: 20,
        backgroundColor: "#003A75",
        height: "80px",
        alignItems: "center",
        flexDirection: "row",
        color: "#fff",
        fontSize: "30px",
       
    },
    test: {
        backgroundColor: "#62548b",
    },
    Firstname : {
        marginLeft: "10px"
    },
    name: {
        
        paddingRight: "5px",
    },
});

// Create Document Component
const MyDocument = ({ cvInfo }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <View style={styles.Firstname}>
                    {/* {cvInfo && <Text>{cvInfo.personal.firstName}</Text>} */}
                    {cvInfo.personal.firstName ? (
                        <Text>{cvInfo.personal.firstName + " "} </Text>
                    ) : (
                        <Text>First Name</Text>
                    )}
                </View>
                <View style={styles.Lastname}>
                    {/* {cvInfo && <Text>{cvInfo.personal.firstName}</Text>} */}
                    {cvInfo.personal.lastName ? (
                        <Text>{` ${cvInfo.personal.lastName}`} </Text>
                    ) : (
                        <Text>Last Name</Text>
                    )}
                </View>
            </View>
        </Page>
    </Document>
);

export default MyDocument;
