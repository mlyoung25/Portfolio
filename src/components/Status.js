import { Chip, Grid, Link, Paper } from "@material-ui/core"
import { Typography } from "@material-ui/core"
import { useEffect, useState } from "react"
import { indigo, green, red, grey } from '@material-ui/core/colors/';
import { Cancel, CheckCircle } from '@material-ui/icons';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
const StyledBadge = styled(Badge, {
    shouldForwardProp: (prop) => prop !== "color" && prop !== 'status'
})(({ theme, status }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: status ? green[500] : grey[500],
        color: status ? green[500] : grey[500],
        boxShadow: `0 0 0 2px ${grey[800]}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: `ripple ${status ? "1.2" : "0"}s infinite ease-in-out`,
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

export default function Status(props) {
    const [webData, setWebData] = useState(null)
    const [error, setError] = useState(null)
    const getHostname = (url) => {
        var _url = new URL(url)
        return _url.hostname
    }
    useEffect(() => {
        fetch(props.url)
            .then(response => response.text()).then((text) => {
                const regex = eval(props.pattern)
                if (regex) {
                    if (!text.match(regex)) {
                        throw new Error("Regular expression pattern mismatch.")
                    } else {
                        setWebData(true)
                    }
                }
                setWebData(text)
            }).catch((err) => setError(err.message))
    }, [error])
    return <div className="Media">
        {props.paper ?
            (
                <Paper elevation={4} style={{ padding: 25, borderRadius: 5 }}>
                    <Typography gutterBottom variant="h5" style={{ textDecoration: null }} component="div">
                        <Grid container alignContent="flex-start">
                            <Grid item>
                                <div style={{ color: error ? red[600] : green[600] }}>{error ? <Cancel /> : <CheckCircle />}</div>
                            </Grid>
                            <Grid item>
                                &nbsp;{(error ? "Offline" : "Online")}
                            </Grid>
                        </Grid>
                    </Typography>
                    <Typography variant="subtitle1" style={{ color: "#979797" }} >
                        This service is currently {error ? "offline" : "online"} at <Link href={props.url}>{getHostname(props.url)}</Link>
                    </Typography>

                </Paper>
            )
            :
            (!props.dot ? (
                <Chip
                    label={"This service is currently " + (error ? "offline" : "online") + "."}
                    icon={error ? <Cancel /> : <CheckCircle />}
                    style={{ backgroundColor: error ? red[600] : green[600] }}
                />
            ) : (

                <StyledBadge overlap="circular"
                    status={!error}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot">{props.children}</StyledBadge>
            ))
        }
    </div>

}