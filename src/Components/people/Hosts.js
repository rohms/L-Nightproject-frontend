import { Avatar } from "@mui/material";
import rhm1 from "../../Images/rhm1.jpg";
import placeh from "../../Images/placeholder.jpg";
import dmks from "../../Images/dmks.jpg";


export const Hosts = [
  { id: 1, name: "Roosa", imgSrc: rhm1 },
  { id: 2, name: "Dominika", imgSrc: dmks },
  { id: 2, name: "Evelyn", imgSrc: placeh },
];

export const Avatars = () => {
  return (
    <div className="allavatarcontainer">
      {Hosts.map((host, id) => {
        return (
          <div className="personcontainer" key={id}>
            <Avatar
            className="avatar"
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
