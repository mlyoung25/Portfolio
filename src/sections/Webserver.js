import { Grid, Typography } from '@material-ui/core';
import Status from '../components/Status';
import SocialMedia from '../components/SocialMedia';

export default {
    meta: {
        title: "zWebserver",
        banner: "/pics/Webserver.PNG",
        complete: false,
        tags: "Webserver,NodeJS,JavaScript,Python,RESTful,CRUD,NoSQL,MongoDB,Express,Full Stack,UI/UX,Closed-source,Templating (server-side rendering)",
        objectives: `Created webserver using Express.js, Pug.js, MongoDB, and Mongoose JS to deploy and develop projects.|Designed user-interface using CSS, Express.js, Bootstrap CSS, and Pug.js to display content.|Built REST API using Express.js, MongoDB, Canvas.js to perform various operations like generating dynamic images.|Programmed data scraper API using Python and Express.js to scrape and parse website data.`,
        description: `Hosted at www.zavaar.net, this custom-built webserver hosts most of my other projects while also serving the internet. 
            Its most popular feature is its content delivery network (CDN) functionality. 
            The Zua application programming interface (API) is also hosted on this platform as it serves dynamic data for those who are authorized. 
            With over 20K users served daily, this service is also a dependency to many other projects including FiveM Bot and zGarage.`,
        timeline: [
            ["Mid-2017", `Created webserver initially to serve static files from an live directory using Express.js.`],
            ["2018", "v0.7.0 - Designed the first user-interface (UI) with templating (Pug.js) and server-side rendering."],
            ["2019", "v1.1.0 - The Zua RESTful API releases to the public and more UI refinement."],
            ["Late-2019", "v1.1.3 - Zua API: dynamic picture API update releases."],
            ["2020", "v1.1.9 - \"Actions on Google\" update allows for all Zua subsystems to be managed through personal phone."],
            ["2021", "v1.1.10 - Zua API websocket update allows for realtime dynamic data transfer."],
            ["Late-2021", "v1.1.11 - Zua API web scraper and crawler is instantiated for wide variety of websites (TikTok, Instagram, etc.)."],
            ["2022", "v1.2.6 - Zua API (v1.1) deploys analytics API with custom metrics and API wrapper implementation."],

        ],
    }, components: { links, statistics }
}

function links() {
    return <Grid container spacing={1}>
        <Grid item>

            {/* <Typography variant="h6">Home Page: </Typography> */}
            <SocialMedia icon="house" name="Home Page" url="https://zavaar.net/" showName confirmation/>

        </Grid>
        <Grid item>
            <SocialMedia icon="server" name="Zua API Home" url="https://zavaar.net/api" showName confirmation/>
        </Grid>
        <Grid item>
            <SocialMedia icon="desktop" name="User-interface Sample" url="https://zavaar.net/static/" showName confirmation/>
        </Grid>
    </Grid>
}
function statistics() {
    return <Status paper pattern="/zua_api_version/g" url="https://zavaar.net/api" />

}
