import SocialMedia from "../components/SocialMedia";
import Gallery from "../components/Gallery";
import { Divider, Grid, Typography } from "@mui/material";
import YouTubeEmbed from "../components/YouTubeEmbed";
import Gist from "react-gist";
import Section from "../components/Section";

export default {
    meta: {
        title: "Hackathon '22",
        banner: "/pics/hackathon2.jpg",
        complete: true,
        tags: "Python,MIDI,Threading,Processes,Automation,I/O,PM2 Runtime,ctypes (Python library),Console-Based,Hackathon,Open-source,Git,Competition",
        //objectives: `Usually from resume.`, // Objectives are seperated by PIPE '|'
        description: `The theme of this Hackathon was "Life at Home" so
        my project became centered around making life easier at home. Specifically, 
        automating redundant tasks when working at home. Since I had a USB piano laying around, 
        I thought that it would be a good idea to utilize that by creating macro shortcuts with a click of a piano key.
        My project was awarded 3rd place at the Winter 2022 Hackathon 
        hosted at Wayne State University.`,
        timeline: [
            ["February 4, 2022", "Hackathon begins. I decided to do something with musical instrument digital interface (MIDI) technology as a means of automating tasks with."],
            ["February 4, 2022", "Research and self-documentation of my personal MIDI keyboard."],
            ["February 4, 2022", "With the research, parsing data influx from the MIDI keyboard became doable."],
            ["February 5, 2022", "Completed dynamically mapped keyboard values in Python for further parsing."],
            ["February 5, 2022", "Translated all keymapped values to certain hard-coded actions executed on the host computer."],
            ["February 6, 2022", "Finished presentation video and slides."],
            ["February 6, 2022", "Submitted project on GitHub for judges to evaluate."],
        ],
        prechildren: <YouTubeEmbed id="MZsUFm2aQ58" />
    }, components: { links, description, pictures }
}

function pictures() {
    return <div><Gallery timeout={7500} images={[
        {
            label: "Award Ceremony",
            imgPath: "/pics/ext/hackathon2Group.jpg",
        },
        {
            label: "Awards",
            imgPath: "/pics/ext/hackathon2Award.jpg",
        },
    ]} />
        <br />
        <Divider />
        <br />
        <Typography variant="h6">Presentation Slides</Typography>
        <div className="Media">
            <iframe style={{
                height: 300,
                minWidth: "100%",
                maxHeight: "100%",
                maxWidth: "100%",
            }} title="View Presentation Slides" src="/pics/ext/Hackathon_Slides2.pdf" frameBorder="0">This browser does not support viewing this file.</iframe>
        </div>
    </div>
}


function links() {
    return (
        <Grid spacing={1} container>
            <Grid xs={12} item>
                <YouTubeEmbed id="MZsUFm2aQ58" />
            </Grid>
            <Grid item>
                <SocialMedia showName url="https://github.com/ThatZiv/hackathon2022wsu/" confirmation/>
            </Grid>
            <Grid item>
                <SocialMedia name="View Presentation" icon="fa-solid fa-file-pdf" showName url="/pics/ext/Hackathon_Slides2.pdf"/>
            </Grid>
            <Grid xs={12} item>
                <Section icon="fa-solid fa-star" title="More Information">
                    <Grid container> {/* Another container needed so the gist embed can span to the entire div */}
                        <Grid item sm>
                            <div className="Media">
                                <Gist id="2a0564b3eff66cd172a4b1395f474325" type="md" />
                            </div>
                        </Grid>
                    </Grid>
                </Section>
            </Grid>
        </Grid>
    )
}

function description() {
    return (
        <div style={{ "overflow": "auto" }}>
            <i>Taken from <a href="https://github.com/ThatZiv/hackathon2022wsu/blob/main/README.md">README.md</a> from the repository:</i>
            <h1 id="-midi-macros-hackathon-2022-wsu"><code>MIDI Macros</code> - Hackathon 2022 WSU</h1>
            <p><code>MIDI Macros</code> allows users to bind efficient shortcuts/macros to their MIDI keyboard and increase productivity while working at home. </p>
            <YouTubeEmbed id="MZsUFm2aQ58" />
            <h2 >Contributor:</h2>
            <ul>
                <li><a href="https://github.com/thatziv">@thatziv</a></li>
            </ul>
            <h2 >Problem</h2>
            <p>When working at home, menial tasks, such as opening specific files or playing music can be less of a burden to do. With <code>MIDI Macros,</code> the program utilizes the MIDI protocol to do such tasks at ease. In doing so, certain actions can be performed with a press of a button, and with over 128 keys to use (on a traditional MIDI Piano), the possibilities are endless. All in all, The amount of time saved looking for that specific folder, or any other redundant task is paramount.</p>
            <h2 >Technicalities</h2>
            <ul>
                <li>Language: <code>Python</code></li>
                <li>Libraries: <code>pygame, subprocess, ctypes</code></li>
            </ul>
            <h2 >Progression</h2>
            <p>The project was completed during the hackathon. The parsing of MIDI values was done first using the <code>pygame.midi</code> library. Then the research of what values meant what was done. After, the formulas of the key values were then completed. Once the values were entirely parsed, the linking of actions and macros was done (what key did what action/function) using <code>subprocesses</code> for opening programs and <code>ctypes</code> for keyboard input emulation. The volume knob was done last using a timeout/flag based-logic. The outcome was a versatile program that utilizes any MIDI keyboard as a way for many macros and automations on your PC.</p>
            <h2 >Navigation</h2>
            <ul>
                <li><code>main.py</code> is the main file that runs as the index of the project. It houses the logic for reading input and passing its data to other files.</li>
                <li><code>piano.py</code> houses the formulas for parsing data from the MIDI interface. This includes logic like what note is played, the status of the sustain button, octave calculation, and volume knob ratio conversation.</li>
                <li><code>keyboard.py</code> has the keyboard functionality; it emulates keyboard input and functionalities like: volume up/down, play/pause media, mute, and set volume.</li>
                <li><code>keys.py</code> is the output of the program. The data fed from <code>main.py</code> goes to this file and runs whatever it needs based on the data from the main thread. The main function houses the switch case logic to execute respective functionalities like: opening programs, multi-media controls, starting websites, and more.</li>
            </ul>
            <h2 >Reproduction</h2>
            <ol>
                <li><p>Clone repo</p>
                    <pre><code >git <span >clone</span> <span >https</span>://github.com/ThatZiv/hackathon2022wsu
                    </code></pre>
                </li>
                <li><p>Install dependencies</p>
                    <pre><code >python3 -m pip <span >install</span> pygame ctypes
                    </code></pre>
                </li>
                <li>Configure directories<ul>
                    <li>Change the constant values in <code>keys.py</code> to your liking, not my values.</li>
                </ul>
                </li>
                <li>Run file<pre><code ><span >python3</span> main.<span >py</span>
                </code></pre>
                </li>
            </ol>
            <h2 >Demo</h2>
            <p><a href="https://www.youtube.com/watch?v=MZsUFm2aQ58">https://www.youtube.com/watch?v=MZsUFm2aQ58</a></p>


        </div>
    )
}