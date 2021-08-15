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
    Firstname: {
        marginLeft: "10px",
    },
    name: {
        paddingRight: "5px",
    },

    mainContent: {
        flexDirection: "row",
    },
    sideBar: {
        padding: "20px 15px",
        width: "150px",
        backgroundColor: "#F4F4F4",
        height: "760px",
    },
    titleText: {
        fontSize: "16px",
        color: "#003A75",
        fontWeight: "bolder",
        paddingBottom: "3px",
        borderBottom: "1px",
        borderBottomColor: "#A9A9A9",
    },
    sideBarInfo: {
        paddingTop: "15px",
        fontSize: "12px",
    },
    sideBarInfoText: {
        fontSize: "11px",
        paddingTop: "5px",
        fontWeight: "light",
    },
    experienceSection: {
        width: "450px",
        padding: "15px",
    },
    describeSection: {
        fontSize: "12px",
        padding: "20px 0px",
        lineHeight: "2px",
    },
    previousJobs: {
        flexDirection: "column",
        padding: "8px 10px",
    },
    jobTitleFromDate: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "400px",
    },
    jobTitle: {
        fontSize: "15px",
    },
    jobDate: {
        fontSize: "12px",
    },
    jobCompanyCity: {
        flexDirection: "row",
        width: "400px",
        alignItems: "center",
        paddingTop: "2px",
    },
    flexParent: {
        paddingTop: "10px",
        borderBottom: "1px",
        borderBottomColor: "#A9A9A9",
        paddingBottom: "5px",
    },
    compnyCity: {
        fontSize: "12px",
    },
    jobDescribe: {
        fontSize: "12px",
        paddingTop: "5px",
        
    },
    eduDate: {
        fontSize: "10px",
        paddingTop: "3px",
    },
    relevantCourses: {
        fontSize: "12px",
        paddingTop: "10px",
    },
    courses: {
        fontSize: "10px",
        paddingTop: "5px",
        paddingLeft: "5px"
    },
    eduDegree : {
        fontSize: "15px",
    }
});

// Create Document Component
const MyDocument = ({ cvInfo }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.Firstname}>
                    {/* {cvInfo && <Text>{cvInfo.personal.firstName}</Text>} */}
                    {cvInfo.personal.firstName ? (
                        <Text>{cvInfo.personal.firstName} </Text>
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

            {/* main content */}
            <View style={styles.mainContent}>
                {/* sidebar */}
                <View style={styles.sideBar}>
                    <Text style={styles.titleText}>Personal Info</Text>
                    <Text style={styles.sideBarInfo}>Phone:</Text>
                    <Text style={styles.sideBarInfoText}>
                        {cvInfo.personal.phone ? (
                            <Text>{` ${cvInfo.personal.phone}`} </Text>
                        ) : (
                            <Text>xxx-xxx-xxxx</Text>
                        )}
                    </Text>

                    <Text style={styles.sideBarInfo}>Email:</Text>
                    <Text style={styles.sideBarInfoText}>
                        {cvInfo.personal.email ? (
                            <Text>{` ${cvInfo.personal.email}`} </Text>
                        ) : (
                            <Text>email@email.com</Text>
                        )}
                    </Text>

                    <Text style={styles.sideBarInfo}>Address:</Text>
                    <Text style={styles.sideBarInfoText}>
                        {cvInfo.personal.address ? (
                            <Text>{` ${cvInfo.personal.address}`} </Text>
                        ) : (
                            <Text>123 Maple str.</Text>
                        )}
                    </Text>

                    <Text style={styles.sideBarInfoText}>
                        {cvInfo.personal.city ? (
                            <Text>{` ${cvInfo.personal.city}`} </Text>
                        ) : (
                            <Text>city</Text>
                        )}
                        <Text>,</Text>
                        {cvInfo.personal.state ? (
                            <Text>{` ${cvInfo.personal.state}`} </Text>
                        ) : (
                            <Text>state</Text>
                        )}
                    </Text>

                    <Text style={styles.sideBarInfoText}>
                        {cvInfo.personal.zip ? (
                            <Text>{` ${cvInfo.personal.zip}`} </Text>
                        ) : (
                            <Text>xxxxx</Text>
                        )}
                    </Text>
                </View>

                {/* work and education */}
                <View style={styles.experienceSection}>
                    <Text style={styles.describeSection}>
                        {cvInfo.personal.describe ? (
                            <Text>{` ${cvInfo.personal.describe}`} </Text>
                        ) : (
                            <Text>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Assumenda temporibus sunt
                                neque rem. Harum nihil maiores, pariatur
                                repellat quae esse, id asperiores, nesciunt
                                mollitia cum sapiente explicabo libero
                                repellendus neque!
                            </Text>
                        )}
                    </Text>

                    <Text style={styles.titleText}>Experience</Text>
                    {/* previous jobs */}
                    {/* to do add some description opttion for each job */}
                    <View style={styles.previousJobs}>
                        {cvInfo.experience.map((job) => (
                            <View style={styles.flexParent}>
                                <View style={styles.jobTitleFromDate}>
                                    <Text style={styles.jobTitle}>
                                        {job.position}
                                    </Text>
                                    <Text style={styles.jobDate}>
                                        <Text>{job.from}</Text>
                                        <Text> - </Text>
                                        <Text>{job.to}</Text>
                                    </Text>
                                </View>
                                <View style={styles.jobCompanyCity}>
                                    <Text style={styles.compnyCity}>
                                        {job.company}
                                    </Text>
                                    <Text> </Text>
                                    <Text style={styles.compnyCity}>
                                        {job.city}
                                    </Text>
                                </View>
                                <Text style={styles.jobDescribe}>
                                    {job.jobDescribe}
                                </Text>
                            </View>
                        ))}
                    </View>

                    <Text style={styles.titleText}>Education</Text>
                    {/* previous Education */}
                    <View style={styles.previousJobs}>
                        {/* to do fix the education section */}
                        {cvInfo.education.map((edu) => (
                            <View style={styles.flexParent}>
                                <View style={styles.jobTitleFromDate}>
                                    <Text style={styles.eduDegree}>
                                        {edu.degree}
                                    </Text>
                                    <Text style={styles.jobDate}>
                                        {/* <Text>{edu.from}</Text>
                                        <Text> - </Text>
                                        <Text>{edu.to}</Text> */}
                                        <Text>{edu.major}</Text>
                                    </Text>
                                </View>
                                <View style={styles.jobCompanyCity}>
                                    <Text style={styles.compnyCity}>
                                        {edu.university}
                                    </Text>
                                    <Text>, </Text>
                                    <Text style={styles.compnyCity}>
                                        {edu.city}
                                    </Text>
                                </View>
                                <Text style={styles.eduDate}>
                                    <Text>{edu.from}</Text>
                                    <Text> - </Text>
                                    <Text>{edu.to}</Text>
                                </Text>
                                <Text style={styles.relevantCourses}>
                                    Relevant Courses:
                                </Text>
                                <Text style={styles.courses}>
                                    {edu.relevantCourses}
                                </Text>

                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </Page>
    </Document>
);

export default MyDocument;
