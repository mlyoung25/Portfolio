import { Typography, } from "@material-ui/core";


export default function DateRange(props) {
    const initialYear = props.timeline[0][0].match("[0-9]{4}")[0]
    const finalYear = props.timeline[props.timeline.length - 1][0].match("[0-9]{4}")[0]
    const w = props.complete ? finalYear : "Now" // TODO: reword "Present" ?
    const out = initialYear === finalYear ? initialYear /* + " - " + initialYear  */: initialYear + " - " + w
    return (
        <Typography
            variant="subtitle1"
            style={{ color: "gray", textAlign: "right", marginTop: "-5px" }}
            component="div">
            {out}
        </Typography>
    )
}