import React from "react";
import { SocialMedia } from "../lib/types";
import {
  CiFacebook,
  CiInstagram,
  CiLinkedin,
  CiTwitter,
  CiYoutube,
} from "react-icons/ci";
type Props = {
  name: SocialMedia;
};

const Social_Media_Button = ({ name }: Props) => {
  const ICONS_SOCIAL_MEDIA = {
    Facebook: <CiFacebook />,
    Instagram: <CiInstagram />,
    Twitter: <CiTwitter />,
    Youtube: <CiYoutube />,
    Linkedin: <CiLinkedin />,
  };
  return (
    <li className="hover:bg-white mx-1 rounded-full p-1 transition-colors">
      <a className=" text-2xl" href="#" title={name}>
        {ICONS_SOCIAL_MEDIA[name]}
      </a>
    </li>
  );
};
export default Social_Media_Button;
