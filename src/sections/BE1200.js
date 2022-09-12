import SocialMedia from "../components/SocialMedia";
import Gallery from "../components/Gallery";
import { Divider, Grid, Typography } from "@mui/material";
import Gist from "react-gist";
import Section from "../components/Section";

// NOTE: some images are embedded (base64)

export default {
    meta: {
        title: "Haptic Walking Device",
        banner: "/pics/BE1200.png",
        complete: true,
        tags: "C/C++,Arduino,UI/UX,I/O,Telecommunications,Bluetooth,Collaborative,Pair Programming,Mobile App Development,Product Design,Embedded Systems",
        //objectives: `Usually from resume.`, // Objectives are seperated by PIPE '|'
        description: `The goal for this project was to design a device that utilizes sensors to detect
        objects from a certain range and instruct an internal servo to vibrate in response to the
        distance from the sensor to the object. The closer the object is to the sensor, the
        stronger the servo will vibrate. Additionally, this project utilizes a mobile app to act as
        both a pedometer and an audio informant for the distance between the user and an
        oncoming object. This would ultimately assist the visually-impaired in their day-to-day lives.`,
        timeline: [
            ["October 21, 2021", "Project idea was chosen after a thorough, collaborative brainstorm session with group members."],
            ["November 15, 2021", "Circuitry and schematics were created alongside 3D printed enclosure for embedded system."],
            ["November 23, 2021", "C++ Arduino code was ready for deployment."],
            ["November 29, 2021", "Electrical components were assembled in housing module."],
            ["November 30, 2021", "Posters, graphics, and documentation were finalized."],
            ["December 11, 2021", "Final project submitted."],
            ["December 15, 2021", "Project received 2nd place for all classes."],
        ],
    }, components: { links, description, pictures }
}

function links() {
    return (<div>
        <SocialMedia name="View Project Document" icon="fa-solid fa-file-pdf" showName url="/pics/ext/be1200/main.pdf"  />
        <SocialMedia name="View Project Poster" icon="fa-solid fa-file-image" showName url="/pics/ext/be1200/poster.png" />

    </div>)
}
function pictures() {
    return <div><Gallery timeout={7500} images={[
        {
            label: "Project Poster",
            imgPath: "/pics/ext/be1200/poster.png",
        },
        {
            label: "App UI",
            imgPath: "/pics/ext/be1200/mobile_ui.png",
        },
        {
            label: "Code Block Workflow",
            imgPath: "/pics/ext/be1200/blocks.png",
        },
        {
            label: "Schematic",
            imgPath: "/pics/ext/be1200/schematic.png",
        },
    ]} />
        <br />
        <Divider />
        <br />
        <Typography variant="h6">Project Document</Typography>
        <div className="Media">
            <iframe style={{
                height: 400,
                minWidth: "100%",
                maxHeight: "100%",
                maxWidth: "100%",
            }} title="View Project PDF" src="/pics/ext/be1200/main.pdf" frameBorder="0">This browser does not support viewing this file.</iframe>
        </div>
    </div>
}


function description() { /* Description was compiled from pdf -> html -> jsx, formatting is weird because of that*/
    return (
        <div style={{ overflow: "scroll", height: "500px", "fontFamily": 'Arial' }}>
            <h2><i>Taken from <a href="/pics/ext/be1200/main.pdf">Project PDF</a> and originally not written by me.</i></h2>
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html:
                        ' \n            * {margin:0; padding:0; text-indent:0; }'
                }}
            />

            <h1
                style={{
                    paddingTop: "10pt",
                    textIndent: "0pt",
                    textAlign: "center"
                }}
            >
                HAPTIC WALKING DEVICE
            </h1>
            <p
                style={{
                    paddingTop: "4pt",
                    textAlign: "center"
                }}
            >
                by Zavaar Shah, Masroor Muhib, Aidan Demps, Geovanni Tinoco
            </p>
            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                <br />
            </p>
            <p style={{ paddingLeft: "28pt", textIndent: "0pt", textAlign: "left" }}>
                <span />
            </p>
            <img style={{ width: "96%", height: "65%" }} src="/pics/ext/be1200/poster.png" />
            <p />
            <p
                className="s1"
                style={{
                    paddingTop: "10pt",
                    paddingLeft: "5pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                Purpose:
            </p>
            <p
                style={{
                    paddingTop: "9pt",
                    paddingLeft: "5pt",
                    textIndent: "35pt",
                    lineHeight: "109%",
                    textAlign: "left"
                }}
            >
                The goal for this project is to design a device that utilizes sensors to
                detect objects from a certain range and instruct an internal servo to
                vibrate in response to the distance from the sensor to the object. The
                closer the object is to the sensor, the stronger the servo will vibrate.
                Additionally, this project utilizes a mobile app to act as both a pedometer
                and an audio informant for the distance between the user and an oncoming
                object.
            </p>
            <br/>
            <img style={{ width: "96%", height: "65%" }} src="/pics/BE1200.png" />
            <p
                className="s1"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "5pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                Materials:
            </p>
            <ul id="l1">
                <li data-list-text="">
                    <p
                        style={{
                            paddingTop: "9pt",
                            paddingLeft: "41pt",
                            textIndent: "-18pt",
                            textAlign: "left"
                        }}
                    >
                        Arduino UNO Microcontroller
                    </p>
                </li>
                <li data-list-text="">
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "41pt",
                            textIndent: "-18pt",
                            textAlign: "left"
                        }}
                    >
                        Wires (male to male &amp; female to male)
                    </p>
                </li>
                <li data-list-text="">
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "41pt",
                            textIndent: "-18pt",
                            textAlign: "left"
                        }}
                    >
                        Ultrasonic Sensor – HC-SR04
                    </p>
                </li>
                <li data-list-text="">
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "41pt",
                            textIndent: "-18pt",
                            textAlign: "left"
                        }}
                    >
                        HC-05 Bluetooth module
                    </p>
                </li>
                <li data-list-text="">
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "41pt",
                            textIndent: "-18pt",
                            textAlign: "left"
                        }}
                    >
                        Power Supply Module
                    </p>
                </li>
                <li data-list-text="">
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "41pt",
                            textIndent: "-18pt",
                            textAlign: "left"
                        }}
                    >
                        Tower Pro MG996R Servo
                    </p>
                    <p
                        className="s1"
                        style={{
                            paddingTop: "9pt",
                            paddingLeft: "5pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Instructions:
                    </p>
                    <ol id="l2">
                        <li data-list-text={1}>
                            <p
                                style={{
                                    paddingTop: "9pt",
                                    paddingLeft: "41pt",
                                    textIndent: "-18pt",
                                    lineHeight: "109%",
                                    textAlign: "left"
                                }}
                            >
                                Upload the c++ code to the Arduino microcontroller using the Arduino
                                IDE software
                            </p>
                            <ol id="l3">
                                <li data-list-text="a.">
                                    <p
                                        style={{
                                            paddingTop: "4pt",
                                            paddingLeft: "77pt",
                                            textIndent: "-18pt",
                                            lineHeight: "109%",
                                            textAlign: "left"
                                        }}
                                    >
                                        Open Arduino IDE app &gt; click file tab &gt; open existing file
                                        &gt; select This PC &gt; click downloads &gt; select downloaded
                                        code (CODE located below)
                                    </p>
                                </li>
                                <li data-list-text="b.">
                                    <p
                                        className="s3"
                                        style={{
                                            paddingLeft: "77pt",
                                            textIndent: "-18pt",
                                            textAlign: "left"
                                        }}
                                    >
                                        <a
                                            href="https://zavaar.net/static/be1200/final_project/arduinoCode"
                                            className="s2"
                                            target="_blank"
                                        >
                                            https://zavaar.net/static/be1200/final_project/arduinoCod
                                        </a>
                                        <span
                                            style={{
                                                color: "#9DFFCA",
                                                fontFamily: "Verdana, sans-serif",
                                                fontStyle: "normal",
                                                fontWeight: "normal",
                                                textDecoration: "underline",
                                                fontSize: "11pt"
                                            }}
                                        >
                                            e
                                        </span>{" "}
                                        <span style={{ color: "#fff" }}>.</span>
                                    </p>
                                </li>
                                <li data-list-text="c.">
                                    <p
                                        style={{
                                            paddingTop: "1pt",
                                            paddingLeft: "77pt",
                                            textIndent: "-18pt",
                                            textAlign: "left"
                                        }}
                                    >
                                        Verify the code using the verify button on the IDE software
                                    </p>
                                </li>
                            </ol>
                        </li>
                        <li data-list-text={2}>
                            <p
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "41pt",
                                    textIndent: "-18pt",
                                    lineHeight: "109%",
                                    textAlign: "left"
                                }}
                            >
                                <a
                                    href="https://zavaar.net/static/be1200/final_project/haptic_app.apk"
                                    style={{
                                        color: "white",
                                        fontFamily: "Verdana, sans-serif",
                                        fontStyle: "normal",
                                        fontWeight: "normal",
                                        textDecoration: "none",
                                        fontSize: "11pt"
                                    }}
                                    target="_blank"
                                >
                                    Download the .apk file on an android device to install mobile
                                    application{" "}
                                </a>
                                <a
                                    href="https://zavaar.net/static/be1200/final_project/haptic_app.apk"
                                    className="s2"
                                    target="_blank"
                                >
                                    https://zavaar.net/static/be1200/final_project/haptic_app.apk
                                </a>
                            </p>
                        </li>
                        <li data-list-text={3}>
                            <p
                                style={{
                                    paddingLeft: "41pt",
                                    textIndent: "-18pt",
                                    textAlign: "left"
                                }}
                            >
                                Assemble components based on schematic
                            </p>
                            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                                <br />
                            </p>
                            <p
                                style={{
                                    paddingLeft: "27pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                <span />
                            </p>
                            <table border={0} cellSpacing={0} cellPadding={0}>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img
                                                width={572}
                                                height={193}
                                                src="data:image/jpg;base64,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"
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p />
                        </li>
                        <li data-list-text={4}>
                            <p
                                style={{
                                    paddingTop: "7pt",
                                    paddingLeft: "41pt",
                                    textIndent: "-18pt",
                                    lineHeight: "109%",
                                    textAlign: "left"
                                }}
                            >
                                Power on the Arduino by connecting the Arduino to your computer via
                                usb and open the mobile application
                            </p>
                        </li>
                        <li data-list-text={5}>
                            <p
                                style={{
                                    paddingLeft: "41pt",
                                    textIndent: "-18pt",
                                    lineHeight: "13pt",
                                    textAlign: "left"
                                }}
                            >
                                Click the “Upload” button on the IDE software
                            </p>
                        </li>
                        <li data-list-text={6}>
                            <p
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "41pt",
                                    textIndent: "-18pt",
                                    textAlign: "left"
                                }}
                            >
                                Press the “connect” button on the app.
                            </p>
                        </li>
                        <li data-list-text={7}>
                            <p
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "41pt",
                                    textIndent: "-18pt",
                                    textAlign: "left"
                                }}
                            >
                                Find the “HC-05” Bluetooth device in the device list for connection
                            </p>
                            <ol id="l4">
                                <li data-list-text="a.">
                                    <p
                                        style={{
                                            paddingTop: "1pt",
                                            paddingLeft: "77pt",
                                            textIndent: "-18pt",
                                            lineHeight: "110%",
                                            textAlign: "left"
                                        }}
                                    >
                                        If you require a password to access the device, please use
                                        either “1234” or “0000”
                                    </p>
                                </li>
                            </ol>
                        </li>
                        <li data-list-text={8}>
                            <p
                                style={{
                                    paddingLeft: "41pt",
                                    textIndent: "-18pt",
                                    lineHeight: "13pt",
                                    textAlign: "left"
                                }}
                            >
                                If the connection was successful, you will see the green “Connected”
                                text
                            </p>
                            <p
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "41pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                underneath the app container.
                            </p>
                        </li>
                        <li data-list-text={9}>
                            <p
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "41pt",
                                    textIndent: "-18pt",
                                    lineHeight: "109%",
                                    textAlign: "justify"
                                }}
                            >
                                Turn the “trip” slider on to track distance traveled via the
                                pedometer sensor and time elapsed for the trip. Turing that on also
                                tracks location history and visualizes the path taken using the GPS
                                on the mobile device.
                            </p>
                            <p
                                style={{
                                    paddingLeft: "77pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                <span />
                            </p>
                            <table border={0} cellSpacing={0} cellPadding={0}>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img
                                                width={216}
                                                height={266}
                                                src="data:image/jpg;base64,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"
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <span>
                                <table border={0} cellSpacing={0} cellPadding={0}>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img
                                                    width={216}
                                                    height={210}
                                                    src="data:image/jpg;base64,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"
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </span>
                            <p />
                        </li>
                        <li data-list-text={10}>
                            <p
                                style={{
                                    paddingTop: "4pt",
                                    paddingLeft: "41pt",
                                    textIndent: "-18pt",
                                    textAlign: "left"
                                }}
                            >
                                When done, press the disconnect button to terminate the Bluetooth
                                connection.
                            </p>
                        </li>
                    </ol>
                    <p
                        className="s1"
                        style={{
                            paddingTop: "9pt",
                            paddingLeft: "5pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Libraries used:
                    </p>
                </li>
                <li data-list-text="">
                    <p
                        className="s4"
                        style={{
                            paddingTop: "9pt",
                            paddingLeft: "41pt",
                            textIndent: "-18pt",
                            textAlign: "left"
                        }}
                    >
                        Servo@^1.1.8
                    </p>
                </li>
                <li data-list-text="">
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "41pt",
                            textIndent: "-18pt",
                            textAlign: "left"
                        }}
                    >
                        Arduino
                    </p>
                </li>
            </ul>
            <p
                className="s1"
                style={{
                    paddingTop: "1pt",
                    paddingLeft: "5pt",
                    textIndent: "0pt",
                    lineHeight: "29pt",
                    textAlign: "left"
                }}
            >
                Arduino C++ code
                <a
                    href="https://zavaar.net/static/be1200/final_project/arduinoCode"
                    style={{
                        color: "white",
                        fontFamily: "Verdana, sans-serif",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        textDecoration: "none",
                        fontSize: "16pt"
                    }}
                    target="_blank"
                >
                    {" "}
                </a>
                <a
                    href="https://zavaar.net/static/be1200/final_project/arduinoCode"
                    target="_blank"
                >
                    https://zavaar.net/static/be1200/final_project/arduinoCode
                </a>
            </p>
            <p
                className="s5"
                style={{
                    paddingLeft: "5pt",
                    textIndent: "0pt",
                    lineHeight: "19pt",
                    textAlign: "left"
                }}
            >
                :
            </p>
            <p
                className="s6"
                style={{
                    paddingTop: "9pt",
                    paddingLeft: "5pt",
                    textIndent: "0pt",
                    lineHeight: "168%",
                    textAlign: "left"
                }}
            >
                #include <span style={{ color: "#E4C07A" }}>&lt;Arduino.h&gt; </span>
                #include <span style={{ color: "#E4C07A" }}>&lt;Servo.h&gt; </span>
                <span style={{ color: "#60AEEE" }}>Servo </span>
                <span style={{ color: "#BABABA" }}>servo;</span>
            </p>
            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                <br />
            </p>
            <p
                className="s9"
                style={{
                    paddingLeft: "5pt",
                    textIndent: "0pt",
                    lineHeight: "168%",
                    textAlign: "left"
                }}
            >
                <span style={{ color: "#55B6C2" }}>int </span>usTrig{" "}
                <span style={{ color: "#DF6C75" }}>= </span>
                <span style={{ color: "#C578DD" }}>3</span>;{" "}
                <span style={{ color: "#55B6C2" }}>int </span>usEcho{" "}
                <span style={{ color: "#DF6C75" }}>= </span>
                <span style={{ color: "#C578DD" }}>4</span>;{" "}
                <span style={{ color: "#55B6C2" }}>int </span>duration{" "}
                <span style={{ color: "#DF6C75" }}>= </span>
                <span style={{ color: "#C578DD" }}>0</span>;
            </p>
            <p
                className="s9"
                style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}
            >
                <span style={{ color: "#55B6C2" }}>unsigned int </span>distanceCM{" "}
                <span style={{ color: "#DF6C75" }}>= </span>
                <span style={{ color: "#C578DD" }}>0</span>;
            </p>
            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                <br />
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "6pt",
                    paddingLeft: "5pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                <span style={{ color: "#55B6C2" }}>unsigned int </span>scaledServoValue{" "}
                <span style={{ color: "#DF6C75" }}>= </span>
                <span style={{ color: "#C578DD" }}>0</span>;
            </p>
            <p
                className="s12"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "5pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
    // constants
            </p>
            <p
                className="s6"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "5pt",
                    textIndent: "0pt",
                    lineHeight: "168%",
                    textAlign: "left"
                }}
            >
                const <span style={{ color: "#55B6C2" }}>char </span>
                <span style={{ color: "#BABABA" }}>sep </span>={" "}
                <span style={{ color: "#E4C07A" }}>'$'</span>
                <span style={{ color: "#BABABA" }}>; </span>const{" "}
                <span style={{ color: "#55B6C2" }}>char </span>
                <span style={{ color: "#BABABA" }}>def </span>={" "}
                <span style={{ color: "#E4C07A" }}>'='</span>
                <span style={{ color: "#BABABA" }}>;</span>
            </p>
            <p
                className="s12"
                style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}
            >
    // vars
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "5pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                <span style={{ color: "#55B6C2" }}>char </span>incoming{" "}
                <span style={{ color: "#DF6C75" }}>= </span>
                <span style={{ color: "#C578DD" }}>0</span>;
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "5pt",
                    textIndent: "0pt",
                    lineHeight: "168%",
                    textAlign: "left"
                }}
            >
                <span style={{ color: "#55B6C2" }}>unsigned long </span>time{" "}
                <span style={{ color: "#DF6C75" }}>= </span>
                <span style={{ color: "#97C379" }}>millis</span>();{" "}
                <span style={{ color: "#60AEEE" }}>String </span>command{" "}
                <span style={{ color: "#DF6C75" }}>= </span>
                <span style={{ color: "#E4C07A" }}>""</span>;
            </p>
            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                <br />
            </p>
            <p
                className="s10"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "5pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                struct <span style={{ color: "#60AEEE" }}>Settings</span>
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "5pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                {"{"}
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    lineHeight: "168%",
                    textAlign: "left"
                }}
            >
                <span style={{ color: "#55B6C2" }}>void </span>
                <span style={{ color: "#97C379" }}>setValue</span>(
                <span style={{ color: "#55B6C2" }}>char </span>
                <span className="s14">label</span>,{" "}
                <span style={{ color: "#55B6C2" }}>int </span>
                <span className="s14">val</span>) {"{"}
                <span style={{ color: "#ABB1BE" }}>value</span>[
                <span className="s14">label </span>
                <span style={{ color: "#DF6C75" }}>- </span>
                <span style={{ color: "#E4C07A" }}>'A'</span>]{" "}
                <span style={{ color: "#DF6C75" }}>= </span>
                <span className="s14">val</span>; {"}"}{" "}
                <span style={{ color: "#55B6C2" }}>int </span>
                <span style={{ color: "#97C379" }}>getValue</span>(
                <span style={{ color: "#55B6C2" }}>char </span>
                <span className="s14">label</span>){" "}
                <span style={{ color: "#DF6C75" }}>const </span>
                {"{"} <span style={{ color: "#DF6C75" }}>return </span>
                <span style={{ color: "#ABB1BE" }}>value</span>[
                <span className="s14">label </span>
                <span style={{ color: "#DF6C75" }}>- </span>
                <span style={{ color: "#E4C07A" }}>'A'</span>]; {"}"}{" "}
                <span style={{ color: "#55B6C2" }}>int </span>
                <span style={{ color: "#ABB1BE" }}>value</span>[
                <span style={{ color: "#C578DD" }}>5</span>];
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "2pt",
                    paddingLeft: "5pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                {"}"};
            </p>
            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                <br />
            </p>
            <p
                className="s10"
                style={{
                    paddingTop: "6pt",
                    paddingLeft: "5pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                class <span style={{ color: "#60AEEE" }}>IO</span>
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "5pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                {"{"}
            </p>
            <p
                className="s10"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "16pt",
                    textIndent: "-11pt",
                    textAlign: "left"
                }}
            >
                private:
            </p>
            <p
                className="s8"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                String <span style={{ color: "#ABB1BE" }}>pre</span>
                <span style={{ color: "#BABABA" }}>;</span>
            </p>
            <p
                className="s8"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                String <span style={{ color: "#ABB1BE" }}>post</span>
                <span style={{ color: "#BABABA" }}>;</span>
            </p>
            <p
                className="s8"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                Settings <span style={{ color: "#ABB1BE" }}>S</span>
                <span style={{ color: "#BABABA" }}>;</span>
            </p>
            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                <br />
            </p>
            <p
                className="s10"
                style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}
            >
                public:
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                <span style={{ color: "#55B6C2" }}>void </span>
                <span style={{ color: "#97C379" }}>execute</span>(
                <span style={{ color: "#60AEEE" }}>String </span>
                <span className="s14">command</span>)
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                {"{"}
            </p>
            <p
                className="s15"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "27pt",
                    textIndent: "0pt",
                    lineHeight: "169%",
                    textAlign: "left"
                }}
            >
                <span style={{ color: "#DF6C75" }}>this</span>
                <span style={{ color: "#BABABA" }}>-&gt;</span>pre{" "}
                <span style={{ color: "#97C379" }}>= </span>pre
                <span style={{ color: "#BABABA" }}>; </span>
                <span style={{ color: "#DF6C75" }}>this</span>
                <span style={{ color: "#BABABA" }}>-&gt;</span>post{" "}
                <span style={{ color: "#97C379" }}>= </span>post
                <span style={{ color: "#BABABA" }}>; </span>
                <span style={{ color: "#DF6C75" }}>this</span>
                <span style={{ color: "#BABABA" }}>-&gt;</span>S{" "}
                <span style={{ color: "#97C379" }}>= </span>S
                <span style={{ color: "#BABABA" }}>;</span>
            </p>
            <p
                className="s9"
                style={{
                    paddingLeft: "27pt",
                    textIndent: "0pt",
                    lineHeight: "12pt",
                    textAlign: "left"
                }}
            >
                <span style={{ color: "#DF6C75" }}>for </span>(
                <span style={{ color: "#55B6C2" }}>unsigned int </span>i{" "}
                <span style={{ color: "#DF6C75" }}>= </span>
                <span style={{ color: "#C578DD" }}>0</span>; i{" "}
                <span style={{ color: "#DF6C75" }}>&lt; </span>
                <span className="s14">command</span>.
                <span style={{ color: "#97C379" }}>length</span>(); i
                <span style={{ color: "#DF6C75" }}>++</span>)
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "27pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                {"{"}
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "38pt",
                    textIndent: "0pt",
                    lineHeight: "169%",
                    textAlign: "left"
                }}
            >
                <span style={{ color: "#55B6C2" }}>char </span>ch{" "}
                <span style={{ color: "#DF6C75" }}>= </span>
                <span className="s14">command</span>
                <span style={{ color: "#97C379" }}>[</span>i
                <span style={{ color: "#97C379" }}>]</span>;{" "}
                <span style={{ color: "#DF6C75" }}>if </span>(ch{" "}
                <span style={{ color: "#DF6C75" }}>!= </span>def)
            </p>
            <p
                className="s9"
                style={{
                    paddingLeft: "38pt",
                    textIndent: "0pt",
                    lineHeight: "12pt",
                    textAlign: "left"
                }}
            >
                {"{"}
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "49pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                <span style={{ color: "#DF6C75" }}>if </span>(
                <span className="s14">command</span>.
                <span style={{ color: "#97C379" }}>indexOf</span>(def, i){" "}
                <span style={{ color: "#DF6C75" }}>&gt; </span>
                <span style={{ color: "#C578DD" }}>0</span>)
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "49pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                {"{"}
            </p>
            <p
                className="s15"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "60pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                pre <span style={{ color: "#97C379" }}>+= </span>
                <span style={{ color: "#BABABA" }}>ch;</span>
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "49pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                {"}"}
            </p>
            <p
                className="s6"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "49pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                else
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "49pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                {"{"}
            </p>
            <p
                className="s15"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "60pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                post <span style={{ color: "#97C379" }}>+= </span>
                <span style={{ color: "#BABABA" }}>ch;</span>
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "49pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                {"}"}
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "38pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                {"}"}
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "27pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                {"}"}
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "27pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                <span style={{ color: "#DF6C75" }}>if </span>(
                <span style={{ color: "#ABB1BE" }}>post</span>.
                <span style={{ color: "#97C379" }}>toInt</span>(){" "}
                <span style={{ color: "#DF6C75" }}>&lt; </span>
                <span style={{ color: "#C578DD" }}>1000</span>){" "}
                <span className="s12">// filter out weird obfuscated data</span>
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "27pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                {"{"}
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "38pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                <span style={{ color: "#ABB1BE" }}>S</span>.
                <span style={{ color: "#97C379" }}>setValue</span>(
                <span style={{ color: "#ABB1BE" }}>pre</span>
                <span style={{ color: "#97C379" }}>[</span>
                <span style={{ color: "#C578DD" }}>0</span>
                <span style={{ color: "#97C379" }}>]</span>,{" "}
                <span style={{ color: "#ABB1BE" }}>post</span>.
                <span style={{ color: "#97C379" }}>toInt</span>());
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "2pt",
                    paddingLeft: "27pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                {"}"}
            </p>
            <p
                className="s13"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "27pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                reset<span style={{ color: "#BABABA" }}>();</span>
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                {"}"}
            </p>
            <p
                className="s10"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                void <span style={{ color: "#97C379" }}>reset</span>
                <span style={{ color: "#BABABA" }}>()</span>
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                {"{"}
            </p>
            <p
                className="s15"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "27pt",
                    textIndent: "0pt",
                    lineHeight: "169%",
                    textAlign: "left"
                }}
            >
                <span style={{ color: "#DF6C75" }}>this</span>
                <span style={{ color: "#BABABA" }}>-&gt;</span>pre{" "}
                <span style={{ color: "#97C379" }}>= </span>pre
                <span style={{ color: "#BABABA" }}>; </span>
                <span style={{ color: "#DF6C75" }}>this</span>
                <span style={{ color: "#BABABA" }}>-&gt;</span>post{" "}
                <span style={{ color: "#97C379" }}>= </span>post
                <span style={{ color: "#BABABA" }}>; </span>pre{" "}
                <span style={{ color: "#97C379" }}>= </span>
                <span style={{ color: "#E4C07A" }}>""</span>
                <span style={{ color: "#BABABA" }}>;</span>
            </p>
            <p
                className="s15"
                style={{
                    paddingLeft: "27pt",
                    textIndent: "0pt",
                    lineHeight: "12pt",
                    textAlign: "left"
                }}
            >
                post <span style={{ color: "#97C379" }}>= </span>
                <span style={{ color: "#E4C07A" }}>""</span>
                <span style={{ color: "#BABABA" }}>;</span>
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                {"}"}
            </p>
            <p
                className="s10"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                int <span style={{ color: "#97C379" }}>get</span>
                <span style={{ color: "#BABABA" }}>(</span>char{" "}
                <span className="s14">key</span>
                <span style={{ color: "#BABABA" }}>)</span>
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                {"{"}
            </p>
            <p
                className="s15"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "27pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                <span style={{ color: "#DF6C75" }}>this</span>
                <span style={{ color: "#BABABA" }}>-&gt;</span>S{" "}
                <span style={{ color: "#97C379" }}>= </span>S
                <span style={{ color: "#BABABA" }}>;</span>
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "27pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                <span style={{ color: "#DF6C75" }}>return </span>
                <span style={{ color: "#ABB1BE" }}>S</span>.
                <span style={{ color: "#97C379" }}>getValue</span>(
                <span className="s14">key</span>);
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                {"}"}
            </p>
            <p
                className="s10"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                void <span style={{ color: "#97C379" }}>set</span>
                <span style={{ color: "#BABABA" }}>(</span>char{" "}
                <span className="s14">key</span>
                <span style={{ color: "#BABABA" }}>, </span>int{" "}
                <span className="s14">val</span>
                <span style={{ color: "#BABABA" }}>)</span>
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                {"{"}
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "27pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                <span style={{ color: "#ABB1BE" }}>S</span>.
                <span style={{ color: "#97C379" }}>setValue</span>(
                <span className="s14">key</span>, <span className="s14">val</span>);
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                {"}"}
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "5pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                {"}"};
            </p>
            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                <br />
            </p>
            <p
                className="s8"
                style={{
                    paddingTop: "3pt",
                    paddingLeft: "5pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                IO <span style={{ color: "#BABABA" }}>io;</span>
            </p>
            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                <br />
            </p>
            <p
                className="s10"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "5pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                void <span style={{ color: "#97C379" }}>setup</span>
                <span style={{ color: "#BABABA" }}>()</span>
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "5pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                {"{"}
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                <span style={{ color: "#60AEEE" }}>io</span>.
                <span style={{ color: "#97C379" }}>set</span>(
                <span style={{ color: "#E4C07A" }}>'a'</span>,{" "}
                <span style={{ color: "#C578DD" }}>3</span>);
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                <span style={{ color: "#60AEEE" }}>io</span>.
                <span style={{ color: "#97C379" }}>set</span>(
                <span style={{ color: "#E4C07A" }}>'b'</span>,{" "}
                <span style={{ color: "#C578DD" }}>400</span>);
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                <span style={{ color: "#60AEEE" }}>io</span>.
                <span style={{ color: "#97C379" }}>set</span>(
                <span style={{ color: "#E4C07A" }}>'c'</span>,{" "}
                <span style={{ color: "#C578DD" }}>150</span>);
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    lineHeight: "168%",
                    textAlign: "left"
                }}
            >
                <span style={{ color: "#60AEEE" }}>io</span>.
                <span style={{ color: "#97C379" }}>set</span>(
                <span style={{ color: "#E4C07A" }}>'d'</span>,{" "}
                <span style={{ color: "#C578DD" }}>20</span>);{" "}
                <span style={{ color: "#60AEEE" }}>Serial</span>.
                <span style={{ color: "#97C379" }}>begin</span>(
                <span style={{ color: "#C578DD" }}>9600</span>);{" "}
                <span style={{ color: "#60AEEE" }}>servo</span>.
                <span style={{ color: "#97C379" }}>attach</span>(
                <span style={{ color: "#C578DD" }}>9</span>);{" "}
                <span style={{ color: "#97C379" }}>pinMode</span>(usTrig,{" "}
                <span style={{ color: "#97C379" }}>OUTPUT</span>);{" "}
                <span style={{ color: "#97C379" }}>pinMode</span>(usEcho,{" "}
                <span style={{ color: "#97C379" }}>INPUT</span>);
            </p>
            <p
                className="s9"
                style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}
            >
                {"}"}
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "2pt",
                    paddingLeft: "5pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                <span style={{ color: "#55B6C2" }}>int </span>dis{" "}
                <span style={{ color: "#DF6C75" }}>= </span>
                <span style={{ color: "#C578DD" }}>0</span>;
            </p>
            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                <br />
            </p>
            <p
                className="s9"
                style={{
                    paddingLeft: "16pt",
                    textIndent: "-11pt",
                    lineHeight: "168%",
                    textAlign: "left"
                }}
            >
                <span style={{ color: "#55B6C2" }}>void </span>
                <span style={{ color: "#97C379" }}>loop</span>() {"{"}
                <span style={{ color: "#97C379" }}>digitalWrite</span>(usTrig,{" "}
                <span style={{ color: "#97C379" }}>LOW</span>);{" "}
                <span style={{ color: "#97C379" }}>delayMicroseconds</span>(
                <span style={{ color: "#C578DD" }}>5</span>);{" "}
                <span style={{ color: "#97C379" }}>digitalWrite</span>(usTrig,{" "}
                <span style={{ color: "#97C379" }}>HIGH</span>);{" "}
                <span style={{ color: "#97C379" }}>delayMicroseconds</span>(
                <span style={{ color: "#C578DD" }}>10</span>);{" "}
                <span style={{ color: "#97C379" }}>digitalWrite</span>(usTrig,{" "}
                <span style={{ color: "#97C379" }}>LOW</span>);
            </p>
            <p
                className="s9"
                style={{
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    lineHeight: "169%",
                    textAlign: "left"
                }}
            >
                duration <span style={{ color: "#DF6C75" }}>= </span>
                <span style={{ color: "#97C379" }}>pulseIn</span>(usEcho,{" "}
                <span style={{ color: "#97C379" }}>HIGH</span>); distanceCM{" "}
                <span style={{ color: "#DF6C75" }}>= </span>(duration{" "}
                <span style={{ color: "#DF6C75" }}>/ </span>
                <span style={{ color: "#C578DD" }}>2</span>){" "}
                <span style={{ color: "#DF6C75" }}>/ </span>
                <span style={{ color: "#C578DD" }}>10</span>;
            </p>
            <p
                className="s9"
                style={{ paddingLeft: "5pt", textIndent: "11pt", textAlign: "left" }}
            >
                scaledServoValue <span style={{ color: "#DF6C75" }}>= </span>
                <span style={{ color: "#97C379" }}>map</span>(distanceCM,{" "}
                <span style={{ color: "#60AEEE" }}>io</span>.
                <span style={{ color: "#97C379" }}>get</span>(
                <span style={{ color: "#E4C07A" }}>'a'</span>),{" "}
                <span style={{ color: "#60AEEE" }}>io</span>.
                <span style={{ color: "#97C379" }}>get</span>(
                <span style={{ color: "#E4C07A" }}>'b'</span>),{" "}
                <span style={{ color: "#60AEEE" }}>io</span>.
                <span style={{ color: "#97C379" }}>get</span>(
                <span style={{ color: "#E4C07A" }}>'c'</span>) ,{" "}
                <span style={{ color: "#60AEEE" }}>io</span>.
                <span style={{ color: "#97C379" }}>get</span>(
                <span style={{ color: "#E4C07A" }}>'d'</span>));
            </p>
            <p
                className="s12"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
    //Serial.println(scaledServoValue);
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    lineHeight: "168%",
                    textAlign: "left"
                }}
            >
                <span style={{ color: "#60AEEE" }}>servo</span>.
                <span style={{ color: "#97C379" }}>write</span>(scaledServoValue);{" "}
                <span style={{ color: "#DF6C75" }}>if </span>(
                <span style={{ color: "#97C379" }}>millis</span>(){" "}
                <span style={{ color: "#DF6C75" }}>- </span>time{" "}
                <span style={{ color: "#DF6C75" }}>&gt; </span>
                <span style={{ color: "#C578DD" }}>750</span>)
            </p>
            <p
                className="s9"
                style={{ paddingLeft: "16pt", textIndent: "0pt", textAlign: "left" }}
            >
                {"{"}
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "27pt",
                    textIndent: "0pt",
                    lineHeight: "168%",
                    textAlign: "left"
                }}
            >
                <span className="s12">//int showDist = distanceCM/2.9; </span>
                <span style={{ color: "#60AEEE" }}>Serial</span>.
                <span style={{ color: "#97C379" }}>println</span>((
                <span style={{ color: "#55B6C2" }}>int</span>)(distanceCM)); time{" "}
                <span style={{ color: "#DF6C75" }}>= </span>
                <span style={{ color: "#97C379" }}>millis</span>();
            </p>
            <p
                className="s9"
                style={{ paddingLeft: "16pt", textIndent: "0pt", textAlign: "left" }}
            >
                {"}"}
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                <span style={{ color: "#DF6C75" }}>if </span>(
                <span style={{ color: "#60AEEE" }}>Serial</span>.
                <span style={{ color: "#97C379" }}>available</span>(){" "}
                <span style={{ color: "#DF6C75" }}>&gt; </span>
                <span style={{ color: "#C578DD" }}>0</span>)
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                {"{"}
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "27pt",
                    textIndent: "0pt",
                    lineHeight: "168%",
                    textAlign: "left"
                }}
            >
                incoming <span style={{ color: "#DF6C75" }}>= </span>
                <span style={{ color: "#60AEEE" }}>Serial</span>.
                <span style={{ color: "#97C379" }}>read</span>();{" "}
                <span style={{ color: "#DF6C75" }}>switch </span>(incoming)
            </p>
            <p
                className="s9"
                style={{ paddingLeft: "27pt", textIndent: "0pt", textAlign: "left" }}
            >
                {"{"}
            </p>
            <p
                className="s6"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "27pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                case <span style={{ color: "#BABABA" }}>sep: </span>
                <span className="s12">// command completed</span>
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "38pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                <span style={{ color: "#60AEEE" }}>io</span>.
                <span style={{ color: "#97C379" }}>execute</span>(command);
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "38pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                command <span style={{ color: "#97C379" }}>= </span>
                <span style={{ color: "#E4C07A" }}>""</span>;{" "}
                <span className="s12">// reset command</span>
            </p>
            <p
                className="s6"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "38pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                break<span style={{ color: "#BABABA" }}>;</span>
            </p>
            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                <br />
            </p>
            <p
                className="s6"
                style={{
                    paddingTop: "6pt",
                    paddingLeft: "27pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                default<span style={{ color: "#BABABA" }}>:</span>
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "38pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                command <span style={{ color: "#97C379" }}>+= </span>incoming;
            </p>
            <p
                className="s6"
                style={{
                    paddingTop: "2pt",
                    paddingLeft: "38pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                break<span style={{ color: "#BABABA" }}>;</span>
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "27pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                {"}"}
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "16pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                {"}"}
            </p>
            <p
                className="s9"
                style={{
                    paddingTop: "8pt",
                    paddingLeft: "5pt",
                    textIndent: "0pt",
                    textAlign: "left"
                }}
            >
                {"}"}
            </p>
            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                <br />
            </p>
            <p
                style={{
                    paddingTop: "9pt",
                    paddingLeft: "5pt",
                    textIndent: "0pt",
                    lineHeight: "73%",
                    textAlign: "left"
                }}
            >
                <a
                    href="https://zavaar.net/static/be1200/final_project/blocks.png"
                    style={{
                        color: "white",
                        fontFamily: "Verdana, sans-serif",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        textDecoration: "none",
                        fontSize: "16pt"
                    }}
                    target="_blank"
                >
                    Mobile application code &amp; code blocks:{" "}
                </a>
                <a
                    href="https://zavaar.net/static/be1200/final_project/blocks.png"
                    target="_blank"
                >
                    https://zavaar.net/static/be1200/final_project/blocks.png
                </a>
            </p>
            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                <br />
            </p>
            <p style={{ paddingLeft: "24pt", textIndent: "0pt", textAlign: "left" }}>
                <span />
            </p>
            <img style={{ width: "98%", hieght: "85%" }} src="/pics/ext/be1200/blocks.png" />
            <p />
            <p
                className="s1"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "5pt",
                    textIndent: "0pt",
                    lineHeight: "109%",
                    textAlign: "left"
                }}
            >
                Entire app project:
                <a
                    href="https://gallery.appinventor.mit.edu/?galleryid=fa4c4c43-bd20-4489-9493-90e3b034cd9e"
                    style={{
                        color: "white",
                        fontFamily: "Verdana, sans-serif",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        textDecoration: "none",
                        fontSize: "16pt"
                    }}
                    target="_blank"
                >
                    {" "}
                </a>
                <a
                    href="https://gallery.appinventor.mit.edu/?galleryid=fa4c4c43-bd20-4489-9493-90e3b034cd9e"
                    className="s16"
                    target="_blank"
                >
                    https://gallery.appinventor.mit.edu/?galleryid=fa4c4c43-bd20-4489-9493-90e3b034cd9e
                </a>
            </p>
            <p
                className="s1"
                style={{
                    paddingTop: "7pt",
                    paddingLeft: "5pt",
                    textIndent: "0pt",
                    lineHeight: "109%",
                    textAlign: "left"
                }}
            >
                Android Package File (.APK):
                <a
                    href="https://zavaar.net/static/be1200/final_project/haptic_app.apk"
                    style={{
                        color: "white",
                        fontFamily: "Verdana, sans-serif",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        textDecoration: "none",
                        fontSize: "16pt"
                    }}
                    target="_blank"
                >
                    {" "}
                </a>
                <a
                    href="https://zavaar.net/static/be1200/final_project/haptic_app.apk"
                    className="a"
                    target="_blank"
                >
                    https://zavaar.net/static/be1200/final_project/haptic_app.
                </a>
                <a
                    href="https://zavaar.net/static/be1200/final_project/haptic_app.apk"
                    style={{
                        color: "#9DFFCA",
                        fontFamily: "Verdana, sans-serif",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        textDecoration: "none",
                        fontSize: "16pt"
                    }}
                    target="_blank"
                >
                    {" "}
                </a>
                <a
                    href="https://zavaar.net/static/be1200/final_project/haptic_app.apk"
                    target="_blank"
                >
                    apk
                </a>
            </p>
            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                <br />
            </p>
            <p style={{ paddingLeft: "53pt", textIndent: "0pt", textAlign: "left" }}>
                <span />
            </p>
            <table border={0} cellSpacing={0} cellPadding={0}>
                <tbody>
                    <tr>
                        <td>
                            <img
                                width={494}
                                height={239}
                                src="data:image/jpg;base64,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"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <p />
        </div>
    )
}
