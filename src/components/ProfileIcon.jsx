import { TbGridDots } from "react-icons/tb";

import Profile from "../assets/profile-200x200.png";
import ProfileRing from "../assets/profile-ring.svg";

const ProfileIcon = () => {
    return <div className="flex gap-2">
        <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
            <TbGridDots size={20} color="#5f6368"/>
        </span>
        <span className="relative flex h-10 w-10 justify-center items-center">
            <img src={ProfileRing} className="absolute" />
            <span className="h-8 w-8 rounded-full overflow-hidden">
                <img src={Profile} className="h-full w-full object-cover" />
            </span>
        </span>
    </div>;
};

export default ProfileIcon;
