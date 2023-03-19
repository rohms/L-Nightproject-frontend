import { Avatar } from "@mui/material";
import rhm1 from "../../Images/rhm1.jpg";
import rk from "../../Images/rk.jpg";
import placeh from "../../Images/placeholder.jpg";
import dmks from "../../Images/dmks.jpg";
import jt from "../../Images/jt.jpg";
import an from "../../Images/an.jpg";
import bri from "../../Images/brid.jpg";

export const Hosts = [
  { id: 1, name: "Roosa", imgSrc: rhm1 },
  { id: 3, name: "Justine", imgSrc: jt },
  { id: 4, name: "Dominika", imgSrc: dmks },
  { id: 5, name: "Bridie", imgSrc: bri },
  { id: 7, name: "Evelyn", imgSrc: placeh },
];

export const Avatars = () => {
  return (
    <div className="allavatarcontainer">
      {Hosts.map((host, id) => {
        return (
          <div className="personcontainer" key={id}>
            <Avatar
              alt={host.name}
              src={host.imgSrc}
              sx={{ width: 100, height: 100 }}
            />
            <label className="labels">{host.name}</label>
          </div>
        );
      })}
    </div>
  );
};
