import React from 'react'
import { Avatar } from "@mui/material"
import rhm1 from "../Images/rhm1.jpg"
import rk from "../Images/rk.jpg"
import "../Components/Styles/People.css"
import placeh from "../Images/placeholder.jpg"
import dmks from "../Images/dmks.jpg"

const PeopleHosts = () => {
    return (
        <div>
            <div className="peopletextcontainer">
                <p>The L-Night is run by several hosts so it’s a team effort. In the beginning of the group it was led only by 2-3 people, but they were still hosting almost every Tuesday! Now we have around 8 different people who are hosting the L-Night meetings on Tuesdays and some other L-Night events.</p>
                <p>We take care that the people find the place and bring rainbow flags / L-Night signs with us so it’s easy to find us even if you would be joining for the first time.</p>
                <p>If you are part of the L-Night, living in Berlin and wanting to host some time the L-Night events please get in touch with us via the L-Night group. Then you can pick your favorite place to host and let us know the event info. Please keep in mind that usually there are around 15-20 people coming so the place you want to host should have enough place for everybody.</p>
            </div>

            <div className="allavatarcontainer">
            <div className="personcontainer">
            <Avatar alt="Roosa" src={rhm1} sx={{width: 100, height: 100}}/>
            <label className="labels">Roosa</label>
            </div>
            <div className="personcontainer">
            <Avatar alt="Anna" src={placeh} sx={{width: 100, height: 100}}/><label className="labels">Anna</label>
            </div>
            <div className="personcontainer">
            <Avatar alt="Justine" src={placeh} sx={{width: 100, height: 100}} /><label className="labels">Justine</label>
            </div>
            <div className="personcontainer">
            <Avatar alt="Dominika" src={dmks} sx={{width: 100, height: 100}} /><label className="labels">Dominika</label>
            </div>
            <div className="personcontainer">
            <Avatar alt="Evelyn" src={placeh} sx={{width: 100, height: 100}} /><label className="labels">Evelyn</label>
            </div>
            <div className="personcontainer">
            <Avatar alt="Bridie" src={placeh} sx={{width: 100, height: 100}} /><label className="labels">Bridie</label>
            </div>
            

            <div className="personcontainer"><Avatar alt="Roma" src={rk} sx={{width: 100, height: 100}} />
            <label className="labels">Roma</label></div>
            </div>
        </div>
    )
}

export default PeopleHosts;
