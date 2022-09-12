import Divider from '@material-ui/core/Divider';
import { Button, ButtonGroup, Container, Grid, Typography } from '@material-ui/core';
import YouTubeEmbed from "../components/YouTubeEmbed"
import Status from "../components/Status"
import SocialMedia from '../components/SocialMedia';

const getDate = () => {
    let d = new Date();
    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()
}

export default {
    meta: {
        title: "FiveM Bot",
        banner: "/pics/FiveM.png",
        complete: false,
        tags: "JavaScript,NodeJS,Deployment Pipelines,NoSQL,FiveM,Bot,Agile,React,Docker,Version Control,Server Management,Database Migration & Management",
        description: `FiveM Bot is a Discord chat bot that makes monitoring game servers for server adminstrators easy. 
    Users can view game server metadata such as player count, player retention, server status, and more through Discord.
    This automation suite is used by tens of thousands of people every day, while maintaining a 99.7% service uptime.`,
        objectives: `Built monitoring process using custom-built API and database infrastructure
    |Integrated Patreon REST API to process monetary subscription purchases.
    |Encrypted and stored user-data with AES encryption to secure user data in database.`,
        timeline: [
            ["August 2018", "FiveM Bot project begins early-developmental stages."],
            ["Early-September 2018", "FiveM Bot releases beta program for testing."],
            ["Late-September 2018", "FiveM Bot V1 releases to the public with production-ready code."],
            ["October 2018", "FiveM Bot is apart of over 500 servers and has served over 10K users"],
            ["Early-May 2019", "FiveM Bot resides in over 3K servers and has served over 100K users"],
            ["Late-May 2019", "FiveM Bot V3 is deployed with better scalability and sharding as it gains exponential traction."],
            ["May 2020", "FiveM Bot V8 is an entire re-write of the original bot and now utilzes the Patreon API for the new monetization platform."],
            ["Early-October 2021", "Revenue peaks at an all-time high."],
            ["October 28, 2021", "FiveM Bot obtains partnership with Snowside Hosting. Use code 'Zua' for 25% off recurring."],
            ["January 2022", "FiveM Bot is apart of 14K servers and has served over 5M users."]
        ],
    }, components: { statistics, links }
}

function statistics() {
    return (
        <Grid container spacing={1}>
            <Grid item>
                <Status paper pattern="/FiveM/g"
                    url="https://discord.com/api/guilds/406653822929207298/widget.json" />
            </Grid>
            <Grid item>
                <img alt="FiveM Chat Bot" className="Media" src="https://gh-card.dev/repos/thatziv/fivem-bot.svg?fullname=" />
            </Grid>
            <Grid item>
                <a href="https://top.gg/bot/483787947070586880">
                    <img className="Media" src="https://top.gg/api/widget/483787947070586880.svg" alt="FiveM Chat Bot" />
                </a>
            </Grid>
            <Grid item sm>
                <img src="https://top.gg/api/widget/status/483787947070586880.svg" alt="Discord Bots" />
                <img src="https://top.gg/api/widget/upvotes/483787947070586880.svg" alt="Discord Bots" />
                <img src="https://top.gg/api/widget/servers/483787947070586880.svg" alt="Discord Bots" />
                <img src="https://top.gg/api/widget/owner/483787947070586880.svg" alt="Discord Bots" />
            </Grid>
            <Grid style={{ width: "100%", "minHeight": 500 }} item>
                <iframe
                    id="trends-widget-2"
                    src={`https://trends.google.com/trends/embed/explore/TIMESERIES?req=%7B%22comparisonItem%22%3A%5B%7B%22keyword%22%3A%22fivem%20bot%22%2C%22geo%22%3A%22%22%2C%22time%22%3A%222013-01-01%20${getDate()}%22%7D%5D%2C%22category%22%3A0%2C%22property%22%3A%22%22%7D&tz=240&forceMobileMode=false&isPreviewMode=true&eq=date%3Dall%26q%3Dfivem%2520bot&hl=enUS`}
                    width="100%"
                    height="450px"
                    frameBorder="0"
                    scrolling="0"
                    style={{ borderRadius: 5 }}
                    title="fivembot_trends"
                />
            </Grid>
        </Grid>
    )
}

function links() {
    return (
        <div>
            <SocialMedia icon="arrow-up-right-from-square" name="Use the bot" url="https://top.gg/bot/483787947070586880" confirmation />
            <YouTubeEmbed id="qphtBvXSusE" />
            <br />
            <Grid alignItems="baseline" container spacing={1}>
                <Grid item sm>
                    <Button variant="contained" style={{ backgroundColor: "#ddd", color: "#333" }} href="https://github.com/thatziv/fivem-bot">
                        <i className="fa-brands fa-github" />&nbsp;GitHub
                    </Button>
                </Grid>
                <Grid item sm>
                    <Button variant="contained" style={{ backgroundColor: "#f96854", color: "#052d49" }} href="https://patreon.com/fivembot">
                        <i className="fa-brands fa-patreon" />&nbsp;Patreon
                    </Button>
                </Grid>
                <Grid item sm>
                    <Button variant="contained" style={{ backgroundColor: "#5865F2", color: "#ffffff" }} href="https://discord.gg/yWddFpQ">
                        <i className="fa-brands fa-discord" />&nbsp;Discord
                    </Button>
                </Grid>

            </Grid>
        </div>
    )
}
