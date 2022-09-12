import { Button, ButtonGroup, Container, Typography, Link, makeStyles, Tooltip } from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';
import { useContext, useState, useEffect } from 'react';
import ReactGA from "react-ga"
import { capFirstLetter } from "../utils"
//import AlertDialog from './AlertDialog';
import { UserContext } from "../contexts";

export default function SocialMedia(props) {
    const [state, dispatch] = useContext(UserContext);
    const getIconFromUrl = (url, _icon) => {
        const icon = (d, _icon) => <i className={`fa-${d ? "brands" : "solid"} fa-${d ? d.toLowerCase() : _icon}`}></i>
        var service;
        try {
            if (props.icon && props.name) throw new Error("no service needed.")
            var _url = new URL(url)
            var urlSplit = _url.hostname.split(".")
            service = urlSplit.length === 3 ? urlSplit[1] : urlSplit[0]
            ReactGA.event({category: "z_ui-button-redirect", label: service, action: service}) // TODO: see if this works on prod
        } catch (e) { }
        let showDialog = service || props.confirmation
        showDialog = false // FIXME: currently showing dialogues are disabled here.
        return (
            <div onClick={() => {
                if (showDialog) {
                    dispatch({
                        type: "UI_dialog",
                        dialog: {
                            open: true,
                            title: `${service ? "External " : ''}Redirect Notice`,
                            content: `Would you like to leave this site and continue to ${url}`,
                            callback: () => {
                                window.open(url, "_blank")
                            }
                        }
                    })
                }
            }}>
                <Tooltip title={service ? capFirstLetter(service) : (props?.showName && props.url !== "#" ? props.url : props?.name) || props.icon}>
                    <Link underline="none"
                        variant="h4" {...showDialog || {href: url} } target={props.url === "#" ? "_self" : "_blank"}>
                        {/* OLD STYLE:  { backgroundColor: "#fdfdfd", color: "#1f1f1f" } */}
                        <Button style={{ backgroundColor: indigo[500], color: "#fdfdfd" }}>
                            {icon(service, props?.icon)}{props?.showName && <div>&nbsp; {props?.name || capFirstLetter(service)}</div>}
                        </Button>
                    </Link>
                </Tooltip>
            </div>
        )
    }
    return (
        <div>
            {getIconFromUrl(props.url)}
        </div>
    )
}