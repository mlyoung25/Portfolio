import Status from "../components/Status"
import Gallery from "../components/Gallery"

export default {
    meta: {
        title: "zGarage",
        banner: "/pics/garage.gif",
        complete: true,
        tags: "NodeJS,JavaScript,Python,C/C++,WebSockets,REST API,Full Stack,UI/UX,Web Proxy,FFMPEG,Embedded Systems,Product Design,Closed-source",
        objectives: `Upgraded traditional radio frequency garage door to trigger from smartphone application.
        |Fabricated console module to house electronic components and circuitry.
        |Engineered and programmed embedded system to receive data from the web to then apply
        current to respective circuit based on web data.
        |Designed user-friendly web interface with live video feed to open garage from anywhere.
        `,
        description: `Sometimes we forget simple things like closing the garage when we leave, 
        which can jeopardize the security of our home. 
        zGarage aims to mitigate the risk of leaving the garage door open to intruders by allowing the remote trigger of one's garage 
        from anywhere in the world using the internet. Users can also check if they left their garage door open by using the user-friendly interface 
        and viewing the garage's real-time video feed.`,
        timeline: [
            ["Early-June 2021", "The initial idea of constructing a centralized garage door module came about."],
            ["Mid-June 2021", "Circuitry and software were schematized."],
            ["July 2021", "Electrical components were fitted inside of a relatively small housing module."],
            ["Late-July 2021", "The project was completed and deployed on zWebserver (the internet) for family members only."],
            ["Later-July 2021", "Zua API (zWebserver) integration and authentication methods were refactored."],
            ["December 2021", "Attached camera to garage computer for live garage video feed to check if the garage is open or not."]
        ],
    }, components: { pictures, statistics }
}

function statistics() {
    return <Status paper pattern="/zua_api_version/g" url="https://zavaar.net/api" />
}

function pictures() {
    return <Gallery images={[
        {
            label: 'Original Schematic',
            imgPath:
                '/pics/ext/circuit.png',
        },
        {
            label: 'Data Flow Diagram',
            imgPath:
                '/pics/ext/flow.png',
        },
        {
            label: 'Physical Module',
            imgPath:
                '/pics/ext/physical.jpg',
        },
        {
            label: 'User-interface',
            imgPath:
                '/pics/ext/ui.PNG',
        },
        {
            label: 'Module Diagram',
            imgPath:
                '/pics/ext/module.jpg',
        },
        {
            label: 'Demo',
            imgPath:
                '/pics/garage.gif',
        },
    ]} />
}
