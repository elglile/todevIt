import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import { Menu, siteInfo, socialMedia } from "../Data";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-8 mt-10"
style={{
  backgroundImage:
    "url('http://gocreative.ma/wp-content/uploads/2018/11/footer_bg.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "scroll",
  backgroundPosition: "center center",
}}
>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Section 1: Logo & About */}
        <div>
          <img src={assets.logo} className="w-40" alt="" />
          <p className="text-gray-400 text-sm leading-relaxed">
            Digital services agency specialized in web design, development, and
            digital marketing.
          </p>
        </div>

        {/* Section 2: Navigation links */}
<div>
  <h3 className="text-xl font-semibold mb-3 text-white">Navigation</h3>
  <div className="flex flex-col gap-2">
    {Menu.map((link) => (
      <Link
        key={link.path}
        to={link.path}
        className="text-[16px] font-serif text-gray-300 hover:text-1-500 transition-colors w-24"
      >
        {link.name}
      </Link>
    ))}
  </div>
</div>


        {/* Section 3: Contact & Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <div className="flex items-center gap-2 text-gray-300 mb-2">
            <MdPhone size={20} className="text-1-500" />
            <span>+212 687976771</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 mb-4">
            <MdEmail size={20} className="text-1-500" />
            <span>todevit@gmail.com</span>
          </div>

          <div className="flex gap-4 text-gray-400 mt-3">
            {socialMedia
              .filter((item) => item.name !== "phone" && item.name !== "email")
              .map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-1-500"
                >
                  {item.icon}
                </a>
              ))}
          </div>
        </div>
      </div>
<div className="border-t border-gray-800 mt-10 pt-4 text-center text-sm text-gray-500">
  © {siteInfo.year}
  <span className="text-green-500 font-semibold ml-1">{siteInfo.name}</span>.{" "}
  {siteInfo.rights}
</div>
    </footer>
  );
}

export default Footer;
