import SocialMedia from "../components/SocialMedia";
import Gallery from "../components/Gallery";
import { Divider, Grid, Typography } from "@mui/material";

export default {
    meta: {
        title: "Hackathon '21",
        banner: "https://github.com/ThatZiv/hackathon2021wsu/raw/main/pics/chat.PNG?raw=true",
        complete: true,
        tags: "NodeJS,Git,HTML/CSS,Express.js,Socket.io,Bootstrap,Pair Programming,Collaborative,Full Stack,UI/UX,Hackathon,Open-source,Competition",
        //objectives: `Usually from resume.`, // Objectives are seperated by PIPE '|'
        description: `A hackathon is a timed event that usually spans over
        48 hours in which computer programmers compete to develop a
        software project, usually in teams. For this event, I partnered with
        three other programmers to develop a social media chatting platform
        using intricate web technologies such as Socket.io and Express.js. Our project was awarded the "Most Technical" 
        award at the fall 2021 Hackathon hosted at Wayne State University.`,
        timeline: [
            ["November 12, 2021", "Hackathon begins. Group came to consensus on building a chat application."],
            ["November 12, 2021", "HTTP webserver and websocket server are setup."],
            ["November 13, 2021", "User and chat room hierarchy data structures are built."],
            ["November 13, 2021", "Backend is complete with a CRUD subsystem."],
            ["November 14, 2021", "Created HTML skeleton for login and main chatting page."],
            ["November 14, 2021", "Backend and frontend are linked, making the site entirely functional."],
            ["November 14, 2021", "Frontend styling is completed using Bootstrap CSS."],
            ["November 14, 2021", "Submitted project on GitHub for judges to evaluate."],
        ]
    }, components: { links, description, pictures }
}

function pictures() {
    return <div><Gallery timeout={10000} images={[
        {
            label: "Award Ceremony (myself on the left)",
            imgPath: "/pics/ext/hackathonGroup_.png",
        },
        {
            label: "Awards",
            imgPath: "/pics/ext/hackathonAward.jpg",
        },
        {
            label: "Problem Statement",
            imgPath: "/pics/ext/hackathonProblem.png",
        },
        {
            label: "Finished Product",
            imgPath: "https://raw.githubusercontent.com/ThatZiv/hackathon2021wsu/main/pics/chat.PNG",
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
            }} title="View Presentation Slides" src="/pics/ext/Hackathon_Slides.pdf" frameBorder="0">This browser does not support viewing this file.</iframe>
        </div>
    </div>
}


function links() {
    return (
        <Grid spacing={1} container>
            <Grid item>
                <SocialMedia showName url="https://github.com/ThatZiv/hackathon2021wsu/" confirmation/>
            </Grid>
            <Grid item>
                <SocialMedia name="View Presentation" icon="fa-solid fa-file-pdf" showName url="/pics/ext/Hackathon_Slides.pdf"/>
            </Grid>
        </Grid>
    )
}

function description() {
    return (
        <div style={{ "overflow": "auto" }}>
            <i>Taken from <a href="https://github.com/ThatZiv/hackathon2021wsu/blob/main/README.md">README.md</a> from the repository:</i>
            <h1>Friendzy - <code>Hackathon 2021 WSU</code></h1>
            <p>Friendzy is a simple chatting application that allows users to communicate with eachother with the option to utilize rooms</p>
            <h2 >Contributors</h2>
            <ul>
                <li>@thatziv - <a href="https://github.com/thatziv">https://github.com/thatziv</a></li>
                <li>@masrurtajwar - <a href="https://github.com/masrurtajwar">https://github.com/masrurtajwar</a></li>
                <li>@pollchowdhury - <a href="https://github.com/pollchowdhury">https://github.com/pollchowdhury</a></li>
            </ul>
            <h2 >Problem</h2>
            <p>Over the past year or so, the COVID-19 Pandemic has diminished our social lives due to the restrictions, especially through the holidays. With <strong>Friendzy</strong> users are allowed to communicate with each other and stay in contact through these hard times with privacy and speed.</p>
            <h2 >Technicalities</h2>
            <ul>
                <li>Languages: <code>HTML/CSS, and JavaScript (node.js too)</code>.</li>
                <li>Frameworks: <code>Express.js (Server &amp; Router), Socket.io (Client &amp; Server)</code></li>
                <li>Data: All data is temporary and nothing is permanent. The temp data (Users and Room data) can be accessed through the predefined socket events.</li>
            </ul>
            <h2 >Progression</h2>
            <p>All work was done during the hackathon. Express.js http server was built around the backend of the service, bonded with a socket.io server. The frontend is served via the backend web server and the client sided code connects to the backend socket.io server. Through this, the user is able to transmit data to the server and recieve data from the server with ease.</p>
            <h2 >Navigation</h2>
            <ul>
                <li>The <code>client</code> folder houses all the client sided html/js code</li>
                <li><code>index.js</code> is the main file that runs the entire backend</li>
                <li><code>users.js</code> houses the user&#39;s data (username, unique identifier, etc)</li>
                <li><code>rooms.js</code> houses the room data (members ids in each room and unique identifier for room id)</li>
                <li><code>routing</code> folder has the routes used for the backend web server</li>
            </ul>
            <h2 >Reproduction</h2>
            <ol>
                <li><p>clone the repo</p>
                </li>
                <li><p>install dependencies</p>
                    <pre><code ><span >npm</span> i
                    </code></pre>
                </li>
                <li><p>create a <code>.env</code> file</p>
                    <pre><code ><span>touch</span> <span>.env</span>
                    </code></pre>
                </li>
                <li><p>edit the <code>.env</code> file, make sure it has the following contents</p>
                    <pre><code ><span >PORT</span>=<span >2000</span>
                    </code></pre>
                </li>
                <li><p>run the service</p>
                    <pre><code ><span >node</span> <span >.</span>
                    </code></pre>
                </li>
                <li><p>connect to the website @ <code>http://localhost:2000/</code></p>
                </li>
            </ol>

        </div>
    )
}