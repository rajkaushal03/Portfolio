import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodechef, SiLeetcode, SiHackerrank } from "react-icons/si";

const socials = [
  { icon: <FaGithub/>, path: "https://github.com/rajkaushal03" },
  { icon: <FaLinkedin/>, path: "https://www.linkedin.com/in/swayamkaushal/" },
  { icon: <SiCodechef/>, path: "https://www.codechef.com/users/swayam09" },
  { icon: <SiLeetcode/>, path: "https://leetcode.com/u/Swayam_Kaushal/" },
  { icon: <SiHackerrank/>, path: "https://www.hackerrank.com/profile/swayamkaushal" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        ); 
      })}
    </div>
  );
};

export default Socials;
