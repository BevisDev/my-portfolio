import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const SocialSection = () => {
    return (
    <section className="my-12 flex items-center gap-5">
        <Link
          href={personalData.github}
          target='_blank'
          className="transition-all text-pink-500 hover:scale-125 duration-300"
        >
          <BsGithub size={30} />
        </Link>
        <Link
          href={personalData.linkedIn}
          target='_blank'
          className="transition-all text-pink-500 hover:scale-125 duration-300"
        >
          <BsLinkedin size={30} />
        </Link>
        <Link
          href={personalData.facebook}
          target='_blank'
          className="transition-all text-pink-500 hover:scale-125 duration-300"
        >
          <FaFacebook size={30} />
        </Link>
        <Link
          href={personalData.leetcode}
          target='_blank'
          className="transition-all text-pink-500 hover:scale-125 duration-300"
        >
          <SiLeetcode size={30} />
        </Link>
        <Link
          href={personalData.twitter}
          target='_blank'
          className="transition-all text-pink-500 hover:scale-125 duration-300"
        >
          <FaTwitterSquare size={30} />
        </Link>
      </section>  
    );
}
 
export default SocialSection;