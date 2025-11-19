import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaPhone, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaCode, FaPalette, FaCloud, FaBullhorn, FaMobileAlt } from "react-icons/fa";
import { assets } from "./assets/assets";



export const  Menu =[
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/about" },
    // { name: "Services", path: "/services" },
    { name: "notre projet", path: "/ourprojects" },
    { name: "Contact", path: "/contact" },
];



export const socialMedia = [
  {
    name: "Facebook",
    icon: <FaFacebook size={23}  className="hover:text-1-700   transition-discrete duration-300  "/>,
    url: "https://facebook.com/yourpage",
    text: "TodevIT",
  },
  {
    name: "Instagram",
    icon: <RiInstagramFill  size={23} className="hover:text-pink-700  transition-discrete duration-300  "/>,
    url: "https://instagram.com/yourprofile",
    text: "TodevIT",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn  size={23} className="hover:text-1-700   transition-discrete duration-300  "/>,
    url: "https://linkedin.com/in/yourprofile",
    text: "TodevIT",
  },
//   {
//     name: "GitHub",
//     icon: <FaGithub size={23} />,
//     url: "https://github.com/yourusername",
//     text: "TodevIT",
//   },
  {
    name: "Twitter",
    icon: <FaSquareXTwitter  size={23} className="hover:text-black   transition-discrete duration-300  "/>,
    url: "https://twitter.com/yourprofile",
    text: "TodevIT",
  },
    {
    name: "phone",
    icon: <FaPhone  size={24} className="text-1-700 mx-2"/>,
    url: "https://twitter.com/yourprofile",
    text: "0687976771",
  },
      {
    name: "email",
    icon: <MdEmail size={26} className="text-1-700 mx-2"/>,
    url: "https://twitter.com/yourprofile",
    text: "todevit@gmail.com",
  },
];

export const siteInfo = {
  name: "TodevIt",
  year: new Date().getFullYear(),
  rights: "All rights reserved.",
};


export const servicesDat = [
  {
    id: 1,
    icon: <FaCode size={30} className="text-1-500" />,
    title: "Web Development",
  },

  {
    id: 2,
    icon: <FaPalette size={30} className="text-1-500" />,
    title: "UI/UX Design",

  },

  // {
  //   id: 3,
  //   icon: <FaCloud size={30} className="text-1-500" />,
  //   title: "Cloud Hosting",
  // 
  // },

  {
    id: 4,
    icon: <FaBullhorn size={30} className="text-1-500" />,
    title: "Digital Marketing",

  },

  {
    id: 5,
    icon: <FaMobileAlt size={30} className="text-1-500" />,
    title: "Mobile Development",

  },{
  id: 6,
  icon: <FaBullhorn size={30} className="text-1-500" />,
  title: "Social Media Management",
},
];


export const servicesData = [
  {
    id: 1,
    icon: <img src={assets.webdev} alt="" className="w-2xs h-52"/>,
    title: "Web Development",
    shortDesc: "Fast Modern Secure",
    longDesc:
      "We build high-performance websites and web applications using the latest technologies, offering secure, scalable, and optimized solutions tailored to your business needs.",
  },

  {
    id: 2,
    icon: <img src={assets.uiux} alt="" className="w-2xs h-52"/>,
    title: "UI/UX Design",
    shortDesc: "Clean Creative Minimal",
    longDesc:
      "We design visually stunning and user-friendly interfaces that deliver a seamless experience, focusing on beauty, simplicity, and user-centric functionality.",
  },

  // {
  //   id: 3,
  //   icon: <FaCloud size={30} className="text-1-500" />,
  //   title: "Cloud Hosting",
  //   shortDesc: "Reliable Scalable Fast",
  //   longDesc:
  //     "We provide secure and scalable cloud hosting solutions with optimized infrastructure to ensure your applications run smoothly and efficiently at all times.",
  // },

  {
    id: 4,
    icon: <img src={assets.marketing} alt="" className=" h-52"/>,
    title: "Digital Marketing",
    shortDesc: "Growth Target Results",
    longDesc:
      "We craft marketing strategies that increase visibility, attract customers, and grow your brand through SEO, ads, social media management, and content marketing.",
  },

  {
    id: 5,
    icon: <img src={assets.mobil} alt="" className="w-2xs h-52"/>,
    title: "Mobile Development",
    shortDesc: "Hybrid Fast Responsive",
    longDesc:
      "We develop mobile applications that are fast, responsive, and optimized for both iOS and Android, ensuring a smooth and powerful user experience.",
  },{
  id: 6,
    icon: <img src={assets.socialmediamanager} alt="" className=" h-52"/>,
  title: "Social Media Management",
  shortDesc: "Engage Grow Convert",
  longDesc:
    "We manage your social media presence with engaging content, audience interaction, and growth strategies to increase brand visibility and customer engagement.",
},
];
