import React from 'react'
import { Avatar } from "@mui/material"
import rhm from "../Images/rhm.jpg"

const PeopleHosts = () => {
    return (
        <div>
            <div className="avatarcontainer">
            <Avatar alt="Roosa" src={rhm} sx={{width: 100, height: 100}}/>
            <Avatar alt="Anna" src="" />
            <Avatar alt="Justine" src="" />
            <Avatar alt="Dominika" src="" />
            <Avatar alt="Evelyn" src="" />
            <Avatar alt="Bridie" src="" />
            <Avatar alt="Elisabetta" src="" />
            <Avatar alt="Roma" src="" />
            </div>
        </div>
    )
}

export default PeopleHosts;
