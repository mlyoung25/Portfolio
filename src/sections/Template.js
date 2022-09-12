export default {
    meta: {
        title: "Card title",
        banner: "card picture (ex. pic.png)",
        complete: false,
        tags: "Tags,Are,Seperated,Only,With,Commas",
        objectives: `Usually from resume.`, // Objectives are seperated by PIPE '|'
        description: `Card content description`,
        timeline: [
            ["December 31, 1969", "When clocks started to count up!"]
        ],
    }, components: { links, statistics }
}

function links() {
    return (<div>
        ...
    </div>)
}

function statistics() {
    return (<div>
        ...
    </div>) 
}
